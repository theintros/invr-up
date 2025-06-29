import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  TrendingUp, 
  Shield, 
  Target, 
  Users, 
  BarChart3, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe,
  Smartphone
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Seus investimentos protegidos com as mais avançadas tecnologias de segurança.',
      color: 'text-success-400'
    },
    {
      icon: Target,
      title: 'Estratégias Personalizadas',
      description: 'Planos de investimento sob medida para seus objetivos financeiros.',
      color: 'text-primary-400'
    },
    {
      icon: BarChart3,
      title: 'Análise Avançada',
      description: 'Relatórios detalhados e insights em tempo real do mercado financeiro.',
      color: 'text-accent-400'
    },
    {
      icon: Users,
      title: 'Suporte Especializado',
      description: 'Equipe de consultores experientes disponível para orientá-lo.',
      color: 'text-warning-400'
    }
  ]

  const stats = [
    { number: '10K+', label: 'Clientes Ativos', icon: Users },
    { number: 'R$ 2B+', label: 'Patrimônio Gerido', icon: TrendingUp },
    { number: '98%', label: 'Satisfação', icon: Star },
    { number: '15+', label: 'Anos de Experiência', icon: Award }
  ]

  const benefits = [
    'Rentabilidade acima da média do mercado',
    'Diversificação inteligente de portfólio',
    'Acompanhamento em tempo real',
    'Suporte 24/7 especializado',
    'Tecnologia de ponta em IA',
    'Transparência total nas operações'
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container-max relative z-10 text-center px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Invista no Seu
              <span className="block gradient-text">Futuro Financeiro</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforme seus sonhos em realidade com estratégias de investimento inteligentes e personalizadas.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link to="/contact" className="btn-primary group">
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="btn-secondary">
              Saiba Mais
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-primary-400" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-secondary-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white/5 backdrop-blur-sm">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Por que Escolher a <span className="gradient-text">INVR-UP</span>?
            </h2>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
              Oferecemos soluções completas para maximizar seus investimentos com segurança e inteligência.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl card-hover group"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r from-white/10 to-white/5 mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Benefícios Exclusivos para
                <span className="block gradient-text">Nossos Clientes</span>
              </h2>
              <p className="text-lg text-secondary-300 mb-8 leading-relaxed">
                Descubra as vantagens que fazem da INVR-UP a escolha certa para seus investimentos.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-success-400 flex-shrink-0" />
                    <span className="text-secondary-200">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/services" className="btn-primary group">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass-effect p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl">
                    <Globe className="h-8 w-8 text-primary-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">150+</div>
                    <div className="text-sm text-secondary-300">Países Atendidos</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-success-500/20 to-success-600/20 rounded-xl">
                    <Zap className="h-8 w-8 text-success-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-secondary-300">Suporte Ativo</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-xl">
                    <Smartphone className="h-8 w-8 text-accent-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">App</div>
                    <div className="text-sm text-secondary-300">Mobile & Web</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-warning-500/20 to-warning-600/20 rounded-xl">
                    <Award className="h-8 w-8 text-warning-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">A+</div>
                    <div className="text-sm text-secondary-300">Rating</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600/20 to-accent-600/20 backdrop-blur-sm">
        <div className="container-max text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pronto para Transformar
              <span className="block gradient-text">Seu Futuro Financeiro?</span>
            </h2>
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de investidores que já descobriram o poder dos investimentos inteligentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary group text-lg px-8 py-4">
                Começar Investindo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="btn-secondary text-lg px-8 py-4">
                Ver Portfólio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home