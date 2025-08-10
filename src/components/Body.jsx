import Icon from "./Icon"
import { useState } from "react"

export default function Body({ onUpdateScore }) {
  const [isPick, setPick] = useState(false);
  const [isWin, setWin] = useState(null);
  const [userChoise, setUserChoise] = useState(null);
  const [computerChoise, setComputerChoise] = useState(null);
  const baseUrl = import.meta.env.BASE_URL;

  function handleClickIcon(id) {
    setUserChoise(id);
    const random = Math.floor(Math.random() * 5);
    setComputerChoise(random);
    console.log(id, random);

    let result = 0; //0: tie, 1:win, -1: close

    if (id == random) result=0
    else if (id === "0") {
      if (random === 1) result=1
      else if (random === 2) result=-1
      else if (random === 3) result=1
      else result=-1
    }
    else if (id === "1") {
      if (random === 0) result=-1
      else if (random === 2) result=1
      else if (random === 3) result=-1
      else result=1
    }
    else if (id === "2") {
      if (random === 0) result=1
      else if (random === 1) result=-1
      else if (random === 3) result=1
      else result=-1
    }
    else if (id === "3") {
      if (random === 0) result=-1
      else if (random === 1) result=1
      else if (random === 2) result=-1
      else result=1
    }
    else if (id === "4") {
      if (random === 0) result=1
      else if (random === 1) result=-1
      else if (random === 2) result=1
      else result=-1
    }

    if (result === 1) onUpdateScore();
    setWin(result);
    setPick(true);
  }

  function playAgain() {
    setUserChoise(null);
    setComputerChoise(null);
    setWin(null);
    setPick(false);
  }

  return (
    <>
    {!isPick &&
      <div className="max-w-1/2 h-auto flex justify-center relative animate-zoom-in">
        <img src={`${baseUrl}/images/bg-pentagon.svg`} alt="bg" className="w-full h-auto object-cover max-w-2xs" />

        <Icon className="absolute top-0 -translate-y-1/2" id="0" funcClick={handleClickIcon}/>
      
        <Icon className="absolute right-0 translate-x-1/2 top-1/5" id="1" funcClick={handleClickIcon}/>

        <Icon className="absolute bottom-0 translate-y-1/2 right-0" id="2" funcClick={handleClickIcon}/>
      
        <Icon className="absolute bottom-0 translate-y-1/2 left-0" id="3" funcClick={handleClickIcon}/>
      
        <Icon className="absolute left-0 -translate-x-1/2 top-1/5" id="4" funcClick={handleClickIcon}/>
      </div>
      }

      {isPick && 
        <div className="w-full flex-1 flex justify-evenly items-center gap-5 animate-zoom-in relative max-md:items-start">
          <div className="w-1/4 flex flex-col gap-4 items-center max-md:w-1/2">
            <p className="text-white bold text-2xl z-100 max-md:text-[16px]">YOU PICKED</p>
            
            <div className="relative min-h-100 max-md:min-h-50">
              {isWin === 1 &&
                <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-100 max-md:w-50 h-100 max-md:h-50 rounded-full bg-white opacity-[0.02] z-0"></div>}
              {isWin === 1 &&
                <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white opacity-[0.03] z-0 max-md:w-40 max-md:h-40 "></div>
              }
              {isWin === 1 &&
                <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-white opacity-[0.04] z-0 max-md:w-30 max-md:h-30"></div>
              }
              <Icon id={ userChoise } className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"/>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-stretch z-100 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 min-w-40 max-md:inset-x-1/2 max-md:bottom-0 max-md:translate-y-0">
            <h1 className="text-white text-4xl max-md:text-2xl bold text-center">{isWin === 1 ? "YOU WIN" : (isWin === -1 ? "YOU LOSE" : "TIE")}</h1>
            <button className="text-black bg-white border-0 px-5 py-2 font-bold rounded-sm cursor-pointer hover:bg-amber-500" onClick={() => playAgain()}>PLAY AGAIN</button>
          </div>
 
          <div className="w-1/4 flex flex-col gap-4 items-center max-md:gap-2 max-md:w-1/2">
            <p className="text-white bold text-2xl z-100 max-md:text-[16px]">THE HOUSE PICKED</p>
            
            <div className="relative min-h-100 max-md:min-h-50">
              {isWin === -1 &&
                <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full bg-white opacity-[0.02] z-0 max-md:w-50 max-md:h-50 "></div>}
              {isWin === -1 &&
                <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white opacity-[0.03] z-0 max-md:w-40 max-md:h-40"></div>
              }
              {isWin === -1 &&
                <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-white opacity-[0.04] z-0 max-md:w-30 max-md:h-30"></div>
              }
              <Icon id={ computerChoise } className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"/>
            </div>
          </div>
        </div>
      }
    </>
  )
}