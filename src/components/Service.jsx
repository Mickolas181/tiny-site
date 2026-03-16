import React from 'react';

export default function ServicesSection() {
  // Services Data
  const services = [
    { title: "Our Vision", text: "Our vision to provide autism free children.", bg: "bg-pink-100", color: "text-orange-500" },
    { title: "Our Mission", text: "A program that meets the life skill needs of every child.", bg: "bg-blue-100", color: "text-blue-600" },
    { title: "We care", text: "We care with compassion on every child even they are autism, ADHD.", bg: "bg-yellow-100", color: "text-yellow-500" },
  ];

  // Stats Data
  const statsData = [
    { id: 1, number: '160', label: 'Qualified Teachers' },
    { id: 2, number: '20', label: 'Years Of Experience' },
    { id: 3, number: '565', label: 'Students Enrolled' },
    { id: 4, number: '22', label: 'Total Branches' },
  ];

  return (
    <section className="py-16 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- Services Header --- */}
        <div className="text-center mb-12">
          <p className="text-orange-500 text-sm font-bold uppercase tracking-wide"> Service We Provide </p>
          <h2 className="text-4xl font-bold text-gray-900">Providing Good Qualities</h2>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div key={index} className={item.bg + " rounded-3xl p-8 text-center"}>
              <h3 className={item.color + " text-2xl font-bold mb-4"}>{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>

        {/* --- Stats Section (Added inside Services) --- */}
        <div className="mt-20 bg-[#e4f0f8] rounded-3xl py-12 px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-semibold text-[#fe5d44]">Stats</h2>
          </div>

          <div className="flex flex-col md:flex-row justify-around items-center gap-10">
            {statsData.map((stat) => (
              <div key={stat.id} className="text-center flex flex-col items-center">
                <h3 className="text-5xl md:text-6xl font-extrabold text-[#113240] mb-2 tracking-tight">
                  {stat.number}
                </h3>
                <p className="text-lg font-bold text-[#113240]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}