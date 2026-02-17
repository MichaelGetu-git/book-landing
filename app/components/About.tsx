"use client"

import React from 'react'
import { Laptop, Database, Rocket, Layout, Server, DollarSign } from 'lucide-react'

const features = [
    {
        icon: Laptop,
        title: "Front-end Mastery",
        description: "Build immersive UIs with modern React patterns and advanced CSS techniques."
    },
    {
        icon: Database,
        title: "Backend Scalability",
        description: "Master database architecture and high-performance server logic."
    },
    {
        icon: Rocket,
        title: "Deployment & OPS",
        description: "Zero-downtime deployment strategies for global web applications."
    },
    {
        icon: Layout,
        title: "Revolutionary Design",
        description: "Implement award-winning aesthetics inspired by high-tech neo-brutalism."
    },
    {
        icon: Server,
        title: "API Optimization",
        description: "Write ultra-fast APIs that scale to millions of concurrent requests."
    },
    {
        icon: DollarSign,
        title: "Financial Freedom",
        description: "Monetize your skills and build products that generate passive income."
    }
]

const About = () => {
    return (
        <section id="about" className="py-32 bg-background border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header Block */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-revolutionary uppercase text-white leading-none">
                            Revolutionary <br />
                            <span className="text-primary italic">Learning.</span>
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            This isn't just a book. It's an architectural blueprint for your career as a world-class developer.
                        </p>
                    </div>
                    <div className="hidden md:block text-[8rem] font-black text-white/[0.03] select-none leading-none">
                        01
                    </div>
                </div>

                {/* Divided Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-white/5">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-12 border-r border-b border-white/5 hover:bg-primary/[0.02] transition-colors duration-500 relative overflow-hidden"
                        >
                            {/* Feature Number */}
                            <div className="absolute top-8 right-8 text-xs font-black text-white/10 group-hover:text-primary/30 transition-colors">
                                {(index + 1).toString().padStart(2, '0')}
                            </div>

                            <div className="space-y-6">
                                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center rounded-none group-hover:border-primary/50 group-hover:shadow-brutalist transition-all duration-300 transform group-hover:-translate-y-1">
                                    <feature.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>

                            {/* Hover decorative line */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700" />
                        </div>
                    ))}
                </div>

            </div>

            {/* Side Label */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[8rem] font-black text-white/[0.01] select-none pointer-events-none rotate-90 origin-right">
                FEATURES
            </div>
        </section>
    )
}

export default About