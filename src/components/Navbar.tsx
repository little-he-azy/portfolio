import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <Link href="/" className="text-xl font-bold">
        AZY HE
      </Link>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/internship">Internship</Link>
        <Link href="/research">Research</Link>
        <Link href="/engineering">Engineering</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/honors">Honors</Link>
      </div>
    </nav>
  );
}