"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-900 px-6 text-white">
      <h1 className="text-xl font-semibold">Something went wrong</h1>
      <p className="max-w-md text-center text-sm text-zinc-400">{error.message}</p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black hover:bg-zinc-200"
      >
        Try again
      </button>
    </div>
  );
}
