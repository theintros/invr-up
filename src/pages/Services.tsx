import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  TrendingUp, 
  Shield, 
  BarChart3, 
  Users, 
  Target, 
  Zap, 
  ArrowRight,
  CheckCircle,
  PieChart,
  DollarSign,
  Globe,
  Smartphone
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Gestão de Portfólio',
      description: 'Gestão profissional e personalizada do seu portfólio de investimentos com estratégias diversificadas.',
      features: [
        'Análise de perfil de risco',
        'Diversificação inteligente',
        'Rebalanceamento automático',
        'Relatórios mensais detalhados'
      ],
      price: 'A partir de R$ 500/mês',
      popular: true
    },
    {
      icon: BarChart3,
      title: 'Consultoria Financeira',
      description: 'Orientação especializada para tomada de decisões financeiras estratégicas e planejamento patrimonial.',
      features: [
        'Planejamento financeiro pessoal',
        'Análise de investimentos',
        'Estratégias de aposentadoria',
        'Consultoria tributária'
      ],
      price: 'R$ 200/hora',
      popular: false
    },
    {
      icon: Shield,
      title: 'Proteção Patrimonial',
      description: 'Estratégias avançadas para proteção e preservação do seu patrimônio contra riscos diversos.',
      features: [
        'Estruturação patrimonial',
        'Seguros especializados',
        'Planejamento sucessório',
        'Blindagem jurídica'
      ],
      price: 'Sob consulta',
      popular: false
    },
    {
      icon: PieChart,
      title: 'Análise de Mercado',
      description: 'Relatórios e insights detalhados sobre tendências de mercado e oportunidades de investimento.',
      features: [
        'Relatórios semanais',
        'Análise técnica e fundamentalista',
        'Alertas de oportunidades',
        'Webinars exclusivos'
      ],
      price: 'R$ 99/mês',
      popular: false
    },
    {
      icon: Target,
      title: 'Investimentos Temáticos',
      description: 'Acesso a investimentos especializados em setores específicos e tendências globais.',
      features: [
        'ESG e sustentabilidade',
        'Tecnologia e inovação',
        'Mercados emergentes',
        'Criptomoedas e DeFi'
      ],
      price: 'Taxa de performance',
      popular: false
    },
    {
      icon: Smartphone,
      title: 'Plataforma Digital',
      description: 'Acesso completo à nossa plataforma digital com ferramentas avançadas de investimento.',
      features: [
        'App mobile e web',
        'Dashboard personalizado',
        'Alertas em tempo real',
        'Suporte 24/7'
      ],
      price: 'Gratuito',
      popular: false
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção individual com estratégias sob medida para seus objetivos.'
    },
    {
      icon: Zap,
      title: 'Tecnologia Avançada',
      description: 'Utilizamos IA e machine learning para otimizar decisões de investimento.'
    },
    {
      icon: Globe,
      title: 'Diversificação Global',
      description: 'Acesso a mercados internacionais para máxima diversificação do portfólio.'
    },
    {
      icon: DollarSign,
      title: 'Transparência Total',
      description: 'Taxas claras e relatórios detalhados sobre performance e custos.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Análise de Perfil',
      description: 'Avaliamos seu perfil de risco, objetivos e situação financeira atual.'
    },
    {
      step: '02',
      title: 'Estratégia Personalizada',
      description: 'Desenvolvemos uma estratégia de investimento sob medida para você.'
    },
    {
      step: '03',
      title: 'Implementação',
      description: 'Executamos a estratégia com acompanhamento contínuo e ajustes necessários.'
    },
    {
      step: '04',
      title: 'Monitoramento',
      description: 'Acompanhamos performance e fazemos otimizações constantes.'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nossos <span className="gradient-text">Serviços</span>
            </h1>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed">
              Soluções completas e personalizadas para maximizar seus investimentos e alcançar seus objetivos financeiros.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white/5 backdrop-blur-sm">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`glass-effect p-8 rounded-2xl card-hover group relative ${
                  service.popular ? 'ring-2 ring-primary-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 mr-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {service.title}
                    </h3>
                    <div className="text-primary-400 font-medium">
                      {service.price}
                    </div>
                  </div>
                </div>

                <p className="text-secondary-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-success-400 flex-shrink-0" />
                      <span className="text-secondary-200 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="w-full btn-primary group text-center block"
                >
                  Contratar Serviço
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que Escolher Nossos <span className="gradient-text">Serviços</span>?
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              Diferenciais que fazem da INVR-UP a escolha certa para seus investimentos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-8 w-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-secondary-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white/5 backdrop-blur-sm">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Como <span className="gradient-text">Trabalhamos</span>
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              Nosso processo estruturado garante resultados consistentes e alinhados com seus objetivos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-effect p-6 rounded-2xl text-center card-hover">
                  <div className="text-4xl font-bold gradient-text mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-secondary-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-12 rounded-3xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar você a alcançar seus objetivos financeiros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary group text-lg px-8 py-4">
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="btn-secondary text-lg px-8 py-4">
                Ver Resultados
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Services