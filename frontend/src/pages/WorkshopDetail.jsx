import React from 'react';
import { Calendar, Clock, User, CheckCircle, ArrowLeft, Share2, Heart, Users, Shield } from 'lucide-react';
import { Button, Card } from '../components/ui/Base';

export const WorkshopDetailPage = ({ id, onNavigate }) => {
  const workshop = {
    title: 'Advanced Neural Networks and Deep Learning',
    instructor: {
      name: 'Dr. Sarah Chen',
      role: 'Head of AI, TechCorp',
      bio: 'Over 15 years of experience in machine learning and neural architecture search. Former research lead at Stanford.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    },
    date: 'October 15, 2026',
    time: '10:00 AM - 04:00 PM',
    price: 'Free',
    seats: 45,
    enrolled: 33,
    description: 'A comprehensive session covering the mathematical foundations and practical implementations of modern neural networks. This workshop provides a structured environment for students to master Transformers, CNNs, and Generative AI.',
    agenda: [
      { time: '10:00 AM', event: 'Introduction & Basic Concepts' },
      { time: '11:30 AM', event: 'Deep Dive into Network Architectures' },
      { time: '01:00 PM', event: 'Lunch Break & Networking' },
      { time: '02:00 PM', event: 'Hands-on Coding & Implementation' },
      { time: '03:30 PM', event: 'Q&A and Certification Details' },
    ],
    prerequisites: ['Basic Python proficiency', 'Understand Linear Algebra', 'Familiarity with Calculus'],
  };

  return (
    <div className="bg-[#FAF9F7] min-h-screen">
      {/* Header / Hero */}
      <div className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
           <button onClick={() => onNavigate('/workshops')} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary mb-12 hover:text-primary transition-colors">
             <ArrowLeft className="w-4 h-4" /> Back to Workshops
           </button>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
             <div className="fade-in">
                <span className="bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8 inline-block">Advanced Certification</span>
                <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 tracking-tight">{workshop.title}</h1>
                
                <div className="flex flex-wrap gap-10 items-center">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                        <img src={workshop.instructor.img} alt={workshop.instructor.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">Instructor</p>
                        <p className="text-sm font-bold">{workshop.instructor.name}</p>
                      </div>
                   </div>
                   
                   <div className="h-10 w-px bg-black/5 hidden md:block"></div>
                   
                   <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-full shadow-sm">
                        <Calendar className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">Date</p>
                        <p className="text-sm font-bold">{workshop.date}</p>
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="hidden lg:block">
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-110" alt="Workshop hall" />
                </div>
             </div>
           </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
           {/* Details */}
           <div className="lg:col-span-2">
              <div className="mb-20">
                <h2 className="font-serif text-3xl mb-8 border-b border-black/5 pb-8">Course Overview</h2>
                <p className="text-secondary text-lg leading-[1.8] font-sans">
                  {workshop.description}
                </p>
              </div>

              <div className="mb-20">
                <h2 className="font-serif text-3xl mb-10 border-b border-black/5 pb-8">Workshop Agenda</h2>
                <div className="space-y-0">
                  {workshop.agenda.map((item, idx) => (
                    <div key={idx} className="flex gap-10 items-start py-8 group transition-all">
                       <span className="text-xs font-bold uppercase tracking-widest text-accent w-24 pt-1">{item.time}</span>
                       <div className="flex-1">
                          <h4 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">{item.event}</h4>
                          <div className="h-px bg-black/5 w-0 group-hover:w-full transition-all duration-700"></div>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-20">
                <div className="glass-card p-12 bg-white">
                   <h2 className="font-serif text-3xl mb-8">What You'll Need</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {workshop.prerequisites.map((p, idx) => (
                        <div key={idx} className="flex gap-4 items-center">
                           <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                           <span className="text-sm font-medium text-secondary">{p}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
           </div>

           {/* Sidebar */}
           <div className="lg:col-span-1">
              <div className="sticky top-32">
                 <div className="glass-card p-8 bg-white shadow-2xl overflow-hidden relative border-none">
                    <div className="flex justify-between items-center mb-8">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Fee</span>
                       <span className="text-2xl font-serif italic text-accent">{workshop.price}</span>
                    </div>

                    <div className="space-y-6 mb-10">
                       <div className="flex justify-between items-center text-xs pb-4 border-b border-black/5">
                          <span className="text-secondary flex items-center gap-2 font-medium"><Users className="w-3.5 h-3.5" /> Registered Students</span>
                          <span className="font-bold">{workshop.enrolled}</span>
                       </div>
                       <div className="flex justify-between items-center text-xs pb-4 border-b border-black/5">
                          <span className="text-secondary flex items-center gap-2 font-medium"><Shield className="w-3.5 h-3.5" /> Seats Remaining</span>
                          <span className="font-bold text-accent">{workshop.seats - workshop.enrolled}</span>
                       </div>
                    </div>

                    <Button className="w-full py-5 mb-4 shadow-xl shadow-primary/10">Register for Workshop</Button>
                    <button className="w-full py-4 text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors flex items-center justify-center gap-2 border border-black/5 rounded-full mt-4">
                      <Heart className="w-3.5 h-3.5" /> Save Workshop
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
