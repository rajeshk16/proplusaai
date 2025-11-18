"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Brain, Database, Cloud, Code, LineChart, Shield, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & ML", icon: Brain },
  { id: "data", label: "Data Engineering", icon: Database },
  { id: "cloud", label: "Cloud Solutions", icon: Cloud },
  { id: "development", label: "Development", icon: Code },
];

const projects = [
  {
    id: 1,
    title: "AI-Powered Customer Analytics Platform",
    category: "ai",
    description: "Built a comprehensive ML platform that increased customer retention by 45% through predictive analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Machine Learning", "Python", "TensorFlow"],
    results: "45% increase in retention",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Real-Time Data Pipeline Architecture",
    category: "data",
    description: "Designed and implemented a scalable data pipeline processing 10M+ events daily with 99.9% uptime.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Apache Kafka", "Spark", "AWS"],
    results: "10M+ events/day",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Multi-Cloud Infrastructure Migration",
    category: "cloud",
    description: "Successfully migrated enterprise infrastructure to multi-cloud setup, reducing costs by 40%.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["AWS", "Azure", "Kubernetes"],
    results: "40% cost reduction",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 4,
    title: "E-Commerce Platform Modernization",
    category: "development",
    description: "Rebuilt legacy e-commerce platform with microservices, improving performance by 300%.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["React", "Node.js", "Microservices"],
    results: "300% faster performance",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Predictive Maintenance System",
    category: "ai",
    description: "Developed IoT-based predictive maintenance system reducing equipment downtime by 60%.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    tags: ["IoT", "Machine Learning", "Python"],
    results: "60% less downtime",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 6,
    title: "Enterprise Data Warehouse",
    category: "data",
    description: "Built centralized data warehouse enabling real-time business intelligence across 50+ departments.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Snowflake", "dbt", "Tableau"],
    results: "50+ departments connected",
    color: "from-indigo-500 to-purple-500"
  },
];

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" ref={ref} className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block bg-white/80 backdrop-blur-xl border border-blue-200 rounded-full px-4 sm:px-6 py-2 mb-4 shadow-lg"
          >
            <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Success Stories
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Explore our portfolio of successful projects and case studies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12 px-2"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {category.icon && <category.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              <span className="whitespace-nowrap">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity`} />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
                
                <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${project.color} text-white text-xs sm:text-sm font-semibold`}>
                  <LineChart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {project.results}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/50 text-white rounded-full px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg font-semibold group">
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}