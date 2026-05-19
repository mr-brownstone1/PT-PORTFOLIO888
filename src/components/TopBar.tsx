export default function TopBar() {
  return (
    <div className="flex items-center justify-end gap-4 px-6 py-4">
      <span className="flex items-center gap-2 text-sm text-zinc-600">
        <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
        Available for work
      </span>
    </div>
  );
}
