import { dataTickerItems } from '../../data/content'

export default function DataTicker() {
  const items = [...dataTickerItems, ...dataTickerItems]

  return (
    <div className="overflow-hidden border-t border-cyan-400/10 py-3">
      <div className="animate-data-scroll flex whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="mx-4 font-mono text-[10px] tracking-widest text-text-muted">
            {item}
            <span className="text-cyan-400/40"> · </span>
          </span>
        ))}
      </div>
    </div>
  )
}
