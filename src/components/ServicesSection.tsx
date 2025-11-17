"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, Cloud, Code, LineChart, Shield, Cpu, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    features: [
      "Custom AI model development",
      "Natural language processing",
      "Computer vision solutions",
      "Predictive analytics"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Database,
    title: "Data Engineering",
    features: [
      "Data pipeline architecture",
      "ETL process optimization",
      "Real-time data processing",
      "Data warehouse design"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    features: [
      "Cloud migration services",
      "Multi-cloud architecture",
      "Serverless applications",
      "Cloud cost optimization"
    ],
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Code,
    title: "Custom Development",
    features: [
      "Full-stack development",
      "API design & integration",
      "Microservices architecture",
      "Legacy system modernization"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    features: [
      "Dashboard development",
      "KPI tracking systems",
      "Advanced analytics",
      "Data visualization"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    features: [
      "Security audits",
      "Compliance consulting",
      "Data encryption",
      "Access control systems"
    ],
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    features: [
      "IoT platform development",
      "Sensor data analytics",
      "Edge computing",
      "Device management"
    ],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Automation",
    features: [
      "Process automation",
      "RPA implementation",
      "Workflow optimization",
      "Integration solutions"
    ],
    color: "from-yellow-500 to-orange-500"
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 sm:px-6 py-2 mb-4"
          >
            <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What We Offer
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI and technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent relative overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-gray-600 group-hover:text-gray-700">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}