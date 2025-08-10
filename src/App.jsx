import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'

function App() {
  const [isOpenRules, setOpenRules] = useState(false);
  const [score, setScore] = useState(0);
  const baseUrl = import.meta.env.BASE_URL;
  
  useEffect(() => {
    if (isOpenRules) {
      document.body.style.overflow = 'hidden';
    }
    else document.body.style.overflow = '';
  }, [isOpenRules]);
  

  return (
    <>
      <Header score={score}/>
      <Body onUpdateScore={ () => setScore(prev => prev+1)} />

      <div className="outline-2 outline-[var(--color-header-outline)] text-white font-bold px-8 py-2 rounded-sm tracking-wider cursor-pointer absolute bottom-0 right-0 -translate-y-1/2 -translate-x-1/2 max-md:bottom-0 max-md:right-1/2 max-md:translate-x-1/2" onClick={() => setOpenRules(prev => !prev)}>RULES</div>

      {/* Rules modal */}
      {isOpenRules && <div className="w-screen h-screen flex items-center justify-center bg-[var(--color-bg)] fixed top-0 left-0 z-100" onClick={()=>setOpenRules(prev=>!prev)}>
        <div className="bg-white rounded-md flex flex-col gap-5 px-7 py-5 items-stretch max-md:w-full max-md:h-full max-md:rounded-none max-md:justify-evenly"onClick={e => e.stopPropagation()}>
          <div className="flex justify-between items-center">
            <h1 className="text-[var(--color-dark-text)] bold text-2xl">RULES</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-[#3B4262] hover:text-black cursor-pointer" onClick={()=>setOpenRules(prev=>!prev)}><path fill="currentColor" fillRule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25"/></svg>
          </div>
          <img src={`${baseUrl}/images/image-rules-bonus.svg`} alt="rules" className="w-full h-auto object-cover" />
        </div>
      </div>}
    </>
  )
}

export default App
