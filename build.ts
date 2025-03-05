import { spawnSync } from "bun";

// Install dependencies
let result = spawnSync({
  cmd: ["bun", "install"],
  stdout: "inherit",
  stderr: "inherit",
});

if (result.exitCode !== 0) {
  console.error(`Error installing dependencies: ${result.exitCode}`);
  process.exit(result.exitCode);
}

// Build Tailwind CSS
result = spawnSync({
  cmd: ["bun", "run", "tw"],
  stdout: "inherit",
  stderr: "inherit",
});

if (result.exitCode !== 0) {
  console.error(`Error building Tailwind CSS: ${result.exitCode}`);
  process.exit(result.exitCode);
}

// Run the development server
result = spawnSync({
  cmd: ["bun", "run", "dev"],
  stdout: "inherit",
  stderr: "inherit",
});

if (result.exitCode !== 0) {
  console.error(`Error running the development server: ${result.exitCode}`);
  process.exit(result.exitCode);
}