import React, { useState } from 'react';
import { Search, Filter, Calendar, MapPin, User, ChevronRight } from 'lucide-react';
import { Button, Card } from '../components/ui/Base';

export const WorkshopListingPage = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const workshops = [
    { 
      id: 1, 
      title: 'Advanced Neural Networks and Deep Learning', 
      instructor: 'Dr. Sarah Chen', 
      date: 'Oct 15, 2026', 
      time: '10:00 AM',
      seats: 12, 
      category: 'Data Science',
      level: 'Advanced',
      img: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=600'
    },
    { 
      id: 2, 
      title: 'Structural Integrity in Modern Architecture', 
      instructor: 'Marcus Thorne', 
      date: 'Oct 18, 2026', 
      time: '02:00 PM',
      seats: 5, 
      category: 'Engineering',
      level: 'Intermediate',
      img: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=600'
    },
    { 
      id: 3, 
      title: 'The Philosophy of Open Source Communities', 
      instructor: 'Elena Rodriguez', 
      date: 'Oct 22, 2026', 
      time: '11:00 AM',
      seats: 25, 
      category: 'Programming',
      level: 'Beginner',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600'
    },
    { 
      id: 4, 
      title: 'Quantum Computing Fundamentals', 
      instructor: 'Dr. Sarah Chen', 
      date: 'Oct 25, 2026', 
      time: '09:00 AM',
      seats: 8, 
      category: 'Data Science',
      level: 'Advanced',
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600'
    },
  ];

  const filters = ['All', 'Programming', 'Data Science', 'Engineering', 'IoT', 'Design'];

  return (
    <div className="pt-32 pb-24 bg-[#F9F8F6]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16 fade-in">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-accent mb-4 block">National Workshop Registry</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Upcoming <br /><span className="italic">Workshops</span></h1>
          <p className="text-secondary leading-relaxed">Discover a wide range of expert-led workshops designed to enhance your technical proficiency and career readiness.</p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between mb-16 border-b border-black/5 pb-12">
           <div className="relative w-full lg:max-w-md">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
             <input 
              type="text" 
              placeholder="Search by title or instructor..." 
              className="w-full bg-white rounded-full py-4 pl-12 pr-6 text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all shadow-sm"
             />
           </div>
           
           <div className="flex gap-3 overflow-x-auto pb-4 lg:pb-0 no-scrollbar w-full lg:w-auto">
             {filters.map(filter => (
               <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeFilter === filter ? 'bg-primary text-white shadow-lg' : 'bg-white hover:bg-muted text-secondary'}`}
               >
                 {filter}
               </button>
             ))}
           </div>
        </div>

        {/* Listing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {workshops.map((w) => (
            <div 
              key={w.id} 
              className="group flex flex-col md:flex-row gap-8 items-stretch cursor-pointer"
              onClick={() => onNavigate(`/workshop/${w.id}`)}
            >
              <div className="w-full md:w-56 aspect-square rounded-[2rem] overflow-hidden shadow-xl perspective-1000">
                <img src={w.img} alt={w.title} className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" />
              </div>
              
              <div className="flex-1 flex flex-col justify-center py-4">
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{w.category}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${w.seats < 10 ? 'text-red-500' : 'text-green-600'}`}>
                      {w.seats} Seats Available
                    </span>
                 </div>
                 
                 <h3 className="font-serif text-2xl lg:text-3xl mb-6 leading-snug group-hover:text-accent transition-colors">
                   {w.title}
                 </h3>
                 
                 <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 text-xs text-secondary font-medium">
                      <div className="p-2 rounded-full bg-white"><User className="w-3.5 h-3.5" /></div>
                      {w.instructor}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-secondary font-medium">
                      <div className="p-2 rounded-full bg-white"><Calendar className="w-3.5 h-3.5" /></div>
                      {w.date}
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-4">
                    <Button className="px-8 py-3 text-xs uppercase tracking-widest">Register Now</Button>
                    <button className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-24 text-center">
          <Button variant="outline" className="px-12 py-4 italic font-serif text-lg">Browse More Workshops</Button>
        </div>
      </div>
    </div>
  );
};
