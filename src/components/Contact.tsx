import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-600 mb-12">
            If you'd like to collaborate on a blockchain or DevOps project, or simply want to learn more about my work, feel free to reach out! Let's build something amazing together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:sharanwakade@gmail.com"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail size={32} className="text-gray-700 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">sharanwakade@gmail.com</p>
            </a>
            
            <a
              href="https://github.com/sharan12221"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Github size={32} className="text-gray-700 mb-4" />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-600">@sharan12221</p>
            </a>
            
            <a
              href="https://linkedin.com/in/sharanappa-wakade-76238a256"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Linkedin size={32} className="text-gray-700 mb-4" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600">Connect with me</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}