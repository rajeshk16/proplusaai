"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, DollarSign, Zap, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Cutting-edge AI solutions",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Up to 57% below industry rates",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Rapid implementation timelines",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Dedicated ongoing assistance",
    color: "from-purple-500 to-pink-500"
  },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-4"
          >
            <span className="text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Are You Looking For?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered services can be customized and combined to create the perfect solution for your unique business needs. Save significantly compared to industry standard rates while getting premium quality and dedicated support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
