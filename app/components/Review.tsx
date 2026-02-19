"use client"

import React from 'react'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: "Jordan M.",
    role: "First-Time Founder",
    text: "The waitlist chapter alone helped me get 200 signups before I wrote a single line of code.",
  },
  {
    name: "Sarah K.",
    role: "Digital Product Creator",
    text: "I'd spent months watching YouTube videos. This collection gave me a system I could actually follow start to finish.",
  },
  {
    name: "Marcus T.",
    role: "Freelance Marketer",
    text: "The Meta Ads and Google chapters are worth the price alone practical, budget-conscious, and no hype.",
  },
]

const Review = () => {
  return (
    <section id="reviews" className="py-32   relative overflow-hidden font-segoe">
      <div className="container mx-auto px-6">

        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Reader{" "}
            <span className="text-primary">Reviews.</span>
          </h2>
          <div className="text-right max-w-sm">
            <div className="flex justify-end gap-1 mb-2">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-primary text-primary" />)}
            </div>
            <p className="text-gray-300 text-md md:text-lg font-extralight">
              Join thousands of entrepreneurs who skipped the guesswork.
            </p>
          </div>
        </div>

        {/* Testimonial Grid - Soft, card-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-background/80 border border-white/5 backdrop-blur-sm space-y-6 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="text-sm font-medium text-primary/70">
                  verified_review
                </div>
                <p className="text-sm text-gray-300 font-extralight leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-sm font-semibold text-white group-hover:bg-primary group-hover:shadow-md transition-all duration-300">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-white">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-300 font-medium">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Decorative Call to Action Grid Box */}
          <div className="p-10 bg-primary/10 border border-primary/40 rounded-3xl flex flex-col justify-center items-center text-center space-y-4 group cursor-pointer">
            <h3 className="text-xl font-bold text-white">
              Get The Complete <br /> 10-Book Collection.
            </h3>
            <button className="bg-primary text-white text-md font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:bg-primary/90 transition-all">
              Get The Collection
            </button>
          </div>
        </div>

        {/* Final CTA Button */}
        <div className="text-center pt-24">
          <button className="bg-primary text-white text-md font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:bg-primary/90 transition-all inline-flex items-center gap-6 group">
            Get The Complete Collection Today
            <div className="w-12 h-12 bg-white/10 text-white flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors text-xs font-medium">
              10 books. One proven system.
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Review