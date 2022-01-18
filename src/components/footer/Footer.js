import React from 'react'
import { NavLink } from 'react-router-dom'
import './foot.css'
import Button from '@mui/material/Button';
import mom from '../../images/mom.jpg';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from "react-scroll";
function Footer() {
  return (
    <div>
      <footer style={{ backgroundColor: '#FFE4E1' }} class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

          <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Clemency Coin</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">This website aims to reach every peer existing and to exist in the world and add value in their life leveraging blockchain technology especially for Mother and Child. Discover an array of projects devised by dynamic thinkers and technologically sound entities in bring positive reinforcement in the global transacting, interacting, and working system</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Follow Us on Social media for regular updates</h2>
              <div class="list-none mb-10">
                <img src={mom} />

              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Navigation</h2>
              <nav class="list-none mb-10">
                <li>
                  <Link to='/'><a class="text-gray-600 hover:text-gray-800">Home</a>
                  </Link>
                </li>
                <li>
                  <Link to='features'><a class="text-gray-600 hover:text-gray-800">Features</a>
                  </Link>
                </li>
                <li>
                  <Link to='about'><a class="text-gray-600 hover:text-gray-800">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link to='roadmap'><a class="text-gray-600 hover:text-gray-800">Roadmap</a>
                  </Link>
                </li>
                <li>
                  <NavLink to='/whitepaper'><a class="text-gray-600 hover:text-gray-800">Whitepaper</a>
                  </NavLink>
                </li>
              </nav>
            </div>



            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Social Media</h2>
              <div class=" mr-auto inline-flex border-0 px-3 focus:outline-none rounded text-base mb-1 md:mt-0">
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-1 justify-center sm:justify-start">
                  <Button href="https://t.me/httpstmeHFa2ZYn2PtM0YzRl" variant="contained"><TelegramIcon /> Join </Button>
                </span>
              </div>
              <br />
              <div class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">


                <a href='https://twitter.com/Clemencycoin12?t=SRgQMeqwpA1Y9NOzFkdfRw&s=08' class="ml-3 text-gray-500">
                  <svg fill=' #00acee ' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>   </a>
                <br/>
                <a href='https://twitter.com/Clemencycoin12?t=SRgQMeqwpA1Y9NOzFkdfRw&s=08' class="ml-3 text-gray-500">
                  <svg fill='red' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                </a>

              </div><br></br>
              <div class=" mr-auto inline-flex border-0 px-3 focus:outline-none rounded text-base mb-1 md:mt-0">
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-1 justify-center sm:justify-start">
                <p> Email:  coinclemency@gmail.com</p>
                  {/* <Button href="https://t.me/httpstmeHFa2ZYn2PtM0YzRl" variant="contained"><TelegramIcon /> Join </Button> */}
                </span>
              </div>


            </div>


          </div>
        </div>
        {/* <div class="" >
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-black text-sm text-center sm:text-left">© 2021 Clemency Coin

            </p>

        

          </div>
        </div> */}
      </footer>

    </div>
  )
}

export default Footer
