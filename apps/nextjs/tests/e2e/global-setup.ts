import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";

const APP_URL = "http://127.0.0.1:3000";

async function isServerReady() {
  try {
    const response = await fetch(APP_URL);
    return response.ok;
  } catch {
    return false;
  }
}

async function waitForServer(timeoutMs: number) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    if (await isServerReady()) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Timed out waiting for Next.js dev server at ${APP_URL}`);
}

export default async function globalSetup() {
  if (await isServerReady()) {
    return async () => {};
  }

  let stderr = "";
  let stdout = "";

  const serverProcess: ChildProcessWithoutNullStreams = spawn("bun", ["run", "dev"], {
    cwd: process.cwd(),
    env: {
      ...process.env,
      PORT: "3000",
    },
    stdio: "pipe",
  });

  serverProcess.stdout.on("data", (chunk: Buffer) => {
    stdout += chunk.toString();
  });
  serverProcess.stderr.on("data", (chunk: Buffer) => {
    stderr += chunk.toString();
  });

  const exitedEarly = new Promise<never>((_, reject) => {
    serverProcess.once("exit", (code) => {
      reject(
        new Error(
          `Next.js dev server exited early with code ${code ?? "unknown"}.\n${stdout}\n${stderr}`,
        ),
      );
    });
  });

  await Promise.race([waitForServer(60_000), exitedEarly]);

  return async () => {
    if (!serverProcess.killed) {
      serverProcess.kill("SIGTERM");
    }
  };
}
