"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award, ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

const stats = [
  { icon: TrendingUp, value: "Fast Growth", label: "Accelerate your business growth with proven strategies", color: "from-blue-500 to-cyan-500" },
  { icon: Users, value: "Trusted Solutions", label: "Reliable and secure technology solutions you can count on", color: "from-purple-500 to-pink-500" },
  { icon: Award, value: "Global Reach", label: "Expand your presence across international markets", color: "from-orange-500 to-red-500" },
];

// 3D Floating Icon Component
const FloatingIcon = ({ Icon, delay = 0 }: { Icon: any; delay?: number }) => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotateY: [0, 360],
        rotateX: [0, 15, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      className="absolute"
      style={{ transformStyle: "preserve-3d" }}
    >
      <Icon className="w-8 h-8 text-blue-500/30" />
    </motion.div>
  );
};

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 15]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-24">
      {/* Enhanced 3D Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          style={{ transformStyle: "preserve-3d" }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            rotateX: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"
          style={{ transformStyle: "preserve-3d" }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            rotateZ: [0, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
          style={{ transformStyle: "preserve-3d" }}
        />
        
        {/* Floating 3D Icons */}
        <div className="absolute top-20 left-20">
          <FloatingIcon Icon={Sparkles} delay={0} />
        </div>
        <div className="absolute top-40 right-32">
          <FloatingIcon Icon={TrendingUp} delay={1} />
        </div>
        <div className="absolute bottom-40 left-40">
          <FloatingIcon Icon={Award} delay={2} />
        </div>
      </div>

      {/* Content with 3D transforms */}
      <motion.div 
        style={{ y, opacity, scale, rotateX }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Propel Your Business to{" "}
            <span className="relative inline-block">
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              >
                New Heights
              </motion.span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto px-4"
          >
            Expert marketing and IT solutions for creators, entrepreneurs, and growing companies. Transform your digital presence with confidence and trust.
          </motion.p>

          {/* CTA Buttons with enhanced 3D */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 px-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 5, z: 50 }} 
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 h-auto rounded-full font-semibold group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: -5, z: 50 }} 
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:bg-white hover:border-purple-500 hover:text-purple-600 text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 h-auto rounded-full font-semibold"
              >
                View Our Services
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced 3D Glass Effect Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4"
          style={{ perspective: "1000px" }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, rotateX: -20, z: -100 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
              transition={{ duration: 0.6, delay: 1 + idx * 0.15 }}
              whileHover={{ 
                scale: 1.05, 
                y: -12,
                rotateY: 5,
                rotateX: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-gray-200 hover:border-transparent transition-all duration-300 shadow-xl hover:shadow-2xl transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Enhanced Gradient Border on Hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
              
              {/* 3D Inner Shadow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transform: "translateZ(10px)" }} />
              
              <div className="relative" style={{ transform: "translateZ(20px)" }}>
                <motion.div 
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 mx-auto shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm sm:text-base font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}