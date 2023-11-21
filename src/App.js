import './App.css';
import { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import HomePage from './components/HomePage';

function App() {
  const [active, setActive] = useState(false)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
      setActive(true)
    } else {
      setActive(false)
    }
  })
  const toUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }





  return (
    <div className='font-Roboto'>
      {
        active ? (
          <div onClick={() => toUp()} className='fixed z-50 right-5 bottom-5 cursor-pointer rounded-md w-10 h-10 bg-primaryColor hover:bg-[#e84545bf] flex justify-center items-center' style={{ transition: "0.5s" }} >
            <AiOutlineArrowUp size={25} color='white' />
          </div>
        ) : null}
      <HomePage />
    </div>
  );
}

export default App;
