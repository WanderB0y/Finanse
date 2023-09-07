import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const index = () => {

  return (
    <div>
        <header className=' bg-light-100 flex w-full py-6 md:px-12 lg:px-20 xl:px-32 2xl:px-64 px-6 justify-between gap-16 h-full items-center'>
            <Image
                src='icons/finanse-icon.svg'
                width={158}
                height={29}
                alt='logo'
            />
            <div className='w-full h-full hidden xl:inline-flex flex-grow font-secondary'>
                <nav>
                    <ul className='flex gap-10 hover:[&>*]:font-bold [&>*]:shrink-0 [&>*]:h-full'>
                        <li className='w-12'>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li  className='w-20'>
                            <Link href='/about'>
                                About Us
                            </Link>
                        </li>
                        <li className='w-[110px]'>
                            <Link href='/works'>
                                How it works
                            </Link>
                        </li>
                        <li className='w-14'>
                            <Link href='/pricing'>
                                Pricing
                            </Link>
                        </li>
                        <li className='w-14'>
                            <Link href='/careers'>
                                Careers
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='flex w-fit h-full justify-end shrink-0 items-center gap-10'>
                <button className='btn-primary md:inline-flex hidden'>
                    Get Early Access
                </button>
                <button className='xl:hidden inline-flex shrink-0'>
                    <Image
                        src='icons/menu.svg'
                        width={40}
                        height={40}
                        alt='menu'
                    />
                </button>
            </div>
        </header>

        <main>
            <section className='container-responsive py-32 relative'>
                <div className='grid gap-10 z-30 relative'>
                    <div>
                        <h1 className=' mb-6 w-[900px]'> Manage your financial planning properly </h1>
                        <p className='leading-9 w-[625px]'>
                            We will help you to setup plan your financial 
                            things computerize. And it’s free!
                        </p> 
                    </div>
                    <div className='flex items-center'>
                        <div className='flex relative '>
                            <Image 
                                src="profiles/profile-one.svg"
                                width={60}
                                height={60}
                                className='z-30'/>
                            <Image 
                                src="profiles/profile-two.svg"
                                width={60}
                                height={60}
                                className='absolute z-20 left-10'/>
                            <Image 
                                src="profiles/profile-three.svg"
                                width={60}
                                height={60}
                                className='absolute z-10 left-20'/>
                        </div>
                        <span className='text-2xl'>824 companies joined us!</span>
                    </div>
                    <button className='btn-primary'>
                        Get Early Access
                    </button>
                </div>
                <div className='absolute bg-primary-400 h-full top-0 right-0 w-[600px]'>
                    
                </div>
            </section>
            <section className='container-responsive py-20'>
                <div className='grid place-content-center gap-10'>
                    <div className='flex flex-col items-center gap-6'>
                        <h1 className='text-center w-[611px]'>Make any meeting a walking meeting</h1>
                        <p>Walking Meetings seamlessly integrates with all major meeting platforms.</p>
                    </div>
                    <div className='flex gap-16'>
                        <Image
                            src='company-icons/altrium.svg'
                            width={142}
                            height={149}
                        />
                        <Image
                            src='company-icons/climo.svg'
                            width={171}
                            height={40}
                        />
                        <Image
                            src='company-icons/granded.svg'
                            width={152}
                            height={40}
                        />
                        <Image
                            src='company-icons/kaligo.svg'
                            width={120}
                            height={45}
                        />
                        <Image
                            src='company-icons/menuine.svg'
                            width={107}
                            height={49}
                        />
                        <Image
                            src='company-icons/mountrain.svg'
                            width={111}
                            height={47}
                        />
                    </div>
                </div>
            </section>

            <section className='container-responsive py-10'>
                <div>
                    <div>
                        <h1 className='w-[625px]'>Diversification has never been easier.</h1>
                        <p className='mt-6 self-stretch'>
                            A simple walk is the perfect 
                            cure for meeting fatigue. We 
                            all need some fresh air.
                        </p>
                    </div>
                    <button className='btn-primary mt-16'>
                        Get Early Access
                    </button>   
                </div>


            </section>
            <section></section>
            <section></section>
            <section></section>
        </main>
        <footer>
            
        </footer>

    </div>
  )
}

export default index