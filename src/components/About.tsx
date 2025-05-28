import React from 'react';
import { Code2, Terminal, Globe, Server } from 'lucide-react';
import peakpx from './peakpx.jpg';

export function About() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Blockchain Development",
      description: "Expert in Hyperledger Fabric, Ethereum, and smart contracts"
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "DevOps",
      description: "Skilled in Docker, Kubernetes, and cloud infrastructure (aks/eks)"
    },
    // {
    //   icon: <Globe className="w-6 h-6" />,
    //   title: "Full Stack",
    //   description: "End-to-end development with modern technologies"
    // },
    {
      icon: <Server className="w-6 h-6" />,
      title: "System Architecture",
      description: "Designing scalable and secure blockchain solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yIDItMiAyLTRzLTItMi0yLTQgMi0yIDItNCAyLTIgMi00LTItMi0yLTQgMi0yIDItNGgtMmMwIDItMiAyLTIgNHMtMiAyLTIgNC0yIDItMiA0IDIgMiAyIDQtMiAyLTIgNCAyIDIgMiA0aC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
            About Me
          </span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-lg overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                 <img
                  src={peakpx}
                  alt="Professional headshot"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <div className="text-emerald-400 mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed hover:text-white transition-colors">
                  I'm a dedicated Blockchain Developer with experience in Ethereum, Hyperledger Fabric, and Hyperledger Besu. I'm passionate about leveraging decentralized technologies to solve real-world problems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed hover:text-white transition-colors">
                  My background in DevOps enables me to build robust, secure, and efficient infrastructure for blockchain applications. I specialize in creating scalable solutions that bridge the gap between traditional systems and blockchain technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
