import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const meetingSection= () => {

    const companyIcons = [

        { src:'company-icons/altrium.svg', width:142, height:149, alt:'logo' },
        { src:'company-icons/climo.svg', width:171, height:40, alt:'logo' },
        { src:'company-icons/granded.svg', width:152, height:40, alt:'logo' },
        { src:'company-icons/kaligo.svg', width:120, height:45, alt:'logo' },
        { src:'company-icons/menuine.svg', width:107, height:49, alt:'logo' },
        { src:'company-icons/mountrain.svg', width:107, height:49, alt:'logo' }
    ]


  return (
    <section className='container-responsive py-20'>
    <div className='grid place-content-center gap-10 overflow-hidden'>
        <div className='flex flex-col items-center gap-6'>
            <h1 className='text-center w-[350px] ms:w-[440px] sm:w-[520px] md:w-[720px] break-words'>Make any meeting a walking meeting</h1>
            <p className='leading-9 text-center w-[290px] ms:w-[350px] sm:w-full'>Walking Meetings seamlessly integrates with all major meeting platforms.</p>
        </div>
        <div 
            x-data="{}"
            x-init="$nextTick(() => {
                let ul = $refs.logos;
                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                ul.nextSibling.setAttribute('aria-hidden', 'true');
            })"
            className='w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)'>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
                {companyIcons.map((icons, index) => (
                    <li key={index}>
                        <Image
                            src={icons.src}
                            width={icons.width}
                            height={icons.height}
                            alt={icons.alt}
                        />
                    </li>
                ))}
            </ul>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll' aria-hidden='true'>
                {companyIcons.map((icons, index) => (
                    <li key={index}>
                        <Image
                            src={icons.src}
                            width={icons.width}
                            height={icons.height}
                            alt={icons.alt}
                        />
                    </li>
                ))}
            </ul>
        </div>
    </div>
</section>
  )
}

export default meetingSection