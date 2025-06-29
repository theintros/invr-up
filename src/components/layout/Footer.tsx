import React from 'react'
import { Link } from 'react-router-dom'
import { Smile, Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Award } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    clinica: [
      { name: 'Sobre Nós', path: '/sobre' },
      { name: 'Nossa Equipe', path: '/equipe' },
      { name: 'Depoimentos', path: '/depoimentos' },
      { name: 'Blog', path: '/blog' },
    ],
    servicos: [
      { name: 'Implantes Dentários', path: '/servicos' },
      { name: 'Ortodontia', path: '/servicos' },
      { name: 'Clareamento', path: '/servicos' },
      { name: 'Periodontia', path: '/servicos' },
    ],
    informacoes: [
      { name: 'Convênios', path: '/convenios' },
      { name: 'Formas de Pagamento', path: '/pagamento' },
      { name: 'Política de Privacidade', path: '/privacidade' },
      { name: 'Termos de Uso', path: '/termos' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/inovar.odontologia', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/inovar.odontologia', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/inovar-odontologia', label: 'LinkedIn' },
  ]

  const convenios = [
    'Unimed', 'Bradesco Saúde', 'SulAmérica', 'Amil', 'Porto Seguro', 'Prevent Senior'
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center">
                <Smile className="h-7 w-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  Inovar <span className="text-blue-400">Odontologia</span>
                </span>
                <span className="text-xs text-slate-400 -mt-1">Cuidando do seu sorriso</span>
              </div>
            </Link>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Há mais de 15 anos cuidando do sorriso de milhares de pacientes com excelência, 
              tecnologia de ponta e atendimento humanizado.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">Rua das Flores, 123 - Vila Madalena, São Paulo/SP</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">(11) 3456-7890 / (11) 99876-5432</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">contato@inovar-odontologia.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Clock className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">Seg-Sex: 8h-18h | Sáb: 8h-12h</span>
              </div>
            </div>
          </div>

          {/* Clínica Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">A Clínica</h3>
            <ul className="space-y-3">
              {footerLinks.clinica.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h3 className="text-white font-semibold mb-6">Informações</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.informacoes.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Convênios */}
            <div>
              <h4 className="text-white font-medium mb-3 text-sm">Convênios Aceitos</h4>
              <div className="grid grid-cols-2 gap-1 text-xs text-slate-400">
                {convenios.map((convenio) => (
                  <div key={convenio} className="flex items-center space-x-1">
                    <Award className="h-3 w-3 text-blue-400" />
                    <span>{convenio}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-slate-400 text-sm">
                © {currentYear} Clínica Inovar Odontologia. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-4 text-xs text-slate-500">
                <span>CRO-SP: 12345</span>
                <span>•</span>
                <span>CNPJ: 12.345.678/0001-90</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-blue-400 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer