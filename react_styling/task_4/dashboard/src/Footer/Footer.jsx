import { getCurrentYear, getFooterCopy } from '../utils/utils';

export default function Footer() {
  return (
    <div className="mt-auto border-t-2 border-[var(--main-color)] bg-white/80 py-3 text-center text-xs italic text-slate-700 sm:py-4 sm:text-sm">
      <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
    </div>
  );
}
