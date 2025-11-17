"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    category: "AI & Machine Learning",
    items: [
      {
        name: "Custom AI Solutions",
        description: "Tailored AI models for your business",
      },
      {
        name: "ML Model Development",
        description: "Advanced machine learning systems",
      },
      {
        name: "Natural Language Processing",
        description: "Text analysis and understanding",
      },
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      { name: "Data Engineering", description: "Robust data pipelines" },
      {
        name: "Business Intelligence",
        description: "Actionable insights from data",
      },
      { name: "Predictive Analytics", description: "Future trend forecasting" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "Cloud Migration", description: "Seamless cloud transitions" },
      {
        name: "DevOps Solutions",
        description: "Automated deployment pipelines",
      },
      {
        name: "Infrastructure Optimization",
        description: "Cost-effective scaling",
      },
    ],
  },
];

export default function Header() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6"
      >
        <div
          className={`max-w-7xl mx-auto transition-all duration-500 ${
            scrolled
              ? "bg-white/95 backdrop-blur-2xl shadow-xl"
              : "bg-white/90 backdrop-blur-xl shadow-lg"
          } rounded-full border border-gray-200/50`}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-18">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                PropelusAI
              </div>
            </motion.div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#home"
                className="px-5 py-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium text-sm"
              >
                Home
              </motion.a>

              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 px-5 py-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium text-sm"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${megaMenuOpen ? "rotate-180" : ""}`}
                  />
                </motion.button>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#work"
                className="px-5 py-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium text-sm"
              >
                Work
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#pricing"
                className="px-5 py-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium text-sm"
              >
                Pricing
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#about"
                className="px-5 py-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium text-sm"
              >
                About
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#contact"
                className="px-5 py-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium text-sm"
              >
                Contact
              </motion.a>
            </nav>

            {/* CTA Button - Desktop */}
            <motion.div
              className="hidden lg:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 rounded-full px-6 py-2 text-white font-semibold text-sm h-auto">
                Get Started
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden border-t border-gray-200"
              >
                <nav className="px-4 py-4 space-y-2">
                  <a
                    href="#home"
                    className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#services"
                    className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
                  >
                    Services
                  </a>
                  <a
                    href="#work"
                    className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
                  >
                    Work
                  </a>
                  <a
                    href="#pricing"
                    className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
                  >
                    Pricing
                  </a>
                  <a
                    href="#about"
                    className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
                  >
                    Contact
                  </a>
                  <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full py-3 font-semibold mt-2">
                    Get Started
                  </Button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Mega Menu - Centered Outside Header */}
      <AnimatePresence>
        {megaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-28 z-40 px-4 sm:px-6 lg:px-8"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-100 p-8">
                <div className="grid grid-cols-3 gap-6">
                  {services.map((category, idx) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <h3 className="text-sm font-bold text-blue-600 mb-3 uppercase tracking-wider">
                        {category.category}
                      </h3>
                      <ul className="space-y-1">
                        {category.items.map((item) => (
                          <li key={item.name}>
                            <a
                              href="#"
                              className="group flex items-start gap-2 p-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all"
                            >
                              <div className="flex-1">
                                <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2 text-sm">
                                  {item.name}
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                                </div>
                                <div className="text-xs text-gray-600 mt-0.5">
                                  {item.description}
                                </div>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}