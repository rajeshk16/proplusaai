"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Rocket, TrendingUp, Target, Users, CheckCircle2, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Analysis",
    description: "We start by understanding your business goals, challenges, and current situation through comprehensive analysis.",
    color: "from-blue-500 to-cyan-500",
    decorativeIcons: [Target, Users]
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy Development",
    description: "Based on our findings, we create a customized strategy that aligns with your objectives and budget.",
    color: "from-purple-500 to-pink-500",
    decorativeIcons: [Target, BarChart3]
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementation",
    description: "Our expert team executes the strategy with precision, keeping you informed throughout the process.",
    color: "from-orange-500 to-red-500",
    decorativeIcons: [CheckCircle2, Users]
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimization & Growth",
    description: "We continuously monitor, analyze, and optimize performance to ensure maximum ROI and sustainable growth.",
    color: "from-green-500 to-emerald-500",
    decorativeIcons: [BarChart3, Target]
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative background icons */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <Search className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 text-blue-500" />
        <Lightbulb className="absolute top-40 right-20 w-32 h-32 sm:w-40 sm:h-40 text-purple-500" />
        <Rocket className="absolute bottom-40 left-1/4 w-28 h-28 sm:w-36 sm:h-36 text-orange-500" />
        <TrendingUp className="absolute bottom-20 right-1/3 w-24 h-24 sm:w-32 sm:h-32 text-green-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-purple-200 rounded-full px-4 sm:px-6 py-2 mb-4 shadow-lg"
          >
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              How We Work
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Our Proven Process
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            We follow a systematic approach to ensure every project delivers exceptional results and exceeds your expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            const DecorativeIcon1 = step.decorativeIcons[0];
            const DecorativeIcon2 = step.decorativeIcons[1];
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Connecting Arrow - Desktop only */}
                {idx < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + idx * 0.15 }}
                    className="hidden lg:block absolute top-12 left-[55%] w-[90%] h-[2px] origin-left z-0"
                  >
                    <div className="relative w-full h-full">
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-30`} />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-300 border-y-4 border-y-transparent" />
                    </div>
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full group overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Decorative small icons in background */}
                  <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <DecorativeIcon1 className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" />
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <DecorativeIcon2 className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
                  </div>

                  {/* Number Badge */}
                  <div className="relative mb-3 sm:mb-4">
                    <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <span className="text-xl sm:text-2xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>

                  {/* Main Icon with enhanced styling */}
                  <div className="relative mb-3 sm:mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${step.color} shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <StepIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${step.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl sm:rounded-b-3xl`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}