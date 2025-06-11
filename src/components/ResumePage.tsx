import React from 'react';
import { Link } from 'react-router-dom';

const ResumePage: React.FC = () => {
  return (
    <div className = "min-h-screen bg-fernGreen text-stone-700 font-Zain p-3">
      <div className="flex flex-col bg-magnolia items-center max-w-4xl w-full mx-auto bg-opacity-100 p-8 rounded-lg shadow-lg">
        <div className = "font-bold text-3xl font-Zain mt-6 p-4 opacity-0 animate-fade-in">
          <Link to="/" 
            className="hover:text-fernGreen"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
            Christian Wylie
          </Link>
        </div>
        {/* Fading in line */}
        <div className="h-px w-80 bg-stone-700 mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        ></div>
        <div 
          className="flex justify-center gap-8 text-2xl font-bold my-4 animate-fade-in opacity-0"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <a
            href="https://www.linkedin.com/in/christian-wylie-593249265/"
            target="_blank"
            className="hover:text-fernGreen"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/cswylie"
            target="_blank"
            className="hover:text-fernGreen"
          >
            GitHub
          </a>
        </div>
        {/* Fading in line */}
        <div className="h-px w-80 bg-stone-700 mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        ></div>
        <div className="text-lg p-4 animate-fade-in opacity-0"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          For all inquiries: <span className="hover:underline">christianswylie@gmail.com</span>
        </div>
        {/* Actual Substance of Resume------------------------------------------------------ */}
        <div className="text-2xl font-bold self-start mt-4 animate-fade-in opacity-0"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Interests and Hobbies
        </div>
        <div className="text-lg self-start animate-fade-in opacity-0"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          I spend a lot of my free time writing, playing, and practicing music, all of which involve either guitar or trumpet. 
          I've been playing guitar for about 2 years, and I've been playing trumpet, mostly jazz, for about 10 years. I also love the outdoors, and mountain bike, hike, and rock climb as often as I can.
          I dabble a little bit in amateur film photography, and I also have a bit of experience in Blender, which I'll use every so often to make artwork.
          I love to bake, and I'll find myself trying new recipes about once a week.
        </div>
        <div className="text-2xl font-bold self-start mt-4 animate-fade-in opacity-0"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          Education
        </div>
        <div className="text-lg self-start animate-fade-in opacity-0"
          style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <ul className="list-disc pl-6">
            <li><span className="font-bold">B.S.</span> Computer Science</li>
            <ul className="list-disc pl-6">
              <li>
                University of California, Santa Cruz, <span className="font-bold">Mar 2025 [3.65 GPA]</span>
              </li>
            </ul>
          </ul>
        </div>
        <div className="text-2xl font-bold self-start mt-4 animate-fade-in opacity-0"
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          Engineering Principles
        </div>
        <div className="text-lg self-start animate-fade-in opacity-0"
          style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
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
        <div className="text-2xl font-bold self-start mt-4 animate-fade-in opacity-0"
          style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          Skills and Frameworks
        </div>
        <div className="text-lg self-start animate-fade-in opacity-0"
          style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}>
          <ul className="grid grid-cols-4 gap-x-5 gap-y-2 pl-6 list-disc">
            <li>Python</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>C</li>
            <li>C++</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Firebase</li>
            <li>Git</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="text-2xl font-bold self-start mt-4 animate-fade-in opacity-0"
          style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
          Work Experience
        </div>
        <div className="text-lg self-start animate-fade-in opacity-0"
          style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
          <ul className="list-disc pl-6 mt-2">
            <li> 
              <span className="font-bold">ResNet Technician</span> - UCSC Information Technology Services, Santa Cruz, CA
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-bold">September 2024 - March 2025</span>
                </li>
                <li>
                  Provided technical and networking support for on campus residential students, resolving network or OS issues, and configured student-owned device.
                </li>
              </ul>
            </li>
            <li> 
              <span className="font-bold">Barista</span> - Santa Cruz Coffee Roasting, Santa Cruz, CA
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-bold">June 2024 - September 2024</span>
                </li>
                <li>
                  Made and served drinks to customers.
                </li>
              </ul>
            </li>
            <li> 
              <span className="font-bold">Barista and Sandwich Maker</span> - The Picnic Basket, Santa Cruz, CA
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-bold">July 2023 - November 2023</span>
                </li>
                <li>
                  Made and served drinks and sandwiches to customers.
                </li>
              </ul>
            </li>
            <li> 
              <span className="font-bold">Grocery Associate</span> - Amazon Fresh, Woodland Hills, CA
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-bold">July 2022 - September 2022</span>
                </li>
                <li>
                  Stocked and inventoried merchandise, reviewing sell-by-dates and taking appropriate actions to discard expired products.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResumePage;