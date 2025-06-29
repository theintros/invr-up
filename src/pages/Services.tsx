import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Smile, 
  Shield, 
  Zap, 
  Heart, 
  ArrowRight,
  CheckCircle,
  Star,
  Calendar,
  Award,
  Clock
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: 'Implantes Dentários',
      description: 'Reposição de dentes perdidos com implantes de titânio de alta qualidade e tecnologia 3D.',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Implantes de titânio premium',
        'Planejamento digital 3D',
        'Cirurgia guiada por computador',
        'Próteses personalizadas',
        'Garantia de 10 anos'
      ],
      price: 'A partir de R$ 1.200',
      duration: '2-6 meses',
      popular: true
    },
    {
      icon: Zap,
      title: 'Ortodontia',
      description: 'Correção do posicionamento dos dentes com aparelhos tradicionais e invisíveis (Invisalign).',
      image: 'https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Aparelhos convencionais',
        'Aparelhos estéticos',
        'Invisalign (aparelho invisível)',
        'Ortodontia digital',
        'Acompanhamento mensal'
      ],
      price: 'A partir de R$ 180/mês',
      duration: '12-36 meses',
      popular: false
    },
    {
      icon: Star,
      title: 'Clareamento Dental',
      description: 'Dentes mais brancos e brilhantes com técnicas seguras e eficazes, no consultório ou em casa.',
      image: 'https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Clareamento a laser',
        'Clareamento caseiro supervisionado',
        'Produtos de alta qualidade',
        'Resultados em 1 sessão',
        'Manutenção inclusa'
      ],
      price: 'A partir de R$ 350',
      duration: '1-3 sessões',
      popular: false
    },
    {
      icon: Heart,
      title: 'Periodontia',
      description: 'Tratamento especializado das gengivas e estruturas de suporte dos dentes.',
      image: 'https://images.pexels.com/photos/6812527/pexels-photo-6812527.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Tratamento de gengivite',
        'Tratamento de periodontite',
        'Cirurgia periodontal',
        'Enxerto gengival',
        'Manutenção periodontal'
      ],
      price: 'A partir de R$ 200',
      duration: '1-6 sessões',
      popular: false
    },
    {
      icon: Shield,
      title: 'Endodontia',
      description: 'Tratamento de canal com tecnologia avançada para salvar dentes comprometidos.',
      image: 'https://images.pexels.com/photos/6812582/pexels-photo-6812582.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Microscopia operatória',
        'Instrumentação rotatória',
        'Localizador apical',
        'Obturação termoplástica',
        'Controle de dor eficaz'
      ],
      price: 'A partir de R$ 400',
      duration: '1-3 sessões',
      popular: false
    },
    {
      icon: Smile,
      title: 'Dentística Estética',
      description: 'Restaurações estéticas, facetas de porcelana e transformações completas do sorriso.',
      image: 'https://images.pexels.com/photos/6812531/pexels-photo-6812531.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Facetas de porcelana',
        'Lentes de contato dental',
        'Restaurações em resina',
        'Design digital do sorriso',
        'Harmonização facial'
      ],
      price: 'A partir de R$ 800',
      duration: '2-4 sessões',
      popular: true
    }
  ]

  const benefits = [
    {
      icon: Award,
      title: 'Profissionais Especializados',
      description: 'Equipe com especialização e anos de experiência em cada área.'
    },
    {
      icon: Zap,
      title: 'Tecnologia Avançada',
      description: 'Equipamentos de última geração para tratamentos mais precisos.'
    },
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Cuidado personalizado com foco no conforto do paciente.'
    },
    {
      icon: Shield,
      title: 'Garantia de Qualidade',
      description: 'Todos os tratamentos possuem garantia e acompanhamento.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Avaliação completa e diagnóstico personalizado das suas necessidades.'
    },
    {
      step: '02',
      title: 'Plano de Tratamento',
      description: 'Elaboração de um plano detalhado com prazos e valores transparentes.'
    },
    {
      step: '03',
      title: 'Execução',
      description: 'Realização do tratamento com acompanhamento constante e cuidado.'
    },
    {
      step: '04',
      title: 'Acompanhamento',
      description: 'Manutenção e acompanhamento para garantir resultados duradouros.'
    }
  ]

  const convenios = [
    'Unimed', 'Bradesco Saúde', 'SulAmérica', 'Amil', 'Porto Seguro', 'Prevent Senior',
    'Golden Cross', 'Intermédica', 'NotreDame', 'São Cristóvão'
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nossos <span className="text-blue-200">Serviços</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Tratamentos odontológicos completos com tecnologia de ponta e atendimento personalizado 
              para cuidar da sua saúde bucal com excelência.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 ${
                  service.popular ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center py-2">
                    <span className="text-sm font-semibold">Mais Procurado</span>
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="p-3 rounded-xl bg-white/90 backdrop-blur-sm">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-blue-600 font-semibold text-lg">
                      {service.price}
                    </div>
                  </div>

                  <Link
                    to="/agendamento"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center space-x-2"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Agendar Consulta</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Por que Escolher Nossos <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Tratamentos</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Diferenciais que fazem da Inovar Odontologia a melhor escolha para sua saúde bucal.
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
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-teal-500/20 mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Como <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Funciona</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Nosso processo estruturado garante o melhor resultado para seu tratamento.
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
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Convenios Section */}
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
              Convênios <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Aceitos</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Trabalhamos com os principais convênios odontológicos do mercado.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {convenios.map((convenio, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl hover:shadow-md transition-all"
                >
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700">{convenio}</div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-slate-600 mb-4">
                Não encontrou seu convênio? Entre em contato conosco!
              </p>
              <Link
                to="/contato"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 inline-flex items-center space-x-2"
              >
                <span>Consultar Convênio</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Transformar Seu Sorriso?
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

export default Services