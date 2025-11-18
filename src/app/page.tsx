"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

// 3D Floating Orb with complex animations
const FloatingOrb = ({ delay = 0, size = 200, color = "blue", position = { x: 25, y: 25 } }) => {
  return (
    <motion.div
      animate={{
        y: [0, -60, 0],
        x: [0, 40, 0],
        rotate: [0, 360],
        rotateX: [0, 360],
        rotateY: [0, 360],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 20 + delay * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      className={`absolute w-${size} h-${size} bg-gradient-to-br from-${color}-400/20 to-${color}-600/20 rounded-full blur-3xl`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transformStyle: "preserve-3d",
      }}
    />
  );
};

// 3D Particle with trail effect
const Particle3D = ({ index }: { index: number }) => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomDelay = Math.random() * 5;
  const randomDuration = 8 + Math.random() * 12;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 2, 2, 0],
        x: [0, Math.random() * 300 - 150],
        y: [0, Math.random() * 300 - 150],
        rotateZ: [0, 360],
        rotateX: [0, 180],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
        ease: "easeInOut",
      }}
      className="absolute w-3 h-3 rounded-full"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
        background: `radial-gradient(circle, rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.4))`,
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
        transformStyle: "preserve-3d",
      }}
    />
  );
};

// 3D Rotating Cube
const RotatingCube = ({ delay = 0, position = { x: 20, y: 20 } }) => {
  return (
    <motion.div
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
        rotateZ: [0, 360],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
      className="absolute"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transformStyle: "preserve-3d",
        width: "80px",
        height: "80px",
      }}
    >
      <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl" />
    </motion.div>
  );
};

// Animated Ring
const AnimatedRing = ({ delay = 0, size = 300 }) => {
  return (
    <motion.div
      animate={{
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: "2px solid rgba(59, 130, 246, 0.2)",
        borderRadius: "50%",
        transformStyle: "preserve-3d",
      }}
    />
  );
};

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePosition({ x, y });
      
      const xParallax = (x / window.innerWidth - 0.5) * 30;
      const yParallax = (y / window.innerHeight - 0.5) * 30;
      
      mouseX.set(xParallax);
      mouseY.set(yParallax);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 overflow-hidden relative" style={{ perspective: "1500px" }}>
      {/* Multi-layer cursor system */}
      <motion.div
        className="fixed w-10 h-10 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.3))",
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.8)",
        }}
      />
      
      <motion.div
        className="fixed w-16 h-16 rounded-full border-2 border-blue-400/40 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
      
      <motion.div
        className="fixed w-24 h-24 rounded-full border border-purple-400/20 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 48,
          y: mousePosition.y - 48,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* 3D Background layers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Rings */}
        <AnimatedRing delay={0} size={400} />
        <AnimatedRing delay={2} size={600} />
        <AnimatedRing delay={4} size={800} />
        
        {/* Floating Orbs */}
        <FloatingOrb delay={0} size={400} color="blue" position={{ x: 10, y: 10 }} />
        <FloatingOrb delay={1} size={350} color="purple" position={{ x: 70, y: 20 }} />
        <FloatingOrb delay={2} size={300} color="pink" position={{ x: 50, y: 60 }} />
        <FloatingOrb delay={3} size={320} color="cyan" position={{ x: 20, y: 70 }} />
        <FloatingOrb delay={4} size={280} color="indigo" position={{ x: 80, y: 50 }} />
        
        {/* Rotating Cubes */}
        <RotatingCube delay={0} position={{ x: 15, y: 25 }} />
        <RotatingCube delay={2} position={{ x: 75, y: 35 }} />
        <RotatingCube delay={4} position={{ x: 45, y: 65 }} />
        
        {/* 3D Particles */}
        {Array.from({ length: 60 }).map((_, i) => (
          <Particle3D key={i} index={i} />
        ))}
      </div>

      {/* Enhanced 3D Parallax layers */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)",
            transform: "translateZ(100px)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          className="absolute top-40 right-40 w-48 h-48 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.3), transparent)",
            transform: "translateZ(150px)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/3 w-44 h-44 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent)",
            transform: "translateZ(120px)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      {/* Animated grid with depth */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Enhanced scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 origin-left z-50"
        style={{
          scaleX: smoothProgress,
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
        }}
      />
      
      {/* 3D Scroll indicator */}
      <motion.div
        className="fixed bottom-8 right-8 w-20 h-20 rounded-full z-50"
        style={{
          background: `conic-gradient(from 0deg, #3b82f6 ${scrollYProgress.get() * 100}%, rgba(255,255,255,0.1) ${scrollYProgress.get() * 100}%)`,
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
        }}
        whileHover={{ scale: 1.15, rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center backdrop-blur-xl">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-3 border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-transparent rounded-full"
          />
        </div>
      </motion.div>

      {/* Floating scroll to top */}
      <motion.button
        className="fixed bottom-28 right-8 z-40 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.2, rotate: 360 }}
        style={{
          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          boxShadow: "0 10px 40px rgba(59, 130, 246, 0.5)",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <motion.span
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-2xl font-bold"
        >
          ↑
        </motion.span>
      </motion.button>

      <Header />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: -20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <ServicesSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: -20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <WhyChooseSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: -20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <TrustSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: -20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <CTASection />
      </motion.div>

      <Footer />
    </main>
  );
}