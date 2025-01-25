import React, { useState } from 'react';
import { ExternalLink, Github, Server, Database, Shield } from 'lucide-react';

interface Project {
  title: string;
  company: string;
  role: string;
  objective: string;
  contributions: string[];
  technologies: string[];
  outcome: string;
  icons: {
    [key: string]: JSX.Element;
  };
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<number>(0);

  const projects: Project[] = [
    {
      title: "Healthcare Data Management",
      company: "Chikitsa.io",
      role: "Blockchain Developer",
      objective: "Create a secure, decentralized platform for patient record management and data exchange.",
      contributions: [
        "Implemented and configured a Hyperledger Fabric network to ensure confidentiality and integrity of sensitive medical records",
        "Deployed smart contracts (chaincode) to automate record access and permission management",
        "Integrated Hyperledger Explorer for real-time blockchain monitoring and auditing",
        "Leveraged Kubernetes for scalable deployment, enabling high availability and fault-tolerance"
      ],
      technologies: ["Hyperledger Fabric", "Node.js", "Docker", "Kubernetes", "IPFS", "aws-s3","CouchDB"],
      outcome: "Streamlined healthcare data sharing with robust security and audit capabilities, reducing manual record-keeping errors and enhancing patient privacy.",
      icons: {
        main: <Shield className="w-6 h-6" />,
      }
    },
    {
      title: "One DEX Arbitrage Bot",
      company: "Mobiloitte",
      role: "Blockchain Developer",
      objective: "Develop an arbitrage bot for decentralized exchange (DEX) trading on the Ethereum network.",
      contributions: [
        "Engineered smart contracts in Solidity to automate token trading strategies across multiple DEX platforms",
        "Created a Node.js-based backend for real-time price monitoring and executing profitable trades",
        "Integrated secure wallet services to handle on-chain transactions and private key management",
        "Employed Docker for containerization, ensuring smooth deployment and consistent environment setups"
      ],
      technologies: ["Ethereum", "Solidity", "Node.js", "Docker", "ethers.js"],
      outcome: "Delivered a DEX arbitrage bot capable of quickly detecting and acting on price discrepancies, helping users maximize returns in a dynamic DeFi ecosystem.",
      icons: {
        main: <Server className="w-6 h-6" />,
      }
    },
    {
      title: "Cloud-Based Secure File Management",
      company: "Freelance",
      role: "Blockchain Developer",
      objective: "Provide a decentralized, permissioned file storage system to guarantee secure document handling and controlled user access.",
      contributions: [
        "Architected a Hyperledger Fabric network with dedicated channels for confidential file sharing",
        "Developed chaincode (smart contracts) to handle file versioning, access control, and audit trails",
        "Integrated cloud storage services for scalable, cost-efficient file storage",
        "Deployed on Kubernetes for high availability, employing Docker containers for modular services"
      ],
      technologies: ["Hyperledger Fabric", "Node.js", "Docker", "Kubernetes", "Cloud Storage", "ZFS", "HSM"],
      outcome: "Enabled clients to securely upload, manage, and track file usage with cryptographically enforced permissions, ensuring data integrity and regulatory compliance.",
      icons: {
        main: <Database className="w-6 h-6" />,
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Project Navigation */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  activeProject === index
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg shadow-emerald-500/20'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                {project.icons.main}
                <span>{project.title}</span>
              </button>
            ))}
          </div>

          {/* Active Project Details */}
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-emerald-500 font-semibold">{projects[activeProject].company}</p>
                  <h3 className="text-3xl font-bold text-white">{projects[activeProject].title}</h3>
                  <p className="text-gray-400">{projects[activeProject].role}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Objective</h4>
                  <p className="text-gray-300">{projects[activeProject].objective}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Key Contributions</h4>
                  <ul className="space-y-2">
                    {projects[activeProject].contributions.map((contribution, index) => (
                      <li key={index} className="text-gray-300 flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-700/50 rounded-full text-gray-300 text-sm hover:bg-gray-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Outcome</h4>
                  <p className="text-gray-300">{projects[activeProject].outcome}</p>
                </div>

                <div className="pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-emerald-500/20"
                  >
                    <span>Interested in a similar solution?</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}