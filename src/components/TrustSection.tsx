"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Heart, TrendingUp } from "lucide-react";

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-purple-200 rounded-full px-4 sm:px-6 py-2 mb-6 shadow-lg"
            >
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                500+ Successful Projects
              </span>
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PropelusAI?
              </span>
            </motion.h2>

            <motion.p 
              className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We understand the unique challenges faced by creators, coaches, solopreneurs, and growing companies. Our mission is to provide trustworthy, results-driven solutions that help you scale with confidence.
            </motion.p>

            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Proven Expertise</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Years of experience helping businesses across America, Europe, Middle East, and India.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Dedicated Support</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Personal attention and ongoing support to ensure your success.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <TrendingUp className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Measurable Results</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Data-driven strategies that deliver tangible business growth.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="relative transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <motion.img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="PropelusAI team working together"
                className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl"
            >
              <div className="text-center">
                <motion.p 
                  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  500+
                </motion.p>
                <p className="text-sm text-gray-600 font-semibold">Projects</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}