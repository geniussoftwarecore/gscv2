import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/lang";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink, Sparkles, TrendingUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";

interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  coverImage?: string;
  technologies?: string[];
  year: string;
  client?: {
    name: string;
    company: string;
    position: string;
    logo?: string;
  };
  kpis?: Array<{
    label: string;
    value: string;
    description: string;
    icon?: string;
  }>;
  featured?: string;
}

export function PortfolioPreview() {
  const { dir } = useLanguage();
  const { t } = useTranslation();

  const { data: portfolioItems = [], isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ['/api/portfolio'],
  });

  const featuredItems = portfolioItems
    .filter(item => item.featured === 'true')
    .slice(0, 6);

  const displayItems = featuredItems.length > 0 
    ? featuredItems 
    : portfolioItems.slice(0, 6);

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-white to-brand-sky-light dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-64 mx-auto mb-6 animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                  <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white to-brand-sky-light dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {dir === 'rtl' ? 'أعمالنا المميزة' : 'Featured Work'}
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('portfolio.title')}
          </motion.h2>
          <motion.p
            className="text-lg text-brand-text-muted"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('portfolio.subtitle')}
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayItems.map((item, index) => (
            <Link 
              key={item.id} 
              href={`/portfolio/${item.slug}`}
              data-testid={`link-portfolio-${item.slug}`}
            >
              <motion.div
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-sky-base dark:border-gray-700 hover:border-primary cursor-pointer h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                data-testid={`portfolio-item-${item.slug}`}
              >
                {/* Featured Badge */}
                {item.featured === 'true' && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full shadow-lg">
                      <TrendingUp className="w-3 h-3" />
                      {dir === 'rtl' ? 'مميز' : 'Featured'}
                    </div>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative overflow-hidden h-56 bg-gradient-to-br from-brand-sky-base to-primary">
                  {item.coverImage || item.imageUrl ? (
                    <img
                      src={item.coverImage || item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-brand-sky-accent/30" />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-primary text-xs font-medium rounded-full backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Hover Button */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                  >
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white dark:bg-gray-900 text-primary border-2 border-white shadow-xl"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('portfolio.viewProject')}
                    </Button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Year Badge */}
                  {item.year && (
                    <div className="mb-3">
                      <span className="inline-block px-2 py-1 bg-brand-sky-light dark:bg-gray-700 text-brand-text-muted text-xs rounded">
                        {item.year}
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-brand-text-primary dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-brand-text-muted dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Client Info */}
                  {item.client && (
                    <div className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-xs text-brand-text-muted dark:text-gray-400">
                        {dir === 'rtl' ? 'العميل: ' : 'Client: '}
                        <span className="font-medium text-brand-text-primary dark:text-white">
                          {item.client.company || item.client.name}
                        </span>
                      </p>
                    </div>
                  )}

                  {/* Technology Tags */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                          +{item.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* KPIs Preview */}
                  {item.kpis && item.kpis.length > 0 && (
                    <div className="mb-4 p-3 bg-brand-sky-light/50 dark:bg-gray-700/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <p className="text-xs font-medium text-brand-text-primary dark:text-white">
                          {item.kpis[0].label}: <span className="text-primary">{item.kpis[0].value}</span>
                        </p>
                      </div>
                    </div>
                  )}

                  {/* View Project Link */}
                  <motion.div
                    className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300"
                    whileHover={{ x: dir === 'rtl' ? -5 : 5 }}
                  >
                    <span className="text-sm">{t('portfolio.viewProject')}</span>
                    <ArrowRight 
                      className={cn(
                        "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
                        dir === 'rtl' && "rotate-180 group-hover:-translate-x-1"
                      )} 
                    />
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {displayItems.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-brand-text-muted dark:text-gray-400 text-lg">
              {dir === 'rtl' ? 'لا توجد مشاريع متاحة حالياً' : 'No portfolio items available at the moment'}
            </p>
          </div>
        )}

        {/* View All Projects Button */}
        {displayItems.length > 0 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl transition-all duration-300 text-base font-semibold group"
                data-testid="view-all-portfolio"
              >
                {t('portfolio.viewAll')}
                <ArrowRight 
                  className={cn(
                    "w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1",
                    dir === 'rtl' && "rotate-180 mr-2 ml-0 group-hover:-translate-x-1"
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
