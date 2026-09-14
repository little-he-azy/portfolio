import Link from "next/link";

type CategoryCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export default function CategoryCard({
  icon,
  title,
  description,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        block
        rounded-3xl
        border-2
        border-black
        p-6
        transition-all
        duration-200
        hover:-translate-y-1
        hover:rotate-1
        hover:shadow-[6px_6px_0px_#000]
      "
    >
      <div className="text-3xl">{icon}</div>

      <h2 className="mt-4 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-2 text-gray-600">
        {description}
      </p>

      <p className="mt-6 font-medium">
        Explore →
      </p>
    </Link>
  );
}