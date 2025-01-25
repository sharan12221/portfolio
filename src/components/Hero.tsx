import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Globe, Code, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 animate-gradient overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle-1"></div>
        <div className="particle-2"></div>
        <div className="particle-3"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <span className="text-sm md:text-base text-emerald-100 font-medium tracking-wider animate-slide-in-left">
                Welcome to my portfolio
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-in-left [animation-delay:200ms]">
                Sharanappa <span className="text-emerald-200">Wakade</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/90 mb-8 animate-slide-in-left [animation-delay:400ms] flex items-center gap-3">
                <Code className="w-8 h-8 text-emerald-200" />
                Blockchain & DevOps Engineer
              </h2>
            </div>
            
            <p className="text-xl text-white/80 mb-12 leading-relaxed animate-slide-in-left [animation-delay:600ms] max-w-xl">
              Hello! I'm Sharanappa, a Blockchain Developer with 2+ years of experience building secure and scalable decentralized solutions.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-12 animate-slide-in-left [animation-delay:800ms]">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative flex items-center gap-2 px-6 py-3 bg-black rounded-full text-white hover:bg-gray-900 transition duration-300">
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="hidden md:block group-hover:translate-x-1 transition-transform duration-300">
                    GitHub
                  </span>
                </div>
              </a>
              
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative flex items-center gap-2 px-6 py-3 bg-black rounded-full text-white hover:bg-gray-900 transition duration-300">
                  <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="hidden md:block group-hover:translate-x-1 transition-transform duration-300">
                    LinkedIn
                  </span>
                </div>
              </a>
              
              <a
                href="mailto:your.email@example.com"
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative flex items-center gap-2 px-6 py-3 bg-black rounded-full text-white hover:bg-gray-900 transition duration-300">
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="hidden md:block group-hover:translate-x-1 transition-transform duration-300">
                    Email Me
                  </span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-white/50">
              {/* Replace this URL with your actual profile picture URL */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Sharanappa Wakade"
                className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
              />
            </div>
          </div>
        </div>
        
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce-slow group"
        >
          <ChevronDown size={32} className="group-hover:translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}