import {useState} from "react";
import './App.css'
import {GridDisplay} from "./features/GridDisplay/GridDisplay.tsx";
import {CarouselDisplay} from "./features/CarouselDisplay/CarouselDisplay.tsx";


function App() {
    const [mode, setMode] = useState<'GRID'|'CAROUSEL'>("GRID");
    const switchMode = (value: 'GRID'|'CAROUSEL') => {
        setMode(value);
    }



  return (
    <>
        <nav className={'w-full h-16 p-8 text-white top mb-12 shadow flex gap-8 justify-start items-center linear-blue'}>
            <button title='Grid Display' className={mode === 'GRID' ? 'btn-active' : ''} type={'button'} onClick={() => switchMode('GRID')}>
                Grid
            </button>
            <button title='Carousel Display' className={mode === 'CAROUSEL' ? 'btn-active' : ''} type={'button'}
                    onClick={() => switchMode('CAROUSEL')}>
                Carousel
            </button>
        </nav>
        <div className={'px-8 w-full'}>
            {mode === "GRID" ? <GridDisplay /> : <CarouselDisplay />}
        </div>
    </>
  )
}

export default App
