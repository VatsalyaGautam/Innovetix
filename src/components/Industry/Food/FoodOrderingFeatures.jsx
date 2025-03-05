import React from 'react';
import { Card } from '@/components/ui/card';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
const FoodOrderingFeatures = () => {
  return (
    <div className="bg-white">
      <div className="bg-white px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col">
        {/* Main Heading */}
        <div className="text-center my-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mx-auto">
            Deliver a unique online food ordering experience to your customers with CodeBrew's advanced and fully customized food delivery app development services.
          </h1>
        </div>

        {/* Three Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* First Card - Red */}
          <Card className="bg-[rgb(224,48,50)] text-white p-8 rounded-md overflow-hidden relative group">
            <Image width={313.2} height={312.45} alt="Fast Food" src='/food/pizzaBurger.svg' className='absolute w-[90%] lg:w-3/5 md:right-0 lg:right-[6%] bottom-[10%] lg:bottom-[3%]'/>
            <div className="flex flex-col h-full relative">
              <div>
                <h2 className="text-2xl font-bold mb-2">Customized The Ordering <br className='hidden md:block'/> Experience</h2>
                <p className="mb-12 text-lg">
                  Boost recognition for your <br className='hidden md:block'/> restaurant app by 80% with the <br className='hidden md:block'/> brand logo, color, images, & more
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                  <MoveRight className="text-white w-5 h-5" />
                </div>
              </div>

            
            </div>
          </Card>

          {/* Second Card - Trust */}
          <div className="flex flex-col gap-6">
            
            <Card className="bg-[url('/food/brand.svg')] bg-contain bg-center bg-no-repeat text-white p-8 rounded-md relative group  transition-colors">
            <div className='absolute inset-0 bg-gradient-to-l from-[rgba(0,0,0,0.5)] to-[rgba(19,19,19,0.8)]'></div>
              <div className="flex flex-col relative">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Build Your Brand & Trust</h2>
                  <p className="mb-8">
                    52% of diners trust a restaurant's own branded app over a third-party platform
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                    <MoveRight className="text-white w-5 h-5" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Third Card - Commission Free */}
            <Card className="bg-[url('/food/commisionFree.svg')] bg-cover bg-no-repeat  text-white p-8 rounded-md relative group transition-colors">
            <div className='absolute inset-0 bg-gradient-to-l from-[rgba(0,0,0,0.5)] to-[rgba(19,19,19,0.8)]'></div>
              <div className="flex flex-col relative">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Enjoy Commission-Free Selling</h2>
                  <p className="mb-8">
                    Get your own commission-free online ordering system & reduce delivery costs up to 70%
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                    <MoveRight className="text-white w-5 h-5" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodOrderingFeatures;