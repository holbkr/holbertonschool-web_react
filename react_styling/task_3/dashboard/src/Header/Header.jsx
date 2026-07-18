import holbertonLogo from '../assets/holberton-logo.jpg';

export default function Header() {
  return (
    <div className="mb-6 flex items-center gap-4 border-b-2 border-[var(--main-color)] pb-4">
      <img src={holbertonLogo} className="h-20 w-20 rounded object-contain sm:h-24 sm:w-24" alt="holberton logo" />
      <h1 className="text-2xl font-semibold text-[var(--main-color)] sm:text-3xl">School dashboard</h1>
    </div>
  );
}