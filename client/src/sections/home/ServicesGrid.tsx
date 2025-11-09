import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/lang";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Service } from "@shared/schema";
import { Link } from "wouter";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Link as LinkIcon, 
  Palette, 
  Server,
  ArrowRight,
  Code,
  Megaphone,
  TrendingUp,
  Hammer,
  Cloud,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  FileText,
  Briefcase,
  Target
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function ServicesGrid() {
  const { dir, lang } = useLanguage();
  const { t } = useTranslation();

  const { data: servicesResponse, isLoading } = useQuery<{success: boolean, data: Service[]}>({
    queryKey: ["/api/services"],
  });

  const services = servicesResponse?.data || [];
  const displayedServices = services.slice(0, 6);

  const iconMap: Record<string, any> = {
    'globe': Globe,
    'smartphone': Smartphone,
    'database': Database,
    'link': LinkIcon,
    'palette': Palette,
    'server': Server,
    'code': Code,
    'megaphone': Megaphone,
    'trending-up': TrendingUp,
    'hammer': Hammer,
    'cloud': Cloud,
    'package': Package,
    'shopping-cart': ShoppingCart,
    'users': Users,
    'bar-chart-3': BarChart3,
    'file-text': FileText,
    'briefcase': Briefcase,
    'target': Target
  };

  const getIcon = (iconName: string) => {
    return iconMap[iconName] || Globe;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-sky-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            className="text-lg text-brand-text-muted"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-brand-sky-base">
                <Skeleton className="w-16 h-16 rounded-2xl mb-4" />
                <Skeleton className="h-6 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-6" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))
          ) : displayedServices.length > 0 ? (
            displayedServices.map((service, index) => {
              const IconComponent = getIcon(service.icon);
              
              return (
                <Link key={service.id} href="/services">
                  <motion.div
                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-sky-base hover:border-primary overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    data-testid={`service-card-${service.id}`}
                  >
                    {/* Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-brand-sky-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />

                    {/* Icon */}
                    <motion.div
                      className="relative z-10 mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-brand-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-brand-text-muted mb-6 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>

                      {/* Service Info */}
                      {(service.startingPrice || service.deliveryTime) && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.startingPrice && (
                            <span className="text-xs bg-brand-sky-light text-primary px-3 py-1 rounded-full font-medium">
                              {lang === 'ar' ? 'يبدأ من' : 'Starting at'} {service.startingPrice}
                            </span>
                          )}
                          {service.deliveryTime && (
                            <span className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full font-medium">
                              {service.deliveryTime}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Learn More Link */}
                      <motion.div
                        className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300"
                        whileHover={{ x: dir === 'rtl' ? -5 : 5 }}
                      >
                        <span>{t('services.learnMore')}</span>
                        <ArrowRight 
                          className={cn(
                            "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
                            dir === 'rtl' && "rotate-180 group-hover:-translate-x-1"
                          )} 
                        />
                      </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 w-1 h-1 bg-brand-sky-accent rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                    />
                  </motion.div>
                </Link>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-brand-text-muted text-lg">
                {lang === 'ar' ? 'لا توجد خدمات متاحة حالياً' : 'No services available at the moment'}
              </p>
            </div>
          )}
        </div>

        {/* View All Services Button */}
        {!isLoading && services.length > 6 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl transition-all duration-300 text-base font-semibold group"
                data-testid="view-all-services"
              >
                {t('services.viewAll')}
                <ArrowRight 
                  className={cn(
                    "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1",
                    dir === 'rtl' ? "rotate-180 mr-2 ml-0 group-hover:-translate-x-1" : "ml-2"
                  )} 
                />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}