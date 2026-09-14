import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-8 py-20">
      
      <section className="text-center">
        <p className="text-lg text-gray-500">
          Hello, I&apos;m
        </p>

        <h1 className="mt-2 text-6xl font-bold">
          AZY HE
        </h1>

        <p className="mt-5 text-xl text-gray-600">
          AI Product · LLM · VLM · Agent
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-gray-500">
          Exploring AI products, intelligent systems and real-world applications.
        </p>
      </section>

      <section className="mt-20">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-3xl font-bold">
            Explore My World
          </h2>

          <span className="text-2xl">
            ✦
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <CategoryCard
            icon="💼"
            title="Internship"
            description="AI product design, VLM evaluation, Agent workflows and data operations."
            href="/internship"
          />

          <CategoryCard
            icon="🔬"
            title="Research"
            description="Research papers, algorithms, experiments and academic work."
            href="/research"
          />

          <CategoryCard
            icon="⚙️"
            title="Engineering"
            description="AI systems, computer vision and engineering projects."
            href="/engineering"
          />

          <CategoryCard
            icon="✨"
            title="Skills"
            description="AI, product, programming, data analysis and creative skills."
            href="/skills"
          />

          <CategoryCard
            icon="🏆"
            title="Honors"
            description="Scholarships, competitions, awards and certificates."
            href="/honors"
          />
        </div>
      </section>
    </main>
  );
}