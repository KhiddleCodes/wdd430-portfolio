import SkillBadge from "@/components/SkillBadge";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">About Me</h1>
      <p className="text-lg text-gray-700 mb-8">
        I am a software development student building full-stack web applications
        with Next.js, React, and modern TypeScript workflows.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Core Technical Skills
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <SkillBadge skill="Next.js / App Router" level="Intermediate" />
        <SkillBadge skill="TypeScript" level="Intermediate" />
        <SkillBadge skill="Tailwind CSS" level="Advanced" />
        <SkillBadge skill="Git & GitHub" level="Advanced" />
      </div>
    </main>
  );
}
