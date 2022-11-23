import React from 'react';
import { useState } from 'react';
const Lottery = () => {
 
  const [pool,setPool]=useState({'red':[],'blue':'發'})

  const randomNumber = (min, max) =>{
    const range = max - min + 1;
    const rand = Math.random() ;
    const num = Math.floor(rand * range + min);
    return num;
  }
  const generator = (n)=>{
    const arr = [];
    while(arr.length<n){ 
      const num = randomNumber(1,45)
      if (arr.indexOf(num)===-1){
        arr.push(num)
      }
    }
    const blue = randomNumber(1,16)
    return {red:arr,blue};
  }
  
  return (
    <div className='mx-auto my-5 max-w-7xl'>
      <h1 className='text-3xl text-center'>MY LOTTERY</h1>
      <div className='w-full mx-auto flex mt-8'>
        <button className='w-[120px] h-[60px] rounded-2xl mx-auto m-4 bg-slate-600 text-white text-xl hover:scale-110 transition duration-200' onClick={()=>setPool(generator(6))}>Drawing</button>
        <button className='w-[120px] h-[60px] rounded-2xl mx-auto m-4 bg-slate-600 text-white text-xl hover:scale-110 transition duration-200' onClick={()=>setPool({'red':[],'blue':'發'})}>Reset pool</button>
      </div>
     
      <div className="mx-auto text-center mt-10">
        <ul className='list-none flex justify-center'>
          {pool.red.map((num,i)=>(<li key={i}><div className="w-[100px] h-[100px]  rounded-full bg-red-500 m-4  "><span className='leading-[100px] text-6xl text-white'>{num}</span></div></li>))}
          <li><div className="w-[100px] h-[100px]  rounded-full bg-blue-500 m-4"><span className='leading-[100px] text-6xl text-white text-center' >{pool.blue}</span></div></li>
        </ul>
      </div>
    </div>
  );
};

export default Lottery;