import React from "react";
import {
  Phone,
  Video,
  Users,
  MapPin,
  Heart,
  User,
  Compass,
  Calendar,
  Brain,
  Clock,
} from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal"; // Adjust path as needed

const DatingModelsShowcase = () => {
  // Models data for the right side list
  const rightModels = [
    {
      id: "traditional",
      name: "Traditional Matching",
      icon: <Heart className="h-5 w-5 text-pink-500" />,
      description:
        "Users match with others based on shared interests and values, typically suited for long-term relationships.",
      bgColor: "bg-blue-100",
    },
    {
      id: "swiping",
      name: "Swiping and Geolocation",
      icon: <MapPin className="h-5 w-5 text-yellow-600" />,
      description: "Location-based matching with quick swipe functionality.",
      bgColor: "bg-yellow-100",
    },
    {
      id: "inclusive",
      name: "Inclusive & Diverse",
      icon: <Users className="h-5 w-5 text-green-500" />,
      description: "Designed for all gender identities and relationship types.",
      bgColor: "bg-green-100",
    },
    {
      id: "video",
      name: "Video Dating",
      icon: <Video className="h-5 w-5 text-red-500" />,
      description: "Connect through video calls before meeting in person.",
      bgColor: "bg-red-100",
    },
    {
      id: "speed",
      name: "Speed Dating & Icebreakers",
      icon: <Clock className="h-5 w-5 text-orange-500" />,
      description: "Quick interactions with guided conversation starters.",
      bgColor: "bg-orange-100",
    },
  ];

  // Models data for the left side list
  const leftModels = [
    {
      id: "friendship",
      name: "Friendship & Networking",
      icon: <User className="h-5 w-5 text-blue-500" />,
      description:
        "Some apps extend their functionality beyond romance, allowing users to find friends & networking opportunities.",
      bgColor: "bg-blue-100",
    },
    {
      id: "longdistance",
      name: "Long-Distance Relationships",
      icon: <Compass className="h-5 w-5 text-yellow-600" />,
      description: "Features designed for couples separated by distance.",
      bgColor: "bg-yellow-100",
    },
    {
      id: "blind",
      name: "Blind Dating",
      icon: <Users className="h-5 w-5 text-green-500" />,
      description: "Match based on personality before seeing photos.",
      bgColor: "bg-green-100",
    },
    {
      id: "ai",
      name: "AI Matchmaking",
      icon: <Brain className="h-5 w-5 text-red-500" />,
      description: "Advanced algorithms to suggest compatible matches.",
      bgColor: "bg-red-100",
    },
    {
      id: "event",
      name: "Event-Based Dating",
      icon: <Calendar className="h-5 w-5 text-orange-500" />,
      description: "Connect with others at virtual or physical events.",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <ScrollReveal
        animation="fadeIn"
        duration={800}
        delay={100}
        easing="smooth"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Tailor-Made Dating Models to Scale Your Business
        </h1>
      </ScrollReveal>

      <div className="flex lg:block w-full lg:w-auto justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-xl lg:max-w-full">
          {/* Left Section */}
          <div className="flex flex-col space-y-8">
            {/* Match Card */}
            <ScrollReveal
              animation="slideRight"
              duration={900}
              delay={200}
              easing="smooth"
              disableBelow="sm"
            >
              <div className="bg-[#FFF6F6] rounded-lg p-12 shadow-sm max-w-[34rem]">
                <Image width={448} height={518.45} alt="It's a Match" src="/dating/itsaMatch.svg"></Image>
              </div>
            </ScrollReveal>

            {/* Left Models List */}
            <div className="space-y-4">
              {leftModels.map((model, index) => (
                <ScrollReveal
                  key={model.id}
                  animation="slideRight"
                  duration={700}
                  delay={200}
                  easing="smooth"
                  index={index}
                  stagger={120}
                  disableBelow="sm"
                >
                  <div
                    className="w-full flex items-start space-x-4 p-4 rounded-lg transition-colors hover:bg-gray-50 group sm:max-h-[84px]"
                  >
                    <div className={`p-3 rounded-full ${model.bgColor}`}>
                      {model.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900 group-hover:text-pink-500">
                        {model.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 block h-auto sm:invisible sm:opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                        {model.description}
                      </p>
                    </div>
                  </div>
                  <hr className="mt-2" />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-8">
            {/* Right Models List */}
            <div className="space-y-4">
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
                    <div className="w-full flex items-start space-x-4 p-4 rounded-lg transition-colors hover:bg-gray-50 group max-h-[85px]">
                      <div className={`p-3 rounded-full ${model.bgColor}`}>
                        {model.icon}
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-gray-900 group-hover:text-pink-500">
                          {model.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1 block h-auto sm:invisible sm:opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                          {model.description}
                        </p>
                      </div>
                    </div>
                    <hr className="mt-2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* App Mockup */}
            <ScrollReveal
              animation="fadeSlideLeft"
              duration={1000}
              delay={500}
              easing="smooth"
              disableBelow="sm"
            >
              <div className="bg-[#FFF6F6] rounded-lg p-12 shadow-sm">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {/* Chat Header */}
                  <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200">
                        <Image
                          src="/dating/avatar.png"
                          width={40}
                          height={40}
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Luis Austin</p>
                        <p className="text-xs text-green-500 flex items-center">
                          Active Now
                          <span className="ml-1 w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse"></span>
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Phone
                        className="h-5 w-5 text-gray-700"
                        stroke={20}
                        fill="gray"
                      />
                      <Video
                        className="h-5 w-5 text-gray-700"
                        stroke={20}
                        fill="gray"
                      />
                    </div>
                  </div>
                  {/* Profile Content */}
                  <div className="p-4">
                    <p className="font-medium mb-2">Mable Bridges</p>
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full rounded-lg mb-4 flex relative items-center justify-center">
                      <Image
                        width={416}
                        height={225.88}
                        src="/dating/girlPic.png"
                        className="object-contain"
                        alt="girlImage"
                      />
                    </div>

                    {/* Like Button */}
                    <div className="flex justify-end mb-4">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 text-red-500 mr-1" fill="red" />
                        <span className="text-sm">2</span>
                      </div>
                    </div>

                    {/* Message Bubble */}
                    <div className="bg-red-100 text-red-700 p-3 rounded-lg rounded-bl-none inline-block max-w-xs">
                      <p className="text-sm">
                        Wow, nice photo. I am impressed with the Photo and you!!!
                      </p>
                    </div>

                    {/* Sender Avatar */}
                    <div className="flex justify-start mt-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200">
                        <Image
                          src="/dating/avatar.png"
                          width={32}
                          height={32}
                          alt="avatar"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatingModelsShowcase;