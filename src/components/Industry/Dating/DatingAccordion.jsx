import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import ScrollReveal from '@/components/ScrollReveal';
const FAQAccordion = () => {
  const faqItems = [
    {
      question: "What services does your dating app development include?",
      answer: "Our comprehensive dating app development services include UI/UX design, front-end and back-end development, database architecture, API integration, matching algorithm development, messaging systems, profile management, geolocation features, push notifications, and administration panels with analytics."
    },
    {
      question: "Can you customize the dating app to our unique branding and features?",
      answer: "Absolutely! We offer fully customized solutions tailored to your brand identity and unique feature requirements. From personalized matching algorithms to distinctive UI elements, we can implement your vision while maintaining industry best practices."
    },
    {
      question: "What platforms do you develop dating apps for (iOS, Android, or both)?",
      answer: "We develop dating apps for both iOS and Android platforms using either native development approaches or cross-platform frameworks like React Native or Flutter to ensure optimal performance across all devices while maintaining a consistent user experience."
    },
    {
      question: "How long does it typically take to develop a dating app?",
      answer: "Development timeline varies based on complexity, but typically ranges from 3-6 months for a fully-featured dating app. This includes discovery, design, development, testing, and deployment phases. We can provide a detailed timeline after understanding your specific requirements."
    },
    {
      question: "What security measures do you implement to protect user data and privacy?",
      answer: "We implement robust security measures including end-to-end encryption for messages, secure user authentication (including biometric and two-factor options), data encryption at rest and in transit, GDPR/CCPA compliance frameworks, and regular security audits to ensure your users' data remains protected."
    }
  ];

  return (
    <div className="py-12 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal easing="smooth" animation="slightDown" duration={800} delay={100} className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Questions, Our Answers</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get answers to commonly asked questions about our dating app development services.
        </p>
      </ScrollReveal>
      <Card className="shadow-lg border-0 overflow-hidden">
      <CardContent className="p-0">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <ScrollReveal
              key={index}
              animation="slideRight"
              duration={800}
              delay={100}
              easing="smooth" 
              index={index}
              stagger={200}
            >
              <AccordionItem value={`item-${index}`} className="border-b border-gray-200 last:border-0">
                <AccordionTrigger className="py-6 px-6 hover:bg-gray-50 w-full group transition-all">
                  <span className="text-left font-medium text-lg">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>
      </CardContent>
    </Card>
      <div className="mt-8 text-center">
        <button className="bg-pink-400 hover:bg-[#F02963] text-white font-medium py-3 px-8 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg">
          Contact Us For More Information
        </button>
      </div>
    </div>
  );
};

export default FAQAccordion;