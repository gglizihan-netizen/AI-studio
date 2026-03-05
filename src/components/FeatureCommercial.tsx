import { motion } from 'motion/react';
import { Building, FileCheck2, Database, ImagePlus, ShieldCheck, CheckCircle } from 'lucide-react';

export default function FeatureCommercial() {
  const features = [
    { icon: Building, title: '企业信息一键绑定', desc: '统一维护企业资质、业绩库，投标时一键调用' },
    { icon: FileCheck2, title: 'AI 解析商务标模板', desc: '智能识别招标文件中的商务格式要求与填报项' },
    { icon: Database, title: '自动生成资信标正文', desc: '将企业信息精准填入模板，自动生成规范的资信标内容' },
    { icon: ImagePlus, title: '电子证照一键插入', desc: '自动匹配并插入所需的企业营业执照、资质证书等扫描件' },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="commercial-bid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative lg:col-span-7"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-50 rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
            <img 
              src="/Commercial.png" 
              alt="资信标生成界面" 
              className="w-full h-auto rounded-3xl shadow-xl border border-slate-100"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 lg:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              资信标
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              告别手动填写企业信息与业绩，AI 标准化生成商务内容，格式规范，适配各类招投标资信标要求。
            </p>
            
            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100/50">
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
          
        </div>
      </div>
    </section>
  );
}
