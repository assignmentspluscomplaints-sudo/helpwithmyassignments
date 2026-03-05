#!/usr/bin/env node
// setup.js — Run with: node setup.js
// This script installs deps, sets up DB, creates admin, and seeds sample data

const { execSync } = require("child_process");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((r) => rl.question(q, r));

async function main() {
  console.log("\n🚀 HelpWithMyAssignments — Setup Wizard\n");
  console.log("─".repeat(50));

  // Check .env
  if (!fs.existsSync(".env")) {
    console.log("⚠️  No .env file found. Creating from template...");
    const email = await ask("Admin email [admin@helpwithmyassignments.com]: ") || "admin@helpwithmyassignments.com";
    const pass  = await ask("Admin password [Admin@123456]: ") || "Admin@123456";
    const site  = await ask("Site URL [https://helpwithmyassignments.com]: ") || "https://helpwithmyassignments.com";

    fs.writeFileSync(".env", [
      `DATABASE_URL="file:./dev.db"`,
      `JWT_SECRET="${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}"`,
      `ADMIN_EMAIL="${email}"`,
      `ADMIN_PASSWORD="${pass}"`,
      `NEXT_PUBLIC_SITE_URL="${site}"`,
    ].join("\n"));
    console.log("✅ .env created\n");
  }

  console.log("📦 Installing dependencies...");
  execSync("npm install", { stdio: "inherit" });

  console.log("\n🗄️  Setting up database...");
  execSync("npx prisma db push", { stdio: "inherit" });

  console.log("\n🌱 Seeding admin user and sample data...");
  execSync("npx ts-node --project tsconfig.json prisma/seed.ts", { stdio: "inherit" });

  console.log("\n✅ Setup complete!\n");
  console.log("─".repeat(50));
  console.log("📌 Next steps:");
  console.log("   npm run dev          → Start development server");
  console.log("   /admin/login         → Access admin panel");
  console.log("   /blog                → View blog");
  console.log("─".repeat(50));
  console.log();

  rl.close();
}

main().catch((e) => { console.error(e); rl.close(); process.exit(1); });
