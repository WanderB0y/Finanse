import React from 'react'
import Image from 'next/image'
import One from 'public/testimonials/one.jpg'
import Two from 'public/testimonials/two.jpg'
import Three from 'public/testimonials/three.jpg'

const testimonials = () => {
    const testimonials = [

        { 
            src:One,  
            alt:'testimonialImages', 
            title:'Never Back Down', 
            description:'What is an example of a paragraph? A good example of a paragraph contains a topic..'
        },
        { 
            src:Two,  
            alt:'testimonialImages', 
            title:'Never What?!!', 
            description:'What is an example of a paragraph? A good example of a paragraph contains a topic..'
        }, 
        { 
            src:Three,  
            alt:'testimonialImages', 
            title:'Never give up', 
            description:'What is an example of a paragraph? A good example of a paragraph contains a topic..'
        }
    ]


  return (
    <section className='container-responsive grid place-items-center py-20 relative'>
        <Image
            src='icons/union-light.svg'
            width={154}
            height={154}
            alt='union'
            className='absolute animate-spin-slow top-24 right-96'
        />
        <div className='max-w-[846px]  relative z-40'>
            <h1 className='text-center'>Choose and create your dream now.</h1>
            <p className='text-center mt-6'>
                From Socrates to Steve Jobs, many of history &apos; s greatest thinkers had their best ideas while walking.
            </p>
        </div>
        <div className='mt-16 grid grid-cols-1 xl:grid-cols-3 gap-5 relative z-40'>
                {testimonials.map((information, index) => (
                    <div key={index} className='xl:max-w-[390px] md:max-w-[920px] max-w-[390px] overflow-hidden relative rounded-lg grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1'>
                        <Image 
                            src={information.src} 
                            width={436} 
                            height={265} 
                            alt={information.alt}
                            className='h-[265px] w-full object-cover'
                        />
                        <div className='px-6 py-4 bg-white grid place-items-center'>
                            <div className='border-b-[1px] border-gray-300 pb-4'>
                                <h2 className='text-2xl text-primary-400 font-bold'>{information.title}</h2>
                                <p className='text-xl mt-2'>{information.description}</p>
                            </div>
                            <div className='w-full flex justify-between pt-7'>
                                <span className='text-xl'>Details</span>
                                <Image
                                    src='icons/next.svg'
                                    width={28}
                                    height={9.8}
                                    alt='photo'
                                />
                            </div>
                        </div>
                    </div>
                ))}
               
        </div>
    </section>
  )
}

export default testimonials