import { motion } from 'motion/react';
import { Target, Cpu, LayoutGrid, MousePointerClick, Sparkles } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    {
      icon: Target,
      title: '99% 评分点精准匹配',
      desc: 'AI 深度解析招标文件，核心评分点无遗漏，确保每一分都能稳稳拿下。',
      gradient: 'from-emerald-400 to-emerald-600',
      bgLight: 'bg-emerald-50',
      text: 'text-emerald-600',
      shadow: 'hover:shadow-emerald-500/20',
      border: 'group-hover:border-emerald-200'
    },
    {
      icon: Cpu,
      title: '全流程 AI 智能化',
      desc: '从解析到导出，无需人工大量介入，高效省心，将精力留给更有价值的决策。',
      gradient: 'from-blue-400 to-blue-600',
      bgLight: 'bg-blue-50',
      text: 'text-blue-600',
      shadow: 'hover:shadow-blue-500/20',
      border: 'group-hover:border-blue-200'
    },
    {
      icon: LayoutGrid,
      title: '100+ 细分领域覆盖',
      desc: '建筑 / 市政 / 装修 / 水利等，全行业标书模板适配，满足多样化投标需求。',
      gradient: 'from-violet-400 to-violet-600',
      bgLight: 'bg-violet-50',
      text: 'text-violet-600',
      shadow: 'hover:shadow-violet-500/20',
      border: 'group-hover:border-violet-200'
    },
    {
      icon: MousePointerClick,
      title: '零门槛操作',
      desc: '无需专业编标经验，像搭积木一样做标书，新手也能快速上手，即刻成为编标专家。',
      gradient: 'from-orange-400 to-orange-600',
      bgLight: 'bg-orange-50',
      text: 'text-orange-600',
      shadow: 'hover:shadow-orange-500/20',
      border: 'group-hover:border-orange-200'
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="advantages">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm mb-6 border border-indigo-100"
          >
            <Sparkles className="w-4 h-4" />
            <span>核心竞争力</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            为什么选择标桥·AI编标？
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            告别传统编标的繁琐与低效，用科技赋能投标全流程，建立绝对的竞争优势。
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`p-8 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 ${adv.shadow} ${adv.border} hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${adv.gradient} opacity-5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500`} />
              
              <div className={`w-16 h-16 rounded-2xl ${adv.bgLight} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-white`}>
                <adv.icon className={`w-8 h-8 ${adv.text}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{adv.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
