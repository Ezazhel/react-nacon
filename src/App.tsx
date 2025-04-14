import {Grid} from "./components/Grid/Grid.tsx";
import {Item} from "./components/Item/Item.tsx";
import {useState} from "react";

function App() {
    const [mode, setMode] = useState<'GRID'|'CAROUSEL'>("GRID");

    const switchMode = (value: 'GRID'|'CAROUSEL') => {
        setMode(value);
    }

  return (
    <>
        <nav className={'w-full h-16 p-8 text-white top mb-12 shadow flex gap-8 justify-start items-center'}>
            <button type={'button'} onClick={() => switchMode('GRID')}>Grid</button>
            <button type={'button'} onClick={() => switchMode('CAROUSEL')}>Carousel</button>
        </nav>
        <div className={'px-8 w-full'}>
            {mode === "GRID" ? (
                <Grid className={'mx-auto'}>
                <Item price={{currentPrice: '13.99$'}}/>
                <Item price={{currentPrice: '13.99$'}}/>
                <Item price={{currentPrice: '9.99$'}}/>
                <Item price={{currentPrice: '3.99$', sold:true, oldPrice: '13.99$', percentage: '30'}}/>
                <Item price={{currentPrice: '0.99$'}}/>
            </Grid>
        ) :
        <span>Carousel</span>
        }
        </div>
    </>
  )
}

export default App
