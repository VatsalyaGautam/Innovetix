"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal'; // Adjust the import path as needed

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('mobile');
  const [expandedFeatures, setExpandedFeatures] = useState({});

  const toggleFeature = (featureId) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [featureId]: !prev[featureId]
    }));
  };

  const tabs = [
    { id: 'mobile', label: 'Mobile App Features', icon: (
      <svg viewBox="0 0 24 24" className=" w-6 h-6  sm:mr-3 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M17,2 L7,2 C5.9,2 5,2.9 5,4 L5,20 C5,21.1 5.9,22 7,22 L17,22 C18.1,22 19,21.1 19,20 L19,4 C19,2.9 18.1,2 17,2 Z M7,4 L17,4 L17,5 L7,5 L7,4 Z M7,7 L17,7 L17,16 L7,16 L7,7 Z M7,18 L9,18 L9,20 L7,20 L7,18 Z M11,18 L13,18 L13,20 L11,20 L11,18 Z M15,18 L17,18 L17,20 L15,20 L15,18 Z" />
        <rect x="9" y="9" width="2" height="2" />
        <rect x="13" y="9" width="2" height="2" />
        <rect x="9" y="13" width="2" height="2" />
        <rect x="13" y="13" width="2" height="2" />
      </svg>
    )},
    { id: 'website', label: 'Website Features', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:mr-3 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M20,3H4C2.89,3,2,3.89,2,5v12c0,1.1,0.89,2,2,2h16c1.1,0,2-0.9,2-2V5C22,3.89,21.1,3,20,3z M20,17H4V5h16V17z" />
        <rect x="6" y="7" width="12" height="2" />
        <rect x="6" y="11" width="12" height="2" />
      </svg>
    )},
    { id: 'admin', label: 'Admin Panel Features', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:mr-3 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
      </svg>
    )}
  ];

  const featuresContent = {
    mobile: [
      {
        id: 'scalability',
        title: 'Scalability & Customization',
        description: 'A unique source code let your e-commerce marketplace grow in tandem with the growth rate of your brand',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" fill="#ff4081"/>
          </svg>
        ),
        iconBg: 'bg-pink-100'
      },
      {
        id: 'social',
        title: 'Social Media Integration',
        description: 'Let your customers login & register with their social media profiles, creating a buzz for your brand',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z" fill="#ff4081"/>
            <path d="M6.5,17.5l7.5-3.5l3.5-7.5l-7.5,3.5L6.5,17.5z M12,10.9c-0.61,0-1.1,0.49-1.1,1.1s0.49,1.1,1.1,1.1s1.1-0.49,1.1-1.1 S12.61,10.9,12,10.9z" fill="#ff4081"/>
          </svg>
        ),
        iconBg: 'bg-pink-100'
      },
      {
        id: 'push',
        title: 'Push Notifications',
        description: 'Drives more sales by constantly reminding customers about new products, discounts, sales & offers',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,22c1.1,0,2-0.9,2-2h-4C10,21.1,10.9,22,12,22z" fill="#ff4081"/>
            <path d="M18,16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-0.83-0.67-1.5-1.5-1.5S10.5,3.17,10.5,4v0.68C7.63,5.36,6,7.92,6,11v5l-2,2v1 h16v-1L18,16z M16,17H8v-6c0-2.48,1.51-4.5,4-4.5s4,2.02,4,4.5V17z" fill="#ff4081"/>
          </svg>
        ),
        iconBg: 'bg-pink-100'
      },
      {
        id: 'filters',
        title: 'Filters & Search Options',
        description: 'Make the search results as close to their desire as possible with advanced filters & search functionality',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z" fill="#ff4081"/>
          </svg>
        ),
        iconBg: 'bg-pink-100'
      }
    ],
    website: [
      {
        id: 'responsive',
        title: 'Responsive Design',
        description: 'Your website automatically adjusts to look perfect on all devices and screen sizes',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" fill="#2196f3"/>
            <path d="M7,7h10v2H7V7z M7,11h10v2H7V11z M7,15h7v2H7V15z" fill="#2196f3"/>
          </svg>
        ),
        iconBg: 'bg-blue-100'
      },
      {
        id: 'seo',
        title: 'SEO Optimization',
        description: 'Rank higher in search results with our built-in SEO tools and best practices',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5,14h-0.79l-0.28-0.27C15.41,12.59,16,11.11,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5S5.91,16,9.5,16 c1.61,0,3.09-0.59,4.23-1.57L14,14.71v0.79l5,4.99L20.49,19L15.5,14z M9.5,14C7.01,14,5,11.99,5,9.5S7.01,5,9.5,5S14,7.01,14,9.5 S11.99,14,9.5,14z" fill="#2196f3"/>
          </svg>
        ),
        iconBg: 'bg-blue-100'
      },
      {
        id: 'analytics',
        title: 'Advanced Analytics',
        description: 'Track visitor behavior, conversion rates, and sales with detailed analytics',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9,17H7v-7h2V17z M13,17h-2V7h2V17 z M17,17h-2v-4h2V17z" fill="#2196f3"/>
          </svg>
        ),
        iconBg: 'bg-blue-100'
      },
      {
        id: 'payment',
        title: 'Multiple Payment Options',
        description: 'Accept payments via credit cards, PayPal, and other popular payment methods',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V6C22,4.89,21.11,4,20,4z M20,18H4v-6h16V18z M20,8H4V6h16V8z" fill="#2196f3"/>
            <path d="M5,15h2v1H5V15z M8,15h5v1H8V15z" fill="#2196f3"/>
          </svg>
        ),
        iconBg: 'bg-blue-100'
      }
    ],
    admin: [
      {
        id: 'inventory',
        title: 'Inventory Management',
        description: 'Easily track stock levels, receive notifications for low inventory, and manage orders',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9,17H7v-7h2V17z M13,17h-2V7h2V17 z M17,17h-2v-4h2V17z" fill="#673ab7"/>
          </svg>
        ),
        iconBg: 'bg-purple-100'
      },
      {
        id: 'users',
        title: 'User Management',
        description: 'Control access levels, manage customer accounts, and handle vendor registrations',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M16,11c1.66,0,2.99-1.34,2.99-3S17.66,5,16,5c-1.66,0-3,1.34-3,3S14.34,11,16,11z" fill="#673ab7"/>
            <path d="M8,11c1.66,0,2.99-1.34,2.99-3S9.66,5,8,5C6.34,5,5,6.34,5,8S6.34,11,8,11z" fill="#673ab7"/>
            <path d="M8,13c-2.33,0-7,1.17-7,3.5V19h14v-2.5C15,14.17,10.33,13,8,13z" fill="#673ab7"/>
            <path d="M16,13c-0.29,0-0.62,0.02-0.97,0.05c1.16,0.84,1.97,1.97,1.97,3.45V19h6v-2.5C23,14.17,18.33,13,16,13z" fill="#673ab7"/>
          </svg>
        ),
        iconBg: 'bg-purple-100'
      },
      {
        id: 'reports',
        title: 'Sales Reports',
        description: 'Generate detailed reports on sales, revenue, customer behavior, and inventory performance',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" fill="#673ab7"/>
            <path d="M9,7h6v2H9V7z M16,7h2v2h-2V7z M9,10h6v2H9V10z M16,10h2v2h-2V10z" fill="#673ab7"/>
          </svg>
        ),
        iconBg: 'bg-purple-100'
      },
      {
        id: 'settings',
        title: 'System Settings',
        description: 'Configure your marketplace settings, tax rates, shipping options, and more',
        icon: (
          <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" fill="#673ab7"/>
          </svg>
        ),
        iconBg: 'bg-purple-100'
      }
    ]
  };

  return (
    <div className="flex justify-center w-full px-1 sm:p-10">
      <div className="container py-2 sm:py-16 max-w-7xl">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div  className="flex flex-row border-b">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`flex items-center px-2 sm:px-8 py-2 sm:py-6 transition-all duration-200 hover:bg-gray-50 text-base sm:text-lg ${
                  activeTab === tab.id
                    ? 'border-b-4 border-pink-500 text-pink-500 font-medium'
                    : 'text-gray-700'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span className='leading-tight'>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between">
              {/* Features Grid - Mobile view (collapsible) and Desktop view (expanded) */}
              <div className="md:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-10">
                {featuresContent[activeTab].map((feature, index) => (
                  <ScrollReveal 
                    key={feature.id} 
                    animation="slightUp" 
                    duration={600} 
                    delay={100} 
                    easing="gentle"
                    index={index}
                    stagger={150}
                    className="flex flex-col"
                  >
                    {/* Mobile view - Collapsible */}
                    <div 
                      className="sm:hidden w-full flex items-center justify-between cursor-pointer"
                      onClick={() => toggleFeature(feature.id)}
                    >
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full ${feature.iconBg} flex items-center justify-center mr-4`}>
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                      </div>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${expandedFeatures[feature.id] ? 'transform rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    {/* Mobile view - Collapsible Content */}
                    {expandedFeatures[feature.id] && (
                      <div className="sm:hidden mt-4 pl-16 pr-4 pb-6 animate-fadeIn">
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    )}
                    
                    {/* Desktop view - Always visible */}
                    <div className="hidden sm:block">
                      <div className={`w-16 h-16 rounded-full ${feature.iconBg} flex items-center justify-center mb-5 hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-600 text-base">{feature.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Images section */}
              <ScrollReveal 
                animation="slightLeft" 
                duration={800} 
                easing="spring"
                className="md:w-[30%] mt-12 md:mt-0 flex justify-center"
              >
                {activeTab === 'mobile' && (
                  <div className="relative transition-all duration-500 hover:scale-105">
                    <Image 
                      src="/IndusEcommerce/Image13.png" 
                      alt="Mobile App Interface" 
                      width={280}
                      height={560}
                      className="rounded-xl shadow-xl"
                    />
                  </div>
                )}
                
                {activeTab === 'website' && (
                  <div className="relative transition-all duration-500 hover:scale-105">
                    <Image 
                      src="/IndusEcommerce/Image15.png"  
                      alt="Website Interface" 
                      width={480}
                      height={360}
                      className="rounded-xl shadow-xl"
                    />
                  </div>
                )}
                
                {activeTab === 'admin' && (
                  <div className="relative transition-all duration-500 hover:scale-105">
                    <Image 
                      src="/IndusEcommerce/Image16.png" 
                      alt="Admin Panel Interface" 
                      width={480}
                      height={360}
                      className="rounded-xl shadow-xl"
                    />
                  </div>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;