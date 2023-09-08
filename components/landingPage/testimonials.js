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
            title:'We give freedom', 
            description:'What is an example of a paragraph? A good example of a paragraph contains a topic..'
        },
        { 
            src:Two,  
            alt:'testimonialImages', 
            title:'We give people to China', 
            description:'What is an example of a paragraph? A good example of a paragraph contains a topic..'
        }, 
        { 
            src:Three,  
            alt:'testimonialImages', 
            title:'We give people to Japan', 
            description:'What is an example of a paragraph? A good example of a paragraph contains a topic..'
        }
    ]


  return (
    <section className='container-responsive grid place-items-center py-20'>
        <div className='max-w-[846px]'>
            <h1 className='text-center'>Choose and create your dream now.</h1>
            <p className='text-center mt-6'>
                From Socrates to Steve Jobs, many of history &apos; s greatest thinkers had their best ideas while walking.
            </p>
        </div>
        <div className='mt-16 flex gap-5'>
            
                {testimonials.map((information, index) => (
                    <div key={index} className='w-[390px] overflow-hidden rounded-lg'>
                        <Image 
                            src={information.src} 
                            width={436} 
                            height={265} 
                            alt={information.alt}
                            className='h-[265px] w-full object-cover'
                        />
                        <div className='px-6 py-4 bg-white'>
                            <div className='border-b-[1px] border-gray-300 pb-4'>
                                <h2 className='text-2xl text-primary-400 font-bold'>{information.title}</h2>
                                <p className='text-xl mt-2'>{information.description}</p>
                            </div>
                            <div className='flex justify-between pt-7'>
                                <span className='text-xl'>Details</span>
                                <Image
                                    src='icons/next.svg'
                                    width={28}
                                    height={9.8}
                                    alt=''
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