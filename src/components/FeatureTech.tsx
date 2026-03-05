import { motion } from 'motion/react';
import { FileSearch, ListTree, FileOutput, Settings2, CheckCircle } from 'lucide-react';

export default function FeatureTech() {
  const features = [
    { icon: FileSearch, title: 'AI 解析招标文件', desc: '深度理解招标需求，精准提取关键信息与评分点' },
    { icon: ListTree, title: '自动生成适配目录', desc: '基于评分点与项目特性，智能构建逻辑严密的目录大纲' },
    { icon: FileOutput, title: '一键生成正文', desc: '调用专业知识库，快速生成高质量、定制化技术方案正文' },
    { icon: Settings2, title: '自定义格式导出', desc: '一键导出符合招标要求的标准Word/PDF文档，排版精美' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="tech-bid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              技术标
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              支持 5-20000 页标书定制，正文 / 表格 / 流程图 / 组织架构图一键生成，适配 99% 类技术标编制。
            </p>
            
            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm border border-blue-100/50">
                      <feature.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:col-span-7"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <img 
              src="/Tech.png" 
              alt="技术标生成界面" 
              className="w-full h-auto rounded-3xl shadow-xl border border-slate-100"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
