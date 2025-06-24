import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Results = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-bold text-4xl mb-4">
            Результаты <span className="text-primary">конкурса</span>
          </h1>
          <p className="text-xl text-gray-600">
            Итоги конкурса будут объявлены после завершения акции
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="p-8 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Clock" size={32} className="text-primary" />
            </div>

            <h2 className="font-montserrat font-semibold text-2xl mb-4">
              Конкурс активен
            </h2>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Конкурс все еще проходит! Регистрируйтесь и направляйте пациентов
              на CBCT диагностику. Результаты будут объявлены в течение 30 дней
              после окончания акции.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/registration">
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  Участвовать сейчас
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/rules">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Условия конкурса
                </Link>
              </Button>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="Trophy" size={20} className="text-accent" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl">
                  Главный приз
                </h3>
              </div>
              <p className="text-gray-600">
                Современный ноутбук от компании Picasso для победителя,
                направившего наибольшее количество пациентов
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Gift" size={20} className="text-primary" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl">
                  Дополнительные призы
                </h3>
              </div>
              <p className="text-gray-600">
                Сертификаты и скидки на дальнейшие исследования для всех
                участников конкурса
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Bell" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-xl mb-2">
                  Следите за обновлениями
                </h3>
                <p className="text-gray-700">
                  Мы уведомим всех зарегистрированных участников о результатах
                  конкурса. Победители будут объявлены на сайте и получат
                  персональное уведомление.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Results;
