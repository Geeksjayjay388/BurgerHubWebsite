// pages/About.jsx
import React from 'react';
import { Users, Target, Heart, Clock, Award, MapPin } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-black mb-4">OUR STORY</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From a humble food truck to the city's favorite burger joint, we've been serving 
          smiles one burger at a time since 2015.
        </p>
      </div>

      {/* Mission & Values */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl">
          <Target className="w-12 h-12 text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-black mb-3">OUR MISSION</h3>
          <p className="text-gray-600">
            To redefine fast food by serving premium, freshly-made burgers that 
            don't compromise on quality, taste, or experience.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-3xl">
          <Heart className="w-12 h-12 text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-black mb-3">OUR PASSION</h3>
          <p className="text-gray-600">
            We're passionate about creating memorable dining experiences and 
            building a community around great food and good times.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-black to-gray-900 text-white p-8 rounded-3xl">
          <Users className="w-12 h-12 text-red-600 mb-4" />
          <h3 className="text-2xl font-bold mb-3">OUR COMMUNITY</h3>
          <p className="text-gray-300">
            Serving over 15,000 happy customers and counting. 
            Your support fuels our growth and inspires our creativity.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-black text-black mb-8 text-center">OUR JOURNEY</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-yellow-500"></div>
          
          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200">
                    <div className="text-red-600 font-black text-2xl mb-2">{milestone.year}</div>
                    <h4 className="text-xl font-bold text-black mb-2">{milestone.event}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-black text-black mb-8 text-center">MEET THE TEAM</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-yellow-100 rounded-full flex items-center justify-center font-bold text-2xl text-black mb-4 mx-auto">
                {member.avatar}
              </div>
              
              <h3 className="text-xl font-bold text-black text-center mb-1">{member.name}</h3>
              <p className="text-red-600 font-semibold text-center mb-2">{member.role}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{member.experience} experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Award className="w-4 h-4" />
                  <span>Specialty: {member.specialty}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white rounded-3xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-black mb-2">8</div>
            <div className="text-gray-300">Years Serving</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black mb-2">10+</div>
            <div className="text-gray-300">Locations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black mb-2">15K+</div>
            <div className="text-gray-300">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black mb-2">4.9</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <MapPin className="w-5 h-5" />
            <span>Serving burger lovers nationwide since 2015</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;