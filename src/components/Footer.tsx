import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                PropelusAI
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Transforming businesses with cutting-edge AI and machine learning
              solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all flex items-center justify-center group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all flex items-center justify-center group"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all flex items-center justify-center group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4 text-white">
              Services
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                >
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Data Engineering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Custom Development
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4 text-white">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4 text-white">
              Contact
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
              <li className="flex items-start gap-3 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>contact@propelusai.com</span>
              </li>
              <li className="flex items-start gap-3 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 hover:text-blue-400 transition-colors">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>123 AI Street, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-xs sm:text-sm">
          <p className="flex items-center gap-2">
            &copy; 2025 PropelusAI. Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
            by our team
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}