import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingCart,
  Package,
  DollarSign,
  Activity,
  AlertCircle,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  bgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
  bgColor,
}) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`${bgColor} p-3 rounded-lg`}>{icon}</div>
        <div
          className={`flex items-center ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
          <span className="ml-1 font-semibold">{Math.abs(change)}%</span>
        </div>
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: "Ventes du mois",
      value: "12,450,000 FCFA",
      change: 12.5,
      icon: <DollarSign className="text-white" size={24} />,
      bgColor: "bg-green-500",
    },
    {
      title: "Total clients",
      value: "1,247",
      change: 8.3,
      icon: <Users className="text-white" size={24} />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Articles vendus",
      value: "3,892",
      change: -2.4,
      icon: <ShoppingCart className="text-white" size={24} />,
      bgColor: "bg-purple-500",
    },
    {
      title: "Produits en stock",
      value: "456",
      change: 5.7,
      icon: <Package className="text-white" size={24} />,
      bgColor: "bg-orange-500",
    },
  ];

  const topProducts = [
    { name: "Riz parfumé (50kg)", sales: 245, revenue: "6,125,000 FCFA" },
    { name: "Huile de palme (25L)", sales: 189, revenue: "4,725,000 FCFA" },
    { name: "Maïs blanc (100kg)", sales: 167, revenue: "3,340,000 FCFA" },
    {
      name: "Arachide décortiquée (50kg)",
      sales: 143,
      revenue: "2,860,000 FCFA",
    },
    { name: "Haricots rouges (25kg)", sales: 128, revenue: "1,920,000 FCFA" },
  ];

  const recentOrders = [
    {
      id: "#CMD-1245",
      client: "Kouassi Jean",
      product: "Riz parfumé",
      amount: "125,000 FCFA",
      status: "Livré",
    },
    {
      id: "#CMD-1244",
      client: "Adjoua Marie",
      product: "Huile de palme",
      amount: "75,000 FCFA",
      status: "En cours",
    },
    {
      id: "#CMD-1243",
      client: "Koné Ibrahim",
      product: "Maïs blanc",
      amount: "200,000 FCFA",
      status: "Livré",
    },
    {
      id: "#CMD-1242",
      client: "Assoumou Grace",
      product: "Arachide",
      amount: "90,000 FCFA",
      status: "En attente",
    },
    {
      id: "#CMD-1241",
      client: "Yao Prisca",
      product: "Haricots",
      amount: "45,000 FCFA",
      status: "Livré",
    },
  ];

  const monthlySales = [
    { month: "Jan", amount: 8200000 },
    { month: "Fév", amount: 9100000 },
    { month: "Mar", amount: 10500000 },
    { month: "Avr", amount: 9800000 },
    { month: "Mai", amount: 11200000 },
    { month: "Juin", amount: 12450000 },
  ];

  const maxSale = Math.max(...monthlySales.map((m) => m.amount));

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Livré":
        return "bg-green-100 text-green-800";
      case "En cours":
        return "bg-blue-100 text-blue-800";
      case "En attente":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Tableau de Bord
          </h1>
          <p className="text-gray-600">Vue globale des activités</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Charts and Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Monthly Sales Chart */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Ventes mensuelles
              </h2>
              <Activity className="text-gray-400" size={24} />
            </div>
            <div className="space-y-4">
              {monthlySales.map((sale, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-12 text-sm font-medium text-gray-600">
                    {sale.month}
                  </span>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-8 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                        style={{ width: `${(sale.amount / maxSale) * 100}%` }}
                      >
                        <span className="text-white text-xs font-semibold">
                          {(sale.amount / 1000000).toFixed(1)}M
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 w-32 text-right">
                    {sale.amount.toLocaleString()} FCFA
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Alertes</h2>
              <AlertCircle className="text-orange-400" size={24} />
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
                <p className="text-sm font-semibold text-orange-800 mb-1">
                  Stock faible
                </p>
                <p className="text-xs text-orange-700">
                  Riz parfumé: 12 unités restantes
                </p>
              </div>
              <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
                <p className="text-sm font-semibold text-red-800 mb-1">
                  Rupture de stock
                </p>
                <p className="text-xs text-red-700">Mil blanc (25kg) épuisé</p>
              </div>
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
                <p className="text-sm font-semibold text-yellow-800 mb-1">
                  Commandes en attente
                </p>
                <p className="text-xs text-yellow-700">8 commandes à traiter</p>
              </div>
              <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
                <p className="text-sm font-semibold text-blue-800 mb-1">
                  Nouveaux clients
                </p>
                <p className="text-xs text-blue-700">
                  23 inscriptions cette semaine
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Products */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Produits les plus vendus
            </h2>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 text-green-800 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {product.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {product.sales} ventes
                      </p>
                    </div>
                  </div>
                  <span className="font-bold text-green-600">
                    {product.revenue}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Commandes récentes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">
                      N°
                    </th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">
                      Client
                    </th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">
                      Montant
                    </th>
                    <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">
                      Statut
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-2 text-sm font-medium text-gray-800">
                        {order.id}
                      </td>
                      <td className="py-3 px-2">
                        <p className="text-sm font-medium text-gray-800">
                          {order.client}
                        </p>
                        <p className="text-xs text-gray-500">{order.product}</p>
                      </td>
                      <td className="py-3 px-2 text-sm font-semibold text-gray-800">
                        {order.amount}
                      </td>
                      <td className="py-3 px-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
