import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      content: "+7 (495) 123-45-67",
      description: "Горячая линия 24/7",
    },
    {
      icon: "Mail",
      title: "Email",
      content: "info@picasso-medical.ru",
      description: "Ответим в течение часа",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      content: "г. Москва, ул. Медицинская, д. 15",
      description: "Центр CBCT диагностики",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      content: "Пн-Пт: 8:00-20:00, Сб: 9:00-18:00",
      description: "Воскресенье - выходной",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-gray-50 to-orange-500/20">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Radio" size={16} className="text-orange-500" />
            <span className="text-orange-500 font-medium">Прямая связь</span>
          </div>

          <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            Контакты Пикассо
          </h1>
          <p className="text-xl text-gray-600">
            Рентгеновское качество связи с нашими специалистами
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              className="p-6 border-2 border-purple-200/50 hover:border-orange-300/50 transition-all duration-300 bg-gradient-to-br from-white to-purple-50/20 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={contact.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg mb-1 text-purple-700">
                    {contact.title}
                  </h3>
                  <p className="text-gray-900 font-semibold mb-1">
                    {contact.content}
                  </p>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-purple-600/10 to-orange-500/10 border-2 border-purple-400/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              <h2 className="font-montserrat font-bold text-2xl text-purple-700">
                💬 Онлайн поддержка
              </h2>
            </div>
            <p className="text-gray-700 mb-6 font-medium">
              Наши специалисты готовы проконсультировать вас по всем вопросам
              конкурса и CBCT диагностики. Получите мгновенную поддержку!
            </p>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white font-bold py-6 text-lg">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Начать чат
            </Button>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-orange-500/10 to-purple-600/10 border-2 border-orange-400/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h2 className="font-montserrat font-bold text-2xl text-orange-600">
                ⚡ Экстренная связь
              </h2>
            </div>
            <p className="text-gray-700 mb-6 font-medium">
              Для участников конкурса доступна приоритетная линия поддержки.
              Решаем любые вопросы в режиме реального времени!
            </p>
            <Button
              variant="outline"
              className="w-full border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-bold py-6 text-lg"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-gradient-to-r from-purple-900/10 via-orange-500/10 to-purple-900/10 border-2 border-purple-500/30">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Heart" size={32} className="text-white" />
            </div>
            <h3 className="font-montserrat font-bold text-2xl mb-2 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              🏥 Пикассо - Ваш партнер в медицинской диагностике
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы используем передовые технологии рентгеновской диагностики для
              получения максимально точных результатов. Доверьте нам здоровье
              ваших пациентов!
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contacts;
