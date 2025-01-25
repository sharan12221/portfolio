import React from 'react';
import { ExternalLink } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: 'Chikitsa.io',
      role: 'Blockchain Developer',
      period: '2024 - Present',
      description: [
        'Developed a healthcare data management system on Hyperledger Fabric, ensuring the secure transfer and storage of patient records.',
        'Implemented Hyperledger Explorer for real-time blockchain monitoring.',
        'Deployed infrastructure using Kubernetes and integrated Node.js services for streamlined data flow.',
      ],
    },
    {
      company: 'Mobiloitte',
      role: 'Blockchain Developer',
      period: '2023 - 2024',
      description: [
        'Built a DEX arbitrage bot focusing on Ethereum-based smart contracts and automated trading strategies.',
        'Developed Node.js backend services to track token prices across multiple platforms.',
        'Ensured secure wallet integration for transaction signing and introduced Docker-based containerization.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                  <p className="text-lg text-gray-600">{exp.role}</p>
                </div>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}