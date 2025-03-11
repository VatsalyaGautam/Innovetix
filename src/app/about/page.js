import React from "react";
import { Button } from "@/components/ui/button";
import StatsAndCommitments from "@/components/About/StatsAndCommitments";
import BlueNWhite from "@/components/About/BlueNWhite";
import WhyChooseInnovetix from "@/components/About/WhyChooseInnovetix";
import ScrollReveal from "@/components/ScrollReveal";
// import { Card } from "@/components/ui/card";
function page() {
  const missionTitle = "Our Mission";
  const missionPoints = [
    "Our mission is to harness the power of cutting-edge technology and innovative strategies to provide sustainable solutions that drive growth, enhance productivity, and improve well-being.",
    "At Innovetix, we believe in blending traditional values with modern advancements to create a future that benefits everyone.",
  ];

  const missionImage = "/about/mission.svg";

  const visionTitle = "Our Vision";
  const visionPoints = [
    "To be a global leader in providing innovative and transformative solutions across industries, helping businesses grow, and empowering individuals to take charge of their health and success.",
    "We envision a world where technology seamlessly integrates with everyday life, creating opportunities, fostering meaningful relationships, and improving quality of life.",
  ];

  const visionImage = "/about/vision.svg";
  const valuesTitle = "Our Values";
  const valuesPoints = [
    "Innovation: Constantly evolving to incorporate the latest technology and advancements in our solutions.",
    "Excellence: Delivering the highest quality service and results for our clients.",
    "Integrity: Building trust through transparency, reliability, and ethical practices.",
    "Customer-Centric: Understanding our clients' needs and delivering solutions that are tailored to their specific goals and challenges.",
    "Collaboration: Working together with clients, partners, and stakeholders to achieve shared success.",
  ];

  const valuesImage = "/about/values.svg"; // Update this with the actual image path

  const whoWeAreTitle = "Who We Are";
  const whoWeArePoints = [
    "Innovetix is a global leader in providing advisory, technology, and implementation solutions. We partner with clients to drive transformation across industries, helping them navigate challenges, optimize operations, and accelerate growth.",
    "Our team of experts brings unmatched industry knowledge, combined with cutting-edge technology, to deliver actionable insights and impactful results.",
  ];
  const OurHistoryTitle="Our History";
  const OurHistoryPoints=["Founded with a vision to drive positive change in the business world, Innovetix has grown into a trusted partner for organizations worldwide. Over the years, we have built a legacy of success, helping clients across industries embrace innovation, transform operations, and achieve lasting value. Our rich history reflects our commitment to excellence and our passion for shaping a brighter future."]

  return (
    <>
      {/* sec 1 */}
      <div className="bg-gradient-to-b from-[#040404] to-[#201F37]">
      <div className="px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col pb-20 pt-32">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1 space-y-6">
            <ScrollReveal 
              animation="fadeIn"
              duration={1200}
              delay={200}
            >
              <h2
                className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide text-black"
                style={{
                  textShadow:
                    "-1px 0 #7e7e7e, 0 1px #7e7e7e, 1px 0 #7e7e7e, 0 -1px #7e7e7e",
                }}
              >
                ABOUT US
              </h2>
            </ScrollReveal>
            
            <ScrollReveal 
              animation="slightRight"
              duration={800}
              delay={400}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                We're Your Digital Technological Partners
              </h3>
            </ScrollReveal>
            
            <ScrollReveal 
              animation="fadeIn"
              duration={800}
              delay={600}
              easing="gentle"
            >
              <p className="text-gray-300 text-lg">
                At Innovetix Global Pvt. Ltd., we are a forward-thinking,
                results-driven company that strives to create impactful
                solutions for businesses and individuals.
              </p>
            </ScrollReveal>
            
            <ScrollReveal 
              animation="slightUp"
              duration={800}
              delay={800}
              easing="bouncy"
            >
              <div className="pt-4">
                <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 rounded-md text-lg font-medium transition-all">
                  Get Started
                </Button>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="flex-1 relative h-[30rem]">
            <div className="absolute justify-start -translate-y-1/2 top-1/3 w-72">
              <ScrollReveal 
                animation="fadeSlideLeft"
                duration={1000}
                delay={300}
                easing="spring"
              >
                <img src="/about/hero1.svg" alt="About Hero 1" />
              </ScrollReveal>
            </div>
            
            <div className="absolute justify-start left-40 bottom-0 w-72">
              <ScrollReveal 
                animation="fadeSlideUp"
                duration={1000}
                delay={600}
                easing="bouncy"
              >
                <img src="/about/hero2.svg" alt="About Hero 2" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* sec 1 end */}
      <div className="py-16">
        <StatsAndCommitments />
      </div>
      <BlueNWhite
        missionTitle={missionTitle}
        missionPoints={missionPoints}
        missionImage={missionImage}
        visionTitle={visionTitle}
        visionPoints={visionPoints}
        visionImage={visionImage}
      />
      <BlueNWhite
        missionTitle={valuesTitle}
        missionPoints={valuesPoints}
        missionImage={valuesImage}
        missionNumber={3}
        visionTitle={whoWeAreTitle}
        visionPoints={whoWeArePoints}
        visionImage={visionImage}
        visionNumber={4}
      />
      <BlueNWhite
       missionTitle={OurHistoryTitle}
       missionPoints={OurHistoryPoints}
       missionNumber={5}
       missionImage={valuesImage}
       visionHidden={1}
       visionTitle={whoWeAreTitle}
       visionPoints={whoWeArePoints}
       visionNumber={4}
       noPoints={1}
      />
      <WhyChooseInnovetix/>
    </>
  );
}

export default page;
