import React from 'react'
import { Link } from 'react-router-dom'
import { TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'Sobre Nós', path: '/about' },
      { name: 'Serviços', path: '/services' },
      { name: 'Portfólio', path: '/portfolio' },
      { name: 'Contato', path: '/contact' },
    ],
    services: [
      { name: 'Consultoria Financeira', path: '/services' },
      { name: 'Gestão de Portfólio', path: '/services' },
      { name: 'Análise de Mercado', path: '/services' },
      { name: 'Planejamento Estratégico', path: '/services' },
    ],
    legal: [
      { name: 'Política de Privacidade', path: '/privacy' },
      { name: 'Termos de Uso', path: '/terms' },
      { name: 'Cookies', path: '/cookies' },
      { name: 'Compliance', path: '/compliance' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-secondary-900/50 backdrop-blur-sm border-t border-white/10">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <TrendingUp className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-white">
                INVR<span className="text-primary-400">-UP</span>
              </span>
            </Link>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Transformamos seu futuro financeiro através de investimentos inteligentes e estratégias personalizadas.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-secondary-300">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-sm">contato@invr-up.com</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-300">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-sm">+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-300">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-sm">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © {currentYear} INVR-UP. Todos os direitos reservados.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-secondary-400 hover:text-primary-400 transition-all"
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