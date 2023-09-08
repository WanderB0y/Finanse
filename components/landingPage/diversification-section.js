import React from 'react'
import Image from 'next/image'
import sectionPicture from 'public/images/andrea.png'

const diversificationSection = () => {
  return (
    <section className='container-responsive py-12 flex items-center justify-center xl:justify-between'>
        <div className='relative grid'>
            <div className='grid place-items-center xl:place-items-start relative z-20'>
                <h1 className='xl:max-w-[625px] max-w-[820px] break-words xl:text-left text-center'>Diversification has never been easier.</h1>
                <p className='mt-6 max-w-[520px] xl:max-w-[595px] break-words xl:text-left text-center'>
                    A simple walk is the perfect 
                    cure for meeting fatigue. We 
                    all need some fresh air.
                </p>
            </div>
            <button className='btn-primary mt-16 place-self-center xl:place-self-start relative z-40'>
                Get Early Access
            </button>   
            
            <Image
                    src='icons/moon.svg'
                    width={82}
                    height={82}
                    alt="Natatae Ako"
                    className='absolute inline-block xl:hidden -right-4 -bottom-11 animate-bounce-slow'
            />
            <Image
                    src='icons/union.svg'
                    width={134}
                    height={134}
                    alt='union'
                    className='absolute inline-block xl:hidden -left-20 -top-12 z-10 animate-spin-slow'
                />
        </div>
        <div className='w-[552px] h-[680px] place-items-center relative xl:grid hidden'>
            <div className='w-[472px] h-[472px] rounded-full bg-primary-400 overflow-hidden relative flex'>
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
                        className='absolute right-24 bottom-24 animate-bounce-slow '
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