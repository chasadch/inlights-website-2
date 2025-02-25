import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="bg-accent-500 text-primary-800 inline-block px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
}
