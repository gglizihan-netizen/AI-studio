import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Subtle Background Gradient Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[100px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-400/10 blur-[100px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 tracking-tight">
            准备好感受极速编标效率了吗？
          </h2>
          
          <button className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold text-lg transition-all shadow-lg shadow-purple-500/25 mx-auto">
            立即开始试用
          </button>
      
          <p className="mt-6 text-sm text-slate-500">
            开始使用标桥 · AI 编标，体验极速标书制作流程
          </p>
        </motion.div>
      </div>
    </section>
  );
}
