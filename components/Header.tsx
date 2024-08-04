import React from 'react'

import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import HeaderText from './HeaderText'

const Header = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div className='container py-4'>
        <div className='flex justify-between items-center'>
            <div className='hidden lg:flex gap-1'>
                <div className='header_top_icon_wrapper'>
                    <BsFacebook />
                </div>
                <div className='header_top_icon_wrapper'>
                    <BsInstagram />
                </div>
                <div className='header_top_icon_wrapper'>
                    <BsLinkedin />
                </div>
            </div>
            <div className='text-gray-500 text-[12px]'>
                <HeaderText />
            </div>
            <div className='text-gray-500 text-[12px]'>Help Center</div>
        </div>
      </div>
    </div>
  )
}

export default Header
