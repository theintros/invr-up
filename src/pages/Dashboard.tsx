import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  BarChart3, 
  Bell, 
  Settings, 
  Download,
  Eye,
  EyeOff,
  Calendar,
  Target,
  Award,
  Activity
} from 'lucide-react'

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true)
  const [selectedPeriod, setSelectedPeriod] = useState('1M')

  const periods = ['1D', '1W', '1M', '3M', '6M', '1Y']

  const portfolioData = {
    totalBalance: 2847392.50,
    monthlyReturn: 3.2,
    yearlyReturn: 18.7,
    totalGain: 347392.50,
    totalInvested: 2500000.00
  }

  const quickStats = [
    {
      title: 'Patrimônio Total',
      value: portfolioData.totalBalance,
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-primary-400'
    },
    {
      title: 'Rentabilidade Mensal',
      value: portfolioData.monthlyReturn,
      change: '+0.8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-success-400'
    },
    {
      title: 'Rentabilidade Anual',
      value: portfolioData.yearlyReturn,
      change: '+2.1%',
      trend: 'up',
      icon: BarChart3,
      color: 'text-accent-400'
    },
    {
      title: 'Ganho Total',
      value: portfolioData.totalGain,
      change: '+15.2%',
      trend: 'up',
      icon: Target,
      color: 'text-warning-400'
    }
  ]

  const recentActivities = [
    {
      type: 'buy',
      description: 'Compra de PETR4',
      amount: 2850.00,
      time: '2 horas atrás',
      status: 'completed'
    },
    {
      type: 'dividend',
      description: 'Dividendo BBDC4',
      amount: 127.50,
      time: '1 dia atrás',
      status: 'completed'
    },
    {
      type: 'sell',
      description: 'Venda de VALE3',
      amount: 3260.00,
      time: '2 dias atrás',
      status: 'completed'
    },
    {
      type: 'rebalance',
      description: 'Rebalanceamento automático',
      amount: 0,
      time: '3 dias atrás',
      status: 'completed'
    }
  ]

  const topPerformers = [
    { name: 'AAPL', return: '+15.2%', value: 'R$ 45.230', trend: 'up' },
    { name: 'PETR4', return: '+12.8%', value: 'R$ 32.150', trend: 'up' },
    { name: 'ITUB4', return: '+8.9%', value: 'R$ 28.940', trend: 'up' },
    { name: 'VALE3', return: '+7.3%', value: 'R$ 21.680', trend: 'up' }
  ]

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const formatPercentage = (value: number) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Header */}
      <section className="section-padding pb-8">
        <div className="container-max">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Dashboard
              </h1>
              <p className="text-secondary-300">
                Bem-vindo de volta! Aqui está um resumo dos seus investimentos.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all">
                <Settings className="h-5 w-5" />
              </button>
              <button className="btn-primary">
                <Download className="h-4 w-4 mr-2" />
                Relatório
              </button>
            </div>
          </motion.div>

          {/* Portfolio Overview */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass-effect p-8 rounded-2xl mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">
                Visão Geral do Portfólio
              </h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                <div className="flex space-x-2">
                  {periods.map(period => (
                    <button
                      key={period}
                      onClick={() => setSelectedPeriod(period)}
                      className={`px-3 py-1 rounded-lg text-sm transition-all ${
                        selectedPeriod === period
                          ? 'bg-primary-500 text-white'
                          : 'bg-white/10 text-secondary-300 hover:bg-white/20'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="text-4xl font-bold text-white mb-2">
                  {showBalance ? formatCurrency(portfolioData.totalBalance) : '••••••••'}
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1 text-success-400">
                    <TrendingUp className="h-4 w-4" />
                    <span>{formatPercentage(portfolioData.monthlyReturn)} este mês</span>
                  </div>
                  <div className="text-secondary-400">
                    Investido: {showBalance ? formatCurrency(portfolioData.totalInvested) : '••••••••'}
                  </div>
                </div>
                
                {/* Chart Placeholder */}
                <div className="mt-6 h-48 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Activity className="h-12 w-12 text-primary-400 mx-auto mb-2" />
                    <p className="text-secondary-300">Gráfico de Performance</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-sm text-secondary-400 mb-1">Ganho Total</div>
                  <div className="text-xl font-bold text-success-400">
                    {showBalance ? formatCurrency(portfolioData.totalGain) : '••••••••'}
                  </div>
                  <div className="text-sm text-success-400">+15.2%</div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-sm text-secondary-400 mb-1">Rentabilidade Anual</div>
                  <div className="text-xl font-bold text-white">
                    {formatPercentage(portfolioData.yearlyReturn)}
                  </div>
                  <div className="text-sm text-success-400">+2.1% vs mês anterior</div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-sm text-secondary-400 mb-1">Próximo Objetivo</div>
                  <div className="text-xl font-bold text-white">R$ 3M</div>
                  <div className="w-full bg-secondary-700 rounded-full h-2 mt-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="text-sm text-secondary-400 mt-1">85% concluído</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="glass-effect p-6 rounded-2xl card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  <div className={`flex items-center space-x-1 text-sm ${
                    stat.trend === 'up' ? 'text-success-400' : 'text-error-400'
                  }`}>
                    {stat.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.title.includes('Patrimônio') || stat.title.includes('Ganho') 
                    ? (showBalance ? formatCurrency(stat.value as number) : '••••••••')
                    : formatPercentage(stat.value as number)
                  }
                </div>
                <div className="text-sm text-secondary-400">
                  {stat.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white/5 backdrop-blur-sm">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activities */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2 glass-effect p-6 rounded-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">
                  Atividades Recentes
                </h3>
                <button className="text-primary-400 hover:text-primary-300 text-sm">
                  Ver todas
                </button>
              </div>

              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg ${
                        activity.type === 'buy' ? 'bg-success-500/20 text-success-400' :
                        activity.type === 'sell' ? 'bg-error-500/20 text-error-400' :
                        activity.type === 'dividend' ? 'bg-primary-500/20 text-primary-400' :
                        'bg-accent-500/20 text-accent-400'
                      }`}>
                        {activity.type === 'buy' ? <TrendingUp className="h-4 w-4" /> :
                         activity.type === 'sell' ? <TrendingDown className="h-4 w-4" /> :
                         activity.type === 'dividend' ? <DollarSign className="h-4 w-4" /> :
                         <PieChart className="h-4 w-4" />}
                      </div>
                      <div>
                        <div className="text-white font-medium">{activity.description}</div>
                        <div className="text-secondary-400 text-sm">{activity.time}</div>
                      </div>
                    </div>
                    {activity.amount > 0 && (
                      <div className={`font-semibold ${
                        activity.type === 'buy' || activity.type === 'sell' ? 'text-white' : 'text-success-400'
                      }`}>
                        {activity.type === 'sell' ? '+' : activity.type === 'dividend' ? '+' : '-'}
                        {formatCurrency(activity.amount)}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Top Performers */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-effect p-6 rounded-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">
                  Melhores Performances
                </h3>
                <Award className="h-5 w-5 text-warning-400" />
              </div>

              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                  >
                    <div>
                      <div className="text-white font-medium">{performer.name}</div>
                      <div className="text-secondary-400 text-sm">{performer.value}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-success-400 font-semibold">{performer.return}</div>
                      <TrendingUp className="h-4 w-4 text-success-400 ml-auto" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-white font-medium mb-4">Ações Rápidas</h4>
                <div className="space-y-2">
                  <button className="w-full btn-primary text-sm py-2">
                    Nova Operação
                  </button>
                  <button className="w-full btn-secondary text-sm py-2">
                    Rebalancear Portfólio
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Allocation Overview */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-6 rounded-2xl"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Alocação de Ativos
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: 'Ações BR', percentage: 35, color: 'bg-primary-500' },
                { name: 'Renda Fixa', percentage: 25, color: 'bg-success-500' },
                { name: 'FIIs', percentage: 20, color: 'bg-accent-500' },
                { name: 'Ações EUA', percentage: 15, color: 'bg-warning-500' },
                { name: 'Crypto', percentage: 5, color: 'bg-error-500' }
              ].map((asset, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <div className="w-full h-full rounded-full bg-secondary-700">
                      <div 
                        className={`w-full h-full rounded-full ${asset.color} opacity-20`}
                        style={{
                          background: `conic-gradient(${asset.color.replace('bg-', '').replace('-500', '')} ${asset.percentage * 3.6}deg, transparent 0deg)`
                        }}
                      ></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold">{asset.percentage}%</span>
                    </div>
                  </div>
                  <div className="text-white font-medium text-sm">{asset.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Dashboard