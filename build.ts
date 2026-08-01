// Build script: bundles frontend TypeScript + CSS → public/
import { build } from "bun";
import { copyFileSync, existsSync, mkdirSync } from "node:fs";

console.log("🔨 Building frontend…");

// Ensure output directory exists
if (!existsSync("./public")) mkdirSync("./public", { recursive: true });

// Bundle TypeScript
const result = await build({
  entrypoints: ["./frontend/src/main.ts"],
  outdir: "./public",
  target: "browser",
  naming: "[dir]/bundle.[ext]",
  minify: true,
});

if (!result.success) {
  console.error("❌ Build failed:", result.logs);
  process.exit(1);
}

console.log("   ✓ JS bundle written to public/");

// Copy static files
copyFileSync("./frontend/index.html", "./public/index.html");
copyFileSync("./frontend/src/style.css", "./public/style.css");
console.log("   ✓ index.html + style.css copied");

// Ensure manifest and sw exist
for (const f of ["manifest.json", "sw.js", "icon.svg"]) {
  if (!existsSync(`./public/${f}`)) {
    console.log(`   ⚠ ${f} not found in public/ — run 'bun run assets' to generate`);
  }
}

console.log("✅ Done — frontend ready in public/");
