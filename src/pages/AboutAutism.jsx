import React from 'react';
import { Link } from 'react-router-dom';

const autismData = [
  { year: '1970', tech: '', rate: '1 in 10,000 children' },
  { year: '1971', tech: 'Colour TV common in USA', rate: '1 in 5000 children' },
  { year: '1975', tech: 'Microsoft & Apple Founded', rate: '1 in 2500 children' },
  { year: '1980', tech: 'CNN News station starts broadcasting', rate: '1 in 2000 children' },
  { year: '1985', tech: 'First internet domain registered', rate: '1 in 1500 children' },
  { year: '1990', tech: 'Launch of World Wide Web', rate: '1 in 1000 children' },
  { year: '1995', tech: 'Commercialization of internet', rate: '1 in 500 children' },
  { year: '2000', tech: 'Launch of broadband & GPS', rate: '1 in 250 children' },
  { year: '2005', tech: 'YouTube Launches', rate: '1 in 150 children' },
  { year: '2010', tech: 'Instagram Launches / 4G rollout', rate: '1 in 100 children' },
  { year: '2015', tech: 'Amazon Alexa / Self driving car testing starts', rate: '1 in 60 children' },
  { year: '2020', tech: 'SpaceX first private launch into orbit', rate: '1 in 32 children' },
  { year: '2022', tech: 'Metaverse / AI (ChatGPT v1) mainstream', rate: '1 in 20 children' },
  { year: '2024', tech: 'Apple Vision Pro / AI (Gemini 1.5) and human-like bots', rate: '1 in 15 children' },
  { year: '2026', tech: 'Realtime Language conversion (Universal Translator)', rate: '1 in 10 children' },
  { year: '2028', tech: 'Meta Human AI bots widespread', rate: '1 in 5 children' },
  { year: '2030', tech: 'Neuralink human trials / AI Humanoid robots', rate: '1 in 2 children' },
];

export default function AboutAutism() {
  
  return (  
    <div className="bg-white min-h-screen">
      {/* --- Hero Section --- */}
      <div className="relative h-[300px] md:h-[400px] bg-gray-800 flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 brightness-50"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=2000")' }}
        ></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg">About Autism</h1>
          <nav className="flex items-center justify-center gap-2 text-lg font-semibold bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mx-auto w-fit border border-white/20">
            <Link to="/" className="text-orange-400 hover:text-orange-300 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">About Autism</span>
          </nav>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#fe5d44] mb-3">About Autism</h2>
          <p className="text-gray-600 font-medium tracking-wide">Our Understanding About Autism</p>
        </div>

        {/* --- Data Table --- */}
        <div className="overflow-x-auto rounded-xl shadow-2xl border border-gray-100">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-[#cfe2f3] text-[#113240] uppercase text-sm font-bold tracking-wider">
                <th className="px-8 py-6 border-b border-gray-200">Year</th>
                <th className="px-8 py-6 border-b border-gray-200">Technology Development</th>
                <th className="px-8 py-6 border-b border-gray-200">Rate of Autism</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {autismData.map((item, index) => (
                <tr key={index} className="hover:bg-blue-50/50 transition-colors text-[#113240]">
                  <td className="px-8 py-5 font-bold">{item.year}</td>
                  <td className="px-8 py-5 text-gray-700 italic">{item.tech || "-"}</td>
                  <td className="px-8 py-5 font-semibold text-orange-600">{item.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
