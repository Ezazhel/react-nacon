import {Item as ItemComponent} from "./components/Item/Item.tsx";
import {useEffect, useState} from "react";
import './App.css'
import {ItemService} from "./services/item-service.ts";
import {Item} from "./entity/Item.ts";
import {PaginatedGrid} from "./components/PaginatedGrid/PaginatedGrid.tsx";


function App() {
    const [mode, setMode] = useState<'GRID'|'CAROUSEL'>("GRID");
    const [items, setItems] = useState<Item[]>([]);
    const {getItems} = ItemService();
    const switchMode = (value: 'GRID'|'CAROUSEL') => {
        setMode(value);
    }

    useEffect(() => {
        const loadData = async () => {
            const items = await getItems();
            setItems(items);
        };
        loadData();
    }, [])

  return (
    <>
        <nav className={'w-full h-16 p-8 text-white top mb-12 shadow flex gap-8 justify-start items-center linear-blue'}>
            <button className={mode === 'GRID' ? 'btn-active' : ''} type={'button'} onClick={() => switchMode('GRID')}>
                Grid
            </button>
            <button className={mode === 'CAROUSEL' ? 'btn-active' : ''} type={'button'}
                    onClick={() => switchMode('CAROUSEL')}>
                Carousel
            </button>
        </nav>
        <div className={'px-8 w-full'}>
            {mode === "GRID" ? (
                <PaginatedGrid data={items.sort((a,b) => Number(b.price.onSale) - Number(a.price.onSale))} renderElement={(item) => <ItemComponent {...item}/>} />
        ) :
        <span>Carousel</span>
        }
        </div>
    </>
  )
}

export default App
