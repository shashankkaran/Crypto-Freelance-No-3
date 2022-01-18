import React,{useEffect} from 'react'
import bat from "../../images/bat.jpg"
import CountUp, { useCountUp } from 'react-countup';
import Aos from "aos";
import { height } from '@mui/system';
import "./services.css";
import network from "../../images/Network.mp4";
function Services() {

  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 600,
    });
  }, []);
  return (
    <div id="features">
  
  <video style={{position:'absolute' ,width:'100%'}} id="background-video" autoPlay loop muted>
  <source src={network} type="video/mp4"/>
</video>
<video class="vid1" style={{position:'absolute',top:'140%',width:'100%'}} autoPlay loop muted>
  <source src={network} type="video/mp4"/>
</video>
<video class="vid1" style={{position:'absolute',top:'170%' ,width:'100%'}} autoPlay loop muted>
  <source src={network} type="video/mp4"/>
</video>
<video class="vid1" style={{position:'absolute',top:'200%' ,width:'100%'}} autoPlay loop muted>
  <source src={network} type="video/mp4"/>
</video>
<video class="vid1" style={{position:'absolute',top:'230%' ,width:'100%'}} autoPlay loop muted>
  <source src={network} type="video/mp4"/>
</video>
<video class="vid1 vid12" style={{position:'absolute',top:'260%' ,width:'100%'}} autoPlay loop muted>
  <source src={network} type="video/mp4"/>
</video>
<video class="vid1 vid12" style={{position:'absolute',top:'290%' ,width:'100%'}} autoPlay loop muted>
  <source src={network} type="video/mp4"/>
</video>
<video class="vid1 vid12" style={{position:'absolute',top:'320%' ,width:'100%'}} autoPlay loop muted>
  <source src={network} type="video/mp4"/>
</video>

  <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl pt-5 pb-3 text-2xl font-medium title-font mb-4 text-gray-900">TOKENOMICS</h1>
         
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Clemency Coin is the best project of the year on BSC Network</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">CMCC is the worlds best community driven project it basically work for the development of poor children and mother<br />
              Clemency coin follows a quote. "Be the change you want to see in the world".</p>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-pink-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900"><CountUp end={50} duration={6} />M</h2>
                <p class="leading-relaxed">Total Supply</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-pink-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900"><CountUp end={4} duration={6} />%</h2>
                <p class="leading-relaxed">Charity Wallet</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="text-pink-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M7.467 0c1.102.018 5.555 2.549 6.386 8.558.905-.889 1.409-3.664 1.147-4.843 3.952 2.969 6 6.781 6 11.034 0 5.094-3.43 9.251-8.963 9.251-5.728 0-9.037-3.753-9.037-8.276 0-6.26 5.052-7.62 4.467-15.724zm3.262 19.743c-.749.848-.368 1.945.763 2.045 1.035.093 1.759-.812 2.032-1.792.273-.978.09-2.02-.369-2.893-.998 1.515-1.52 1.64-2.426 2.64zm4.42 1.608c2.49-1.146 3.852-3.683 3.852-6.58 0-2.358-.94-4.977-2.5-7.04-.743 2.867-2.924 3.978-4.501 4.269.05-3.219-.318-6.153-2.602-8.438-.296 4.732-4.321 7.63-4.398 12.114-.029 1.511.514 3.203 1.73 4.415.491.489 1.054.871 1.664 1.16-.121-.608-.062-1.254.195-1.848.911-2.106 3.333-2.321 4.202-5.754.952.749 3.275 3.503 2.778 6.358-.082.469-.224.923-.42 1.344z" /></svg>

                <h2 class="title-font font-medium text-3xl text-gray-900"><CountUp end={2} duration={6} />%</h2>
                <p class="leading-relaxed">Coin Development</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-pink-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900"><CountUp end={4} duration={2} />%</h2>
                <p class="leading-relaxed">Buy Back Liquidity</p>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Services
