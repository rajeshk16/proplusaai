"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Phone, Mail, ArrowRight, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
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
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-white/20 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6"
          >
            <span className="text-sm sm:text-base font-semibold text-white">
              Ready to Get Started?
            </span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-white/90 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Schedule a free consultation with our experts and discover how AI can propel your business to new heights.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: -20 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              y: -8, 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 text-center shadow-xl transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Calendar className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Free Consultation</h3>
            <p className="text-sm text-gray-600">30-minute strategy session</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: -20 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ 
              y: -8, 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 text-center shadow-xl transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Users className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Strategy</h3>
            <p className="text-sm text-gray-600">Tailored solutions for your needs</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: -20 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              y: -8, 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 text-center shadow-xl transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4 shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Implementation</h3>
            <p className="text-sm text-gray-600">Quick turnaround times</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center space-y-6"
        >
          <motion.div 
            whileHover={{ scale: 1.05, rotateY: 5 }} 
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50 rounded-full px-12 py-6 text-lg font-semibold shadow-2xl group">
              Schedule Your Meeting
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
            <motion.a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 hover:underline"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Call Us Directly</span>
            </motion.a>
            <motion.a 
              href="mailto:contact@propelusai.com" 
              className="flex items-center gap-2 hover:underline"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Send Email</span>
            </motion.a>
          </div>

          <motion.p 
            className="text-white/80 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Available for clients in America, Europe, Middle East, and India
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}