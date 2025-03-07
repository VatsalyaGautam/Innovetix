import React from "react";

const BlueNWhite = ({ missionTitle, missionPoints, visionTitle, visionPoints, missionImage, visionImage,missionNumber=1,visionNumber=2 , visionHidden=0 ,noPoints=0}) => {
  return (
    <div className="w-full">
    <div className="bg-slate-900 text-white py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <table className="w-full">
          <tbody>
            <tr>
              {/* Mission Content */}
              <td className="align-top w-1/2">
                <div className="flex items-center gap-2 mb-4 relative">
                  <div className="text-8xl opacity-20 font-bold text-gray-500 absolute bottom-0 left-0">{missionNumber}</div>
                  <h2 className="text-4xl font-bold relative">{missionTitle}</h2>
                </div>
  
                <div className="mt-8 space-y-8">
                  {missionPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold shrink-0 border-2 border-gray-600 ${noPoints?`hidden`:`block`}`}>
                        {index + 1}
                      </div>
                      <p className="text-lg">{point}</p>
                    </div>
                  ))}
                </div>
              </td>
  
              {/* Mission Image - Centered */}
              <td className="w-1/2 text-center">
                <div className="w-[22rem] mx-auto">
                  <img src={missionImage} alt="Mission" className="rounded-md" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>


      {/* Vision Section */}
      <div className={`bg-white py-16 px-8 md:px-16 ${visionHidden ? 'hidden' : 'block'}`} >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-evenly">
            <div className="h-full flex justify-center items-center ">
        <div className="w-[22rem]">
            <img src={visionImage} alt="Vision" className="rounded-md" />
          </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 mb-4 relative">
              <div className="text-8xl opacity-25 font-bold text-black absolute -bottom-1 left-0">{visionNumber}</div>
              <h2 className="text-4xl font-bold text-slate-900 relative">{visionTitle}</h2>
            </div>

            <div className="mt-8 space-y-8">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`bg-slate-800 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold shrink-0 border-2 border-gray-500 ${noPoints?`hidden`:`block`}`}>
                    {index + 1}
                  </div>
                  <p className="text-lg text-slate-900">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueNWhite;