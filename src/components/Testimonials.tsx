import { motion } from 'motion/react';
import { Quote, Star, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      content: "以前一个项目要3-5个人熬夜一周，现在用了 AI 编标助手，1个人2天就能搞定，而且排版比我们人工做的还漂亮。真的是投标神器！",
      author: "张经理",
      role: "某大型建筑集团 投标主管",
      avatar: "https://picsum.photos/seed/avatar1/100/100",
      rating: 5
    },
    {
      content: "最让我惊喜的是它的素材库储备，非常专业。对于一些我们不熟悉的领域，AI 给出的方案非常有参考价值，帮我们拿下了几个关键项目。",
      author: "李总",
      role: "某市政工程公司 总经理",
      avatar: "https://picsum.photos/seed/avatar2/100/100",
      rating: 5
    },
    {
      content: "界面非常简洁，上手很快。自动排版功能简直是救星，再也不用为了调整Word格式头疼了。强烈推荐给所有做标书的同行。",
      author: "王工",
      role: "某设计院 资深造价师",
      avatar: "https://picsum.photos/seed/avatar3/100/100",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden relative" id="testimonials">
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
            <span>客户口碑</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            客户如何评价我们
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            来自一线投标人员的真实反馈，用真实效果证明实力。
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-[2rem] p-10 relative hover:shadow-2xl hover:shadow-indigo-900/10 transition-all duration-500 border border-slate-100 group hover:-translate-y-2 flex flex-col h-full"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-slate-100 rotate-180 group-hover:text-indigo-50 transition-colors duration-500" />
              
              <div className="flex gap-1.5 mb-8 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400 drop-shadow-sm" />
                ))}
              </div>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-10 relative z-10 flex-grow font-medium">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-5 mt-auto relative z-10 pt-6 border-t border-slate-100">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-slate-900 text-lg">{testimonial.author}</div>
                  <div className="text-sm font-medium text-indigo-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
