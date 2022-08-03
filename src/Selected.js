import React, { useState, useEffect } from 'react'
import Circle from './Circle'
import Paper from './images/icon-paper.svg'
import Rock from './images/icon-rock.svg'
import Scissor from './images/icon-scissors.svg'

function Selected({ option, handlePlayAgain, handleScore }) {
  const [result, setResult] = useState('')
  const [randomLetter, setRandomOption] = useState('')
  const selectedOption = option === 'paper' ? Paper : option === 'rock' ? Rock : Scissor
  const color = option === 'paper' ? '#EC9E0E' : option === 'rock' ? '#4865F4' : '#DC2E4E'
  const borderColor = option === 'paper' ? 'hsl(39, 89%, 40%)' : option === 'rock' ? 'hsl(230, 89%, 53%)' : 'hsl(349, 71%, 43%)'
  const computer = randomLetter == 'paper' ? Paper : randomLetter == 'rock' ? Rock : Scissor
  const computerBorderColor = randomLetter === 'paper' ? 'hsl(39, 89%, 40%)' : randomLetter === 'rock' ? 'hsl(230, 89%, 53%)' : 'hsl(349, 71%, 43%)'
  const computerColor = randomLetter == '#EC9E0E' ? Paper : randomLetter == '#4865F4' ? Rock : '#DC2E4E'
  
  useEffect(() => {
    window.setTimeout(() => {
      const choices = ["rock", "paper", "scissor"];
      setRandomOption(choices[Math.floor(Math.random() * 3)]);
    }, 1000);
  }, [option]);

  useEffect(() => {
    window.setTimeout(() => {
      if (option && randomLetter) {
        if (option === randomLetter) {
          setResult('draw')
        }
        if (option === "rock" && randomLetter === "scissor") {
          setResult("win");
          handleScore(+1)
        } if (option === "rock" && randomLetter === "paper") {
          setResult("lose");
          handleScore(-1)
        } if (option === "scissor" && randomLetter === "paper") {
          setResult("win");
          handleScore(+1)
        } if (option === "scissor" && randomLetter === "rock") {
          setResult("lose");
          handleScore(-1)
        } if (option === "paper" && randomLetter === "rock") {
          setResult("win");
          handleScore(+1)
        } if (option === "paper" && randomLetter === "scissor") {
          setResult("lose");
          handleScore(-1)
        }
      }
    }, 900);
  }, [option, randomLetter])

  return (
    <>
      <div className='flex justify-center items-center mt-20'>
        <div className={`flex justify-between align-center w-[${result ? '39rem' : '30rem'}]`}>
          <div className='text-center mb-8 mr-5'>
            <span className='mb-10 text-white uppercase font-bold sm:text-lg text-[10px] tracking-[0.2rem]'>You Picked</span>
            <Circle color={borderColor} image={selectedOption} className={`flex shadow-inner cursor-pointer mt-10  bg-white sm:w-[10rem] sm:h-[10rem] w-[8rem] h-[8rem] border-[20px] border-[${color}] rounded-full`} />
          </div>
          {result &&
            <div className='sm:flex hidden flex-col justify-center items-center text-center mx-10'>
              <span className='text-white text-4xl w-full uppercase font-bold tracking-[0.2rem] mt-[20px] '>{result === 'lose' ? 'You lose' : result === 'win' ? 'you win' : 'draw'}</span>
              <button onClick={() => handlePlayAgain()} className="mt-4 bg-gray-100 uppercase text-[#7a2a2a] font-bold py-2 px-8 border-2 border-opacity-25 border-hsl(217, 16%, 45%) rounded-lg">
                Play again
              </button>
            </div>
          }
          {randomLetter ? <div className='text-center mb-8 ml-5'>
            <span className='mb-10 text-white uppercase font-bold sm:text-lg text-[10px] tracking-[0.2rem]'>the house picked</span>
            <div className={`flex shadow-inner cursor-pointer mt-10  bg-white sm:w-[10rem] sm:h-[10rem] w-[8rem] h-[8rem] border-[20px] border-[${computerColor}] rounded-full`}>
              <img className='m-auto' src={computer} alt={randomLetter} />
            </div>
            {/* <Circle color={computerBorderColor} image={computer} className={`flex shadow-inner cursor-pointer mt-10  bg-white sm:w-[10rem] sm:h-[10rem] w-[8rem] h-[8rem] border-[20px] border-[${computerColor}] rounded-full`}/> */}
          </div> : <div className='text-center mb-8 ml-5'>
            <span className='mb-10 text-white uppercase font-bold sm:text-lg text-[10px] tracking-[0.2rem]'>the house picked</span>
            <div className={`flex shadow-inner cursor-pointer mt-10 sm:w-[10rem] sm:h-[10rem] w-[8rem] h-[8rem] border-[20px] bg-black opacity-25 rounded-full`}>
            </div>
          </div>
          }
        </div>
      </div>
      {result &&
        <div className='flex sm:hidden flex-col justify-center items-center text-center mx-10'>
          <span className='text-white sm:text-4xl text:sm w-full uppercase font-bold tracking-[0.2rem] mt-[20px] '>{result === 'lose' ? 'You lose' : result === 'win' ? 'you win' : 'draw'}</span>
          <button onClick={() => handlePlayAgain()} className="m-auto mt-4 bg-gray-100 uppercase text-[#7a2a2a] w-fit font-bold py-2 px-8 border-2 border-opacity-25 border-hsl(217, 16%, 45%) rounded-lg">
            Play again
          </button>
        </div>
      }
    </>
  )
}

export default Selected