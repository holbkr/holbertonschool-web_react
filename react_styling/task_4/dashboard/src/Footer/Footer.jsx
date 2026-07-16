import { getCurrentYear, getFooterCopy } from '../utils/utils';

export default function Footer() {
  return (
    <div className="border-t-2 border-[var(--color-main)] bg-white/80 py-4 text-center text-sm italic text-slate-700">
      <span className="sr-only">Copyright 2025 - Holberton School</span>
      <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
    </div>
  );
}