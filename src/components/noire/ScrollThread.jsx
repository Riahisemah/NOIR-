import { useEffect, useState } from "react";

export default function ScrollThread() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed left-5 top-0 bottom-0 z-40 hidden md:block w-px bg-ivory/10 pointer-events-none"
    >
      <div
        className="absolute top-0 left-0 w-px bg-gold"
        style={{ height: `${progress * 100}%` }}
      />
    </div>
  );
}
