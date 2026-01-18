// pages/About.jsx
import React from 'react';
import { Users, Target, Heart, Clock, Award, MapPin, TrendingUp, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: "Chef Marco Rossi",
      role: "Head Chef & Founder",
      experience: "25+ years",
      specialty: "Signature Burgers",
      bio: "Former Michelin-star chef who brings fine dining techniques to fast food.",
      avatar: "MR"
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      experience: "15+ years",
      specialty: "Customer Experience",
      bio: "Ensures every order is perfect and every customer leaves happy.",
      avatar: "SJ"
    },
    {
      name: "David Chen",
      role: "Quality Control",
      experience: "12+ years",
      specialty: "Ingredient Sourcing",
      bio: "Sources the freshest local ingredients for our burgers.",
      avatar: "DC"
    },
    {
      name: "Lisa Williams",
      role: "Marketing Director",
      experience: "10+ years",
      specialty: "Community Building",
      bio: "Connects BurgerHub with our amazing community of burger lovers.",
      avatar: "LW"
    }
  ];

  const milestones = [
    { year: "2015", event: "First BurgerHub opens", description: "Started as a food truck" },
    { year: "2017", event: "Expanded to 3 locations", description: "City-wide popularity" },
    { year: "2019", event: "Launched online ordering", description: "Digital transformation" },
    { year: "2021", event: "Won Best Burger Award", description: "Industry recognition" },
    { year: "2023", event: "10 locations nationwide", description: "National expansion" },
    { year: "2024", event: "Sustainability initiative", description: "Eco-friendly packaging" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden pt-20">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-full mb-6 border border-white/10"
          >
            <Heart className="w-8 h-8 text-white fill-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">STORY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            From a humble food truck to the city's favorite burger joint, we've been serving 
            smiles one burger at a time since 2015.
          </motion.p>
        </div>

        {/* Mission & Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
            <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-500/30 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">OUR MISSION</h3>
            <p className="text-gray-400 leading-relaxed">
              To redefine fast food by serving premium, freshly-made burgers that 
              don't compromise on quality, taste, or experience.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
            <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/30 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">OUR PASSION</h3>
            <p className="text-gray-400 leading-relaxed">
              We're passionate about creating memorable dining experiences and 
              building a community around great food and good times.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-600 to-orange-600 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 border border-white/30">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">OUR COMMUNITY</h3>
              <p className="text-white/90 leading-relaxed">
                Serving over 15,000 happy customers and counting. 
                Your support fuels our growth and inspires our creativity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black text-white mb-12 text-center flex items-center justify-center gap-3">
            <TrendingUp className="w-8 h-8 text-red-500" />
            OUR JOURNEY
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-red-500 via-orange-500 to-yellow-500"></div>
            
            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
                      <div className="text-red-500 font-black text-2xl mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{milestone.event}</h4>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full border-4 border-[#050505] shadow-lg shadow-red-500/50"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black text-white mb-12 text-center flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-red-500" />
            MEET THE TEAM
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-red-500/30 transition-all group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center font-bold text-2xl text-white mb-4 mx-auto border border-red-500/30 group-hover:scale-110 transition-transform">
                  {member.avatar}
                </div>
                
                <h3 className="text-xl font-bold text-white text-center mb-1 group-hover:text-red-500 transition-colors">{member.name}</h3>
                <p className="text-red-500 font-semibold text-center mb-4 text-sm">{member.role}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{member.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Award className="w-4 h-4" />
                    <span>{member.specialty}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm text-center leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <Trophy className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-black text-white">BY THE NUMBERS</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-5xl font-black text-white mb-2">8</div>
                <div className="text-white/80 font-semibold text-sm">Years Serving</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-white mb-2">10+</div>
                <div className="text-white/80 font-semibold text-sm">Locations</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-white mb-2">15K+</div>
                <div className="text-white/80 font-semibold text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-white mb-2">4.9</div>
                <div className="text-white/80 font-semibold text-sm">Average Rating</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <div className="flex items-center justify-center gap-2 text-white/90">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Serving burger lovers nationwide since 2015</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;