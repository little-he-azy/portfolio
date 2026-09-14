type ProjectCardProps = {
  title: string;
  description: string;
};

export default function ProjectCard({
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="border rounded-xl p-6">
      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-3 text-gray-600">
        {description}
      </p>
    </div>
  );
}