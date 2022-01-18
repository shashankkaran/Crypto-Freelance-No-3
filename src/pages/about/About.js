import React,{useEffect} from 'react'
import bat from '../../images/bat.jpg'
import Aos from "aos";
function About() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      delay: 250,
    });
  }, []);
  return (
    <div class="pt-3" id="about">

      <div>
        <h2 data-aos="fade-out" class="pt-5" style={{ textAlign: 'center', fontSize: '3rem', color: 'hotpink', fontWeight: 'bolder' }}>About Us</h2>
      </div>



      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
          <img data-aos="fade-left" class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={bat} />
          <div data-aos="fade-right" class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What is Clemency Coin?</h1>
            <p class="mb-8 leading-relaxed">Bitcoin is an example of cryptocurrency: a new form of digital money not linked to a government or central bank. The technology which makes this possible is the blockchain: a revolutionary new type of ledger for transactions that are owned and maintained by all the users of the system rather than being controlled by a single authority. Cryptocurrency and blockchain technology have some fascinating features that could have a huge impact on charities and charitable giving. Clemency Coin is a unique coin molded by the community, looking to benefit the lives of homeless mothers in the poorest countries. Clemency Coin is a decentralized deflationary token aims to bring all those Clemencys in the world whose children just let them go and we together to create stability in the ecosystem and in our environment to provide them a better life as before through CHARITY. Clemency Coin has a total supply of 50 Million where fees and profits will be distributed amongst charity hubs from all over the Globe for lifetimes. BUY NOW, HELP THEM, and HOLD for your future.</p>

          </div>
        </div>
      </section>






      <section  class="text-gray-600 body-font">
        <div class="text-center lg:full w-full">
          <h1 class="title-font ml-auto mr-auto center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Why invest in clemency coin?</h1>

        </div>


        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>


            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">1</div>




            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">









              <div data-aos="fade-left" class="flex-shrink-0 w-24 h-24 bg-pink-100 text-pink-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z" />    </svg>
              </div>
              <div data-aos="fade-left" class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                {/* <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">1.</h2> */}
                <p class="leading-relaxed">New models of digital ‘cryptocurrencies’, such as Bitcoin, Ethereum, Dogecoin, and our Clemency Coin could present both major opportunities and challenges for charities. We look at some of these opportunities and challenges, such as the potential for ‘radical transparency’ of donations, the possibility of making it easier to get aid money to where it is needed for mothers and the challenge of anonymous cryptocurrency donations.</p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">2</div>
            <div data-aos="fade-left" class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-pink-100 text-pink-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z" />  </svg>
              </div>
              <div data-aos="fade-left" class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                {/* <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">2.</h2> */}
                <p class="leading-relaxed">We consider whether blockchain technology could be used to transform the way, charities are created and regulated. We look at what it might mean for registering and monitoring charities; whether it could open up the possibility of 100% transparent, real-time financial information on charities; and explore whether smart contracts could result in a fundamental shift in the way rules are enforced. </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">3</div>
            <div data-aos="fade-left" class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-pink-100 text-pink-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z" /></svg>
              </div>
              <div data-aos="fade-left" class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                {/* <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">3.</h2> */}
                <p class="leading-relaxed">We also consider whether this could eventually spell the end of traditional charity regulation. Clemency Coin will bring prosperity to its holders. Buy and Hold Clemency Coin in your wallet and you will get rewards automatically from every transaction in terms of burn and add liquidity. </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">4</div>
            <div data-aos="fade-left" class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-pink-100 text-pink-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" class="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z" /> </svg>
              </div>
              <div data-aos="fade-left" class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                {/* <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">4.</h2> */}
                <p class="leading-relaxed">No need to farm, stake, or fill out claim forms. Clemency Coin works by taking a 10% fee on every transaction. This is divided into two parts Burn and Add LIQUIDITY. The more Clemency Coin you hold, the more rewards you will receive. The “DEAD” (Burn) wallet, receives the most percentage to burn. The second part is LP GENERATION, which also LOCKED FOR FOREVER.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
