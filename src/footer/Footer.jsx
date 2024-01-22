import React from 'react'

// components
import { BottomBorder } from '../Lib'

// icons
import { SiGithub as GitHubLogo } from 'react-icons/si'
import { FaLinkedinIn as LinkedLogo } from 'react-icons/fa'
import { IoIosMail as MailLogo } from 'react-icons/io'


export default function Footer() {
  return (
    <diV className='bg-footer w-full mt-20'>
      <div className='w-fit mx-auto flex flex-col gap-4'>
        <div className='h-16'></div>
        <div className='flex gap-8'>
          <BottomBorder>
            <a
              href='https://www.github.com/pdxgrantc'
              target='_blank'
              rel='noreferrer'
              className='my-auto w-fit mt-1 hover:mt-0 hover:mb-1 transition-all durration-300 ease-in-out'
            >
              <GitHubLogo className='h-[4rem] w-auto py-2 mx--auto text-button hover:text-button_hover' />
            </a>
          </BottomBorder>
          <BottomBorder>
            <a
              href='mailto:pdxgrantc@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='mt-1 hover:mt-0 hover:mb-1 transition-all durration-300 ease-in-out'
            >
              <MailLogo className='h-[4rem] py-0 w-auto text-button hover:text-button_hover' />
            </a>
          </BottomBorder>
          <BottomBorder>
            <a
              href='https://www.github.com/pdxgrantc'
              target='_blank'
              rel='noreferrer'
              className='w-auto mt-1 hover:mt-0 hover:mb-1 transition-all durration-300 ease-in-out'
            >
              <LinkedLogo className='h-[3.5rem] w-auto text-button hover:text-button_hover' />
            </a>
          </BottomBorder>
        </div>
        <div className='mx-auto w-fit'>
          <p className='w-fit'>Grant Conklin @2024</p>
        </div>
        <div className='h-16'></div>
      </div>
    </diV>
  )
}
