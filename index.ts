import { $ } from "bun";

await Promise.all([$`bun run server-1.ts`, $`bun run server-2.ts`]);
