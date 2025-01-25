import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, ExternalLink } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Sharanappa Wakade. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;