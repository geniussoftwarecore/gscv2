import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/lang";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";
import { 
  Package, 
  DollarSign, 
  Users, 
  BarChart3, 
  ShoppingCart, 
  FileText, 
  Building2, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export function ProblemSolution() {
  const { dir, lang } = useLanguage();
  const { t } = useTranslation();

  const erpFeatures = [
    {
      icon: DollarSign,
      title: lang === 'ar' ? 'إدارة الحسابات' : 'Accounting',
      description: lang === 'ar' 
        ? 'نظام محاسبي متكامل مع إدارة الفواتير والمدفوعات والتقارير المالية'
        : 'Complete accounting system with invoicing, payments, and financial reports',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      icon: Package,
      title: lang === 'ar' ? 'إدارة المخزون' : 'Inventory Management',
      description: lang === 'ar'
        ? 'تتبع المخزون والمنتجات بدقة مع تنبيهات تلقائية وإدارة المستودعات'
        : 'Track inventory and products accurately with automated alerts and warehouse management',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200'
    },
    {
      icon: ShoppingCart,
      title: lang === 'ar' ? 'المبيعات والمشتريات' : 'Sales & Purchasing',
      description: lang === 'ar'
        ? 'إدارة دورة المبيعات الكاملة من العروض حتى التسليم مع إدارة الموردين'
        : 'Manage complete sales cycle from quotes to delivery with supplier management',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200'
    },
    {
      icon: Users,
      title: lang === 'ar' ? 'إدارة علاقات العملاء' : 'CRM',
      description: lang === 'ar'
        ? 'نظام CRM متقدم لإدارة العملاء والفرص التجارية وتحسين التواصل'
        : 'Advanced CRM system for managing customers, opportunities, and improving communication',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200'
    },
    {
      icon: Building2,
      title: lang === 'ar' ? 'الموارد البشرية' : 'HR & Payroll',
      description: lang === 'ar'
        ? 'إدارة الموظفين والحضور والرواتب بنظام شامل وسهل الاستخدام'
        : 'Manage employees, attendance, and payroll with comprehensive and easy-to-use system',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-50 to-teal-100',
      borderColor: 'border-teal-200'
    },
    {
      icon: BarChart3,
      title: lang === 'ar' ? 'التقارير والتحليلات' : 'Reports & Analytics',
      description: lang === 'ar'
        ? 'تقارير مفصلة ولوحات تحكم تفاعلية لاتخاذ قرارات مستنيرة'
        : 'Detailed reports and interactive dashboards for informed decision-making',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'from-pink-50 to-pink-100',
      borderColor: 'border-pink-200'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-brand-sky-light/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-brand-sky-accent/10 rounded-full text-sm font-medium text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            {lang === 'ar' ? 'ميزات ERPNext' : 'ERPNext Features'}
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {lang === 'ar' 
              ? 'حلول برمجية متكاملة لإدارة أعمالك'
              : 'Integrated Software Solutions for Your Business'
            }
          </motion.h2>

          <motion.p
            className="text-lg text-brand-text-muted max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {lang === 'ar'
              ? 'نظام ERPNext يوفر لك جميع الأدوات التي تحتاجها لإدارة عملك بكفاءة واحترافية'
              : 'ERPNext system provides all the tools you need to manage your business efficiently and professionally'
            }
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {erpFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className={cn(
                  "group relative bg-white rounded-2xl p-6 border-2 hover:shadow-2xl transition-all duration-300",
                  feature.borderColor
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Background Gradient */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300",
                  feature.color
                )} />

                {/* Icon */}
                <motion.div 
                  className={cn(
                    "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4",
                    feature.color
                  )}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-brand-text-primary mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <ArrowRight className="w-5 h-5 text-primary" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              data-testid="erp-features-cta-primary"
            >
              <FileText className={cn(
                "w-5 h-5 group-hover:scale-110 transition-transform",
                lang === 'ar' ? 'ml-2' : 'mr-2'
              )} />
              {lang === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote'}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl transition-all duration-300"
              data-testid="erp-features-cta-secondary"
            >
              {lang === 'ar' ? 'تعرف على المزيد' : 'Learn More'}
            </Button>
          </div>

          <p className="text-sm text-brand-text-muted">
            {lang === 'ar'
              ? 'نحن هنا لمساعدتك في اختيار الحل الأمثل لعملك'
              : 'We are here to help you choose the best solution for your business'
            }
          </p>
        </motion.div>
      </div>
    </section>
  );
}