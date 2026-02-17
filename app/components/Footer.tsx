"use client"

import React from 'react'
import { Twitter, Github, Globe, ArrowRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="author" className="bg-background border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 py-32 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

          {/* Left Column: Author Bio & Massive Label */}
          <div className="space-y-12">
            <div className="flex items-center gap-8">
              <div className="w-24 h-24 bg-white/5 border border-white/10 flex items-center justify-center font-bold text-2xl text-primary">
                XR
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-bold text-white tracking-tight">Xiaoying Riley</h3>
                <p className="text-sm font-bold text-primary tracking-[0.3em]">Lead Product Designer</p>
              </div>
            </div>

            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed max-w-xl">
              <p>
                Revolutionizing how developers learn design and architecture. This project represents five years of research into high-performance web applications and award-winning aesthetics.
              </p>
              <p className="text-sm font-medium">
                Template by <span className="text-white">Xiaoying Riley</span>. Published under <span className="text-primary italic hover:underline cursor-pointer">Commercial License v2.0</span>.
              </p>
            </div>

            <div className="flex items-center gap-8">
              <SocialIcon icon={Twitter} label="Twitter" />
              <SocialIcon icon={Github} label="GitHub" />
              <SocialIcon icon={Globe} label="Website" />
            </div>
          </div>

          {/* Right Column: High-Impact Signoff */}
          <div className="flex flex-col justify-between items-start lg:items-end text-left lg:text-right space-y-12">
            <div className="space-y-4">
              <h2 className="text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold text-white/[0.03] select-none leading-none tracking-tighter">
                FIN.
              </h2>
              <div className="text-sm font-bold text-white/20 tracking-[1em]">END_OF_DOCUMENT</div>
            </div>

            <div className="space-y-6 w-full lg:max-w-xs">
              <p className="text-muted-foreground text-sm tracking-widest font-bold">Ready to build the future?</p>
              <button className="w-full bg-white text-black font-bold py-6 shadow-brutalist hover-shadow-brutalist transition-all flex items-center justify-center gap-4">
                Purchase Book <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Global Bottom Bar */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-[10px] font-bold text-white/30 tracking-[0.3em]">
          <div>© 2026 REVOLUTION_PROJECT_ALL_RIGHTS_RESERVED</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-primary transition-colors">Privacy_Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms_of_Service</a>
            <a href="#" className="hover:text-primary transition-colors">License_Agreement</a>
          </div>
        </div>
      </div>

      {/* Bottom Geometric Accents */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 -mb-32 -mr-32 rotate-45" />
    </footer>
  )
}

const SocialIcon = ({ icon: Icon, label }: { icon: any, label: string }) => (
  <a
    href="#"
    className="group flex items-center gap-3 text-xs font-bold text-white/50 tracking-widest hover:text-primary transition-all underline decoration-white/10 decoration-2 underline-offset-8 hover:decoration-primary"
  >
    <Icon size={16} />
    {label}
  </a>
)

export default Footer