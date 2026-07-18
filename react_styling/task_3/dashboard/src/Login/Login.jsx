export default function Login() {
  return (
    <div className="border-t-2 border-[var(--main-color)] pt-4">
      <p className="mb-4 text-base text-slate-700">Login to access the full dashboard</p>
      <div className="flex flex-col gap-4 sm:max-w-md">
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700" htmlFor="email">
          Email:
          <input id="email" type="email" className="rounded border border-slate-300 px-3 py-2 outline-none focus:border-[var(--main-color)]" />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700" htmlFor="password">
          Password:
          <input id="password" type="password" className="rounded border border-slate-300 px-3 py-2 outline-none focus:border-[var(--main-color)]" />
        </label>
        <button className="w-fit rounded border border-slate-400 bg-white px-4 py-1 text-sm text-slate-800">OK</button>
      </div>
    </div>
  );
}