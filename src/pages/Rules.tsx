import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Rules = () => {
  const rules = [
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
        "Главный приз: современный ноутбук от Picasso",
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-bold text-4xl mb-4">
            Правила <span className="text-primary">конкурса</span>
          </h1>
          <p className="text-xl text-gray-600">
            Ознакомьтесь с условиями участия в конкурсе для клиник
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          {rules.map((section, index) => (
            <Card key={index} className="p-8">
              <h2 className="font-montserrat font-semibold text-2xl mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="AlertCircle" size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-xl mb-2">
                Важная информация
              </h3>
              <p className="text-gray-700 mb-4">
                Конкурс проводится среди медицинских клиник. Победитель
                определяется по количеству направленных пациентов на CBCT
                диагностику. Организаторы оставляют за собой право изменения
                условий.
              </p>
              <p className="text-sm text-gray-600">
                По всем вопросам обращайтесь к организаторам конкурса
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Rules;
