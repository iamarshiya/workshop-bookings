import React, { useState } from 'react';
import { Search, Filter, Calendar, MapPin, User, ChevronRight, Clock } from 'lucide-react';
import { Button, Card } from '../components/ui/Base';

export const WorkshopListingPage = ({ onNavigate, workshops = [] }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Fallback to static if empty for visual demo, but prioritize real data
  const displayedWorkshops = workshops.length > 0 ? workshops.map(w => ({
    ...w,
    instructor: 'FOSSEE Expert',
    date: 'Upcoming',
    category: 'Software',
    seats: 50,
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400'
  })) : [];

  const filters = ['All', 'Programming', 'Data Science', 'Engineering', 'IoT', 'Design'];

  return (
    <div className="pt-32 pb-24 bg-[#F9F8F6]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16 fade-in">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-accent mb-4 block">National Workshop Registry</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Explore <br /><span className="italic">Workshops</span></h1>
          <p className="text-secondary leading-relaxed">Master state-of-the-art open source technologies with IIT Bombay's FOSSEE initiative.</p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between mb-16 border-b border-black/5 pb-12">
           <div className="relative w-full lg:max-w-md">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
             <input 
              type="text" 
              placeholder="Search by title..." 
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
          {displayedWorkshops.map((w) => (
            <div 
              key={w.id} 
              className="group flex flex-col md:flex-row gap-8 items-stretch cursor-pointer border-b border-black/5 pb-12 last:border-none"
              onClick={() => onNavigate(`/workshop/${w.id}`)}
            >
              <div className="w-full md:w-56 aspect-square rounded-[2rem] overflow-hidden shadow-xl perspective-1000 bg-white flex items-center justify-center text-4xl">
                 {w.icon || '📚'}
              </div>
              
              <div className="flex-1 flex flex-col justify-center py-4">
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                        {w.duration ? `${w.duration} Days Program` : 'Short Course'}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-600">
                      Open for Booking
                    </span>
                 </div>
                 
                 <h3 className="font-serif text-2xl lg:text-3xl mb-4 leading-snug group-hover:text-accent transition-colors">
                   {w.title}
                 </h3>
                 
                 <p className="text-secondary text-sm mb-6 line-clamp-2 leading-relaxed">
                   {w.description}
                 </p>
                 
                 <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-secondary">
                      <Clock className="w-3.5 h-3.5" /> {w.duration} Days
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-secondary">
                      <User className="w-3.5 h-3.5" /> FOSSEE Expert
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-4">
                    <Button className="px-8 py-3 text-xs uppercase tracking-widest">Enroll Now</Button>
                    <button className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-all shadow-sm">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {displayedWorkshops.length === 0 && (
           <div className="text-center py-20 font-serif italic text-secondary">
             No workshops available in the catalog yet.
           </div>
        )}
      </div>
    </div>
  );
};
