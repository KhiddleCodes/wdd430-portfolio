import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "SkillSwap Hub",
    description:
      "A local skill-exchange web application connecting neighbors to trade knowledge.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/KhiddleCodes/wdd430-portfolio",
  },
  {
    title: "TaskSync Planner",
    description:
      "A collaborative study planner with a Kanban board and real-time alerts.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/KhiddleCodes/wdd430-portfolio",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          Welcome to my portfolio! I am a full-stack developer learning Next.js
          and React.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
