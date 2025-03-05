import Link from "next/link";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-4 text-center">
      <div className="flex flex-col items-center gap-4">
        <AlertTriangle className="text-accent-500 h-16 w-16" />
        <h1 className="font-semibold">This page could not be found :(</h1>
      </div>
      <Link
        href="/"
        className="bg-accent-500 text-primary-800 hover:bg-accent-400 flex items-center gap-2 rounded px-6 py-3 transition"
      >
        <Home className="h-4 w-4" />
        Go back home
      </Link>
    </main>
  );
}
