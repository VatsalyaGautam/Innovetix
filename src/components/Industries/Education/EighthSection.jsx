'use client'
import { React,  useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('Languages');

  const techData = {
    Languages: [
      { name: 'Java', icon: '/IndusEdu/Image6.png' },
      { name: 'JavaScript', icon: '/IndusEdu/Image7.png' },
      { name: 'XML', icon: '/IndusEdu/Image8.png' },
      { name: 'Kotlin', icon: '/IndusEdu/Image9.png' },
      { name: 'Objective C', icon: '/IndusEdu/Image10.png' },
      { name: 'Swift', icon: '/IndusEdu/Image11.png' }
    ],
    Database: [
      { name: 'MySQL', icon: '/icons/mysql.png' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.png' },
      { name: 'MongoDB', icon: '/icons/mongodb.png' },
      { name: 'MySQ', icon: '/icons/mysql.png' },
      { name: 'PostgreSQ', icon: '/icons/postgresql.png' },
      { name: 'MongoD', icon: '/icons/mongodb.png' }
    ],
    Tools: [
      { name: 'Git', icon: '/icons/git.png' },
      { name: 'Docker', icon: '/icons/docker.png' },
      { name: 'Jenkins', icon: '/icons/jenkins.png' },
      { name: 'Gi', icon: '/icons/git.png' },
      { name: 'Docke', icon: '/icons/docker.png' },
      { name: 'Jenkin', icon: '/icons/jenkins.png' }
    ],
    IDE: [
      { name: 'VS Code', icon: '/icons/vscode.png' },
      { name: 'IntelliJ', icon: '/icons/intellij.png' },
      { name: 'Android Studio', icon: '/icons/android-studio.png' },
      { name: 'VS Cod', icon: '/icons/vscode.png' },
      { name: 'Intelli', icon: '/icons/intellij.png' },
      { name: 'Android Studi', icon: '/icons/android-studio.png' }
    ]
  };

  const categories = Object.keys(techData);

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
     

      {/* Category Headings */}
      <ScrollReveal 
        animation="fadeSlideRight" 
        duration={800} 
        delay={200}
        className="flex justify-center space-x-8 sm:space-x-16 mb-8"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-lg font-semibold cursor-pointer transition-colors duration-300 ${
              activeCategory === category
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            {category}
          </button>
        ))}
      </ScrollReveal>

      {/* Tech Icons */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
        {techData[activeCategory].map((item, index) => (
          <ScrollReveal 
            key={item.name}
            animation="slightBottomRight" 
            duration={600}
            delay={index * 100}
            className="flex flex-col items-center"
          >
            <div className="bg-gray-100 w-full sm:w-[80%] flex flex-col items-center justify-center p-2 lg:p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={item.icon} 
                alt={item.name} 
                className="w-10 h-10 object-contain"
              />
              <p className="text-sm text-gray-700 mt-2 text-center">
                {item.name}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default TechStack;