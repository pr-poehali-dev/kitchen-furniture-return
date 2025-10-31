import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import CompensationCalculator from "@/components/CompensationCalculator";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

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

  const team = [
    {
      image: "https://cdn.poehali.dev/files/9e9d1333-0fbd-4fde-901e-3d6d390e5274.jpg",
      name: "Слепынин Артем Владимирович",
      position: "Управляющий партнер",
      experience: "18 лет опыта",
      cases: "300+ выигранных дел",
      description: "Основатель юридической практики. Специализируется на сложных потребительских спорах."
    },
    {
      image: "https://cdn.poehali.dev/projects/7469fbf9-0eb6-4bbf-b1b7-eb7bf359b354/files/061418b0-1f35-455f-b5c7-c2ce1573ae8f.jpg",
      name: "Алексей Петров",
      position: "Старший юрист",
      experience: "15 лет опыта",
      cases: "200+ выигранных дел",
      description: "Специализируется на защите прав потребителей. Кандидат юридических наук."
    },
    {
      image: "https://cdn.poehali.dev/projects/7469fbf9-0eb6-4bbf-b1b7-eb7bf359b354/files/50d28b20-e8ee-4199-b8b9-e4322fb438b6.jpg",
      name: "Мария Соколова",
      position: "Ведущий юрист",
      experience: "12 лет опыта",
      cases: "150+ выигранных дел",
      description: "Эксперт по судебным спорам с производителями мебели и техники."
    },
    {
      image: "https://cdn.poehali.dev/projects/7469fbf9-0eb6-4bbf-b1b7-eb7bf359b354/files/b37bb59f-cea3-49ff-8f38-4cf27b10f2ca.jpg",
      name: "Дмитрий Иванов",
      position: "Юрист-эксперт",
      experience: "10 лет опыта",
      cases: "120+ выигранных дел",
      description: "Специалист по досудебному урегулированию и составлению претензий."
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
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg font-semibold bg-white/10 hover:bg-white/20 border-white text-white"
                onClick={() => setIsCalculatorOpen(true)}
              >
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

      <section id="team" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Опытные юристы, которые защитят ваши права
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 overflow-hidden animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold text-base">{member.position}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{member.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Award" size={18} className="text-secondary" />
                    <span className="font-semibold">{member.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="BriefcaseBusiness" size={18} className="text-secondary" />
                    <span className="font-semibold">{member.cases}</span>
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

      <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          <CompensationCalculator onClose={() => setIsCalculatorOpen(false)} />
        </DialogContent>
      </Dialog>

      <a
        href="https://wa.me/79236095502"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Написать в WhatsApp"
      >
        <svg 
          className="w-9 h-9" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute -top-12 right-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Написать в WhatsApp
        </span>
      </a>
    </div>
  );
};

export default Index;