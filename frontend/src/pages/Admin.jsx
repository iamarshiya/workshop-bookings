import React from 'react';
import { LayoutDashboard, Users, BookOpen, Settings, BarChart3, Plus, Search, MoreHorizontal, ArrowUp, ArrowDown } from 'lucide-react';
import { Card, Button } from '../components/ui/Base';

export const AdminDashboard = () => {
  const stats = [
    { label: 'Active Workshops', val: '24', trend: '+2', variant: 'up' },
    { label: 'Total Registrations', val: '1,420', trend: '+142', variant: 'up' },
    { label: 'Pending Bookings', val: '18', trend: '-5', variant: 'down' },
    { label: 'Platform Utilization', val: '86%', trend: '+4%', variant: 'up' },
  ];

  const recentActivity = [
    { name: 'Sarah Miller', action: 'registered for Python Workshop', time: '12m ago' },
    { name: 'Marcus Chen', action: 'completed IoT Workshop', time: '45m ago' },
    { name: 'Admin Flow', action: 'updated Quantum Course details', time: '2h ago' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#F0EFEE]">
      {/* Sidebar - Desktop */}
      <div className="fixed left-0 top-0 bottom-0 w-24 bg-primary hidden xl:flex flex-col items-center py-12 gap-12 z-50">
         <div className="font-serif text-white text-xl">F.</div>
         <div className="flex flex-col gap-10">
            <LayoutDashboard className="w-5 h-5 text-accent cursor-pointer" />
            <BookOpen className="w-5 h-5 text-gray-500 cursor-pointer hover:text-accent transition-colors" />
            <Users className="w-5 h-5 text-gray-500 cursor-pointer hover:text-accent transition-colors" />
            <BarChart3 className="w-5 h-5 text-gray-500 cursor-pointer hover:text-accent transition-colors" />
         </div>
         <div className="mt-auto">
            <Settings className="w-5 h-5 text-gray-500 cursor-pointer hover:text-accent transition-colors" />
         </div>
      </div>

      <div className="xl:pl-32 pr-6 md:pr-12 pt-12 pb-24">
         <div className="container mx-auto">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 fade-in">
               <div>
                  <h1 className="font-serif text-4xl mb-2">Admin <span className="italic">Dashboard.</span></h1>
                  <p className="text-secondary text-xs font-bold uppercase tracking-widest">October 12, 2026 • Platform Management</p>
               </div>
               <div className="flex gap-4 w-full md:w-auto">
                  <div className="relative flex-1 md:w-64">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                     <input type="text" placeholder="Search workshops..." className="w-full bg-white rounded-full py-3.5 pl-12 pr-6 text-xs focus:outline-none" />
                  </div>
                  <Button className="flex items-center gap-2 px-8">
                     <Plus className="w-4 h-4" /> New Workshop
                  </Button>
               </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
               {stats.map(stat => (
                 <div key={stat.label} className="bg-white p-8 rounded-[2rem] shadow-sm relative overflow-hidden text-center">
                    <div className="relative z-10">
                       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mb-6">{stat.label}</p>
                       <div className="flex justify-between items-end">
                          <h3 className="font-serif text-4xl">{stat.val}</h3>
                          <div className={`flex items-center gap-1 text-[10px] font-bold ${stat.variant === 'up' ? 'text-green-600' : stat.variant === 'down' ? 'text-red-500' : 'text-gray-400'}`}>
                             {stat.variant === 'up' ? <ArrowUp className="w-3 h-3" /> : stat.variant === 'down' ? <ArrowDown className="w-3 h-3" /> : null}
                             {stat.trend}
                          </div>
                       </div>
                    </div>
                 </div>
               ))}
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               {/* Analytics */}
               <div className="lg:col-span-2 space-y-12">
                  <div className="bg-white p-12 rounded-[3rem] shadow-sm min-h-[400px]">
                     <div className="flex justify-between items-center mb-12">
                        <h3 className="font-serif text-2xl">Registration <span className="italic">Trends.</span></h3>
                        <div className="flex gap-4">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-secondary cursor-pointer border-b border-primary text-primary">Monthly</span>
                           <span className="text-[10px] font-bold uppercase tracking-widest text-secondary cursor-pointer">Quarterly</span>
                        </div>
                     </div>
                     <div className="w-full h-64 bg-muted/30 rounded-[2rem] border-2 border-dashed border-muted flex items-center justify-center italic text-gray-400 text-sm">
                        Chart Rendering Area
                     </div>
                  </div>

                  <div className="bg-white p-10 rounded-[3rem] shadow-sm">
                     <h3 className="font-serif text-2xl mb-10">Recent <span className="italic">Users.</span></h3>
                     <div className="space-y-0">
                        {['Julian Kaspar', 'Elena Rodriguez', 'Marcus Thorne'].map((user, idx) => (
                           <div key={idx} className="flex justify-between items-center py-6 border-b border-black/5 last:border-none">
                              <div className="flex items-center gap-6">
                                 <div className="w-12 h-12 rounded-full bg-muted overflow-hidden"></div>
                                 <div>
                                    <h5 className="font-bold text-sm tracking-tight">{user}</h5>
                                    <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Student Account</p>
                                 </div>
                              </div>
                              <MoreHorizontal className="w-5 h-5 text-gray-300 cursor-pointer" />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Right Sidebar */}
               <div className="lg:col-span-1 space-y-12">
                  <div className="bg-primary p-12 rounded-[3rem] text-white">
                     <h3 className="font-serif text-2xl mb-8">System <span className="italic">Pulse.</span></h3>
                     <div className="space-y-8">
                        {recentActivity.map((act, idx) => (
                           <div key={idx} className="flex gap-6 items-start">
                              <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0"></div>
                              <div>
                                 <p className="text-sm font-medium leading-relaxed text-gray-400 mb-2">
                                    <span className="text-white">{act.name}</span> {act.action}
                                 </p>
                                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 font-sans">{act.time}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="bg-[#EAE8E4] p-10 rounded-[3rem] border border-black/5">
                     <h3 className="font-serif text-2xl mb-6 italic">Settings.</h3>
                     <p className="text-secondary text-sm leading-relaxed mb-10">Configure universal portal settings and user access levels.</p>
                     <Button className="w-full py-5 bg-white text-primary border border-black/10 hover:bg-muted shadow-none">System Polices</Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
