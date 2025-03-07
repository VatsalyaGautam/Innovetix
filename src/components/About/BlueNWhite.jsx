import React from "react";
import ScrollReveal from "@/components/ScrollReveal"; // Adjust the import path as needed

const BlueNWhite = ({ 
  missionTitle, 
  missionPoints, 
  visionTitle, 
  visionPoints, 
  missionImage, 
  visionImage,
  missionNumber=1,
  visionNumber=2, 
  visionHidden=0,
  noPoints=0
}) => {
  return (
    <div className="w-full">
      {/* Mission Section - Dark Background */}
      <div className="bg-slate-900 text-white py-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <table className="w-full">
            <tbody>
              <tr>
                {/* Mission Content */}
                <td className="align-top w-1/2">
                  <ScrollReveal animation="fadeSlideRight" duration={1200} easing="bouncy">
                    <div className="flex items-center gap-2 mb-4 relative">
                      <ScrollReveal animation="slightspinFromLeft" duration={1000} delay={300} easing="spring">
                        <div className="text-8xl opacity-20 font-bold text-gray-500 absolute -bottom-5 left-0">{missionNumber}</div>
                      </ScrollReveal>
                      <ScrollReveal animation="slideDown" duration={900} delay={600} easing="bouncy">
                        <h2 className="text-4xl font-bold relative">{missionTitle}</h2>
                      </ScrollReveal>
                    </div>
                  </ScrollReveal>
                  
                  <div className="mt-8 space-y-8">
                    {missionPoints.map((point, index) => (
                      <ScrollReveal 
                        key={index} 
                        animation="slightLeft" 
                        duration={800} 
                        delay={800 + (index * 200)} 
                        easing="gentle"
                      >
                        <div className="flex items-start gap-4">
                          <ScrollReveal 
                            animation="spinIn" 
                            duration={1000} 
                            delay={1000 + (index * 200)} 
                            easing="spring"
                          >
                            <div className={`bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold shrink-0 border-2 border-gray-600 ${noPoints?`hidden`:`block`}`}>
                              {index + 1}
                            </div>
                          </ScrollReveal>
                          <ScrollReveal 
                            animation="fadeIn" 
                            duration={800} 
                            delay={1100 + (index * 200)}
                          >
                            <p className="text-lg">{point}</p>
                          </ScrollReveal>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </td>
                
                {/* Mission Image - Centered */}
                <td className="w-1/2 text-center">
                  <ScrollReveal 
                    animation="fadeSlideLeft" 
                    duration={1300} 
                    delay={400} 
                    easing="spring"
                  >
                    <div className="w-[22rem] mx-auto">
                      <img src={missionImage} alt="Mission" className="rounded-md" />
                    </div>
                  </ScrollReveal>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Vision Section */}
      <div className={`bg-white py-16 px-8 md:px-16 ${visionHidden ? 'hidden' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-evenly">
          <ScrollReveal 
            animation="fadeSlideRight" 
            duration={1200} 
            delay={200} 
            easing="bouncy" 
            className="h-full flex justify-center items-center"
          >
            <div className="w-[22rem]">
              <img src={visionImage} alt="Vision" className="rounded-md" />
            </div>
          </ScrollReveal>
          
          <div className="w-full md:w-1/2">
            <ScrollReveal animation="fadeSlideLeft" duration={1100} delay={400} easing="spring">
              <div className="flex items-center gap-2 mb-4 relative">
                <ScrollReveal animation="spinFromRight" duration={1500} delay={600} easing="bouncy">
                  <div className="text-8xl opacity-25 font-bold text-black absolute -bottom-5 left-0">{visionNumber}</div>
                </ScrollReveal>
                <ScrollReveal animation="slideUp" duration={900} delay={800} easing="gentle">
                  <h2 className="text-4xl font-bold text-slate-900 relative">{visionTitle}</h2>
                </ScrollReveal>
              </div>
            </ScrollReveal>
            
            <div className="mt-8 space-y-8">
              {visionPoints.map((point, index) => (
                <ScrollReveal 
                  key={index} 
                  animation="slightRight" 
                  duration={800} 
                  delay={1000 + (index * 200)} 
                  easing="gentle"
                >
                  <div className="flex items-start gap-4">
                    <ScrollReveal 
                      animation="spinIn" 
                      duration={1000} 
                      delay={1200 + (index * 200)} 
                      easing="spring"
                    >
                      <div className={`bg-slate-800 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold shrink-0 border-2 border-gray-500 ${noPoints?`hidden`:`block`}`}>
                        {index + 1}
                      </div>
                    </ScrollReveal>
                    <ScrollReveal 
                      animation="fadeIn" 
                      duration={800} 
                      delay={1300 + (index * 200)}
                    >
                      <p className="text-lg text-slate-900">{point}</p>
                    </ScrollReveal>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueNWhite;