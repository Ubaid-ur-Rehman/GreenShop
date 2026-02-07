import { useState, useRef, useEffect } from 'react'
import {categories , sizes} from '../data/SideData';
import './Slider.css';

const MIN = 0;
const MAX = 500;

function Sidebar() {
  const [minVal, setMinVal] = useState<number>(50);
  const [maxVal, setMaxVal] = useState<number>(300);

  // (custom draggable thumbs used; native input handlers removed)

  const leftPct = ((minVal - MIN) / (MAX - MIN)) * 100;
  const widthPct = ((maxVal - minVal) / (MAX - MIN)) * 100;

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeThumb, setActiveThumb] = useState<null | 'min' | 'max'>(null);

  const valueFromClientX = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return MIN;
    const rect = track.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    return Math.round(pct * (MAX - MIN) + MIN);
  };

  const startDrag = (which: 'min' | 'max', clientX: number) => {
    setActiveThumb(which);
    const val = valueFromClientX(clientX);
    if (which === 'min') setMinVal(Math.min(val, maxVal - 1));
    else setMaxVal(Math.max(val, minVal + 1));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!activeThumb) return;
      let clientX = 0;
      if (e instanceof MouseEvent) clientX = e.clientX;
      else if (e.touches && e.touches[0]) clientX = e.touches[0].clientX;
      const val = valueFromClientX(clientX);
      if (activeThumb === 'min') setMinVal(Math.min(val, maxVal - 1));
      else setMaxVal(Math.max(val, minVal + 1));
    };

    const onUp = () => setActiveThumb(null);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, [activeThumb, minVal, maxVal]);

  return (
    <div className='flex-2 w-1.5/6 bg-gray-100 rounded-md p-4 '>
        <h2 className='font-bold text-lg'>Categories</h2>
        <ul>
            {categories.map(category => (
               
                <li className='flex gap-10 justify-between p-1 pl-2 pt-2' key={category.id}>
                    <a href={category.link} className='text-gray-700 cursor-pointer hover:text-green-600 transition'>{category.name}</a>
                    <span className='text-gray-500 text-sm'>{category.count}</span>
                </li>

            ))}
            </ul>
        <h2 className='font-bold text-lg'>Price Range</h2>
        <div className='mt-2'>
          {/* Display selected values */}
          <div className='flex justify-between text-sm text-gray-600 mb-2'>
            <span>Min: ${minVal}</span>
            <span>Max: ${maxVal}</span>
          </div>

          {/* Custom draggable track + thumbs */}
          <div className="relative w-full h-12">
            <div
              ref={trackRef}
              className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gray-300 rounded cursor-pointer"
              onMouseDown={(e) => {
                const clickVal = valueFromClientX(e.clientX);
                // choose nearest thumb
                const dMin = Math.abs(clickVal - minVal);
                const dMax = Math.abs(clickVal - maxVal);
                startDrag(dMin <= dMax ? 'min' : 'max', e.clientX);
              }}
              onTouchStart={(e) => {
                const clientX = e.touches[0].clientX;
                const clickVal = valueFromClientX(clientX);
                const dMin = Math.abs(clickVal - minVal);
                const dMax = Math.abs(clickVal - maxVal);
                startDrag(dMin <= dMax ? 'min' : 'max', clientX);
              }}
            />

            <div
              className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-green-600 rounded"
              style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
            />

            {/* Thumbs (custom) */}
            <div
              role="slider"
              aria-label="Minimum price"
              aria-valuemin={MIN}
              aria-valuemax={MAX}
              aria-valuenow={minVal}
              className="absolute top-1/2 transform -translate-y-1/2"
              style={{ left: `calc(${leftPct}% )` }}
              onMouseDown={(e) => startDrag('min', e.clientX)}
              onTouchStart={(e) => startDrag('min', e.touches[0].clientX)}
            >
              <div className="w-5 h-5 -mt-2 -ml-2 bg-white border-4 border-green-600 rounded-full shadow" />
            </div>

            <div
              role="slider"
              aria-label="Maximum price"
              aria-valuemin={MIN}
              aria-valuemax={MAX}
              aria-valuenow={maxVal}
              className="absolute top-1/2 transform -translate-y-1/2"
              style={{ left: `calc(${leftPct + widthPct}% )` }}
              onMouseDown={(e) => startDrag('max', e.clientX)}
              onTouchStart={(e) => startDrag('max', e.touches[0].clientX)}
            >
              <div className="w-5 h-5 -mt-2 -ml-2 bg-white border-4 border-green-600 rounded-full shadow" />
            </div>
          </div>
        </div>
            
        <h2 className='font-bold text-lg'>Size</h2>
        <ul>
            {sizes.map(size => (
               
                <li className='flex gap-10 justify-between p-1 pl-2 pt-2' key={size.id}>
                    <a href={size.link} className='text-gray-700 cursor-pointer hover:text-green-600 transition'>{size.label}</a>
                    <span className='text-gray-500 text-sm'>{size.count}</span>
                </li>

            ))}
            </ul>
            <div className='linear-gradient flex items-center justify-center flex-col gap-4 mt-10 p-6 rounded-md text-white text-center'>
                <h1 className='font-mono text-4xl space-x-1 font-bold'>Super Sale</h1>
                <p>Up to 50% off on selected plants! </p>
                <img src="/plants/p8.png" alt="" />
            </div>
    </div>
  )
}

export default Sidebar