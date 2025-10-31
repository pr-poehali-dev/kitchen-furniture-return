import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
  };

  const services = [
    {
      icon: "FileText",
      title: "Претензия производителю",
      description: "Составим и направим официальную претензию производителю кухонных гарнитуров с требованием устранения недостатков"
    },
    {
      icon: "Scale",
      title: "Судебное представительство",
      description: "Представим ваши интересы в суде при отказе производителя добровольно исправить ситуацию"
    },
    {
      icon: "BadgeCheck",
      title: "Экспертиза качества",
      description: "Организуем независимую экспертизу для подтверждения брака и определения стоимости ремонта"
    },
    {
      icon: "Wallet",
      title: "Возврат денег",
      description: "Добьемся полного возврата средств за некачественный товар с компенсацией морального вреда"
    }
  ];

  const cases = [
    {
      image: "https://cdn.poehali.dev/projects/7469fbf9-0eb6-4bbf-b1b7-eb7bf359b354/files/ea20eca3-12bc-4b72-9b8e-cbcc1341dde5.jpg",
      title: "Возврат 450 000 ₽",
      description: "Клиент получил полную компенсацию за кухню с бракованными фасадами",
      result: "Срок: 2 месяца"
    },
    {
      image: "https://cdn.poehali.dev/projects/7469fbf9-0eb6-4bbf-b1b7-eb7bf359b354/files/d2ae2aa6-6de8-4f92-a3fe-bd737464c86a.jpg",
      title: "Замена гарнитура",
      description: "Производитель заменил всю кухню на новую после нашего вмешательства",
      result: "Срок: 1 месяц"
    },
    {
      image: "https://cdn.poehali.dev/projects/7469fbf9-0eb6-4bbf-b1b7-eb7bf359b354/files/7c9b80ff-6a85-433c-bcfd-d44bdc233721.jpg",
      title: "Компенсация 320 000 ₽",
      description: "Выиграли дело о некачественной столешнице и фурнитуре",
      result: "Срок: 3 месяца"
    }
  ];

  const testimonials = [
    {
      name: "Мария Петрова",
      text: "Спасибо огромное! Думала, что никогда не верну деньги за эту ужасную кухню. Юристы помогли получить все 420 тысяч обратно!",
      rating: 5
    },
    {
      name: "Дмитрий Соколов",
      text: "Профессионалы своего дела. Всё сделали быстро и качественно. Производитель заменил гарнитур на новый без суда.",
      rating: 5
    },
    {
      name: "Елена Васильева",
      text: "Очень довольна результатом! Получила полную компенсацию плюс моральный вред. Рекомендую всем, кто столкнулся с браком!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-primary text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Scale" size={32} className="text-secondary" />
            <span className="text-2xl font-heading font-bold">ЮрКухня</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-secondary transition-colors">Услуги</a>
            <a href="#cases" className="hover:text-secondary transition-colors">Кейсы</a>
            <a href="#testimonials" className="hover:text-secondary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Контакты</a>
          </nav>
          <Button variant="secondary" className="font-semibold">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Вернём деньги за бракованную кухню
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Специализируемся на возврате средств за некачественные кухонные гарнитуры. Более 150 успешных дел.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg font-semibold shadow-xl hover:scale-105 transition-transform">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="text-lg font-semibold bg-white/10 hover:bg-white/20 border-white text-white">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать компенсацию
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-secondary mb-2">98%</div>
                <div className="text-sm text-white/80">Выигранных дел</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-secondary mb-2">150+</div>
                <div className="text-sm text-white/80">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-secondary mb-2">2.5 мес</div>
                <div className="text-sm text-white/80">Средний срок</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный комплекс юридических услуг по защите прав потребителей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Успешные кейсы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">{caseItem.title}</CardTitle>
                  <CardDescription className="text-base">{caseItem.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-secondary font-semibold">
                    <Icon name="Clock" size={18} />
                    {caseItem.result}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят те, кому мы помогли
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-lg">{testimonial.name}</CardTitle>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-secondary fill-secondary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Получить консультацию</h2>
              <p className="text-xl text-white/90">
                Заполните форму, и мы свяжемся с вами в течение 30 минут
              </p>
            </div>
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-2 font-semibold">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/90 text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-white/90 text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Опишите вашу ситуацию</label>
                    <Textarea 
                      placeholder="Расскажите о проблеме с кухней..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-white/90 text-foreground min-h-32"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" variant="secondary" className="w-full text-lg font-semibold">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-white/70 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1F2C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scale" size={28} className="text-secondary" />
                <span className="text-xl font-heading font-bold">ЮрКухня</span>
              </div>
              <p className="text-white/70 text-sm">
                Профессиональная юридическая помощь по возврату средств за бракованные кухни
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Претензионная работа</li>
                <li>Судебное представительство</li>
                <li>Экспертиза качества</li>
                <li>Возврат денег</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@yurkuhnya.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 123
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4">Режим работы</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Пн-Пт: 9:00 - 20:00</li>
                <li>Сб-Вс: 10:00 - 18:00</li>
                <li className="text-secondary font-semibold">Консультация 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
            © 2024 ЮрКухня. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
