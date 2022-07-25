import React from 'react'
import {
   UilGithub,
   UilInstagram,
   UilFacebook,
   UilTwitter,
   UilLinkedin
} from '@iconscout/react-unicons'

import { Link } from 'react-router-dom';

export const Footer = () => {
   return (
      <div>
         <div className="bg-gray-800">
            <footer className="flex relative items-center justify-around py-4">
               <p className="mb-0 text-muted">&copy; 2022 Company, Inc</p>
               <a href="https://github.com/Ajay-Kumar-Maurya/Weather-App" target={"_blank"}><UilGithub size={40} width={40} /></a>

               <ul className="flex items-center justify-center">
                  <li className='px-2'><a href="#"><UilLinkedin size={24} width={24} /></a></li>
                  <li className='px-2'><a href="#"><UilFacebook size={24} width={24} /></a></li>
                  <li className='px-2'><a href="#"><UilInstagram size={24} width={24} /></a></li>
                  <li className='px-2'><a href="#"><UilTwitter size={24} width={24} /></a></li>
               </ul>
            </footer>
         </div>
      </div>
   )
}
