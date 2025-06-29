import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@invr-up.com',
      description: 'Resposta em até 24 horas'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '+55 (11) 9999-9999',
      description: 'Seg-Sex: 8h às 18h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Av. Paulista, 1000 - São Paulo/SP',
      description: 'Atendimento presencial com agendamento'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Segunda a Sexta: 8h às 18h',
      description: 'Suporte online 24/7'
    }
  ]

  const subjects = [
    'Consultoria Financeira',
    'Gestão de Portfólio',
    'Análise de Investimentos',
    'Planejamento Patrimonial',
    'Suporte Técnico',
    'Outros'
  ]

  const faqs = [
    {
      question: 'Qual o valor mínimo para começar a investir?',
      answer: 'Não há valor mínimo. Você pode começar com qualquer quantia e ir aumentando gradualmente seus investimentos.'
    },
    {
      question: 'Como funciona a gestão do meu portfólio?',
      answer: 'Nossa equipe de especialistas analisa seu perfil e objetivos para criar uma estratégia personalizada, com acompanhamento contínuo.'
    },
    {
      question: 'Quais são as taxas cobradas?',
      answer: 'Nossas taxas são transparentes e competitivas. A taxa de gestão varia de acordo com o serviço contratado, sempre informada previamente.'
    },
    {
      question: 'Posso acompanhar meus investimentos em tempo real?',
      answer: 'Sim! Nossa plataforma digital permite acompanhamento em tempo real, com relatórios detalhados e alertas personalizados.'
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
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para ajudar você a alcançar seus objetivos financeiros. Fale conosco e descubra como podemos transformar seu futuro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white/5 backdrop-blur-sm">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl text-center card-hover group"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="h-8 w-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-secondary-200 font-medium mb-2">
                  {info.info}
                </p>
                <p className="text-secondary-400 text-sm">
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
              className="glass-effect p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Envie sua Mensagem
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="h-16 w-16 text-success-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Mensagem Enviada!
                  </h4>
                  <p className="text-secondary-300">
                    Obrigado pelo contato. Retornaremos em breve.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-200 mb-2">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                          placeholder="Seu nome completo"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-200 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-200 mb-2">
                        Telefone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-secondary-200 mb-2">
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                      >
                        <option value="" className="bg-secondary-800">Selecione um assunto</option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject} className="bg-secondary-800">
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-200 mb-2">
                      Mensagem *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-secondary-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                        placeholder="Descreva como podemos ajudá-lo..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
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
                        Enviar Mensagem
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Nossa Localização
              </h3>
              
              <div className="h-64 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                  <p className="text-secondary-300">Mapa Interativo</p>
                  <p className="text-secondary-400 text-sm">Av. Paulista, 1000 - São Paulo/SP</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Endereço</p>
                    <p className="text-secondary-300 text-sm">Av. Paulista, 1000 - Bela Vista</p>
                    <p className="text-secondary-300 text-sm">São Paulo/SP - CEP: 01310-100</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Horário de Funcionamento</p>
                    <p className="text-secondary-300 text-sm">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-secondary-300 text-sm">Sábado: 9h às 13h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Contato Direto</p>
                    <p className="text-secondary-300 text-sm">+55 (11) 9999-9999</p>
                    <p className="text-secondary-300 text-sm">contato@invr-up.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Perguntas <span className="gradient-text">Frequentes</span>
            </h2>
            <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl"
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h4>
                <p className="text-secondary-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact