"use client";

import { useState, useEffect } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6"
    >
      <motion.div
        animate={{
          boxShadow: scrolled 
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        }}
        transition={{ duration: 0.3 }}
        className={`max-w-7xl mx-auto transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-2xl"
            : "bg-white/90 backdrop-blur-xl"
        } rounded-full border border-gray-200/50`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-18">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.div>
              <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                PropelusAI
              </div>
            </motion.div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/#home"
              className="px-5 py-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium text-sm"
            >
              Home
            </motion.a>

            <Link href="/services">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium text-sm cursor-pointer"
              >
                Services
              </motion.div>
            </Link>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/#about"
              className="px-5 py-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium text-sm"
            >
              About
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/#contact"
              className="px-5 py-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium text-sm"
            >
              Contact
            </motion.a>
          </nav>

          {/* CTA Button - Desktop */}
          <motion.div
            className="hidden lg:block"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 rounded-full px-6 py-2 text-white font-semibold text-sm h-auto">
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.div>
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
                <motion.a
                  href="/#home"
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
                >
                  Home
                </motion.a>
                <Link href="/services">
                  <motion.div 
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium cursor-pointer"
                  >
                    Services
                  </motion.div>
                </Link>
                <motion.a
                  href="/#about"
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
                >
                  About
                </motion.a>
                <motion.a
                  href="/#contact"
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
                >
                  Contact
                </motion.a>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full py-3 font-semibold mt-2">
                    Get Started
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}