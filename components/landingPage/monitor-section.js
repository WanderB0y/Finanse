import React from 'react'
import Image from 'next/image'

const monitorSection = () => {
  return (
    <section className='container-responsive flex justify-between items-center py-20'>
        <div className='h-[680px] w-516px] relative hidden md:block'>
          <Image
            src='icons/iphone.svg'
            width={586}
            height={918} 
            alt='Natatae ako'
            className='relative z-20 mt-20 lg:mt-0'
            />
          <Image
            src='icons/union-light.svg'
            width={221}
            height={221}
            alt='Pagod na ako'
            className='absolute z-10 top-28 right-5 lg:right-24 animate-spin-slow'
          />
          <Image
            src='icons/moon.svg'
            width={95}
            height={95}
            alt='Miss na kita balik kana'
            className='absolute bottom-20 xl:-bottom-10 left-0 z-30 animate-bounce-slow'
          
          />

        </div>
        <div className='relative'>
          <div className='relative z-40 grid md:place-items-start  place-items-center '>
            <h1 className='max-w-[625px] break-words text-center md:text-left'>Monitor all assets and transactions in one dashboard.</h1>
            <p className='mt-6 lg:max-w-[720px] max-w-md break-words text-center md:text-left'>From Socrates to Steve Jobs, many of history&apos;s greatest thinkers had their best ideas while walking.</p>
            <button className='btn-primary mt-16'> Get Early Access</button>
          </div>
           
            <Image
              src='icons/union-light.svg'
              width={221}
              height={221}
              alt='Pagod na ako'
              className='md:hidden block absolute z-10 -top-24 left-0 animate-spin-slow'
            />
        </div>  
    </section>
  )
}

export default monitorSection