export default function Icon({ className = "", id, funcClick = "" }) {
  const baseUrl = import.meta.env.BASE_URL;
  const srcImages = ["/images/icon-scissors.svg", "/images/icon-paper.svg", "/images/icon-rock.svg", "/images/icon-lizard.svg", "/images/icon-spock.svg"]
  
  const fromColor = ["hsl(39, 89%, 49%)", "hsl(230, 89%, 62%)", "hsl(349, 71%, 52%)", "hsl(261, 73%, 60%)", "hsl(189, 59%, 53%)"]

  const toColor = ["hsl(40, 84%, 53%)", "hsl(230, 89%, 65%)", "hsl(349, 70%, 56%)", "hsl(261, 72%, 63%)", "hsl(189, 58%, 57%)"]
  
  return (
    <div className={`w-30 h-30 rounded-full flex justify-center items-center cursor-pointer shadow-2xl z-100 ${className} max-md:w-20 max-md:h-20`}
      style={{ background: `linear-gradient(to bottom, ${fromColor.at(id)}, ${toColor.at(id)}`, transition: "box-shadow 0.1s ease-in-out", }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${fromColor.at(id)}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
      onClick={() => funcClick(id)}>
        <div className={`w-25 h-25 rounded-full bg-white flex items-center justify-center shadow-lg max-md:w-15 max-md:h-15`}>
          <img src={`${baseUrl}${srcImages.at(id)}`} alt="icon" className="w-1/2 h-auto object-cover" />
        </div>
    </div>
  );
}
