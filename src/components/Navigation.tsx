import { Link, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/conditions", label: "Условия", icon: "FileText" },
    { path: "/registration", label: "Регистрация", icon: "UserPlus" },
    { path: "/contacts", label: "Контакты", icon: "Phone" },
  ];

  return (
    <Card className="sticky top-4 z-50 mx-4 lg:mx-8 shadow-xl border-2 border-purple-200 bg-gradient-to-r from-white to-purple-50">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
            <Icon name="Zap" size={20} className="text-white" />
          </div>
          <span className="font-montserrat font-bold text-xl bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            Пикассо
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-semibold shadow-md ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg transform scale-105"
                  : "hover:bg-gradient-to-r hover:from-purple-100 hover:to-orange-100 text-purple-700 hover:text-purple-800 hover:shadow-lg hover:scale-105"
              }`}
            >
              <Icon name={item.icon} size={16} />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button className="p-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-100 hover:to-orange-100 text-purple-700 hover:shadow-lg transition-all duration-300">
            <Icon name="Menu" size={20} />
          </button>
        </div>
      </nav>
    </Card>
  );
};

export default Navigation;
