export default function Chapter({ numeral, label, className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="text-[10px] tracking-luxe-sm uppercase text-gold whitespace-nowrap">
        Chapitre {numeral}
      </span>
      <span className="h-px w-10 bg-gold/40" />
      <span className="text-[10px] tracking-luxe-sm uppercase text-ivory/40">
        {label}
      </span>
    </div>
  );
}
