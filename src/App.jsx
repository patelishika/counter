import { useState } from 'react';
import Btn from './components/btn';

const App = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const reset = () => {
    setValue(0);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <>
      <div className='flex h-screen w-screen bg-purple-100 flex-col'>
        <div className='flex h-[50%] w-screen items-center justify-center'>
          <h1 className='text-4xl '>{value}</h1>
        </div>
        <div className='flex h-[50%] w-screen items-start justify-center'>
          <div className='flex h-[20%] w-[40%] items-center justify-around '>
            <Btn name='+' fun={increment} />
            <Btn name='reset' fun={reset} />
            <Btn name='-' fun={decrement} />
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
