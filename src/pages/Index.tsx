import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Спасибо за подписку! 🐱');
      setEmail('');
    }
  };

  const cats = [
    {
      id: 1,
      name: 'Мурзик',
      image: 'https://cdn.poehali.dev/projects/4577b67a-e6a0-4554-91ba-4f1c9f4f22ef/files/5c1a4816-4e1e-454e-bdc7-17752613d051.jpg',
      description: 'Самый пушистый и милый котик'
    },
    {
      id: 2,
      name: 'Рыжик',
      image: 'https://cdn.poehali.dev/projects/4577b67a-e6a0-4554-91ba-4f1c9f4f22ef/files/2417fc1c-6632-4362-bff7-0d5d6c494045.jpg',
      description: 'Игривый и озорной красавец'
    },
    {
      id: 3,
      name: 'Снежок',
      image: 'https://cdn.poehali.dev/projects/4577b67a-e6a0-4554-91ba-4f1c9f4f22ef/files/a1e32a6e-4462-4b7e-b792-f816e31e0e81.jpg',
      description: 'Элегантная белоснежная красавица'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Анна',
      text: 'Обожаю этих котиков! Каждый день получаю позитив',
      rating: 5
    },
    {
      id: 2,
      name: 'Михаил',
      text: 'Лучшие фото кошечек в интернете! Спасибо!',
      rating: 5
    },
    {
      id: 3,
      name: 'Елена',
      text: 'Не могу оторваться от галереи. Милота зашкаливает!',
      rating: 5
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              🐱 Кошечки
            </h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                О кошечках
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-primary transition-colors">
                Галерея
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('subscribe')} className="text-sm font-medium hover:text-primary transition-colors">
                Подписка
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Добро пожаловать в мир кошечек!
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Самые милые, пушистые и очаровательные создания ждут вас
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6"
              onClick={() => scrollToSection('gallery')}
            >
              Смотреть галерею
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              О наших кошечках
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl hover:scale-105 duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">😻</div>
                  <h4 className="text-xl font-bold mb-2">Милота</h4>
                  <p className="text-muted-foreground">Невероятно милые и очаровательные кошечки</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-xl hover:scale-105 duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">💖</div>
                  <h4 className="text-xl font-bold mb-2">Любовь</h4>
                  <p className="text-muted-foreground">Каждая кошечка дарит безграничную любовь</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-accent/20 hover:border-accent/50 transition-all hover:shadow-xl hover:scale-105 duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">✨</div>
                  <h4 className="text-xl font-bold mb-2">Радость</h4>
                  <p className="text-muted-foreground">Позитив и хорошее настроение каждый день</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Галерея наших любимцев
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {cats.map((cat, index) => (
              <Card 
                key={cat.id} 
                className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{cat.name}</h4>
                  <p className="text-muted-foreground">{cat.description}</p>
                  <Button className="mt-4 w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Heart" className="mr-2" />
                    Нравится
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Отзывы наших друзей
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"{review.text}"</p>
                  <p className="font-bold text-primary">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="subscribe" className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="max-w-2xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-12 text-center">
              <div className="text-6xl mb-6">📬</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Подпишитесь на рассылку
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Получайте самые милые фото кошечек каждую неделю!
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-4">
                <Input 
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 text-lg py-6 border-2"
                  required
                />
                <Button type="submit" size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 px-8">
                  <Icon name="Send" className="mr-2" />
                  Подписаться
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Контакты
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами в социальных сетях и делитесь фото своих любимцев!
          </p>
          <div className="flex justify-center gap-6">
            <Button size="lg" variant="outline" className="border-2 hover:bg-primary hover:text-white hover:border-primary">
              <Icon name="Instagram" className="mr-2" />
              Instagram
            </Button>
            <Button size="lg" variant="outline" className="border-2 hover:bg-secondary hover:text-white hover:border-secondary">
              <Icon name="Facebook" className="mr-2" />
              Facebook
            </Button>
            <Button size="lg" variant="outline" className="border-2 hover:bg-accent hover:text-white hover:border-accent">
              <Icon name="Mail" className="mr-2" />
              Email
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <p className="text-lg text-muted-foreground">
            © 2026 Кошечки. Сделано с 💜 для любителей котиков
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
