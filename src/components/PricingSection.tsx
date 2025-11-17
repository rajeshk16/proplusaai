"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Sparkles } from "lucide-react";

const pricingData = {
  "AI & ML": [
    { service: "Custom AI Model Development", range: "$15,000 - $50,000", description: "Tailored AI solutions for specific business needs" },
    { service: "ML Model Training & Optimization", range: "$8,000 - $25,000", description: "Fine-tuning and optimization of ML models" },
    { service: "NLP Solutions", range: "$12,000 - $40,000", description: "Text analysis and language understanding" },
    { service: "Computer Vision", range: "$10,000 - $35,000", description: "Image and video analysis systems" },
  ],
  "Data Engineering": [
    { service: "Data Pipeline Development", range: "$10,000 - $30,000", description: "Automated data processing workflows" },
    { service: "ETL Process Design", range: "$8,000 - $22,000", description: "Extract, transform, load solutions" },
    { service: "Data Warehouse Setup", range: "$15,000 - $45,000", description: "Centralized data storage architecture" },
    { service: "Real-time Data Processing", range: "$12,000 - $35,000", description: "Stream processing systems" },
  ],
  "Cloud Services": [
    { service: "Cloud Migration", range: "$20,000 - $60,000", description: "Complete cloud transition services" },
    { service: "Infrastructure as Code", range: "$8,000 - $25,000", description: "Automated infrastructure deployment" },
    { service: "DevOps Implementation", range: "$15,000 - $40,000", description: "CI/CD pipeline setup" },
    { service: "Cloud Optimization", range: "$5,000 - $15,000", description: "Cost and performance optimization" },
  ],
  "Development": [
    { service: "Full-Stack Development", range: "$25,000 - $80,000", description: "Complete web application development" },
    { service: "API Development", range: "$8,000 - $20,000", description: "RESTful and GraphQL APIs" },
    { service: "Mobile App Development", range: "$30,000 - $100,000", description: "iOS and Android applications" },
    { service: "System Integration", range: "$10,000 - $35,000", description: "Third-party service integration" },
  ],
};

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("AI & ML");

  return (
    <section id="pricing" ref={ref} className="py-16 sm:py-20 lg:py-24 bg-white">
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
              Flexible Pricing
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible pricing tailored to your project scope and requirements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 sm:grid-cols-4 mb-8 sm:mb-12 h-auto p-1 sm:p-2">
              {Object.keys(pricingData).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="py-3 sm:py-4 text-xs sm:text-sm font-semibold"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(pricingData).map(([category, services]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-blue-50 to-purple-50">
                        <tr>
                          <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">
                            Service
                          </th>
                          <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">
                            Description
                          </th>
                          <th className="px-4 sm:px-6 py-4 text-right text-xs sm:text-sm font-semibold text-gray-900">
                            Price Range
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {services.map((item, idx) => (
                          <motion.tr
                            key={item.service}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-medium text-gray-900">
                              {item.service}
                            </td>
                            <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-gray-600">
                              {item.description}
                            </td>
                            <td className="px-4 sm:px-6 py-4 text-right text-sm sm:text-base font-semibold text-blue-600">
                              {item.range}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-base sm:text-lg text-gray-600">
            Need a custom solution? Contact us for a personalized quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
}