import holbertonLogo from '../assets/holberton-logo.jpg';

export default function Header() {
  return (
    <div className="mb-6 flex flex-col items-center gap-3 border-b-2 border-[var(--main-color)] pb-4 text-center min-[521px]:flex-row min-[521px]:text-left sm:gap-4">
      <img src={holbertonLogo} className="h-16 w-16 rounded object-contain min-[521px]:h-20 min-[521px]:w-20 sm:h-24 sm:w-24" alt="holberton logo" />
      <h1 className="text-lg font-semibold text-[var(--main-color)] min-[521px]:text-2xl sm:text-3xl">School dashboard</h1>
    </div>
  );
}
