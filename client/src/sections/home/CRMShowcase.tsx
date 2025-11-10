import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/lang";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";
import { 
  Users, 
  TrendingUp, 
  Headphones, 
  ExternalLink,
  BarChart3,
  UserCheck,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Sparkles,
  Target,
  Award,
  DollarSign,
  Globe,
  PlayCircle
} from "lucide-react";

export function CRMShowcase() {
  const { dir } = useLanguage();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const tabs = [
    {
      id: 0,
      label: dir === 'rtl' ? 'الميزات' : 'Features',
      icon: Sparkles
    },
    {
      id: 1,
      label: dir === 'rtl' ? 'الفوائد' : 'Benefits',
      icon: Target
    },
    {
      id: 2,
      label: dir === 'rtl' ? 'النتائج' : 'Results',
      icon: Award
    }
  ];

  const stats = [
    {
      value: '70%',
      label: dir === 'rtl' ? 'زيادة في الإنتاجية' : '70% Productivity Boost',
      icon: TrendingUp,
      color: 'from-green-400 to-emerald-600'
    },
    {
      value: '50%',
      label: dir === 'rtl' ? 'توفير في التكاليف' : '50% Cost Reduction',
      icon: DollarSign,
      color: 'from-blue-400 to-blue-600'
    },
    {
      value: '24/7',
      label: dir === 'rtl' ? 'دعم فني متواصل' : '24/7 Technical Support',
      icon: Headphones,
      color: 'from-purple-400 to-purple-600'
    },
    {
      value: '100+',
      label: dir === 'rtl' ? 'شركة مصرية' : 'Egyptian Companies',
      icon: Globe,
      color: 'from-orange-400 to-red-600'
    }
  ];

  const features = [
    {
      title: dir === 'rtl' ? 'إدارة العملاء الذكية' : 'Smart Customer Management',
      desc: dir === 'rtl' 
        ? 'تتبع كامل لتفاعلات العملاء مع إدارة متقدمة للعلاقات'
        : 'Complete tracking of customer interactions with advanced relationship management',
      icon: Users,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: dir === 'rtl' ? 'مسار مبيعات ديناميكي' : 'Dynamic Sales Pipeline',
      desc: dir === 'rtl'
        ? 'تتبع الصفقات من البداية للإتمام مع تنبيهات تلقائية'
        : 'Track deals from start to close with automated alerts',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: dir === 'rtl' ? 'تقارير تحليلية متقدمة' : 'Advanced Analytics Reports',
      desc: dir === 'rtl'
        ? 'تقارير مفصلة في الوقت الفعلي لاتخاذ قرارات مدروسة'
        : 'Detailed real-time reports for informed decision making',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: dir === 'rtl' ? 'دعم فني متكامل' : 'Integrated Support System',
      desc: dir === 'rtl'
        ? 'نظام تذاكر احترافي مع تتبع SLA وأتمتة الردود'
        : 'Professional ticketing with SLA tracking and automated responses',
      icon: MessageSquare,
      color: 'from-orange-500 to-red-600'
    },
    {
      title: dir === 'rtl' ? 'أتمتة ذكية' : 'Smart Automation',
      desc: dir === 'rtl'
        ? 'أتمتة المهام المتكررة وتوفير الوقت والجهد'
        : 'Automate repetitive tasks and save time and effort',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: dir === 'rtl' ? 'أمان متقدم' : 'Advanced Security',
      desc: dir === 'rtl'
        ? 'حماية بيانات العملاء مع صلاحيات متعددة المستويات'
        : 'Protect customer data with multi-level permissions',
      icon: Shield,
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const benefits = [
    {
      title: dir === 'rtl' ? 'زيادة المبيعات بنسبة 40%' : 'Increase Sales by 40%',
      desc: dir === 'rtl'
        ? 'تتبع أفضل للفرص وتحويل أعلى للصفقات'
        : 'Better opportunity tracking and higher deal conversion',
      icon: TrendingUp
    },
    {
      title: dir === 'rtl' ? 'توفير 15 ساعة أسبوعياً' : 'Save 15 Hours Weekly',
      desc: dir === 'rtl'
        ? 'أتمتة المهام الروتينية والتركيز على النمو'
        : 'Automate routine tasks and focus on growth',
      icon: Clock
    },
    {
      title: dir === 'rtl' ? 'رضا العملاء 95%' : '95% Customer Satisfaction',
      desc: dir === 'rtl'
        ? 'استجابة أسرع وخدمة عملاء أفضل'
        : 'Faster response and better customer service',
      icon: Award
    },
    {
      title: dir === 'rtl' ? 'توفير 50% من التكاليف' : '50% Cost Savings',
      desc: dir === 'rtl'
        ? 'بديل فعّال من حيث التكلفة للأنظمة المكلفة'
        : 'Cost-effective alternative to expensive systems',
      icon: DollarSign
    }
  ];

  const results = [
    {
      company: dir === 'rtl' ? 'شركة التصنيع الذكية' : 'Smart Manufacturing Co.',
      result: dir === 'rtl' ? 'زيادة 60% في كفاءة المبيعات' : '60% increase in sales efficiency',
      industry: dir === 'rtl' ? 'صناعة' : 'Manufacturing'
    },
    {
      company: dir === 'rtl' ? 'مجموعة التجارة الإلكترونية' : 'E-commerce Group',
      result: dir === 'rtl' ? 'تحسين 80% في خدمة العملاء' : '80% improvement in customer service',
      industry: dir === 'rtl' ? 'تجارة إلكترونية' : 'E-commerce'
    },
    {
      company: dir === 'rtl' ? 'شركة الخدمات اللوجستية' : 'Logistics Services Inc.',
      result: dir === 'rtl' ? 'توفير 40% في تكاليف التشغيل' : '40% reduction in operating costs',
      industry: dir === 'rtl' ? 'لوجستيات' : 'Logistics'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-text-primary via-blue-900 to-brand-text-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(76, 29, 149, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(29, 78, 216, 0.1) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white font-medium">
              {dir === 'rtl' ? 'نظام ERPNext v15 الأحدث' : 'Latest ERPNext v15 System'}
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {dir === 'rtl' 
              ? 'نظام إدارة العملاء الذي يُسرّع نمو أعمالك'
              : 'The CRM System That Accelerates Your Business Growth'
            }
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {dir === 'rtl' 
              ? 'حل شامل لإدارة العملاء والمبيعات والدعم الفني - مصمم خصيصاً للشركات المصرية'
              : 'Complete solution for customer, sales, and support management - designed for Egyptian businesses'
            }
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                whileHover={{ y: -8, scale: 1.05 }}
                data-testid={`stat-${index}`}
              >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300",
                  stat.color
                )} />
                
                <div className="relative z-10">
                  <div className={cn(
                    "w-12 h-12 bg-gradient-to-br rounded-xl flex items-center justify-center mb-4",
                    stat.color
                  )}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Interactive Tabs */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-white text-brand-text-primary shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`tab-${tab.id}`}
                >
                  <TabIcon className="w-5 h-5" />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <motion.div
                key="features"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                      whileHover={{ y: -8 }}
                      data-testid={`feature-${index}`}
                    >
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300",
                        feature.color
                      )} />
                      
                      <div className="relative z-10">
                        <div className={cn(
                          "w-14 h-14 bg-gradient-to-br rounded-xl flex items-center justify-center mb-4 transition-transform duration-300",
                          feature.color,
                          hoveredFeature === index ? "scale-110 rotate-6" : ""
                        )}>
                          <FeatureIcon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === 1 && (
              <motion.div
                key="benefits"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
              >
                {benefits.map((benefit, index) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      data-testid={`benefit-${index}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <BenefitIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                          <p className="text-gray-300">{benefit.desc}</p>
                        </div>
                      </div>
                      <CheckCircle2 className="absolute top-4 right-4 w-6 h-6 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === 2 && (
              <motion.div
                key="results"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <motion.div
                      key={index}
                      className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                      whileHover={{ x: 10 }}
                      data-testid={`result-${index}`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Award className="w-5 h-5 text-yellow-400" />
                            <h3 className="text-lg font-bold text-white">{result.company}</h3>
                          </div>
                          <p className="text-gray-300 mb-2">{result.result}</p>
                          <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-sm text-gray-300">
                            {result.industry}
                          </span>
                        </div>
                        <ArrowRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-white text-brand-text-primary hover:bg-gray-100 px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              data-testid="open-demo-cta"
            >
              <a href="https://erpnext-demo.frappe.cloud/" target="_blank" rel="noopener noreferrer">
                <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {dir === 'rtl' ? 'شاهد العرض التوضيحي' : 'Watch Live Demo'}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-text-primary px-8 py-6 rounded-xl transition-all duration-300"
              data-testid="contact-sales-cta"
            >
              <a href="https://wa.me/967735158003" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5 mr-2" />
                {dir === 'rtl' ? 'تحدث مع فريق المبيعات' : 'Talk to Sales Team'}
              </a>
            </Button>
          </div>

          <motion.p
            className="text-gray-300 text-sm mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {dir === 'rtl' 
              ? '✓ تجربة مجانية لمدة 14 يوم  •  ✓ دعم فني مجاني  •  ✓ تدريب مجاني للفريق'
              : '✓ 14-day free trial  •  ✓ Free technical support  •  ✓ Free team training'
            }
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
