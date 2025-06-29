import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Award, Smile, Shield, Heart, Lightbulb, Clock, MapPin, Phone } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Excelência',
      description: 'Buscamos sempre a excelência em todos os tratamentos, utilizando as melhores técnicas e materiais.'
    },
    {
      icon: Heart,
      title: 'Humanização',
      description: 'Tratamos cada paciente com carinho, respeito e atenção individualizada.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Investimos constantemente em tecnologia e capacitação para oferecer o melhor.'
    },
    {
      icon: Smile,
      title: 'Satisfação',
      description: 'Nossa maior recompensa é ver o sorriso de satisfação dos nossos pacientes.'
    }
  ]

  const team = [
    {
      name: 'Dra. Ana Paula Silva',
      role: 'Diretora Clínica - Implantodontia',
      cro: 'CRO-SP 45678',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Especialista em Implantodontia com mais de 15 anos de experiência. Formada pela USP com especialização em Harvard.',
      specialties: ['Implantes Dentários', 'Próteses', 'Cirurgia Oral']
    },
    {
      name: 'Dr. Carlos Eduardo Santos',
      role: 'Ortodontista',
      cro: 'CRO-SP 56789',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Especialista em Ortodontia e Ortopedia Facial. Mestre pela UNICAMP com foco em tratamentos estéticos.',
      specialties: ['Ortodontia', 'Aparelhos Invisíveis', 'Ortopedia Facial']
    },
    {
      name: 'Dra. Marina Costa',
      role: 'Periodontista',
      cro: 'CRO-SP 67890',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Especialista em Periodontia e Endodontia. Doutora pela UNESP com expertise em tratamentos gengivais.',
      specialties: ['Periodontia', 'Endodontia', 'Tratamento de Gengiva']
    },
    {
      name: 'Dr. Rafael Oliveira',
      role: 'Dentística e Estética',
      cro: 'CRO-SP 78901',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Especialista em Dentística Restauradora e Estética. Referência em clareamento e facetas de porcelana.',
      specialties: ['Clareamento Dental', 'Facetas', 'Restaurações Estéticas']
    }
  ]

  const milestones = [
    { 
      year: '2008', 
      title: 'Fundação', 
      description: 'A Clínica Inovar Odontologia é fundada pela Dra. Ana Paula Silva na Vila Madalena.' 
    },
    { 
      year: '2012', 
      title: 'Expansão', 
      description: 'Ampliação da clínica com novos consultórios e equipamentos de última geração.' 
    },
    { 
      year: '2016', 
      title: 'Certificações', 
      description: 'Conquista de certificações de qualidade e reconhecimento pelo CRO-SP.' 
    },
    { 
      year: '2020', 
      title: 'Tecnologia Digital', 
      description: 'Implementação de tecnologia digital 3D e sistema de agendamento online.' 
    },
    { 
      year: '2023', 
      title: 'Excelência', 
      description: 'Reconhecida como uma das melhores clínicas odontológicas de São Paulo.' 
    }
  ]

  const stats = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '5000+', label: 'Pacientes Atendidos' },
    { number: '98%', label: 'Taxa de Satisfação' },
    { number: '4', label: 'Especialistas' }
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
              Sobre a <span className="text-blue-200">Inovar Odontologia</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Há mais de 15 anos cuidando do sorriso de milhares de pacientes com dedicação, 
              tecnologia de ponta e atendimento humanizado.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                A Clínica Inovar Odontologia nasceu em 2008 com o sonho da Dra. Ana Paula Silva 
                de oferecer tratamentos odontológicos de excelência com atendimento humanizado. 
                Localizada no coração da Vila Madalena, em São Paulo, nossa clínica se tornou 
                referência em cuidados odontológicos.
              </p>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Ao longo dos anos, expandimos nossa equipe com profissionais altamente qualificados 
                e investimos em tecnologia de ponta para oferecer os melhores tratamentos. 
                Nossa missão é transformar sorrisos e vidas, sempre priorizando o conforto 
                e a satisfação dos nossos pacientes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Clínica Inovar Odontologia"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Award className="h-8 w-8 text-yellow-400 mb-2" />
                <div className="text-lg font-bold text-white">Certificada</div>
                <div className="text-sm text-blue-200">CRO-SP</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Nossos <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Valores</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e definem nossa identidade.
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
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-teal-500/20 mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Nossa <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Trajetória</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Marcos importantes que definiram nossa jornada de crescimento e excelência.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-teal-400"></div>
            
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
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Nossa <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Equipe</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Profissionais altamente qualificados e apaixonados por transformar sorrisos.
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
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform shadow-lg"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-blue-600 font-medium mb-1">
                    {member.role}
                  </div>
                  <div className="text-sm text-slate-500 mb-3">
                    {member.cro}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, i) => (
                      <div key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full inline-block mr-1">
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Venha nos Conhecer
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Estamos localizados no coração da Vila Madalena, prontos para cuidar do seu sorriso.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-xl bg-white/10 backdrop-blur-sm mb-4">
                <MapPin className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Localização</h3>
              <p className="text-blue-100">
                Rua das Flores, 123<br />
                Vila Madalena, São Paulo/SP<br />
                CEP: 05435-000
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-xl bg-white/10 backdrop-blur-sm mb-4">
                <Phone className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contato</h3>
              <p className="text-blue-100">
                (11) 3456-7890<br />
                (11) 99876-5432<br />
                contato@inovar-odontologia.com.br
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-xl bg-white/10 backdrop-blur-sm mb-4">
                <Clock className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Horário</h3>
              <p className="text-blue-100">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 12h<br />
                Emergências: 24h
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About