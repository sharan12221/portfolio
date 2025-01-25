import React from 'react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Blockchain Skills',
      skills: [
        'Ethereum (Solidity, ethers.js)',
        'Hyperledger Fabric',
        'Hyperledger Besu',
        'Smart Contract Development',
        'Hardhat'
      ],
    },
    {
      title: 'DevOps Skills',
      skills: [
        'Git',
        'Docker',
        'Kubernetes',
        'Linux',
        'Bash Scripting',
        'Azure Kubernetes Service (AKS)',
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        'JavaScript (Node.js)',
        'Solidity',
      ],
    },
    {
      title: 'Other Skills',
      skills: [
        'IPFS',
        'Blockchain Explorers',
        'Cloud Platforms (AWS, Azure)',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 rounded-full text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}