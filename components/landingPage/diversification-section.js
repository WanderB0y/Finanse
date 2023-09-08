import React from 'react'
import Image from 'next/image'
import sectionPicture from 'public/images/andrea.png'

const diversificationSection = () => {
  return (
    <section className='container-responsive py-10 flex items-center justify-between'>
    <div className='relative'>
        <div>
            <h1 className='lg:w-[625px] w-[300px] break-words'>Diversification has never been easier.</h1>
            <p className='mt-6 w-[685px] break-words'>
                A simple walk is the perfect 
                cure for meeting fatigue. We 
                all need some fresh air.
            </p>
        </div>
        <button className='btn-primary mt-16'>
            Get Early Access
        </button>   
    </div>
    <div className='w-[552px] h-[680px] grid place-items-center relative'>
        <div className='w-[472px] h-[472px] rounded-full bg-primary-400 flex overflow-hidden relative'>
            <Image 
                src={sectionPicture}
                width={520}
                height={520}
                alt='Natatae Ako'
                className='object-cover'
            />
            
        </div>
            <Image
                    src='icons/moon.svg'
                    width={82}
                    height={82}
                    alt="Natatae Ako"
                    className='absolute right-24 bottom-24 animate-bounce-slow'
            />
            <Image
                src='icons/union.svg'
                width={134}
                height={134}
                alt='union'
                className='absolute animate-spin-slow top-24 left-5'
            
            />
    </div>
   
</section>
  )
}

export default diversificationSection