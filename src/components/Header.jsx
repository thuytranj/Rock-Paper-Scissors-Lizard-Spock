export default function Header({ score }) {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="flex w-1/2 h-auto outline-2 outline-[var(--color-header-outline)] justify-between items-center py-3 px-5 rounded-sm max-md:w-full">
      <img src={`${baseUrl}/images/logo-bonus.svg`} alt="logo" className="w-auto h-full object-cover max-md:h-3/4" />

      <div className="bg-amber-50 flex flex-col py-5 px-10 items-center justify-between rounded-sm max-md:px-5 max-md:py-2">
        <p className="text-[var(--color-score-text)] font-bold text tracking-wider">SCORE</p>
        <h1 className="text-[var(--color-dark-text)] text-5xl bold">{score}</h1>
      </div>
    </div>
  )
}