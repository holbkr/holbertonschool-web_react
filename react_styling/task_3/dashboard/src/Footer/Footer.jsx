import { getCurrentYear, getFooterCopy } from '../utils/utils';

export default function Footer() {
  return (
    <div className="border-t-2 border-[var(--main-color)] bg-white/80 py-4 text-center text-sm italic text-slate-700">
      <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
    </div>
  );
}