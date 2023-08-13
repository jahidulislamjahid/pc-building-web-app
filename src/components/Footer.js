import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bottom-0'>
      <footer >
        <div className="flex justify-around space-x-5 p-10 bg-curiousGreen text-white">
          <div className=''>
            <Link href='/'>
              <Image src="/logo.svg" alt="Logo" height={100} width={100} />
            </Link>
          </div>
          <div className='footer justify-around'>
          <div className=''>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
          </div>
        </div>
        <h1 className='bg-curiousGreen text-white font-semibold text-center pb-4'>&copy; Copyright Restricted <span className='font-mono font-bold text-xl'>| Rog Reboot</span> <sup style={{ fontSize: "0.5em" }}>TM</sup></h1>
      </footer>
    </div>
  )
}

export default Footer
