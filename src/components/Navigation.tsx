import { Link, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/rules", label: "Правила", icon: "FileText" },
    { path: "/registration", label: "Регистрация", icon: "UserPlus" },
    { path: "/results", label: "Результаты", icon: "Trophy" },
  ];

  return (
    <Card className="sticky top-4 z-50 mx-4 lg:mx-8">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
            <Icon name="Stethoscope" size={20} className="text-white" />
          </div>
          <span className="font-montserrat font-bold text-lg">
            Конкурс <span className="text-primary">CBCT</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <Icon name={item.icon} size={16} />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Icon name="Menu" size={20} />
          </button>
        </div>
      </nav>
    </Card>
  );
};

export default Navigation;
