import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Smile, 
  Shield, 
  Award, 
  Users, 
  Calendar, 
  Star, 
  ArrowRight,
  CheckCircle,
  Heart,
  Clock,
  MapPin,
  Phone,
  Sparkles,
  Zap
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Tecnologia de Ponta',
      description: 'Equipamentos modernos e técnicas avançadas para tratamentos mais precisos e confortáveis.',
      color: 'text-blue-600'
    },
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Cuidado personalizado com foco no bem-estar e conforto de cada paciente.',
      color: 'text-teal-600'
    },
    {
      icon: Award,
      title: 'Profissionais Qualificados',
      description: 'Equipe especializada com anos de experiência e formação continuada.',
      color: 'text-indigo-600'
    },
    {
      icon: Sparkles,
      title: 'Resultados Excepcionais',
      description: 'Transformamos sorrisos com tratamentos eficazes e duradouros.',
      color: 'text-emerald-600'
    }
  ]

  const stats = [
    { number: '15+', label: 'Anos de Experiência', icon: Award },
    { number: '5000+', label: 'Pacientes Atendidos', icon: Users },
    { number: '98%', label: 'Satisfação', icon: Star },
    { number: '24h', label: 'Suporte de Emergência', icon: Clock }
  ]

  const services = [
    {
      name: 'Implantes Dentários',
      description: 'Reposição de dentes perdidos com implantes de titânio de alta qualidade.',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'A partir de R$ 1.200'
    },
    {
      name: 'Ortodontia',
      description: 'Correção do posicionamento dos dentes com aparelhos tradicionais e invisíveis.',
      image: 'https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'A partir de R$ 180/mês'
    },
    {
      name: 'Clareamento Dental',
      description: 'Dentes mais brancos e brilhantes com técnicas seguras e eficazes.',
      image: 'https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'A partir de R$ 350'
    }
  ]

  const testimonials = [
    {
      name: 'Maria Silva',
      text: 'Excelente atendimento! A Dra. Ana é muito cuidadosa e o resultado do meu implante ficou perfeito.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'João Santos',
      text: 'Clínica moderna e profissionais muito qualificados. Recomendo para toda a família!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ana Costa',
      text: 'Fiz meu clareamento aqui e o resultado superou minhas expectativas. Equipe nota 10!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Clínica Inovar Odontologia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-teal-800/80" />
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container-max relative z-20 text-center px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Seu Sorriso é Nossa
              <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Prioridade
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Há mais de 15 anos transformando sorrisos com tecnologia de ponta, 
              atendimento humanizado e profissionais especializados.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link 
              to="/agendamento" 
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Agendar Consulta</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/servicos" 
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-white/30"
            >
              Nossos Serviços
            </Link>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90"
          >
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-blue-400" />
              <span className="font-medium">(11) 3456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-teal-400" />
              <span>Vila Madalena, São Paulo</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-emerald-400" />
              <span>Seg-Sex: 8h-18h</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <stat.icon className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-blue-200">
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
              Por que Escolher a <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Inovar Odontologia</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Oferecemos tratamentos odontológicos completos com tecnologia avançada e atendimento personalizado.
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
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Nossos <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Principais Serviços</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tratamentos especializados para cuidar da sua saúde bucal com excelência.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold">
                      {service.price}
                    </span>
                    <Link
                      to="/servicos"
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 group"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/servicos"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 inline-flex items-center space-x-2"
            >
              <span>Ver Todos os Serviços</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              O que Nossos <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Pacientes Dizem</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Depoimentos reais de quem confia na Inovar Odontologia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">Paciente</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pronto para Transformar
              <span className="block">Seu Sorriso?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Agende sua consulta hoje mesmo e descubra como podemos cuidar da sua saúde bucal com excelência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/agendamento" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Agendar Consulta</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/contato" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-white/30"
              >
                Falar Conosco
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home