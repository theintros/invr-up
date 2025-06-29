import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, MessageSquare, Calendar } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredTime: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredTime: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefones',
      info: '(11) 3456-7890',
      secondary: '(11) 99876-5432',
      description: 'Atendimento de Seg-Sex: 8h às 18h'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@inovar-odontologia.com.br',
      secondary: 'agendamento@inovar-odontologia.com.br',
      description: 'Resposta em até 2 horas'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Rua das Flores, 123',
      secondary: 'Vila Madalena, São Paulo/SP',
      description: 'CEP: 05435-000'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      info: 'Segunda a Sexta: 8h às 18h',
      secondary: 'Sábado: 8h às 12h',
      description: 'Emergências: 24h'
    }
  ]

  const subjects = [
    'Consulta de Avaliação',
    'Implantes Dentários',
    'Ortodontia',
    'Clareamento Dental',
    'Periodontia',
    'Endodontia',
    'Dentística Estética',
    'Emergência Odontológica',
    'Informações sobre Convênios',
    'Outros'
  ]

  const timeSlots = [
    'Manhã (8h às 12h)',
    'Tarde (13h às 17h)',
    'Final da tarde (17h às 18h)',
    'Sábado manhã (8h às 12h)'
  ]

  const faqs = [
    {
      question: 'Como agendar uma consulta?',
      answer: 'Você pode agendar pelo telefone (11) 3456-7890, WhatsApp (11) 99876-5432, ou através do nosso formulário online. Retornamos o contato em até 2 horas.'
    },
    {
      question: 'Quais convênios são aceitos?',
      answer: 'Trabalhamos com Unimed, Bradesco Saúde, SulAmérica, Amil, Porto Seguro, Prevent Senior e outros. Consulte disponibilidade para seu plano.'
    },
    {
      question: 'Qual o valor da consulta de avaliação?',
      answer: 'A consulta de avaliação custa R$ 150,00 (particular) ou é coberta pelos convênios credenciados. Inclui exame clínico completo e orientações.'
    },
    {
      question: 'Vocês atendem emergências?',
      answer: 'Sim! Temos atendimento de emergência 24h. Entre em contato pelo telefone (11) 99876-5432 para casos urgentes.'
    },
    {
      question: 'Onde vocês estão localizados?',
      answer: 'Estamos na Rua das Flores, 123, Vila Madalena, São Paulo. Próximo ao metrô Fradique Coutinho, com estacionamento próprio.'
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
      <section className="section-padding bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Entre em <span className="text-blue-200">Contato</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para cuidar do seu sorriso! Entre em contato conosco e agende sua consulta. 
              Nossa equipe está pronta para atendê-lo com excelência.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-teal-500/20 mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {info.title}
                </h3>
                <p className="text-slate-700 font-medium mb-1">
                  {info.info}
                </p>
                {info.secondary && (
                  <p className="text-slate-600 mb-2">
                    {info.secondary}
                  </p>
                )}
                <p className="text-slate-500 text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Envie sua Mensagem
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">
                    Mensagem Enviada!
                  </h4>
                  <p className="text-slate-600">
                    Obrigado pelo contato. Retornaremos em até 2 horas.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Seu nome completo"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Telefone *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-slate-700 mb-2">
                        Horário Preferido
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Selecione um horário</option>
                        {timeSlots.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Selecione um assunto</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Mensagem *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="Descreva como podemos ajudá-lo..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="loading-dots">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Location Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Nossa Localização
              </h3>
              
              {/* Map Placeholder */}
              <div className="h-64 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-xl flex items-center justify-center mb-6 border-2 border-dashed border-blue-200">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-slate-600 font-medium">Mapa Interativo</p>
                  <p className="text-slate-500 text-sm">Rua das Flores, 123 - Vila Madalena</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-800 font-semibold mb-1">Endereço Completo</p>
                    <p className="text-slate-600">Rua das Flores, 123</p>
                    <p className="text-slate-600">Vila Madalena, São Paulo/SP</p>
                    <p className="text-slate-600">CEP: 05435-000</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-800 font-semibold mb-1">Horário de Funcionamento</p>
                    <p className="text-slate-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-slate-600">Sábado: 8h às 12h</p>
                    <p className="text-slate-600">Domingo: Fechado</p>
                    <p className="text-blue-600 font-medium mt-2">Emergências: 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-800 font-semibold mb-1">Contatos</p>
                    <p className="text-slate-600">Fixo: (11) 3456-7890</p>
                    <p className="text-slate-600">WhatsApp: (11) 99876-5432</p>
                    <p className="text-slate-600">Email: contato@inovar-odontologia.com.br</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl">
                  <p className="text-slate-800 font-semibold mb-2">Como Chegar:</p>
                  <p className="text-slate-600 text-sm">
                    • Metrô: Estação Fradique Coutinho (Linha 4-Amarela)<br />
                    • Ônibus: Linhas 107M, 476A, 477P<br />
                    • Estacionamento próprio disponível<br />
                    • Acesso para pessoas com deficiência
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Perguntas <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Frequentes</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços e atendimento.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-slate-800 mb-3">
                  {faq.question}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
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
              Pronto para Cuidar do Seu Sorriso?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Agende sua consulta hoje mesmo e descubra como podemos transformar seu sorriso com excelência e cuidado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+551134567890"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Ligar Agora</span>
              </a>
              <a
                href="https://wa.me/5511998765432"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8  rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center space-x-2"
              >
                <MessageSquare className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="/agendamento"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-white/30 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Agendar Online</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact