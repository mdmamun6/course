import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from './assets/components/couses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className='mx-auto py-20 w-[80%]'>
        <h1 className='font-semibold text-5xl text-center pb-20'>Course Registration</h1>
        <div className='flex gap-6'>
          <div className='w-[75%]'>
            <Course></Course>
          </div>
          <div className='w-[25%]'>
              <h4 className='py-4 border-b'>Credit Hour Remaining  hr</h4>
              <h3 className='font-semibold py-4'>Course Name</h3>
              <p className='border-y py-4 font-bold'>Total Credit Hour : </p>
              <p className='border-y py-4 font-bold'>Total Price :  USD</p>
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default App
