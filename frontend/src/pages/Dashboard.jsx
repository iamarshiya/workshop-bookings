import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, Star, Bell, Download, Award, Clock, ArrowUpRight, Search } from 'lucide-react';
import { Card, Button } from '../components/ui/Base';

export const StudentDashboard = ({ user, onNavigate }) => {
  const [stats, setStats] = useState({
    registered: 0,
    completed: 0,
    saved: 0,
    upcoming: 0
  });
  const [loading, setLoading] = useState(true);

  // Default values if user is not authenticated for demo
  const displayName = user?.full_name || 'Student';

  useEffect(() => {
    fetch('/workshop/api/stats/')
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const registeredWorkshops = [
    { id: 1, title: 'Sample Registered Workshop', instructor: 'FOSSEE Expert', date: 'TBD', status: 'Upcoming' },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#F9F8F6] min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 fade-in">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">Student Portal</span>
            <h1 className="font-serif text-5xl md:text-6xl mb-4">Welcome back, <br /><span className="italic">{displayName}.</span></h1>
            <p className="text-secondary font-medium">Your workshop progress and upcoming learning activities.</p>
          </div>
          <div className="flex gap-4">
             <button className="p-4 bg-white rounded-full relative group shadow-sm">
                <Bell className="w-5 h-5 flex-shrink-0" />
                <span className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full border-2 border-white"></span>
             </button>
             <button className="flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-sm">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-[10px] font-bold text-accent">
                   {displayName.charAt(0)}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{displayName}</span>
             </button>
          </div>
        </div>

        {/* Top Cards - Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
           {[
             { label: 'Registered Workshops', val: stats.registered, icon: BookOpen },
             { label: 'Completed Courses', val: stats.completed, icon: Award },
             { label: 'Saved Workshops', val: stats.saved, icon: Star },
             { label: 'Upcoming Sessions', val: stats.upcoming, icon: Calendar },
           ].map(stat => (
             <div key={stat.label} className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:translate-y-[-4px] transition-transform">
                <stat.icon className="w-5 h-5 text-accent mb-6" />
                <h3 className="font-serif text-4xl mb-1 tracking-tight">{stat.val}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">{stat.label}</p>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           <div className="lg:col-span-2 space-y-12">
             <div>
                <div className="flex justify-between items-center mb-10">
                   <h2 className="font-serif text-3xl">Active <span className="italic">Registrations</span></h2>
                   <button className="text-xs font-bold uppercase tracking-widest text-accent border-b border-accent pb-1">View All History</button>
                </div>
                
                <div className="space-y-6">
                   {registeredWorkshops.map(item => (
                     <div key={item.id} className="glass-card bg-white grid grid-cols-1 md:grid-cols-4 gap-8 items-center p-8 border-none">
                        <div className="col-span-2">
                           <h4 className="font-serif text-xl mb-1">{item.title}</h4>
                           <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">{item.instructor}</p>
                        </div>
                        <div className="text-center">
                           <span className="text-xs font-bold text-primary block">{item.date}</span>
                           <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">October</span>
                        </div>
                        <div className="text-right">
                           <Button className="px-6 py-2 text-[10px] uppercase tracking-widest">Join Session</Button>
                        </div>
                     </div>
                   ))}
                   {stats.registered === 0 && (
                      <div className="p-12 text-center bg-white rounded-3xl border border-dashed border-muted font-serif italic text-secondary">
                        No workshops registered yet. Explore the catalog to begin.
                      </div>
                   )}
                </div>
             </div>
           </div>

           {/* Sidebar */}
           <div className="lg:col-span-1 space-y-12">
              <div className="glass-card bg-white p-10 border-none shadow-sm">
                 <h2 className="font-serif text-2xl mb-8">System <span className="italic">Updates</span></h2>
                 <div className="space-y-8">
                    <div className="flex gap-4 items-start">
                       <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                       <div>
                          <p className="text-sm font-medium leading-relaxed text-secondary">Welcome to the modernized FOSSEE Portal.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-[#EAE8E4] p-10 rounded-[2.5rem] relative group cursor-pointer overflow-hidden" onClick={() => onNavigate('/workshops')}>
                 <h2 className="font-serif text-2xl mb-4">Discover New <br />Skills.</h2>
                 <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-8">Browse All Workshops</p>
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="w-5 h-5" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
