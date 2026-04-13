import React from 'react';
import { ArrowRight, Star, Clock, Users, BookOpen } from 'lucide-react';
import { Button, Card, Section } from '../components/ui/Base';

export const LandingPage = ({ onNavigate, workshops = [] }) => {
  const categories = [
    { title: 'Programming', count: 12, img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400' },
    { title: 'Data Science', count: 8, img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
    { title: 'IoT & Robotics', count: 5, img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400' },
    { title: 'Open Source', count: 15, img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400' },
  ];

  // Use real workshops from Django, fallback to placeholders if needed
  const displayWorkshops = workshops.length > 0 ? workshops.slice(0, 3).map((w, idx) => ({
    id: w.id,
    title: w.title,
    instructor: 'FOSSEE Expert',
    level: w.duration ? `${w.duration} Days` : 'Intensive',
    price: 'Free',
    date: 'Upcoming',
    img: idx === 0 ? '/static/workshop1.jpg' : (idx === 1 ? '/static/workshop2.jpg' : 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400')
  })) : [
    { id: 1, title: 'Python for Data Analysis', instructor: 'Dr. Sarah Chen', level: 'Intermediate', price: 'Free', date: 'Oct 15', img: '/static/workshop1.png' },
    { id: 2, title: 'Microcontroller Programming', instructor: 'Kevin Miller', level: 'Beginner', price: 'Free', date: 'Oct 18', img: '/static/workshop2.png' },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden bg-[#F2F0ED]">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10 fade-in">
            <span className="uppercase tracking-[0.3em] text-xs font-bold text-accent mb-6 block font-sans">Powering Academic Collaboration</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-8 tracking-tight">
              Expert <br />
              <span className="italic">Workshops</span> <br />
              for Students.
            </h1>
            <p className="text-secondary text-lg md:text-xl max-w-md mb-10 leading-relaxed font-sans">
              Join IIT Bombay's national initiative to master technical skills through intensive, expert-led training sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => onNavigate('/workshops')} className="px-10 py-4 shadow-xl shadow-primary/10">Explore Workshops</Button>
              <Button variant="outline" className="px-10 py-4">Our Mission</Button>
            </div>
          </div>
          <div className="relative group perspective-1000 hidden md:block">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:rotate-y-12">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
                alt="Students collaborating"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
        {/* Subtle background text */}
        <div className="absolute -bottom-20 -right-20 text-[20vw] font-serif font-black text-black/[0.02] pointer-events-none uppercase">FOSSEE</div>
      </section>

      {/* Categories */}
      <Section title="Learning Categories" subtitle="Thematic areas curated for targeted skill development.">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="group cursor-pointer">
              <div className="aspect-square rounded-[1.5rem] overflow-hidden mb-6 relative">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h4 className="font-serif text-xl mb-1 group-hover:text-accent transition-colors">{cat.title}</h4>
              <p className="text-xs uppercase tracking-widest text-secondary">{cat.count} Available Programs</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Workshops */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="section-title">Newest <span className="italic">Workshops</span></h2>
              <p className="text-secondary">Highly sought-after programs starting this week.</p>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('/workshops'); }} className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
              View Catalog <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {displayWorkshops.map(w => (
              <Card key={w.id} className="group hover:shadow-2xl transition-all duration-500 border-none bg-background p-0 overflow-hidden rounded-[2rem]">
                <div className="aspect-[16/10] bg-muted relative overflow-hidden">
                  <img src={w.img} alt={w.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">{w.level}</span>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">{w.date}</span>
                  <h3 className="font-serif text-2xl mb-4 group-hover:text-accent transition-colors">{w.title}</h3>
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-black/5">
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">{w.instructor}</span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#EAE8E4]">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Total Workshops', val: '1.2k', icon: BookOpen },
            { label: 'Top Instructors', val: '45+', icon: Star },
            { label: 'Active Students', val: '15k', icon: Users },
            { label: 'Completion Rate', val: '98%', icon: Clock },
          ].map(stat => (
            <div key={stat.label} className="fade-in">
              <stat.icon className="w-6 h-6 mx-auto mb-6 text-accent opacity-50" />
              <h3 className="font-serif text-5xl mb-2">{stat.val}</h3>
              <p className="text-xs uppercase tracking-widest text-secondary font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-5xl md:text-7xl mb-10 leading-[1.1] tracking-tight">Ready to begin your <br /><span className="italic">learning</span> journey?</h2>
          <Button onClick={() => onNavigate('/signup')} className="px-12 py-5 transform hover:scale-105">Join the Community</Button>
        </div>
        <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
      </section>
    </div>
  );
};
