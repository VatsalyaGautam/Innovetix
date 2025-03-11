
import React from 'react';
import Image from 'next/image';
import TechStack from  '@/components/Industries/Education/EighthSection'
import SoftwareDevSection1 from "@/components/Services/SoftwareDev/FirstSection"
import ScrollReveal from '@/components/ScrollReveal';


const SoftwareDevPage = () => {




  const techCards = [
    {
      id: 1,
      icon: "⚙️",
      title: "Generative AI for business"
    },
    {
      id: 2,
      icon: "🔌",
      title: "IOT (Internet Of Things)"
    },
    {
      id: 3,
      icon: "📊",
      title: "Blockchain & Decentralization"
    },
    {
      id: 4,
      icon: "🤖",
      title: "Generative AI for business"
    },
    {
      id: 5,
      icon: "💻",
      title: "Generative AI for business"
    },
    {
      id: 6,
      icon: "🔍",
      title: "Generative AI for business"
    }
  ];


  const services = [
    {
      id: 1,
      icon: "🔄",
      title: "Software Consulting",
      description: "Our experienced software consultants analyze your needs and provide valuable guidance to deliver tailored solutions for growth, efficiency and profit."
    },
    {
      id: 2,
      icon: "🖥️",
      title: "Custom Software Development",
      description: "We offer custom software systems aligned to your unique requirements, using agile methodologies for faster delivery, improved scalability, and seamless integration."
    },
    {
      id: 3,
      icon: "🏢",
      title: "Enterprise Software Development",
      description: "We create ERP, CRM and other enterprise solutions tailored to optimize operations, productivity, customer service, and drive overall business growth."
    },
    {
      id: 4,
      icon: "📊",
      title: "Software Product Development",
      description: "We transform your innovative software products from ideation to release, leveraging proven strategies for concept, design, testing and maintenance."
    },
    {
      id: 5,
      icon: "🔄",
      title: "Software Migration & Integration",
      description: "We specialize in data migration and integrating third-party services, ensuring functionality, compliance and aligning to your vision."
    },
    {
      id: 6,
      icon: "🔄",
      title: "Agile Application Development",
      description: "Our agile-powered development, with iterative deliveries and responses to change, emphasizing continual feedback and user-focused outcomes."
    },
    {
      id: 7,
      icon: "📈",
      title: "API Development",
      description: "We create robust APIs that connect applications, enhancing capabilities and interoperability through scalable and purpose-built solutions."
    },
    {
      id: 8,
      icon: "🎨",
      title: "UI/UX Design",
      description: "We craft engaging user experiences that align with identity and enhance satisfaction through user-centric mobile-first designs."
    },
    {
      id: 9,
      icon: "🌐",
      title: "Application Modernization",
      description: "We update legacy systems with modern technologies and solutions, offering cloud support to eliminate downtimes."
    }
  ];



  const phases = [
    {
      title: "Discovery",
      number: "01",
      items: [
        "Requirements Gathering",
        "Research & Analysis",
        "Solution Mapping",
        "Technology Evaluation"
      ]
    },
    {
      title: "Design",
      number: "02",
      items: [
        "Interaction Flows    ",
        "Wireframing",
        "Visual Design",
        "Brand Alignment"
      ]
    },
    {
      title: "Development",
      number: "03",
      items: [
        "Custom Development",
        "Testing",
        "Iteration",
        "Deployment Prep"
      ]
    },
    {
      title: "Deploy",
      number: "04",
      items: [
        "Software Migration",
        "Training",
        "Monitoring",
        "Update & Maintenance"
      ]
    }
  ];

  return (

<div className='flex flex-col justify-center items-center'>


<div className="flex w-full xl:h-screen justify-center  2xl:h-auto bg-[#061C30] 2xl:bg-no-repeat 2xl:bg-cover text-white relative overflow-hidden ">



  {/* Content */}
 
  <SoftwareDevSection1
     
    />

</div>



{/* Second Section */}

<section className="w-full py-16 bg-[#f9f9f9]">
      {/* Top green notification banner */}
      <div className="flex justify-center mb-6">
        <div className="bg-[#E6EED1] px-6 py-3 rounded-md text-center">
          <p className="text-[#3a5a1c] font-medium">Ready For Strategic Transformation Of Your Business?</p>
        </div>
      </div>
      
      {/* Main headline */}
      <div className="text-center mb-20 md:mb-40 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Get <span className="text-[#3498db]">Scalable</span> Digital Solutions that satisfy today's<br className="hidden md:block" /> 
          needs and unlock tomorrow's opportunities.
        </h2>
      </div>
      
      {/* Section title */}
      <div className="text-center mb-16 px-4">
        <h3 className="text-2xl md:text-3xl font-bold">
          How Our Custom Software Development<br className="hidden md:block" />
          Services Can Help Your Business?
        </h3>
      </div>
      
      {/* Three cards section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Process Automation */}
        <div className="bg-[#0c2340] text-white p-8 rounded-md">
          {/* Icon */}
          <div className="mb-6">
            <Image
                               src="/ServiceSoftwareDev/image5.png"
                               alt="E-commerce Website Mockup on Multiple Devices"
                               width={80}
                               height={50}
                               priority
                               className=" w-[45px]"
                             />
          </div>
          
          {/* Title */}
          <h4 className="text-xl font-bold mb-6">Process Automation</h4>
          
          {/* Bullet points */}
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-[#3498db] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm md:text-base">Streamline Business Operations</p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#3498db] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm md:text-base">Eliminate Manual Repetitive Tasks</p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#3498db] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm md:text-base">Optimize Your Efficiency</p>
            </div>
          </div>
        </div>
        
        {/* Card 2: Unlock Scalability */}
        <div className="bg-[#0c2340] text-white p-8 rounded-md">
          {/* Icon */}
          <div className="mb-6">
          <Image
                               src="/ServiceSoftwareDev/image6.png"
                               alt="E-commerce Website Mockup on Multiple Devices"
                               width={80}
                               height={50}
                               priority
                               className=" w-[45px]"
                             />
          </div>
          
          {/* Title */}
          <h4 className="text-xl font-bold mb-6">Unlock Scalability</h4>
          
          {/* Bullet points */}
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-[#3498db] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm md:text-base">Effortlessly Scale To Multi-Million User Base</p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#3498db] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm md:text-base">Add Any Number Of Features/ Functionality</p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#3498db] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm md:text-base">Seamlessly Expand Without Constraints</p>
            </div>
          </div>
        </div>
        
        {/* Card 3: Reduce Costs */}
        <div className="bg-[#0c2340] text-white p-8 rounded-md">
          {/* Icon */}
          <div className="mb-6">
          <Image
                               src="/ServiceSoftwareDev/image7.png"
                               alt="E-commerce Website Mockup on Multiple Devices"
                               width={80}
                               height={50}
                               priority
                               className=" w-[50px]"
                             />
          </div>
          
          {/* Title */}
          <h4 className="text-xl font-bold mb-6">Reduce Costs</h4>
          
          {/* Bullet points */}
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-[#3498db] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm md:text-base">Eliminate Recurring Monthly Tool Costs</p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#3498db] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm md:text-base">Optimize Tech Infrastructure Costs</p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#3498db] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm md:text-base">Streamline Operational Expense</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>



    {/* Third Section */}


    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6">
      <div className="flex flex-col gap-8 justify-center">
        {/* Left column with text and image */}
        
          
        
         
           
         


 {/* Right column with cards */}
 <div className="flex flex-col">
          {/* Header with call to action */}

          <div className='w-1/2 -mb-40 '>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 ">
            Legacy Systems Dragging You Down, Competitive Edge At Stake?
          </h2>
            </div>

          <div className="relative mb-6 flex justify-end">
           
            <div className="bg-gray-800 text-white p-4 rounded-md max-w-md ">
              <p className="font-medium">
                Let's Leverage New-Gen Technologies to make your Business Future-Proof.
              </p>
            </div>
            <div className="w-4 h-4 bg-gray-800 transform rotate-45 absolute -bottom-2 right-[24rem]"></div>
          </div>


 <div className='h-[30rem] w-full flex flex-col justify-end'>   

    {/* Grid of cards */}
    <div className='w-full -mb-80 flex justify-end'>

  

          <div className="grid grid-cols-2  w-1/2  ">
              {techCards.map((card) => (
                <div 
                  key={card.id}
                  className="bg-white border border-gray-200 p-4  flex items-center group relative h-[9rem] z-20"
                >
                  <div className="mr-3 text-xl">
                    {card.icon === "⚙️" && <span className="inline-block w-6 h-6">⚙️</span>}
                    {card.icon === "🔌" && <span className="inline-block w-6 h-6">🔌</span>}
                    {card.icon === "📊" && <span className="inline-block w-6 h-6">📊</span>}
                    {card.icon === "🤖" && <span className="inline-block w-6 h-6">🤖</span>}
                    {card.icon === "💻" && <span className="inline-block w-6 h-6">💻</span>}
                    {card.icon === "🔍" && <span className="inline-block w-6 h-6">🔍</span>}
                  </div>
                  <div className="text-sm font-medium">{card.title}</div>
                  <div className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    +
                  </div>
                </div>
              ))}
            </div>   
            </div>  

          <div className="relative bg-[url('/ServiceSoftwareDev/image8.png')] bg-contain w-full h-64 flex  justify-end sm:h-80 md:h-96 lg:h-[25rem] rounded-lg overflow-hidden">

        

         
        </div>
        </div> 
        </div>

 {/* Bottom CTA button */}
 <div className="mt-8 flex justify-center">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center">
              Lead the Change, Be the Disruptor
              <span className="ml-2 pb-1 bg-white text-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-xl font-bold">
                →
              </span>
            </button>
          </div>

        </div>

       
     
    </div>



{/* Fourth Section */}

<div className="w-full">
      {/* Top light section */}
      <div className="bg-gray-100 py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Have a One-of-a-Kind Software Requirement? Bring it on!
        </h2>
        <p className="text-sm md:text-base mx-auto max-w-2xl mb-6">
          We've top-tier developers who excel in crafting custom solutions tailored to you. 
          You just imagine, We build it.
        </p>
        <button className="bg-gray-800 text-white px-5 py-2 rounded-md font-medium flex items-center mx-auto">
          Let's Discuss
          <span className="ml-2 bg-white text-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-xs">
            →
          </span>
        </button>
      </div>

      {/* Dark blue section with services */}
      <div className="bg-[#0E2F4E] py-12 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 max-w-xl">
            End-to-End Software Development Services, Tailored To Your Business Needs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white text-black p-6 rounded-none">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 flex items-center justify-center border border-gray-300 rounded-full text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="font-bold">{service.title}</h3>
                </div>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>


{/* Fifth Section */}


<div className="bg-[#F7F8F1] py-16 px-4 sm:px-10 w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 max-w-4xl ">
        Maximize Productivity, Scalability, & Cost Savings With Software Solution Built For Your Needs
        </h2>
      
        <button className="bg-gray-800 text-white px-5 py-2 rounded-md font-medium flex ">
        Let’s Build Together
          <span className="ml-2 bg-white text-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-xl font-bold pb-1">
            →
          </span>
        </button>
      </div>


{/* Sixth Section */}


<div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Our 4D Software Methodology</h2>
        <p className="text-gray-700">
          We follow a holistic approach across four integrated phases to build future-ready software tailored to your needs.
        </p>
      </div>

      <div className="space-y-4">
        {phases.map((phase, index) => (
          <div key={index} className="bg-[#EFF4F6] p-6 rounded flex justify-between">
            <div className="flex items-baseline mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{phase.title}</h3>
              <span className="ml-1 text-sm text-gray-500 font-medium align-top">{phase.number}</span>
            </div>
            
            <div className='flex  sm:w-[26rem]'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {phase.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center w-[13rem]">
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center mr-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
              </div>
          </div>
        ))}
      </div>
    </div>





{/* Seventh Section */}

<div>
<ScrollReveal animation="fadeSlideLeft" duration={800}>
        <h2 className="text-3xl font-bold text-center mb-4">
        Building Tomorrow's Software, Backed By Cutting-Edge Tech Stack
        </h2>
      </ScrollReveal>
<TechStack/>
</div>



</div>


  )}
  
export default SoftwareDevPage;