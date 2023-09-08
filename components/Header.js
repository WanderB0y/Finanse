import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className=' bg-light-100 flex w-full py-6 md:px-12 lg:px-20 xl:px-32 2xl:px-64 px-6 justify-between gap-16 h-full items-center'>
    <Image
        src='icons/finanse-icon.svg'
        width={158}
        height={29}
        alt='logo'
    />
    <div className='w-full h-full hidden xl:inline-flex flex-grow font-secondary'>
        <nav>
            <ul className='flex gap-10 hover:[&>*]:font-bold [&>*]:shrink-0 [&>*]:h-full [&>*]:duration-300'>
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
  )
}

export default Header