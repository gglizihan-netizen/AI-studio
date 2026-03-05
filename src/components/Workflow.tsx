import { motion } from 'motion/react';
import { UploadCloud, List, FileText, Database, Settings, Sparkles } from 'lucide-react';

export default function Workflow() {
  const techSteps = [
    { icon: UploadCloud, title: '上传招标文件', desc: '智能解析项目信息、评分点、清单内容等' },
    { icon: List, title: '目录大纲生成', desc: '基于评分点，智能生成逻辑严密的目录大纲' },
    { icon: FileText, title: '正文内容生成', desc: '调用专业知识库，自动生成定制化技术方案' },
  ];

  const commercialSteps = [
    { icon: UploadCloud, title: '上传招标文件', desc: '智能解析资质要求、投标条件等核心要素' },
    { icon: Database, title: '挑选企业信息', desc: '维护并挑选企业资质、业绩等关键信息' },
    { icon: Settings, title: '信息智能填充', desc: 'AI一键智能填充企业信息至投标模版' },
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden" id="workflow">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full mix-blend-multiply filter blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-500/5 rounded-full mix-blend-multiply filter blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm mb-6 border border-indigo-100"
          >
            <Sparkles className="w-4 h-4" />
            <span>智能编标流程</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            简单三步，搞定标书
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            无需复杂操作，流程简单清晰，让您的标书制作如虎添翼
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 技术标流程 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-indigo-900/5 border border-slate-100 relative group hover:shadow-indigo-900/10 transition-all duration-500"
          >

            
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-100 shadow-sm">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">技术标编制流程</h3>
            </div>
            
            <div className="space-y-10 relative">
              <div className="absolute left-7 top-10 bottom-10 w-0.5 bg-gradient-to-b from-blue-200 to-indigo-100"></div>
              {techSteps.map((step, idx) => (
                <div key={idx} className="relative flex gap-8 items-start group/step">
                  <div className="w-14 h-14 rounded-2xl bg-white border-4 border-blue-50 flex items-center justify-center text-blue-600 font-black text-xl z-10 shadow-lg shadow-blue-500/10 group-hover/step:scale-110 group-hover/step:bg-blue-600 group-hover/step:text-white group-hover/step:border-blue-200 transition-all duration-300">
                    {idx + 1}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 资信标流程 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-purple-900/5 border border-slate-100 relative group hover:shadow-purple-900/10 transition-all duration-500"
          >

            
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center border border-indigo-100 shadow-sm">
                <Database className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">资信标编制流程</h3>
            </div>
            
            <div className="space-y-10 relative">
              <div className="absolute left-7 top-10 bottom-10 w-0.5 bg-gradient-to-b from-indigo-200 to-purple-100"></div>
              {commercialSteps.map((step, idx) => (
                <div key={idx} className="relative flex gap-8 items-start group/step">
                  <div className="w-14 h-14 rounded-2xl bg-white border-4 border-indigo-50 flex items-center justify-center text-indigo-600 font-black text-xl z-10 shadow-lg shadow-indigo-500/10 group-hover/step:scale-110 group-hover/step:bg-indigo-600 group-hover/step:text-white group-hover/step:border-indigo-200 transition-all duration-300">
                    {idx + 1}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
