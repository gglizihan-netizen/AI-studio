import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '核心功能', href: '#tech-bid' },
    { name: '产品优势', href: '#advantages' },
    { name: '操作流程', href: '#workflow' },
    { name: '客户评价', href: '#testimonials' },
    { name: '常见问题', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-200/50 py-2' 
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="标桥·AI编标 Logo" 
              className="w-10 h-10 rounded-xl object-contain"
            />
            <span className="text-2xl font-extrabold tracking-tight text-[#3b1c8a]">
              标桥·AI编标
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5">
              免费试用
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none text-slate-900"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-2xl absolute top-full left-0 right-0">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold text-base transition-all shadow-lg shadow-purple-500/20">
                免费试用
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
