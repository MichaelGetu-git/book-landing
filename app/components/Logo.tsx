"use client"

import React from 'react'
import { Rocket } from 'lucide-react'

const Logo = () => {
    return (
        <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
                <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-none transform rotate-45 group-hover:rotate-90 transition-transform duration-500">
                    <Rocket className="text-white w-6 h-6 transform -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
                </div>
                <div className="absolute -inset-1 bg-primary/20 blur-sm scale-110 group-hover:scale-125 transition-transform" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase">
                Dev<span className="text-primary">Book</span>
            </span>
        </div>
    )
}

export default Logo