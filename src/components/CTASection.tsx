"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Briefcase, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Free initial consultation and strategy session",
  "Customized solutions for your specific needs",
  "Ongoing support and optimization",
  "Transparent pricing with no hidden fees",
];

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-block bg-white/20 backdrop-blur-xl rounded-full px-6 py-2 mb-6"
            >
              <span className="text-base font-semibold text-white">
                Ready to Get Started?
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Transform Your Business Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of successful businesses that have accelerated their growth with PropelusAI's expert services. Let's discuss how we can help you achieve your goals.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className="text-white text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - CTA Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Schedule Free Consultation
                  </h3>
                  <p className="text-gray-600">
                    Book a 30-minute strategy session with our experts
                  </p>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl text-white rounded-full py-6 text-lg font-semibold group">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    View Portfolio
                  </h3>
                  <p className="text-gray-600">
                    Explore our case studies and success stories
                  </p>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="w-full border-2 border-gray-300 text-gray-700 hover:bg-white hover:border-purple-500 hover:text-purple-600 rounded-full py-6 text-lg font-semibold group">
                  View Portfolio
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-xl rounded-2xl p-6"
            >
              <Phone className="w-6 h-6 text-white" />
              <div>
                <p className="text-white/80 text-sm">Or call us directly</p>
                <a href="tel:+1234567890" className="text-white text-xl font-bold hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}