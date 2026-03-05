import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "AI写的内容，内容会重复吗？",
      a: "不会。因为AI 每次生成的目录（大纲）都不一样，而目录决定了正文内容怎么写。并且每个用户对字数、格式等要求都各不相同，AI 根据特定要求进行编写，所以最终内容肯定不重复。"
    },
    {
      q: "AI生成的字数会有偏差吗？",
      a: "AI生成时会存在一定的字数偏差。因为AI会根据实际情况自动调整，比如某个章节内容比较简单，那么AI就可以用比较少的字数叙述清楚，所以会有一定的字数结余；相反若章节比较重要，AI也会相应地多分配一些字数。"
    },
    {
      q: "如何让AI输出的方案内容更贴切？",
      a: "1、关键环节增加字数：把重要章节的字数设置调高。字数越多，AI 写得越详细。\n2、提要求要明确：在“正文要求”中把具体编制需求/思路写清楚，AI 会根据要求写得更有针对性。"
    },
    {
      q: "产品如何收费？",
      a: "标桥·AI编标使用字数制收费，技术标功能根据AI实际生成的字数收取相应的字数；资信标按照AI填充的页面，每页收取1000字"
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight"
          >
            常见问题解答
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600"
          >
            了解更多关于标桥·AI编标的细节
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:bg-[#f6faff] transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-lg text-slate-900">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-slate-600 whitespace-pre-line leading-relaxed border-t border-slate-100 pt-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
