import aboutImage from '../assets/about.png';

const CLASSES_DATA = [
  { id: 1, title: "Anna Nagar", subtitle: "9176065624" },
  { id: 2, title: "Chennai", subtitle: "9176065624" },
  { id: 3, title: "Coimbatore", subtitle: "9176065624" },
  { id: 4, title: "Madurai", subtitle: "9176065624" },
  { id: 5, title: "Salem", subtitle: "9176065624" },
  { id: 6, title: "Tiruchirappalli", subtitle: "9176065624" },
];

export default function ClassesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">  


        {/* Title Section */}
        <div className="text-center mb-12">
          <p className="text-orange-500 text-sm font-bold uppercase tracking-wide"> On Going Branches </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-2"> Take The Classes & Start </h2>
          <h3 className="text-2xl font-semibold text-gray-700"> Learning From Today </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {CLASSES_DATA.map((classItem) => (

            <div key={classItem.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">

              <img src={aboutImage} alt={classItem.title} className="w-full h-48 object-cover" />

              <div className="p-4 bg-pink-100 text-center">
                <p className="text-orange-500 text-xs font-bold mb-1">{classItem.subtitle}</p>
                <h3 className="text-lg font-bold text-gray-900">{classItem.title}</h3>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center mb-12 pt-40">
          <p className="text-orange-500 text-sm font-bold uppercase tracking-wide"> Join Our New Session </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-2"> Call To Enroll Your Child </h2>
          <h2 className="text-4xl font-bold text-gray-900 mb-2"> +91 99413 50646 </h2>
          <h2 className="text-4xl font-bold text-gray-900 mb-2"> +91 72995 35600 </h2>
        </div>
      </div>
    </section>
  );
}         