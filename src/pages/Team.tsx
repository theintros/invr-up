import React from 'react'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Star, Calendar, MapPin, Phone } from 'lucide-react'

const Team = () => {
  const team = [
    {
      name: 'Dra. Ana Paula Silva',
      role: 'Diretora Clínica - Implantodontia',
      cro: 'CRO-SP 45678',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Especialista em Implantodontia com mais de 15 anos de experiência. Formada pela Faculdade de Odontologia da USP, com especialização em Implantodontia pela Harvard School of Dental Medicine. Pioneira em técnicas de implante imediato e carga imediata.',
      specialties: ['Implantes Dentários', 'Próteses sobre Implantes', 'Cirurgia Oral', 'All-on-4'],
      education: [
        'Graduação em Odontologia - USP (2008)',
        'Especialização em Implantodontia - Harvard (2010)',
        'Mestrado em Cirurgia Oral - UNICAMP (2012)',
        'Certificação Straumann - Suíça (2015)'
      ],
      experience: '15+ anos',
      cases: '2000+ implantes realizados',
      rating: 4.9
    },
    {
      name: 'Dr. Carlos Eduardo Santos',
      role: 'Ortodontista',
      cro: 'CRO-SP 56789',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Especialista em Ortodontia e Ortopedia Facial. Mestre pela UNICAMP com foco em tratamentos estéticos e funcionais. Certificado em Invisalign e especialista em casos complexos de má oclusão.',
      specialties: ['Ortodontia Convencional', 'Invisalign', 'Ortopedia Facial', 'Ortodontia Estética'],
      education: [
        'Graduação em Odontologia - UNICAMP (2009)',
        'Especialização em Ortodontia - UNICAMP (2011)',
        'Mestrado em Ortodontia - UNICAMP (2013)',
        'Certificação Invisalign Diamond (2018)'
      ],
      experience: '14+ anos',
      cases: '1500+ casos ortodônticos',
      rating: 4.8
    },
    {
      name: 'Dra. Marina Costa',
      role: 'Periodontista e Endodontista',
      cro: 'CRO-SP 67890',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Especialista em Periodontia e Endodontia. Doutora pela UNESP com expertise em tratamentos gengivais e de canal. Referência em cirurgias periodontais e regeneração óssea guiada.',
      specialties: ['Periodontia', 'Endodontia', 'Cirurgia Periodontal', 'Regeneração Óssea'],
      education: [
        'Graduação em Odontologia - UNESP (2010)',
        'Especialização em Periodontia - UNESP (2012)',
        'Especialização em Endodontia - USP (2014)',
        'Doutorado em Periodontia - UNESP (2017)'
      ],
      experience: '13+ anos',
      cases: '3000+ tratamentos realizados',
      rating: 4.9
    },
    {
      name: 'Dr. Rafael Oliveira',
      role: 'Dentística e Estética',
      cro: 'CRO-SP 78901',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Especialista em Dentística Restauradora e Estética. Referência em clareamento dental, facetas de porcelana e design do sorriso. Certificado em harmonização orofacial.',
      specialties: ['Clareamento Dental', 'Facetas de Porcelana', 'Lentes de Contato', 'Design do Sorriso'],
      education: [
        'Graduação em Odontologia - PUC-SP (2011)',
        'Especialização em Dentística - USP (2013)',
        'Curso de Design do Sorriso - NYU (2016)',
        'Certificação em Harmonização Facial (2020)'
      ],
      experience: '12+ anos',
      cases: '2500+ sorrisos transformados',
      rating: 4.8
    }
  ]

  const clinicStats = [
    { number: '15+', label: 'Anos de Experiência', icon: Award },
    { number: '4', label: 'Especialistas', icon: GraduationCap },
    { number: '5000+', label: 'Pacientes Atendidos', icon: Star },
    { number: '98%', label: 'Satisfação', icon: Star }
  ]

  const certifications = [
    'Conselho Regional de Odontologia (CRO-SP)',
    'Associação Brasileira de Odontologia (ABO)',
    'International Team for Implantology (ITI)',
    'American Academy of Cosmetic Dentistry',
    'Invisalign Diamond Provider',
    'Straumann Certified Partner'
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
              Nossa <span className="text-blue-200">Equipe</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Profissionais altamente qualificados e apaixonados por transformar sorrisos. 
              Cada membro da nossa equipe é especialista em sua área, garantindo o melhor cuidado para você.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {clinicStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <stat.icon className="h-6 w-6 text-blue-200" />
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
      </section>

      {/* Team Members */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-16">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="font-bold text-slate-800">{member.rating}</span>
                      </div>
                      <div className="text-sm text-slate-600">{member.cases}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="mb-4">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">
                      {member.name}
                    </h2>
                    <div className="text-blue-600 font-semibold text-lg mb-1">
                      {member.role}
                    </div>
                    <div className="text-slate-500 text-sm mb-4">
                      {member.cro} • {member.experience} de experiência
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                      Formação:
                    </h4>
                    <ul className="space-y-2">
                      {member.education.map((edu, i) => (
                        <li key={i} className="text-slate-600 text-sm flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(member.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-slate-600 text-sm">
                      {member.rating}/5.0 • Baseado em avaliações de pacientes
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              Certificações e <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Reconhecimentos</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Nossa equipe possui as principais certificações e reconhecimentos da odontologia nacional e internacional.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl"
                >
                  <Award className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Conheça Nossa Equipe Pessoalmente
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Agende uma consulta e conheça os profissionais que vão cuidar do seu sorriso com dedicação e excelência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-200" />
                <span>Rua das Flores, 123 - Vila Madalena</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-200" />
                <span>(11) 3456-7890</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/agendamento"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Agendar Consulta</span>
              </a>
              <a
                href="/contato"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-white/30"
              >
                Falar Conosco
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Team