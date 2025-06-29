import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, BarChart3, PieChart, DollarSign, Calendar, Filter } from 'lucide-react'

const Portfolio = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('1Y')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const periods = ['1M', '3M', '6M', '1Y', '2Y', '5Y']
  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'stocks', label: 'Ações' },
    { value: 'bonds', label: 'Renda Fixa' },
    { value: 'funds', label: 'Fundos' },
    { value: 'crypto', label: 'Crypto' }
  ]

  const portfolioStats = [
    {
      title: 'Patrimônio Total',
      value: 'R$ 2.847.392',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign
    },
    {
      title: 'Rentabilidade Mensal',
      value: '+3.2%',
      change: '+0.8%',
      trend: 'up',
      icon: TrendingUp
    },
    {
      title: 'Rentabilidade Anual',
      value: '+18.7%',
      change: '+2.1%',
      trend: 'up',
      icon: BarChart3
    },
    {
      title: 'Diversificação',
      value: '85%',
      change: '+5%',
      trend: 'up',
      icon: PieChart
    }
  ]

  const investments = [
    {
      name: 'Ações Brasileiras',
      category: 'stocks',
      allocation: 35,
      value: 'R$ 996.587',
      return: '+15.2%',
      trend: 'up',
      color: 'bg-primary-500'
    },
    {
      name: 'Renda Fixa',
      category: 'bonds',
      allocation: 25,
      value: 'R$ 711.848',
      return: '+8.9%',
      trend: 'up',
      color: 'bg-success-500'
    },
    {
      name: 'Fundos Imobiliários',
      category: 'funds',
      allocation: 20,
      value: 'R$ 569.478',
      return: '+12.1%',
      trend: 'up',
      color: 'bg-accent-500'
    },
    {
      name: 'Ações Internacionais',
      category: 'stocks',
      allocation: 15,
      value: 'R$ 427.109',
      return: '+22.3%',
      trend: 'up',
      color: 'bg-warning-500'
    },
    {
      name: 'Criptomoedas',
      category: 'crypto',
      allocation: 5,
      value: 'R$ 142.370',
      return: '+45.7%',
      trend: 'up',
      color: 'bg-error-500'
    }
  ]

  const recentTransactions = [
    {
      type: 'buy',
      asset: 'PETR4',
      quantity: 100,
      price: 'R$ 28.50',
      total: 'R$ 2.850',
      date: '2024-01-15'
    },
    {
      type: 'sell',
      asset: 'VALE3',
      quantity: 50,
      price: 'R$ 65.20',
      total: 'R$ 3.260',
      date: '2024-01-14'
    },
    {
      type: 'buy',
      asset: 'ITUB4',
      quantity: 200,
      price: 'R$ 32.10',
      total: 'R$ 6.420',
      date: '2024-01-13'
    },
    {
      type: 'dividend',
      asset: 'BBDC4',
      quantity: 150,
      price: 'R$ 0.85',
      total: 'R$ 127.50',
      date: '2024-01-12'
    }
  ]

  const filteredInvestments = selectedCategory === 'all' 
    ? investments 
    : investments.filter(inv => inv.category === selectedCategory)

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
              Seu <span className="gradient-text">Portfólio</span>
            </h1>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed">
              Acompanhe a performance dos seus investimentos em tempo real com análises detalhadas e insights personalizados.
            </p>
          </motion.div>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {portfolioStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="h-8 w-8 text-primary-400" />
                  <div className={`flex items-center space-x-1 text-sm ${
                    stat.trend === 'up' ? 'text-success-400' : 'text-error-400'
                  }`}>
                    {stat.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-400">
                  {stat.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Allocation */}
      <section className="section-padding bg-white/5 backdrop-blur-sm">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Allocation Chart */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Alocação do Portfólio
                </h3>
                
                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`px-3 py-1 rounded-lg text-sm transition-all ${
                        selectedCategory === category.value
                          ? 'bg-primary-500 text-white'
                          : 'bg-white/10 text-secondary-300 hover:bg-white/20'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>

                {/* Pie Chart Representation */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-success-500 p-1">
                    <div className="w-full h-full rounded-full bg-secondary-800 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">100%</div>
                        <div className="text-sm text-secondary-400">Alocado</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-3">
                  {filteredInvestments.map((investment, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${investment.color}`}></div>
                        <span className="text-secondary-200 text-sm">{investment.name}</span>
                      </div>
                      <span className="text-white font-medium">{investment.allocation}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Investment Details */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="glass-effect p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">
                    Detalhes dos Investimentos
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Filter className="h-4 w-4 text-secondary-400" />
                    <select 
                      value={selectedPeriod}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white text-sm"
                    >
                      {periods.map(period => (
                        <option key={period} value={period} className="bg-secondary-800">
                          {period}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredInvestments.map((investment, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-4 h-4 rounded-full ${investment.color}`}></div>
                          <div>
                            <div className="text-white font-medium">{investment.name}</div>
                            <div className="text-secondary-400 text-sm">{investment.allocation}% do portfólio</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-semibold">{investment.value}</div>
                          <div className={`text-sm flex items-center ${
                            investment.trend === 'up' ? 'text-success-400' : 'text-error-400'
                          }`}>
                            {investment.trend === 'up' ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                            {investment.return}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-6 rounded-2xl"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Transações Recentes
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-secondary-400 font-medium">Tipo</th>
                    <th className="text-left py-3 px-4 text-secondary-400 font-medium">Ativo</th>
                    <th className="text-left py-3 px-4 text-secondary-400 font-medium">Quantidade</th>
                    <th className="text-left py-3 px-4 text-secondary-400 font-medium">Preço</th>
                    <th className="text-left py-3 px-4 text-secondary-400 font-medium">Total</th>
                    <th className="text-left py-3 px-4 text-secondary-400 font-medium">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((transaction, index) => (
                    <motion.tr
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                          transaction.type === 'buy' ? 'bg-success-500/20 text-success-400' :
                          transaction.type === 'sell' ? 'bg-error-500/20 text-error-400' :
                          'bg-primary-500/20 text-primary-400'
                        }`}>
                          {transaction.type === 'buy' ? 'Compra' : 
                           transaction.type === 'sell' ? 'Venda' : 'Dividendo'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-white font-medium">{transaction.asset}</td>
                      <td className="py-3 px-4 text-secondary-200">{transaction.quantity}</td>
                      <td className="py-3 px-4 text-secondary-200">{transaction.price}</td>
                      <td className="py-3 px-4 text-white font-medium">{transaction.total}</td>
                      <td className="py-3 px-4 text-secondary-400 text-sm">
                        {new Date(transaction.date).toLocaleDateString('pt-BR')}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Chart Placeholder */}
      <section className="section-padding bg-white/5 backdrop-blur-sm">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">
                Performance Histórica
              </h3>
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

            {/* Chart Placeholder */}
            <div className="h-64 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <p className="text-secondary-300">Gráfico de Performance</p>
                <p className="text-secondary-400 text-sm">Dados em tempo real</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Portfolio