export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl " +
        "shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:bg-white/15 transition-colors " + className
      }
    >
      {children}
    </div>
  );
}
