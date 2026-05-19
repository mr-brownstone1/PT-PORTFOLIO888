"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0a0a0a", color: "#fafafa", fontFamily: "system-ui, sans-serif", padding: "2rem", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Something went wrong</h1>
        <p style={{ marginTop: "0.5rem", color: "#a1a1aa", fontSize: "0.875rem", maxWidth: "28rem", textAlign: "center" }}>
          {error.message}
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{ marginTop: "1.5rem", padding: "0.625rem 1.5rem", borderRadius: "9999px", background: "linear-gradient(135deg, #ff3d00, #ff5722, #ff8f1a)", color: "#fff", fontWeight: 500, fontSize: "0.875rem", border: "none", cursor: "pointer" }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
