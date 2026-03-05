import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#f8f9fc]">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-400/20 blur-[120px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-pink-400/10 blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-blue-100/50 text-blue-600 font-medium text-sm mb-8 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span>全新一代 AI 编标神器</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight"
          >
            赢在投标起跑线 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              标桥·AI编标 精准辅助投标
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            借助 AI 强大能力，1分钟解析上百页招标文件。智能生成完整技术标与资信标方案，告别熬夜加班，一站式解决编标难题。
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold text-lg transition-all shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 group">
              立即开始试用
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: '编标效率提升', value: '10x' },
            { label: '中标率提升', value: '35%' },
            { label: '累计生成标书', value: '10W+' },
            { label: '累计服务企业', value: '5000+' },
          ].map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl shadow-slate-200/50 rounded-3xl p-8 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
