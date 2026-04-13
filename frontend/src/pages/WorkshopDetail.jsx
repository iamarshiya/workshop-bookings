import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, CheckCircle, ArrowLeft, Share2, Heart, Users, Shield } from 'lucide-react';
import { Button, Card } from '../components/ui/Base';

export const WorkshopDetailPage = ({ id, onNavigate }) => {
  const [workshop, setWorkshop] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/workshop/api/workshop/${id}/`)
      .then(res => res.json())
      .then(data => {
        setWorkshop(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div className="pt-40 text-center font-serif italic text-secondary min-h-screen">
      Loading workshop sanctuary details...
    </div>
  );

  if (!workshop || workshop.error) return (
    <div className="pt-40 text-center min-h-screen">
      <h2 className="font-serif text-3xl mb-4">Workshop not found</h2>
      <Button onClick={() => onNavigate('/workshops')}>Return to Catalog</Button>
    </div>
  );

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
                <span className="bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8 inline-block">FOSSEE Certified</span>
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
             
             <div className="hidden lg:block relative group">
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale-[0.2]" alt="Workshop atmosphere" />
                </div>
             </div>
           </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
           <div className="lg:col-span-2">
              <div className="mb-20">
                <h2 className="font-serif text-3xl mb-8 border-b border-black/5 pb-8">Course Overview</h2>
                <p className="text-secondary text-lg leading-[1.8] font-sans">
                  {workshop.description}
                </p>
              </div>

              <div className="mb-20">
                <h2 className="font-serif text-3xl mb-10 border-b border-black/5 pb-8">Syllabus & Agenda</h2>
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
                   <h2 className="font-serif text-3xl mb-8">Preparation</h2>
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
                 <div className="glass-card p-8 bg-white shadow-2xl relative border-none">
                    <div className="flex justify-between items-center mb-8">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Course Fee</span>
                       <span className="text-2xl font-serif italic text-accent">{workshop.price}</span>
                    </div>

                    <div className="space-y-6 mb-10">
                       <div className="flex justify-between items-center text-xs pb-4 border-b border-black/5">
                          <span className="text-secondary flex items-center gap-2 font-medium"><Users className="w-3.5 h-3.5" /> Enrolled Participants</span>
                          <span className="font-bold">{workshop.enrolled}</span>
                       </div>
                       <div className="flex justify-between items-center text-xs pb-4 border-b border-black/5">
                          <span className="text-secondary flex items-center gap-2 font-medium"><Shield className="w-3.5 h-3.5" /> Total Capacity</span>
                          <span className="font-bold text-accent">{workshop.seats}</span>
                       </div>
                    </div>

                    <Button className="w-full py-5 mb-4 shadow-xl shadow-primary/10">Register My Interest</Button>
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
