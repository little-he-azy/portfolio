import ProjectCard from "@/components/ProjectCard";
export default function Projects() {
  return (
    <main className="px-8 py-16">
      <h1 className="text-4xl font-bold">
        Projects
      </h1>

      <p className="mt-4 text-gray-600">
        Selected projects and work.
      </p>

      <div className="mt-10 grid gap-6">
        <ProjectCard
          title="STAGE"
          description="LLM-based social simulation and adaptive misinformation research."
        />

        <ProjectCard
          title="RAG QA System"
          description="A retrieval-augmented knowledge question answering system."
        />

        <ProjectCard
          title="AI Agent & VLM"
          description="AI product design, evaluation and real-world scenario implementation."
        />
      </div>
    </main>
  );
}