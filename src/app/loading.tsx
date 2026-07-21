export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-warm-cream z-[9999]">
      <div className="flex flex-col items-center gap-4">
        {/* Simple elegant CSS loader */}
        <div className="w-12 h-12 border-4 border-warm-border border-t-amber-accent rounded-full animate-spin"></div>
        <div className="text-charcoal font-display font-medium tracking-wide">
          CREWCUT.
        </div>
      </div>
    </div>
  );
}
