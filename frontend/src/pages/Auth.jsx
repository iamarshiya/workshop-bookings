import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, User, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Base';

const Layout = ({ children, title, subtitle, onNavigate }) => (
  <div className="min-h-screen flex bg-[#FAF9F7]">
    {/* Side Visual */}
    <div className="hidden lg:flex w-1/2 bg-primary relative items-center justify-center overflow-hidden">
       <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1200" alt="Minimalist Art" className="w-full h-full object-cover" />
       </div>
       <div className="relative z-10 p-20 text-center">
          <h1 className="font-serif text-white text-6xl mb-8 italic tracking-tight">FOSSEE. <br />Education. <br />Innovation.</h1>
          <p className="text-gray-400 text-sm tracking-[0.3em] uppercase font-bold">IIT Bombay National Initiative</p>
       </div>
    </div>
    
    {/* Form Side */}
    <div className="w-full lg:w-1/2 flex flex-col p-10 md:p-24 relative">
       <button onClick={() => onNavigate('/')} className="mb-16 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Return to Website
       </button>
       <div className="max-w-md w-full mx-auto md:mx-0 fade-in flex-1 flex flex-col justify-center">
          <h2 className="font-serif text-5xl mb-4 tracking-tight">{title}</h2>
          <p className="text-secondary mb-12 font-medium">{subtitle}</p>
          {children}
       </div>
       <div className="mt-auto pt-12 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">© 2026 FOSSEE, IIT BOMBAY • SECURE GATEWAY</p>
       </div>
    </div>
  </div>
);

const Input = ({ label, icon: Icon, ...props }) => (
  <div className="mb-6">
    <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary mb-3">{label}</label>
    <div className="relative">
       <div className="absolute left-6 top-1/2 -translate-y-1/2"><Icon className="w-4 h-4 text-gray-300" /></div>
       <input {...props} className="w-full bg-white border border-black/5 rounded-full py-5 pl-14 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all shadow-sm" />
    </div>
  </div>
);

export const LoginPage = ({ onNavigate }) => (
  <Layout title="Login" subtitle="Access your FOSSEE student or admin account." onNavigate={onNavigate}>
     <form className="w-full" onSubmit={e => e.preventDefault()}>
        <Input label="Email Address" icon={Mail} type="email" placeholder="student@university.edu" />
        <Input label="Password" icon={Lock} type="password" placeholder="••••••••" />
        <div className="text-right mb-10">
           <button onClick={() => onNavigate('/forgot-password')} className="text-[10px] font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors">Forgot Password?</button>
        </div>
        <Button onClick={() => onNavigate('/dashboard')} className="w-full py-5 shadow-xl shadow-primary/10 mb-8">Login</Button>
        <p className="text-center text-xs text-secondary">
           Need an account? <button onClick={() => onNavigate('/signup')} className="text-primary font-bold hover:underline">Register Now</button>
        </p>
     </form>
  </Layout>
);

export const SignupPage = ({ onNavigate }) => (
  <Layout title="Create Account" subtitle="Register to start participating in FOSSEE workshops." onNavigate={onNavigate}>
     <form className="w-full" onSubmit={e => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
           <Input label="First Name" icon={User} type="text" placeholder="Julian" />
           <Input label="Last Name" icon={User} type="text" placeholder="Kaspar" />
        </div>
        <Input label="Email Address" icon={Mail} type="email" placeholder="student@university.edu" />
        <Input label="Create Password" icon={Lock} type="password" placeholder="••••••••" />
        <div className="flex gap-4 items-start mb-10 mt-2">
           <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
           <p className="text-[10px] leading-relaxed text-secondary font-medium">I agree to the terms and conditions of FOSSEE, IIT Bombay workshops.</p>
        </div>
        <Button onClick={() => onNavigate('/dashboard')} className="w-full py-5 shadow-xl shadow-primary/10 mb-8">Register</Button>
        <p className="text-center text-xs text-secondary">
           Already have an account? <button onClick={() => onNavigate('/login')} className="text-primary font-bold hover:underline">Log in</button>
        </p>
     </form>
  </Layout>
);

export const ForgotPasswordPage = ({ onNavigate }) => (
  <Layout title="Reset Password" subtitle="Enter your email to receive a password reset link." onNavigate={onNavigate}>
     <form className="w-full" onSubmit={e => e.preventDefault()}>
        <Input label="Email Address" icon={Mail} type="email" placeholder="student@university.edu" />
        <Button className="w-full py-5 shadow-xl shadow-primary/10 mb-8 mt-4">Reset Password</Button>
        <p className="text-center text-xs text-secondary">
           Remember your password? <button onClick={() => onNavigate('/login')} className="text-primary font-bold hover:underline">Return to Login</button>
        </p>
     </form>
  </Layout>
);
