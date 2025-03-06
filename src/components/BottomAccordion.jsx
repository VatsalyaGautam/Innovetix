import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ScrollReveal from '@/components/ScrollReveal';

const BottomAccordion = ({ faqItems = [],buttonColor }) => {
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
            {faqItems.length > 0 ? (
              faqItems.map((item, index) => (
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
              ))
            ) : (
              <p className="text-center text-gray-500 py-6">No FAQs available.</p>
            )}
          </Accordion>
        </CardContent>
      </Card>
      <div className="mt-8 text-center">
        <button className={`${buttonColor?buttonColor:'bg-pink-400'}  text-white font-medium py-3 px-8 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg`}>
          Contact Us For More Information
        </button>
      </div>
    </div>
  );
};

export default BottomAccordion;
