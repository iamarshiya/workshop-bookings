import React, { useState, useEffect } from 'react';
import { BarChart3, PieChart, Table as TableIcon, Download, Search, Filter } from 'lucide-react';
import { Card, Section, Button } from '../components/ui/Base';

export const StatisticsPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/statistics/api/public/')
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return (
     <div className="pt-40 text-center font-serif italic text-secondary min-h-screen">
       Analyzing workshop distribution data...
     </div>
  );

  return (
    <div className="pt-32 pb-24 bg-[#F9F8F6]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-20 fade-in">
           <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-accent mb-4 block">Platform Analytics</span>
           <h1 className="font-serif text-5xl md:text-7xl mb-8">Workshop <br /><span className="italic">Analytics</span></h1>
           <p className="text-secondary leading-relaxed text-lg">Real-time geographical and thematic distribution of FOSSEE workshops across the nation.</p>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
           {/* State Distribution */}
           <div className="glass-card bg-white p-10 border-none">
              <div className="flex justify-between items-center mb-10">
                 <div>
                    <h3 className="font-serif text-2xl mb-1">State Distribution</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Geographical Impact</p>
                 </div>
                 <BarChart3 className="w-6 h-6 text-accent opacity-50" />
              </div>
              
              <div className="space-y-6">
                 {stats?.charts?.states?.labels?.slice(0, 5).map((label, idx) => (
                    <div key={label}>
                       <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                          <span>{label}</span>
                          <span>{stats.charts.states.values[idx]} Workshops</span>
                       </div>
                       <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                             className="h-full bg-primary transition-all duration-1000" 
                             style={{ width: `${(stats.charts.states.values[idx] / Math.max(...stats.charts.states.values)) * 100}%` }}
                          ></div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Type Distribution */}
           <div className="glass-card bg-primary p-10 border-none text-white">
              <div className="flex justify-between items-center mb-10">
                 <div>
                    <h3 className="font-serif text-2xl mb-1">Theme Breakdown</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Subject Area Focus</p>
                 </div>
                 <PieChart className="w-6 h-6 text-accent opacity-50" />
              </div>
              
              <div className="space-y-6">
                 {stats?.charts?.types?.labels?.slice(0, 5).map((label, idx) => (
                    <div key={label}>
                       <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                          <span className="text-gray-300">{label}</span>
                          <span className="text-accent">{stats.charts.types.values[idx]} Programs</span>
                       </div>
                       <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div 
                             className="h-full bg-accent transition-all duration-1000" 
                             style={{ width: `${(stats.charts.types.values[idx] / Math.max(...stats.charts.types.values)) * 100}%` }}
                          ></div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Data Table */}
        <div className="glass-card bg-white p-12 border-none">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
              <div>
                 <h2 className="font-serif text-3xl mb-2">Historical <span className="italic">Data</span></h2>
                 <p className="text-secondary text-xs font-bold uppercase tracking-widest">Recent verified workshop completions</p>
              </div>
              <div className="flex gap-4">
                 <button className="flex items-center gap-2 px-6 py-3 bg-muted rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black/5 transition-all">
                    <Download className="w-4 h-4" /> Download CSV
                 </button>
              </div>
           </div>

           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="border-b border-black/5">
                       <th className="pb-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Coordinator</th>
                       <th className="pb-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Institute</th>
                       <th className="pb-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Workshop</th>
                       <th className="pb-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Date</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-black/5">
                    {stats?.table_data?.map((row, idx) => (
                       <tr key={idx} className="group hover:bg-muted/30 transition-colors">
                          <td className="py-6 text-sm font-bold tracking-tight">{row.coordinator}</td>
                          <td className="py-6 text-sm text-secondary">{row.institute}</td>
                          <td className="py-6">
                             <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                {row.type}
                             </span>
                          </td>
                          <td className="py-6 text-sm font-medium">{row.date}</td>
                       </tr>
                    ))}
                 </tbody>
              </table>
              {(!stats?.table_data || stats.table_data.length === 0) && (
                 <div className="text-center py-20 font-serif italic text-secondary">
                   No historical analytics data available.
                 </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};
