import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import aboutBg from '../assets/about_hero_bg.jpg';

export default function AboutUs() {

  
  return (
    <div className="font-sans overflow-hidden">
      
      {/* --- Hero Banner Section --- */}
      <div 
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        {/* Dark Overlay (text theliva theriya) */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg">About Us</h1>
          <nav className="flex items-center justify-center gap-2 text-lg font-semibold bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mx-auto w-fit border border-white/20">
            <Link to="/" className="text-orange-400 hover:text-orange-300 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">About Us</span>  
          </nav>          
        </motion.div>
      </div>

      {/* --- Main Content Section --- */}
      <div className="max-w-5xl mx-auto px-4 py-16 text-gray-700 leading-relaxed space-y-16">
        
        {/* About the Clinic */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-[#fe5d44] mb-4">About the Clinic</h2>
          <div className="space-y-4 text-justify">
            <p>
              Tiny Todds Therapy care was started its first service in Anna Nagar as a small therapy clinic in February 2007. It was shifted to Saidapet in August 2009. Because of the strong referrals by parents of special children, now we are serving in 20 locations. We have branches in Saidapet, Adambakkam, Egmore, Tambaram, Porur, Thiruvanmiyur, Anna nagar, Mylapore, Choolaimedu, K.K Nagar, Poonamalle, Mogapair, Neelankarai, Perambur, Ambattur, Sholinganallur, West Mambalam (head office), Mannady, Ramapuram etc..
            </p>
            <p>
              Presently we provide services to more than 600 Kids with the help of more than 175 Staff Members.
            </p>
            <p>
              Tiny Todds Therapy Care is well known among parents of special children for its quality care and richness in knowledge. It also provides developmental screening for children from 0-3 years, which helps in early detection of autism, ADHD, and cerebral palsy and mental retardation.
            </p>
          </div>
        </motion.section>

        {/* About Our Program */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-[#fe5d44] mb-4">About Our Program</h2>
          <div className="space-y-4 text-justify">
            <p>
              After working several years with children with Autism ADHD and other associated disorder we developed a unique program which helps to recover children from Autism without much difficulty. Earlier days we used conventional method to treat children with Autism, at that time, we were able to recover 10 to 20 percentage of children from autism, but we failed to send them back to mainstream school. After so many years of therapy they went back to special school. Then we understood that we are heading in a wrong direction.
            </p>
            <p className="font-semibold text-gray-900 mt-4">We found two categories of children in Autism.</p>
            <ol className="list-decimal list-inside space-y-2 font-semibold text-gray-900 ml-4">
              <li>High functioning Autism.</li>
              <li>Low functioning Autism.</li>
            </ol>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">High functioning Autism:</h3>
            <p>
              These children have higher IQ, features of autism is less, recover very fast from autism and if they are properly trained they completed regular schooling and lead a normal life.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Low functioning Autism:</h3>
            <p>
              But these children has very lower IQ and severe behaviour issues and has lot of autistic features in these children and also has difficulty in following commands.
            </p>

            <p className="mt-4">
              Recovery of High IQ Autism children was always an easier task to us. But recovering children with low IQ was tough. We started comparing both the children, then we found that these low IQ children has problem in identifying the picture when we say the name. This milestone will be achieved in the age of 1.5 years to 2 years (note that Autism regression happens at this age). All the high IQ autism children achieved this milestone. After achieving this milestone the child is able to understand command. So we came to a conclusion that all the low functioning Autism children become high functioning if they identify the picture when we say the name.
            </p>
            <p>
              But making a low IQ child to identify the picture is not an easy task. It was so tough. We tried around more than 20 methods to pick up the picture but instead of learning the name of the picture they learned the pattern. We had a very tough time in finding solution for this problem. After 12 years of consistent effort we found a method which helps low IQ autism children to identify the picture. Now most of the low IQ children started identifying the pictures and move to high functioning level and low IQ children are very less in number, that too older kids or came from other centre.
            </p>
            <p className="font-semibold text-[#fe5d44]">
              Now we are proud to say that we have found a way to recover autism with low IQ or severe autism.
            </p>
            <p>
              Our unique method of teaching skills helps to improve their IQ at higher level when compare to their age. Many children doing maths of higher standard with ease. One of the leading Psychologist rang me and asked “what are you doing in your centre, all the children from your centre have higher IQ which I have not noticed in children going to other centre. Which gave me a spark of starting Sharp Brain-IQ- Booster program for normal children.
            </p>
          </div>
        </motion.section>

        {/* Sharp Brain - Toddlers */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-xl font-bold text-[#fe5d44] mb-2 uppercase">SHARP BRAIN –IQ BOOSTER PROGRAM -TODDLERS</h2>
          <p className="font-semibold text-gray-600 mb-4">(1.5 year to 3 Years)</p>
          <div className="space-y-4 text-justify">
            <p>
              This program is design to prevent Autism, Attention Deficit and Hyperactivity Disorder (ADHD), Learning Disabilities, Speech Delay and other developmental disabilities.
            </p>
            <p>
              This is an alternate for playschool, where we take children with age group between 1.5 to 3.5 years. These children will be screened for autism and other developmental disabilities. They are allowed to play with their peers for the early speech development and social interaction etc. We also provide developmental milestones bases training for each kid with individual care. We create a track record of their development and monitor the progress. If any child undergoes this program definitely they will not get affected by autism for sure and also this program gives an early start to the children. So that the children DQ will be higher than of other children. These children started to read, write, comprehend and doing addition and subtraction before they go to school.
            </p>
          </div>
        </motion.section>

        {/* Sharp Brain - Primary */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-xl font-bold text-[#fe5d44] mb-2 uppercase">SHARP BRAIN –IQ BOOSTER PROGRAM –PRIMARY</h2>
          <p className="font-semibold text-gray-600 mb-4">(3.5 to 8 years)</p>
          <p className="text-justify">
            This program is developed for slow learners. This program helps the student to learn reading, writing, comprehension and doing math problems with easy techniques and step by step training help them to learn the subject at great speed. We can see changes usually within 6 months, and to attain the full benefits of this program, children should continue this program for 3 years. No child is a dull child. Any child can perform better if the training is good.
          </p>
        </motion.section>

        {/* Speciality */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-[#fe5d44] mb-4">Speciality</h2>
          <div className="space-y-4 text-justify">
            <p>
              The specialty of the centre is, it has different methods of treating and educating the special children depending upon the category. All the programs are scientifically formulated so that the children are not only taken care of with mother’s love but also, they gradually attain betterment in terms of learning and doing things on their home.
            </p>
            <p className="font-semibold text-gray-800 border-l-4 border-[#fe5d44] pl-4 italic bg-orange-50 p-4 rounded-r-lg">
              Admitting your children at Tiny Todds Therapy Centre means offering them a somewhat better future on par with other children.
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}