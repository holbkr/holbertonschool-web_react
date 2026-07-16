export default function Login() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="mb-4 text-base text-slate-700">Login to access the full dashboard</p>
      <div className="flex flex-col gap-4 sm:max-w-md">
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700" htmlFor="email">
          Email:
          <input id="email" type="email" className="rounded border border-slate-300 px-3 py-2 outline-none focus:border-[var(--color-main)]" />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700" htmlFor="password">
          Password:
          <input id="password" type="password" className="rounded border border-slate-300 px-3 py-2 outline-none focus:border-[var(--color-main)]" />
        </label>
        <button className="w-fit rounded bg-[var(--color-main)] px-4 py-2 text-sm font-semibold text-white">OK</button>
      </div>
    </div>
  );
}