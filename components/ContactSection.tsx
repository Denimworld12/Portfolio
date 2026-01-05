import React, { useRef, useState } from 'react'; // Added useRef and useState
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser'; // Import the email system

export const ContactSection: React.FC = () => {
  // NEW: Form reference and Status states
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // NEW: Handle Email Submission
  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('idle');

    // Replace these strings with your actual EmailJS credentials
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_7av9y0o";
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_jw8fw7n";
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "H2Tz4ZDb2xWXHX9Lf";
   if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(() => {
          setStatus('success');
          formRef.current?.reset(); 
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          setStatus('error');
        })
        .finally(() => {
          setIsSending(false);
          setTimeout(() => setStatus('idle'), 5000);
        });
    }
  };

  return (
    <section id="contact" className="py-24 bg-base-200 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Let's build <span className="text-primary italic">something great</span> together.
            </h2>
            <p className="text-lg text-base-content/70">
              I'm always open to new projects, freelance opportunities, or collaborative ventures. 
              Drop me a line and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold opacity-50 uppercase tracking-widest">Email</p>
                  <a href="mailto:nikhilrakeshg@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">nikhilrakeshg@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold opacity-50 uppercase tracking-widest">Location</p>
                  <p className="text-lg font-semibold">Ulhasnagar, Kalyan, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="btn btn-ghost btn-circle bg-base-100 hover:bg-primary hover:text-white transition-all shadow-md">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="card bg-base-100 shadow-2xl border border-base-content/5 p-8">
            {/* UPDATED: Added ref and onSubmit handler */}
            <form ref={formRef} className="space-y-6" onSubmit={handleSendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label font-semibold">Your Name</label>
                  {/* UPDATED: Added 'name' attributes for EmailJS template */}
                  <input name="user_name" type="text" placeholder="John Doe" className="input input-bordered focus:ring-2 focus:ring-primary w-full" required />
                </div>
                <div className="form-control">
                  <label className="label font-semibold">Email Address</label>
                  <input name="user_email" type="email" placeholder="john@example.com" className="input input-bordered focus:ring-2 focus:ring-primary w-full" required />
                </div>
              </div>
              <div className="form-control">
                <label className="label font-semibold">Subject</label>
                <input name="subject" type="text" placeholder="Freelance Project Inquiry" className="input input-bordered focus:ring-2 focus:ring-primary w-full" required />
              </div>
              <div className="form-control">
                <label className="label font-semibold">Message</label>
                <textarea name="message" rows={4} placeholder="Hi Nikhil, I have a cool project idea..." className="textarea textarea-bordered focus:ring-2 focus:ring-primary w-full h-32" required></textarea>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="alert alert-success shadow-sm flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Message sent! I'll be in touch soon.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="alert alert-error shadow-sm flex items-center gap-2">
                  <AlertCircle size={20} />
                  <span>Oops! Something went wrong. Try again.</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSending}
                className={`btn btn-primary w-full shadow-lg shadow-primary/20 flex items-center gap-2 ${isSending ? 'loading' : ''}`}
              >
                {isSending ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};