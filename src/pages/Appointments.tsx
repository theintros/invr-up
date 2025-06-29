import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Phone, Mail, CheckCircle, ArrowRight, Smile } from 'lucide-react'

const Appointments = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    isFirstVisit: true,
    hasInsurance: false,
    insurance: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    { id: 'consulta', name: 'Consulta de Avaliação', duration: '30 min', price: 'R$ 150' },
    { id: 'implante', name: 'Implantes Dentários', duration: '60 min', price: 'A partir de R$ 1.200' },
    { id: 'ortodontia', name: 'Ortodontia', duration: '45 min', price: 'A partir de R$ 180/mês' },
    { id: 'clareamento', name: 'Clareamento Dental', duration: '90 min', price: 'A partir de R$ 350' },
    { id: 'periodontia', name: 'Periodontia', duration: '45 min', price: 'A partir de R$ 200' },
    { id: 'endodontia', name: 'Endodontia (Canal)', duration: '60 min', price: 'A partir de R$ 400' },
    { id: 'estetica', name: 'Dentística Estética', duration: '90 min', price: 'A partir de R$ 800' },
    { id: 'emergencia', name: 'Emergência', duration: '30 min', price: 'R$ 200' }
  ]

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ]

  const insurances = [
    'Unimed', 'Bradesco Saúde', 'SulAmérica', 'Amil', 'Porto Seguro', 
    'Prevent Senior', 'Golden Cross', 'Intermédica', 'NotreDame', 'São Cristóvão'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      // Skip Sundays (0)
      if (date.getDay() !== 0) {
        dates.push(date.toISOString().split('T')[0])
      }
    }
    return dates
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="container-max">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center bg-white p-12 rounded-3xl shadow-2xl"
          >
            <div className="mb-8">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Agendamento Confirmado!
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Seu agendamento foi realizado com sucesso. Em breve entraremos em contato para confirmar os detalhes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl mb-8">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Detalhes do Agendamento:</h3>
              <div className="space-y-2 text-left">
                <p><strong>Serviço:</strong> {services.find(s => s.id === formData.service)?.name}</p>
                <p><strong>Data:</strong> {formatDate(formData.date)}</p>
                <p><strong>Horário:</strong> {formData.time}</p>
                <p><strong>Paciente:</strong> {formData.name}</p>
                <p><strong>Telefone:</strong> {formData.phone}</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-slate-600">
                <strong>Importante:</strong> Chegue com 15 minutos de antecedência e traga um documento com foto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/'}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Voltar ao Início
                </button>
                <button
                  onClick={() => window.location.href = '/contato'}
                  className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Falar Conosco
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Agendar <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Consulta</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Agende sua consulta de forma rápida e fácil. Nossa equipe está pronta para cuidar do seu sorriso.
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    currentStep >= step 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-200 text-slate-500'
                  }`}>
                    {step}
                  </div>
                  <div className={`ml-3 font-medium ${
                    currentStep >= step ? 'text-blue-600' : 'text-slate-500'
                  }`}>
                    {step === 1 && 'Serviço'}
                    {step === 2 && 'Data e Hora'}
                    {step === 3 && 'Dados Pessoais'}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-0.5 ml-8 ${
                      currentStep > step ? 'bg-blue-600' : 'bg-slate-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentStep}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <form onSubmit={handleSubmit}>
                {/* Step 1: Service Selection */}
                {currentStep === 1 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                      Escolha o Serviço
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <label
                          key={service.id}
                          className={`p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                            formData.service === service.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-slate-200 hover:border-blue-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="service"
                            value={service.id}
                            checked={formData.service === service.id}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-slate-800">{service.name}</h4>
                              <p className="text-sm text-slate-600">{service.duration}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-blue-600">{service.price}</p>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Date and Time */}
                {currentStep === 2 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                      Escolha Data e Horário
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-3">
                          Data da Consulta
                        </label>
                        <select
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Selecione uma data</option>
                          {getAvailableDates().map((date) => (
                            <option key={date} value={date}>
                              {formatDate(date)}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-3">
                          Horário
                        </label>
                        <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                          {timeSlots.map((time) => (
                            <label
                              key={time}
                              className={`p-3 text-center border rounded-lg cursor-pointer transition-all ${
                                formData.time === time
                                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                                  : 'border-slate-200 hover:border-blue-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="time"
                                value={time}
                                checked={formData.time === time}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              {time}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Personal Information */}
                {currentStep === 3 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                      Dados Pessoais
                    </h3>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Nome Completo *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Seu nome completo"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Telefone *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="(11) 99999-9999"
                          />
                        </div>
                        <div>
                          <label className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              name="isFirstVisit"
                              checked={formData.isFirstVisit}
                              onChange={handleInputChange}
                              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <span className="text-slate-700">É sua primeira visita?</span>
                          </label>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="flex items-center space-x-3 mb-3">
                            <input
                              type="checkbox"
                              name="hasInsurance"
                              checked={formData.hasInsurance}
                              onChange={handleInputChange}
                              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <span className="text-slate-700">Possui convênio odontológico?</span>
                          </label>
                          {formData.hasInsurance && (
                            <select
                              name="insurance"
                              value={formData.insurance}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Selecione seu convênio</option>
                              {insurances.map((insurance) => (
                                <option key={insurance} value={insurance}>
                                  {insurance}
                                </option>
                              ))}
                            </select>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Observações (opcional)
                        </label>
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                          placeholder="Alguma informação adicional que gostaria de compartilhar..."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      currentStep === 1
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    Anterior
                  </button>

                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={
                        (currentStep === 1 && !formData.service) ||
                        (currentStep === 2 && (!formData.date || !formData.time))
                      }
                      className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      <span>Próximo</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                      className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      {isSubmitting ? (
                        <div className="loading-dots">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      ) : (
                        <>
                          <Calendar className="h-4 w-4" />
                          <span>Confirmar Agendamento</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Appointments