import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const meetingSection= () => {
  return (
    <section className='container-responsive py-20'>
    <div className='grid place-content-center gap-10'>
        <div className='flex flex-col items-center gap-6'>
            <h1 className='text-center w-[611px]'>Make any meeting a walking meeting</h1>
            <p className='leading-9 text-center max-w-[400px] sm:max-w-full'>Walking Meetings seamlessly integrates with all major meeting platforms.</p>
        </div>
        <div className='w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)'>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
                <li>
                    <Image
                        src='company-icons/altrium.svg'
                        width={142}
                        height={149}
                    />
                </li>
                <li>
                    
                    <Image
                        src='company-icons/climo.svg'
                        width={171}
                        height={40}
                    />
                </li>
                <li>
                    <Image
                        src='company-icons/granded.svg'
                        width={152}
                        height={40}
                    />
                </li>
                <li>
                    <Image
                        src='company-icons/kaligo.svg'
                        width={120}
                        height={45}
                    />
                </li>
                <li>
                    <Image
                        src='company-icons/menuine.svg'
                        width={107}
                        height={49}
                    />
                </li>
                <li>
                    <Image
                        src='company-icons/mountrain.svg'
                        width={111}
                        height={47}
                    />
                </li>
            </ul>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll' aria-hidden='true'>
                <li>
                    <Image
                        src='company-icons/altrium.svg'
                        width={142}
                        height={149}
                    />
                </li>
                <li>
                    
                    <Image
                        src='company-icons/climo.svg'
                        width={171}
                        height={40}
                    />
                </li>
                <li>
                    <Image
                        src='company-icons/granded.svg'
                        width={152}
                        height={40}
                    />
                </li>
                <li>
                    <Image
                        src='company-icons/kaligo.svg'
                        width={120}
                        height={45}
                    />
                </li>
                <li>
                    <Image
                        src='company-icons/menuine.svg'
                        width={107}
                        height={49}
                    />
                </li>
                <li>
                    <Image
                        src='company-icons/mountrain.svg'
                        width={111}
                        height={47}
                    />
                </li>
            </ul>
        </div>
    </div>
</section>
  )
}

export default meetingSection