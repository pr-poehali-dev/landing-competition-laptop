import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Conditions = () => {
  const conditions = [
    {
      title: "Условия участия",
      items: [
        "Регистрация в конкурсе до окончания акции",
        "Направление 300 пациентов на CBCT диагностику",
        "Участие только для медицинских клиник",
        "Один участник от одной клиники",
      ],
    },
    {
      title: "Призовой фонд",
      items: [
        "Главный приз: современный ноутбук от Пикассо",
        "Дополнительные призы для участников",
        "Сертификаты для всех зарегистрированных клиник",
        "Скидки на дальнейшие исследования",
      ],
    },
    {
      title: "Подведение итогов",
      items: [
        "Победитель определяется по количеству направлений",
        "Объявление результатов в течение 30 дней",
        "Торжественное вручение призов",
        "Публикация результатов на сайте",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-gray-50 to-orange-500/20">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-600/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Zap" size={16} className="text-purple-600" />
            <span className="text-purple-600 font-medium">
              Эксклюзивные условия
            </span>
          </div>

          <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            Условия участия в конкурсе
          </h1>
          <p className="text-xl text-gray-600">
            Рентгеновский анализ возможностей для вашей клиники
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          {conditions.map((section, index) => (
            <Card
              key={index}
              className="p-8 border-2 border-purple-200/50 hover:border-orange-300/50 transition-all duration-300 bg-gradient-to-r from-white to-purple-50/30"
            >
              <h2 className="font-montserrat font-bold text-2xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <span className="bg-gradient-to-r from-purple-700 to-orange-600 bg-clip-text text-transparent">
                  {section.title}
                </span>
              </h2>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-r from-purple-600/10 via-orange-500/10 to-purple-600/10 border-2 border-purple-400/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="AlertTriangle" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-xl mb-2 text-purple-700">
                ⚡ Критически важная информация
              </h3>
              <p className="text-gray-700 mb-4 font-medium">
                Конкурс проводится среди медицинских клиник. Победитель
                определяется по количеству направленных пациентов на CBCT
                диагностику. Организаторы оставляют за собой право изменения
                условий.
              </p>
              <p className="text-sm text-orange-600 font-semibold">
                📞 По всем вопросам обращайтесь к организаторам конкурса
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Conditions;
