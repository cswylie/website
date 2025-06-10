import React from 'react';

const ResumePage: React.FC = () => {
  return (
    <div className = "min-h-screen bg-sageGreen text-lapisLazuli font-Zain p-3">
      <div className="flex flex-col bg-magnolia items-center max-w-4xl w-full mx-auto bg-opacity-80 p-8 rounded-lg shadow-lg">
        <div className = "font-bold text-3xl font-Zain mt-6 p-4">
          Christian Wylie
        </div>
        {/* Fading in line */}
        <div className="h-px w-80 bg-lapisLazuli mx-auto opacity-0 animate-fade-in"></div>
        <div className="text-lg p-4">
          For all inquiries: christianswylie@gmail.com
        </div>
        <div className="text-2xl font-bold self-start mt-4">
          Interests and Hobbies
        </div>
        <div className="text-lg self-start">
          I spend a lot of my free time writing, playing, and practicing music, all of which involve either guitar or trumpet. 
          I've been playing guitar for about 2 years, and I've been playing trumpet, mostly jazz, for about 10 years. I also love the outdoors, and mountain bike, hike, and rock climb as often as I can.
          I dabble a little bit in amateur film photography, and I also have a bit of experience in Blender, which I'll use every so often to make artwork.
          I love to bake, and I'll find myself trying new recipes about once a week.
        </div>
        <div className="text-2xl font-bold self-start mt-4">
          Education
        </div>
        <div className="text-lg self-start">
          <ul className="list-disc pl-6">
            <li><span className="font-bold">B.S.</span> Computer Science</li>
            <ul className="list-disc pl-6">
              <li>
                University of California, Santa Cruz, <span className="font-bold">Mar 2025 [3.65 GPA]</span>
              </li>
            </ul>
          </ul>
        </div>
        <div className="text-2xl font-bold self-start mt-4">
          Engineering Principles
        </div>
        <div className="text-lg self-start">
          <ul className="list-disc pl-6 mt-2">
            <li> 
              <span className="font-bold">Well-Tested Framework, </span>
              always write tests before writing code, and continue to write tests for code as new features are implemnted.
            </li>
            <li> 
              <span className="font-bold">Create readable code, </span>
              the code should be easily comprehensible to anyone who reads it, and it should be especially easy to maintain.
            </li>
            <li> 
              <span className="font-bold">Factorize code whenever possible, </span>
              there should be no duplicate or unnecessary code, and code should be reusable. 
            </li>
          </ul>
        </div>
        <div className="text-2xl font-bold self-start mt-4">
          Skills and Frameworks
        </div>
      </div>
    </div>
  )
}

export default ResumePage;