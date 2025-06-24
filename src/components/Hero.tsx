import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Zap" size={16} className="text-primary" />
            <span className="text-primary font-medium">
              Ограниченное предложение
            </span>
          </div>

          <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6 leading-tight">
            Направьте <span className="text-primary">300 пациентов</span>
            <br />и выиграйте <span className="text-accent">ноутбук</span>!
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Участвуйте в конкурсе для клиник: направляйте пациентов на CBCT
            диагностику и получите шанс выиграть современный ноутбук от компании
            Picasso
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/registration">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Участвовать в конкурсе
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6"
            >
              <Link to="/rules">
                <Icon name="FileText" size={20} className="mr-2" />
                Правила конкурса
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-scale-in">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Users" size={24} className="text-primary" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-3">
              300 пациентов
            </h3>
            <p className="text-gray-600">
              Направьте 300 пациентов на CBCT диагностику в наш центр
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Laptop" size={24} className="text-accent" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-3">
              Ноутбук в подарок
            </h3>
            <p className="text-gray-600">
              Современный ноутбук от компании Picasso для победителя
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Calendar" size={24} className="text-primary" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-3">
              Простая регистрация
            </h3>
            <p className="text-gray-600">
              Зарегистрируйтесь за 2 минуты и начинайте участвовать
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
