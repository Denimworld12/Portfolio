import React, { useState, useEffect } from 'react';
import { FileText, Download, Eye, Award, X } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const resumeUrl = "/resume.pdf";
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (isPreviewOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isPreviewOpen]);

  const handleView = () => {
    setIsPreviewOpen(true);
  };

  return (
    <section id="resume" className="py-24 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="flex-1 space-y-6">
            <div className="badge badge-outline badge-primary font-bold uppercase tracking-widest py-3 px-4">
              Portfolio Asset
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              My <span className="text-primary italic">Professional</span> Trajectory
            </h2>
            <p className="text-lg text-base-content/70">
              Passionate B.E. student at Rajiv Gandhi Institute of Technology. Experienced in high-impact hackathons and real-world agricultural tech projects.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <li className="flex items-center gap-2 font-semibold text-sm">
                <Award className="text-primary" size={18} /> Hackathon Winner
              </li>
              <li className="flex items-center gap-2 font-semibold text-sm">
                <Award className="text-primary" size={18} /> Full Stack Specialist
              </li>
              <li className="flex items-center gap-2 font-semibold text-sm">
                <Award className="text-primary" size={18} /> AI Pipeline Integrator
              </li>
              <li className="flex items-center gap-2 font-semibold text-sm">
                <Award className="text-primary" size={18} /> Blockchain Enthusiast
              </li>
            </ul>
          </div>

          <div className="w-full md:w-[400px]">
            <div className="card bg-base-200 border border-primary/20 shadow-2xl overflow-hidden group">
              <div className="bg-primary/10 h-80 flex items-center justify-center relative overflow-hidden">
                <object
                  data={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  type="application/pdf"
                  className="w-full h-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <FileText size={120} className="text-primary/20" />
                </object>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20 backdrop-blur-sm">
                   <div className="flex gap-4">
                      {/* FIX: Added flex items-center justify-center to button */}
                      <button 
                        onClick={handleView}
                        className="btn btn-circle btn-primary flex items-center justify-center shadow-xl tooltip" 
                        data-tip="View Fullscreen"
                      >
                        <Eye size={20} />
                      </button>
                      
                      {/* FIX: Added flex items-center justify-center to link */}
                      <a 
                        href={resumeUrl} 
                        download="Nikhil_Gupta_CV.pdf"
                        className="btn btn-circle btn-secondary flex items-center justify-center shadow-xl tooltip" 
                        data-tip="Download PDF"
                      >
                        <Download size={20} />
                      </a>
                   </div>
                </div>
              </div>

              <div className="card-body p-6 text-center">
                <h3 className="text-xl font-black">Nikhil_Gupta_CV.pdf</h3>
                <p className="text-sm opacity-60 italic mb-4">Latest update: December 2025</p>
                <div className="flex flex-col gap-3">
                  <a 
                    href={resumeUrl} 
                    download 
                    className="btn btn-primary btn-block flex items-center gap-2"
                  >
                    <Download size={18} /> Download Resume
                  </a>
                  <button 
                    onClick={() => window.open('https://linkedin.com/in/nikhilgupta795', '_blank')} 
                    className="btn btn-outline btn-block flex items-center gap-2"
                  >
                    <Eye size={18} /> Online Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPreviewOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-10">
          <div className="relative w-full h-full max-w-5xl bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 bg-base-200 border-b border-base-300">
              <h3 className="font-bold flex items-center gap-2 text-base-content">
                <FileText size={20} className="text-primary" /> Resume Preview
              </h3>
              <button 
                onClick={() => setIsPreviewOpen(false)}
                className="btn btn-circle btn-ghost btn-sm flex items-center justify-center"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 bg-gray-500 overflow-hidden">
              <iframe 
                src={`${resumeUrl}#view=FitH`} 
                className="w-full h-full border-none"
                title="Resume Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};