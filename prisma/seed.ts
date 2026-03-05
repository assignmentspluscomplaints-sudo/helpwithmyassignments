// prisma/seed.ts
// Run with: npx ts-node --project tsconfig.json prisma/seed.ts
// Or add to package.json scripts and run: npx prisma db seed

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@helpwithmyassignments.com";
  const password = process.env.ADMIN_PASSWORD || "Admin@123456";

  const hashed = await bcrypt.hash(password, 12);

  const admin = await prisma.admin.upsert({
    where: { email },
    update: { password: hashed },
    create: { email, password: hashed },
  });

  console.log("✅ Admin user created:", admin.email);

  // Create a sample blog post
  await prisma.post.upsert({
    where: { slug: "how-to-write-an-assignment-fast" },
    update: {},
    create: {
      title: "How to Write an Assignment Fast: 7 Expert Tips",
      slug: "how-to-write-an-assignment-fast",
      excerpt: "Struggling with tight deadlines? Discover 7 proven strategies that expert writers use to produce high-quality assignments quickly without compromising on grades.",
      content: `<h1>How to Write an Assignment Fast: 7 Expert Tips</h1>
<p>Whether you have 24 hours or just a few hours before a deadline, these strategies will help you produce a high-quality assignment efficiently.</p>

<h2>1. Understand the Brief Before You Start</h2>
<p>The biggest time-waster is misunderstanding what's being asked. Read the question three times. Underline key terms. Identify the task words (discuss, analyse, compare) and the topic words.</p>

<h2>2. Create a Rapid Outline</h2>
<p>Spend 10 minutes creating a bullet-point structure. This becomes your roadmap and prevents you from going off-track. A good outline covers: introduction, 3-5 main points with evidence, and conclusion.</p>

<h3>What your outline should include:</h3>
<ul>
<li>Clear thesis statement</li>
<li>Each paragraph's main argument</li>
<li>Key sources or evidence for each point</li>
<li>Word count allocation per section</li>
</ul>

<h2>3. Use the Pomodoro Technique</h2>
<p>Work in 25-minute focused bursts followed by 5-minute breaks. This maintains mental clarity and prevents the burnout that comes from staring at a blank screen for hours.</p>

<h2>4. Write Your Body Paragraphs First</h2>
<p>Don't start with the introduction. It's the hardest part to write. Start with the body paragraphs where you know what you want to say, then write the introduction last when you know exactly what you've argued.</p>

<h2>5. Cite As You Write</h2>
<p>Don't leave referencing to the end. Add citations inline as you write. This saves significant time and prevents the panic of hunting for sources when you're already exhausted.</p>

<h2>6. Edit in a Separate Pass</h2>
<p>Write with the mindset of getting words on the page first. Then do a separate editing pass. Trying to write and edit simultaneously is one of the biggest productivity killers in academic writing.</p>

<h2>7. Use a Proofreading Checklist</h2>
<p>Before submitting, quickly check: Does it answer the question? Is the argument logical? Are citations correct? Word count within range? Spelling and grammar clean?</p>

<h3>Final Thoughts</h3>
<p>Speed comes with practice. The more assignments you complete, the faster and more confident you'll become. If you're consistently struggling with deadlines, consider reaching out to academic support services for help with particularly challenging assignments.</p>`,
      published: true,
      category: "Study Tips",
      author: "Dr. Sarah Collins",
      readTime: 6,
    },
  });

  console.log("✅ Sample blog post created");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
