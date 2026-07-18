export default function Login() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <p className="mb-4 text-sm text-slate-700 sm:text-base">Login to access the full dashboard</p>
      <div className="flex flex-col gap-4 sm:max-w-md">
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700" htmlFor="email">
          Email:
          <input id="email" type="email" className="w-full rounded border border-slate-300 px-3 py-2 outline-none focus:border-[var(--main-color)]" />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700" htmlFor="password">
          Password:
          <input id="password" type="password" className="w-full rounded border border-slate-300 px-3 py-2 outline-none focus:border-[var(--main-color)]" />
        </label>
        <button className="w-full rounded bg-[var(--main-color)] px-4 py-2 text-sm font-semibold text-white sm:w-fit">OK</button>
      </div>
    </div>
  );
}
