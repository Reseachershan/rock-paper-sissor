import React,{useState, useEffect} from 'react'
import logo from './images/logo.svg'
import Paper from './images/icon-paper.svg'
import Rock from './images/icon-rock.svg'
import Scissor from './images/icon-scissors.svg'
import Rules from './images/image-rules.svg'
import './App.css';
import Selected from './Selected'
import Circle from './Circle'

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [controlScore, setControlScore] = React.useState(0);
  const [option, setOption] = React.useState('')
  
  const handlePlayAgain = () => {
    setOption('')
  }

  const handleScore = (val) => {
    setControlScore(controlScore + val)
  }

  const handleCircle = (value) => {
    setOption(value)
  }

  return (
    <>
      <div className='w-[100vw] flex items-center justify-center mt-5 p-5'>
        <div className="w-[35rem] border-2 border-opacity-25 border-hsl(217, 16%, 45%) rounded-lg">
          <div className='flex align-center justify-between p-2'>
            <img src={logo} alt='logo' />
            <div className='bg-white  px-10 py-2 rounded flex flex-col align-center justify-center'>
              <p className='text-[12px] font-bold text-blue-600'>SCORE</p>
              <h1 className='text-[50px] font-extrabold text-[hsl(229, 64%, 46%)]-500'>{controlScore}</h1>
            </div>
          </div>
        </div>
      </div>
      {option ?
        <Selected handleScore={handleScore} option={option} handlePlayAgain={handlePlayAgain} /> :
        <div className='flex justify-center align-center mt-20'>
          <div className='relative'>
            <img className='sm:w-[20rem] w-[15rem] h-[12rem] sm:h-[15rem]' src='/bg-triangle.svg' />
            <Circle color={'hsl(39, 89%, 40%)'} handleCircle={() => handleCircle('paper')} image={Paper} className={'shadow-inner-2xl cursor-pointer absolute left-[-40px] top-[-50px] bg-white sm:w-[10rem] sm:h-[10rem] w-[8rem] h-[8rem] border-[#EC9E0E] border-[20px] rounded-full flex'} />
            <Circle color={'hsl(230, 89%, 53%)'} handleCircle={() => handleCircle('rock')} image={Rock} className={'shadow-inner cursor-pointer absolute right-[-40px] top-[-50px] bg-white sm:w-[10rem] sm:h-[10rem] w-[8rem] h-[8rem] border-[20px] border-[#4865F4] rounded-full flex'} />
            <Circle color={'hsl(349, 71%, 43%)'} handleCircle={() => handleCircle('scissor')} image={Scissor} className={'shadow-inner cursor-pointer absolute  sm:right-[80px] right-[55px] top-[110px] sm:top-[130px]  bg-white sm:w-[10rem] sm:h-[10rem] w-[8rem] h-[8rem] border-[20px] border-[#DC2E4E] rounded-full flex'} />
          </div>
        </div>
      }
      <div className='absolute bottom-0 right-0 p-2'>
        <button onClick={() => setShowModal(true)} className="bg-transparent text-white font-bold py-2 px-4 border-2 border-opacity-25 border-hsl(217, 16%, 45%) rounded-lg">
          Rules
        </button>
      </div>
      {showModal ? (
        <div>
          <div
            className="justify-center px-2 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="rounded-lg relative flex flex-col w-full bg-white focus:outline-none">
                <div className="flex items-start justify-between p-5 border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Rules
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <img src={Paper} />
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <img src={Rules} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </>
  );
}

export default App;
