import React from 'react'

import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import HeaderText from './HeaderText'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div className='container py-4'>
        <div className='flex justify-between items-center'>
            <div className='hidden lg:flex gap-1'>
              <Link href='https://web.facebook.com/felix.omondi.7583' target='_blank'>
                <div className='header_top_icon_wrapper'>
                      <BsFacebook />
                </div>
              </Link>
              <Link href='https://web.facebook.com/felix.omondi.7583' target='_blank'>
                <div className='header_top_icon_wrapper'>
                      <BsInstagram />
                </div>
              </Link>
              <Link href='https://web.facebook.com/felix.omondi.7583' target='_blank'>
                <div className='header_top_icon_wrapper'>
                      <BsLinkedin />
                </div>
              </Link>
            </div>
            <div className='text-gray-500 text-[12px]'>
                <HeaderText />
            </div>
            <Link href='/help-center' target='_blank'>
              <div className='text-gray-500 text-[12px]'>
                Help Center
              </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
