import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Award, TrendingUp, Shield, Globe, Heart, Lightbulb } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Transparência',
      description: 'Operamos com total transparência em todas as nossas operações e decisões de investimento.'
    },
    {
      icon: Heart,
      title: 'Compromisso',
      description: 'Nosso compromisso é com o sucesso financeiro de cada cliente, tratando cada investimento como se fosse nosso.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Utilizamos as mais avançadas tecnologias e estratégias para maximizar os retornos dos investimentos.'
    },
    {
      icon: Globe,
      title: 'Excelência',
      description: 'Buscamos a excelência em todos os aspectos, desde o atendimento até a performance dos investimentos.'
    }
  ]

  const team = [
    {
      name: 'Ana Silva',
      role: 'CEO & Fundadora',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Mais de 15 anos de experiência em mercado financeiro e gestão de investimentos.'
    },
    {
      name: 'Carlos Santos',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Especialista em tecnologia financeira e desenvolvimento de plataformas de investimento.'
    },
    {
      name: 'Maria Oliveira',
      role: 'Head de Análise',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Analista sênior com expertise em mercados globais e estratégias de diversificação.'
    },
    {
      name: 'João Costa',
      role: 'Diretor Comercial',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Especialista em relacionamento com clientes e desenvolvimento de negócios.'
    }
  ]

  const milestones = [
    { year: '2008', title: 'Fundação', description: 'INVR-UP é fundada com a missão de democratizar investimentos inteligentes.' },
    { year: '2012', title: 'Expansão', description: 'Alcançamos a marca de 1.000 clientes ativos e R$ 100M em patrimônio gerido.' },
    { year: '2018', title: 'Tecnologia', description: 'Lançamento da plataforma digital com IA para análise de mercado.' },
    { year: '2023', title: 'Liderança', description: 'Reconhecidos como uma das principais fintechs de investimento do Brasil.' }
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
              Sobre a <span className="gradient-text">INVR-UP</span>
            </h1>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed">
              Há mais de 15 anos transformando vidas através de investimentos inteligentes e estratégias personalizadas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Nossa História</h2>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                A INVR-UP nasceu da visão de democratizar o acesso a investimentos de qualidade. Fundada em 2008, 
                começamos como uma pequena consultoria financeira e evoluímos para uma das principais plataformas 
                de investimento do Brasil.
              </p>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                Nossa jornada é marcada pela constante inovação e pelo compromisso inabalável com o sucesso 
                financeiro de nossos clientes. Combinamos experiência tradicional com tecnologia de ponta para 
                oferecer soluções de investimento verdadeiramente diferenciadas.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 glass-effect rounded-xl">
                  <Users className="h-8 w-8 text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-sm text-secondary-300">Clientes Ativos</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-xl">
                  <TrendingUp className="h-8 w-8 text-success-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">R$ 2B+</div>
                  <div className="text-sm text-secondary-300">Patrimônio Gerido</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe INVR-UP"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 glass-effect p-6 rounded-xl">
                <Award className="h-8 w-8 text-warning-400 mb-2" />
                <div className="text-lg font-bold text-white">Prêmio</div>
                <div className="text-sm text-secondary-300">Melhor Fintech 2023</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e moldam nossa cultura organizacional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl text-center card-hover group"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Nossa <span className="gradient-text">Jornada</span>
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              Marcos importantes que definiram nossa trajetória de sucesso.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-400 to-accent-400"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="glass-effect p-6 rounded-2xl">
                    <div className="text-2xl font-bold text-primary-400 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-secondary-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-400 rounded-full border-4 border-secondary-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Nossa <span className="gradient-text">Equipe</span>
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              Profissionais experientes e apaixonados por transformar o futuro financeiro dos nossos clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl text-center card-hover group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-primary-400 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-secondary-300 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About