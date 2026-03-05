import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 mb-8">
            <img 
              src="/logo.png" 
              alt="标桥·AI编标 Logo" 
              className="w-8 h-8 rounded-lg object-contain"
            />
            <span className="text-xl font-bold text-white tracking-tight">标桥·AI编标</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-slate-500">
            <p>主办单位：国泰新点软件股份有限公司</p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-slate-700"></div>
            <p>许可证：苏B2-20110362</p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-slate-700"></div>
            <p>版权所有：Copyright &copy; 苏ICP备10206980号-8</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
