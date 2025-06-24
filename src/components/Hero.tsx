import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* X-ray Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-orange-400 rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-purple-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 border border-orange-500 rotate-12"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 border-2 border-purple-600 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-orange-900/40" />

      {/* X-ray scan lines effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 min-h-screen flex items-center">
        <div className="w-full">
          {/* Company Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-orange-500 px-6 py-3 rounded-full mb-6 shadow-lg shadow-purple-500/25">
              <Icon
                name="Activity"
                size={20}
                className="text-white animate-pulse"
              />
              <span className="text-white font-bold text-lg tracking-wider">
                ПИКАССО X-RAY CONTEST
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-12">
            <h1 className="font-montserrat font-black text-5xl lg:text-8xl mb-8 leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400 drop-shadow-2xl">
                300 ПАЦИЕНТОВ
              </span>
              <br />
              <span className="text-white text-4xl lg:text-6xl animate-pulse">
                = НОУТБУК
              </span>
              <br />
              <span className="text-orange-400 text-3xl lg:text-4xl font-bold animate-bounce">
                В ПОДАРОК!
              </span>
            </h1>

            <div className="bg-gradient-to-r from-purple-600/20 to-orange-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto mb-10">
              <p className="text-2xl lg:text-3xl text-white font-semibold mb-4">
                🎯 КОНКУРС ДЛЯ КЛИНИК
              </p>
              <p className="text-xl text-gray-200 leading-relaxed">
                Направляйте пациентов на{" "}
                <span className="text-purple-400 font-bold">
                  CBCT диагностику
                </span>
                <br />и получите шанс выиграть современный ноутбук от компании{" "}
                <span className="text-orange-400 font-bold">Пикассо</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="text-xl px-12 py-8 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg shadow-purple-500/25 border-2 border-purple-400"
              >
                <Link to="/registration">
                  <Icon name="Zap" size={24} className="mr-3" />
                  УЧАСТВОВАТЬ СЕЙЧАС
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-xl px-12 py-8 border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black shadow-lg shadow-orange-500/25"
              >
                <Link to="/conditions">
                  <Icon name="FileText" size={24} className="mr-3" />
                  Условия конкурса
                </Link>
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-2 border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl mb-4 text-white">
                300 ПАЦИЕНТОВ
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Направьте 300 пациентов на CBCT диагностику в наш
                диагностический центр
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-orange-900/50 to-orange-800/30 border-2 border-orange-500/30 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Icon name="Laptop" size={32} className="text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl mb-4 text-white">
                НОУТБУК ПРЕМИУМ
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Современный ноутбук от компании Пикассо ждет своего победителя
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-900/50 via-black/50 to-orange-900/50 border-2 border-gradient-to-r from-purple-500 to-orange-500 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl mb-4 text-white">
                СТАРТ СЕЙЧАС
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Регистрируйтесь прямо сейчас и начинайте участвовать в конкурсе
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
