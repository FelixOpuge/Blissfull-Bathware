import Link from 'next/link'
import React from 'react'

const navbarLinks = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Freestanding Tubs',
        href: '/'
    },
    {
        name: 'Clawfoot Tubs',
        href: '/'
    },
    {
        name: 'Drop-In Tubs',
        href: '/'
    },
    {
        name: 'Aclove Tubs',
        href: '/'
    },
    {
        name: 'Jetted Tubs',
        href: '/'
    },
]

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
      <div className="container">
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
            {navbarLinks.map((link, index) => (
                <Link key={index} href={link.href} className='navbar_link relative'>
                    { link.name }
                </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
Navbar