import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import contactBg from '../assets/contact_hero_bg.jpg'; 

const locationsData = [
  {
    area: "Saidapet",
    title: "Tiny Todds Therapy Care",
    address: "11/3, East Jones Road, Periyapet, Saidapet, Chennai, Tamil Nadu 600015",
    timing: "09:30 AM – 08:00PM",
    phone: "+91 89258 32501"
  },
  {
    area: "Adambakkam",
    title: "Tiny Todds Therapy Care",
    address: "No.8, Sannathy Street, Adambakkam, Chennai, Tamil Nadu 600088",
    timing: "09:30 AM – 08:00PM",
    phone: "+91 89258 32502"
  },
  {
    area: "Egmore",
    title: "Tiny Todds Therapy Care",
    address: "No.84, Gengu Reddy Road, Egmore,Chennai - 600008",
    timing: "10:00 AM – 08:00 PM",
    phone: "+91 89258 32503"
  },
  {
    area: "Tambaram",
    title: "Tiny Todds Therapy Care",
    address: "27,28 Ayyasamy Street, ICICI Building, West Tambaram, Chennai - 600045",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 89258 32504"
  },
  {
    area: "Porur",
    title: "Tiny Todds Therapy Care",
    address: "4th Cross Street, Sabari Nagar, Mugalivakkam, Porur, Chennai, Tamil Nadu 600116",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 89258 32505"
  },
  {
    area: "Thiruvanmiyur",
    title: "Tiny Todds Therapy Care",
    address: "No.76, LB Road 3rd Street, Thiruvanmiyur, Chennai-41.",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 89258 32506"
  },
  {
    area: "Anna Nagar",
    title: "Tiny Todds Therapy Care",
    address: "195/2, Asciad Colony, Indian Bank Back Side, Anna Nagar West Extension, Chennai, Tamil Nadu 600101",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 89258 32507"
  },
  {
    area: "Mylapore",
    title: "Tiny Todds Therapy Care",
    address: "No. 111/56, Lakshmi illam, Kutchery road(near airtel showroom), Mylapore-600004.",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 89258 32508"
  },
  {
    area: "Choolaimedu",
    title: "Tiny Todds Therapy Care",
    address: "No.236, Salma Majestic Tower, 1st floor,Sherfuddin Street, Choolaimedu,Chennai-94",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 89258 32509"
  },
  {
    area: "KK Nagar",
    title: "Tiny Todds Therapy Care",
    address: "No-250,43rd Street,8th Sector,Ground Floor, K.K Nagar, Chennai, Tamil Nadu 600078",
    timing: "01:00 PM – 08:00 PM",
    phone: "+91 89258 32510"
  },
  {
    area: "Poonamalle",
    title: "Tiny Todds Therapy Care",
    address: "No3,Hypath Plaza,1st floor,Nambi street,Poonamallee Bus Stand. Poonamallee, Chennai, Tamil Nadu - 600056",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 89258 32511"
  },
  {
    area: "Mogappair",
    title: "Tiny Todds Therapy Care",
    address: "No 3,Amul Illam,Vellalar Street ,Mogappair West, Chennai-600037.",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 89258 32512"
  },
  {
    area: "Neelankarai",
    title: "Tiny Todds Therapy Care",
    address: "Vijaya jagat Building,Near By Titan Eye Plus,2nd floor,Sri kapaleeswarar Nagar,East Cost Road,Neelangarai,Chennai-600041",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 89258 32513"
  },
  {
    area: "Velacherry",
    title: "Tiny Todds Therapy Care",
    address: "464/B, 3rd Main Rd, Vijaya Nagar, Velacherry, Chennai, Tamil Nadu 600042",
    timing: "02:00 PM – 08:00 PM",
    phone: "+91 89258 32514"
  },
  {
    area: "Perambur",
    title: "Tiny Todds Therapy Care",
    address: "No. 90B/115, Perambur High Road, City Union Bank Upstairs, Perambur, Chennai 600011",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 89258 32515"
  },
  {
    area: "Ambattur",
    title: "Tiny Todds Therapy Care",
    address: "No. 204, Femi life Hospital Building,2nd Floor, old MTH road, Near By Farm Bazzar,Venkata Puram, Ambattur OT, Chennai 53",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 7299535600"
  },
  {
    area: "Sholinganallur",
    title: "Tiny Todds Therapy Care",
    address: "No-189,TNEB-Second floor,Medavakkam Road,O.M.R, Sholinganallur, Chennai, Tamil Nadu 600119",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 89258 32518"
  },
  {
    area: "West Mambalam",
    title: "Tiny Todds Therapy Care",
    address: "35,Lake View Road,Near By HP Gas Agency, West Mambalam, Chennai-600033",
    timing: "09:30 AM – 08:00PM",
    phone: "+91 89258 32519"
  },
  {
    area: "Mannady",
    title: "Tiny Todds Therapy Care",
    address: "184/88,2nd floor,Paari book store building,Metro Rail Station,Broadway Road,Mannady,Chennai,Tamil Nadu 600001",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 89258 32521"
  },
  {
    area: "Ramapuram",
    title: "Tiny Todds Therapy Care",
    address: "No. 27, Kothari Nagar 1st Street, Annai Sathya Nagar main road, Ramapuram, Land mark near Sri Chaitanya Techno School (Back side) Chennai-87.",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 89258 32522"
  },
  {
    area: "Avadi",
    title: "Tiny Todds Therapy Care",
    address: "Shafa play school,Sathyavani Street,Near Gandhi Road, Avadi,Chennai - 600054",
    timing: "02:00 PM – 08:00 PM",
    phone: "+91 89258 32523"
  },
  {
    area: "Iyyappanthangal",
    title: "Tiny Todds Therapy Care",
    address: "Devi Parasakthi Nagar, Gandhi Nagar, Mount Poonamallee Rd, Porur, Chennai, Tamil Nadu 600116",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 89258 32524"
  },
  {
    area: "Kodungaiyur",
    title: "Tiny Todds Therapy Care",
    address: "No: 35, E.B Office road, near by vijay medical shoP,Meenambal Salai, K.K.D nagar, kodungaiyur, Chennai - 118",
    timing: "09:30 AM – 08:00 PM",
    phone: "+91 89258 32525"
  },
  {
    area: "Coimbatore",
    title: "Tiny Todds Therapy Care",
    address: "No 94/83,Vinayagar Kovil Street,KVB Bank Backside,Sivanandha Colony,Tatabad,Coimbatore,Tamil Nadu - 641012",
    timing: "02:00 PM – 08:00 PM",
    phone: "+91 81487 22861"
  },
  {
    area: "Nagercoil",
    title: "Tiny Todds Therapy Care",
    address: "No C/1, Bright Street, Water Tank Rd, Nagercoil, Tamil Nadu 62900",
    timing: "02:00 PM – 08:00 PM",
    phone: "+91 99413 50646, +91 89258 95506"
  }
];

export default function ContactUs() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen overflow-hidden">
      <div 
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${contactBg})` }}  
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg">Contact Us</h1>
          <nav className="flex items-center justify-center gap-2 text-lg font-semibold bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mx-auto w-fit border border-white/20">
            <Link to="/" className="text-orange-400 hover:text-orange-300 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Contact Us</span>  
          </nav>
        </motion.div>
      </div>  

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {locationsData.map((loc, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{loc.area}</h2>
              <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-8 h-8 rounded-full bg-orange-100 text-[#fe5d44] flex items-center justify-center font-bold">
                      📍
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{loc.title}</h3>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{loc.address}</p>
                    </div>
                  </div>
                  <div className="pl-11 space-y-1 text-sm text-gray-600">
                    <p><span className="font-semibold text-gray-800">Timing :</span> {loc.timing}</p>
                    <p><span className="font-semibold text-gray-800">Phone :</span> {loc.phone}</p>
                  </div>
                </div>
                <div className="w-full md:w-48 h-32 bg-blue-50 rounded-xl border border-blue-100 flex items-center justify-center overflow-hidden">
                   <div className="text-center">
                      <span className="text-2xl">🗺️</span>
                      <p className="text-xs text-blue-500 font-medium mt-1">View on Map</p>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}