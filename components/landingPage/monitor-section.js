import React from 'react'
import Image from 'next/image'

const monitorSection = () => {
  return (
    <section className='container-responsive flex justify-between items-center py-20'>
        <div className='h-[680px] w-516px] relative'>
          <Image
            src='icons/iphone.svg'
            width={586}
            height={918} 
            alt='Natatae ako'
            className='relative z-20'
            />
          <Image
            src='icons/union-light.svg'
            width={221}
            height={221}
            alt='Pagod na ako'
            className='absolute z-10 top-28 right-24 animate-spin-slow'
          />
          <Image
            src='icons/moon.svg'
            width={95}
            height={95}
            alt='Miss na kita balik kana'
            className='absolute -bottom-10 left-0 z-30 animate-bounce-slow'
          
          />

        </div>
        <div>
            <h1 className='lg:w-[625px] w-[300px] break-words'>Monitor all assets and transactions in one dashboard.</h1>
            <p className='mt-6 w-[685px] break-words'>From Socrates to Steve Jobs, many of history&apos;s greatest thinkers had their best ideas while walking.</p>
            <button className='btn-primary mt-16'> Get Early Access</button>
        </div>  
    </section>
  )
}

export default monitorSection