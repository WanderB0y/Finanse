import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	const socialLinks = [
		{ src:'social/facebook.svg', alt:'facebook icon'},
		{ src:'social/instagram.svg', alt:'instagram icon' },
		{ src:'social/twitter.svg', alt:'twitter icon' },
		{ src:'social/youtube.svg', alt:'youtube icon'}
	]



  return (
    <footer className='font-secondary bg-primary-400 text-white flex container-responsive justify-evenly py-20 text-base'>
        <div className='max-w-[268px]'>
          <Image
            src='icons/finanse-icon-light.svg'
            width={160}
            height={40}
            alt='logo light'
			className='mb-5'
          />

          <span>
            We will help you to setup plan your 
            financial things computerize. And 
            it’s free!
          </span>
        </div>
        <div className='grid grid-cols-3'>
         
          <div>
            <h3>Quick Links</h3>
			<nav>
				<ul className='opacity-80 grid gap-4'>
					<li>
						<Link href='/'>
						Home
						</Link>
					</li>
					<li>
						<Link href='/about'>
						About Us
						</Link>
					</li>
					<li>
						<Link href='/works'>
						How it works
						</Link>
					</li>
              </ul>
            </nav>
          </div>
          <div>
            <h3>Other Menus</h3>
            <nav>
				<ul className='opacity-80 grid gap-4'>
					<li>
						<Link href='/pricing'>
						Pricing
						</Link>
					</li>
					<li>
						<Link href='/about'>
						Contact Us
						</Link>
					</li>
					<li>
						<Link href='/careers'>
						Careers
						</Link>
					</li>
				</ul>
            </nav>
          </div>
          <div>
            <h3>More</h3>
            <nav>
				<ul className='opacity-80 grid gap-4'>
					<li>
						<Link href='/pricing'>
						Terms and Condition
						</Link>
					</li>
					<li>
						<Link href='/about'>
						Privacy and Policy
						</Link>
					</li>
				</ul>
           
            </nav>
          </div>
        </div>
        <div>
			<h3>Follow Us</h3>
			<div className='flex gap-4'>
				{socialLinks.map((logo, index) => (
					<Image
						key={index}
						src={logo.src}
						width={32}
						height={32}
						alt={logo.alt}
						className='hover:fill-secondary-400'
					/>
				))}

			</div>

		</div>
    </footer>
  )
}

export default Footer