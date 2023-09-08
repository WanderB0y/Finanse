import React from 'react'
import heroPicture from 'public/images/natalia.jpg'
import Image from 'next/image'


const heroSection = () => {

    const profileImage = [
        { src:'profiles/profile-one.svg', width: 60, height: 60, className: "z-30" },
        { src:'profiles/profile-two.svg', width: 60, height: 60, className: "absolute z-20 left-10" },
        { src:'profiles/profile-three.svg', width: 60, height: 60, className:"absolute z-10 left-20" }
    ]


  return (
    <section className='container-responsive py-32 relative'>
        <div className='grid gap-10 z-30 relative'>
            <div>
                <h1 className='mb-6 max-w-[500px] lg:max-w-[820px] xl:max-w-[900px] break-words'> Manage your financial planning properly </h1>
                <p className='leading-9 max-w-[440px] xl:max-w-[625px]'>
                    We will help you to setup plan your financial 
                    things computerize. And it’s free!
                </p> 
            </div>

            <div className='flex items-center'>
                <div className='flex relative'>
                  {profileImage.map((profile, index) => (
                    <Image key={index} src={profile.src} width={profile.width} height={profile.height} className={profile.className}/>
                  ))}
                </div>
                <span className='lg:text-2xl ml-24 text-xl'>824 companies joined us!</span>
            </div>

            <button className='btn-primary'>
                Get Early Access
            </button>
        </div>

        <div className='absolute bg-primary-400 h-full top-0 right-0 w-[30px] sm:w-[110px] md:w-[220px] lg:w-[220px] xl:w-[390px] 2xl:w-[450px]'>
            <Image
                src={heroPicture}
                alt='hero-picture'
                className='object-cover h-[240px] lg:h-[270px] xl:h-[290px] 2xl:h-[542px] w-[302px] 2xl:w-[562px] absolute right-2/4 top-[200px] lg:top-[210px] xl:top-[200px] 2xl:top-[70px] hidden md:block'
            />
            <Image
                src='icons/union.svg'
                width={134}
                height={134}
                className='absolute z-40 animate-spin-slow bottom-7 xl:-left-72 shrink-0 lg:-left-48 sm:-left-40 -left-40 min-w-[130px]'
            
            />
        </div>
    </section>
  )
}

export default heroSection