import React from "react";
import {
    FileText, Rss, Users, Bot, Laptop, UserCog 
} from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal"; // Adjust path as needed

const EduModelsShowcase = () => {
  // Models data for the right side list
  const rightModels = [
    
        {
            id: "traditional",
            name: "Automated Content Recommendation",
            icon: <FileText className="h-5 w-5 text-blue-500" />,
            description:
              "AI recommends relevant learning materials, articles, or practice problems based on user interests and progress.",
            bgColor: "bg-blue-100",
          },
          {
            id: "swiping",
            name: "Automatic Speech Recognition & Assessment",
            icon: <Rss className="h-5 w-5 text-blue-600" />,
            description:
              "AI facilitates audio-based learning by recognizing speech and providing feedback on pronunciation or specific skills.",
            bgColor: "bg-blue-100",
          },
          {
            id: "inclusive",
            name: "Real-Time Feedback & Performance Analysis",
            icon: <Users className="h-5 w-5 text-blue-500" />,
            description:
              "AI gives instant feedback, highlights weaknesses, and suggests study strategies.",
            bgColor: "bg-blue-100",
          },
          {
            id: "video",
            name: "Intelligent Chatbots & Virtual Tutors",
            icon: <Bot className="h-5 w-5 text-blue-500" />,
            description:
              "AI chatbots and virtual tutors offer 24/7 support, guidance, and real-world simulations.",
            bgColor: "bg-blue-100",
          },
          {
            id: "speed",
            name: "AI-powered AR/VR Learning",
            icon: <Laptop className="h-5 w-5 text-blue-500" />,
            description:
              "Integrate AI to create interactive AR/VR experiences to make learning more immersive and impactful and personalized.",
            bgColor: "bg-blue-100",
          },
          {
            id: "slow",
            name: "AI-based Progress Visualization",
            icon: <UserCog className="h-5 w-5 text-blue-500" />,
            description:
              "Use AI to create interactive timelines, personalized learning trees, and gamified dashboards.",
            bgColor: "bg-blue-100",
          },
        ];
  // Models data for the left side list
 

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-14 py-16  lg:mt-20">
      <ScrollReveal
        animation="fadeIn"
        duration={800}
        delay={100}
        easing="smooth"
        className="mb-10 sm:mr-10 md:w-[70%]  xl:w-[60%]" 
      >
        <h1 className="text-3xl md:text-4xl font-bold ml-0 sm:ml-5 lg:ml-0  mb-2">
        Fuel Your Educational App Growth With AI-Enabled Features
        </h1>
        <p className="text-lg ml-0 sm:ml-5 lg:ml-0 ">Integrate cutting-edge AI features to personalize learning, boost engagement, and unlock new possibilities for your education app.</p>
      </ScrollReveal>

      <div className="flex lg:block w-full lg:w-auto justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 max-w-xl md:max-w-full">
          {/* Left Section */}
          <div className="flex flex-col space-y-8 justify-center lg:justify-start">
            {/* Match Card */}
            <ScrollReveal
              animation="slideRight"
              duration={900}
              delay={200}
              easing="smooth"
              disableBelow="sm"
              className="flex justify-center"
            >
              <div className=" rounded-lg p-0 shadow-sm max-w-[20rem] sm:max-w-[25rem] lg:max-w-[40rem]">
                <Image width={568} height={518.45} alt="It's a Match" src="/IndusEdu/Image5.png"></Image>
              </div>
            </ScrollReveal>

            {/* Left Models List */}
           
          </div>

          {/* Right Section */}
          <div className="space-y-8 xl:ml-20">
            {/* Right Models List */}
            <div className="space-y-1">
              {rightModels.map((model, index) => (
                <ScrollReveal
                  key={model.id}
                  animation="slideRight"
                  duration={700}
                  delay={500}
                  easing="smooth"
                  index={index}
                  stagger={120}
                  disableBelow="sm"
                >
                  <div>
                    <div className="w-full flex items-start space-x-4 sm:px-4 py-4 sm:py-2 lg:py-4 rounded-lg transition-colors hover:bg-gray-50 group max-h-[85px]">
                      <div className={`p-3 rounded-full ${model.bgColor}`}>
                        {model.icon}
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold leading-tight lg:leading-none text-gray-900 group-hover:text-blue-700 text-base xl:text-lg">
                          {model.name}
                        </h3>
                        <p className=" text-[12px] xl:text-sm  text-gray-600 mt-1 block h-auto sm:invisible sm:opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                          {model.description}
                        </p>
                      </div>
                    </div>
                    <hr className="mt-4 sm:mt-2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* App Mockup */}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduModelsShowcase;