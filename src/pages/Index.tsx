import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from '@/components/ui/icon'

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedEquipment, setSelectedEquipment] = useState<string>('')

  const equipment = [
    {
      id: 1,
      name: 'Экскаватор JCB JS200',
      category: 'Землеройная техника',
      price: '4500',
      image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
      specs: ['Вес: 20т', 'Глубина копания: 6.5м', 'Мощность: 129 л.с.'],
      availability: true
    },
    {
      id: 2,
      name: 'Самосвал КАМАЗ-65115',
      category: 'Грузовая техника',
      price: '3200',
      image: '/img/bf8ec60c-fcea-441b-9ff5-d6d3e20346b7.jpg',
      specs: ['Грузоподъемность: 15т', 'Объем кузова: 12м³', 'Мощность: 240 л.с.'],
      availability: true
    },
    {
      id: 3,
      name: 'Автокран КС-45719',
      category: 'Подъемная техника',
      price: '5800',
      image: '/img/1d37575b-149f-413e-82cb-d9dfa58c3d99.jpg',
      specs: ['Грузоподъемность: 25т', 'Вылет стрелы: 22м', 'Высота подъема: 28м'],
      availability: false
    }
  ]

  const services = [
    {
      title: 'Почасовая аренда',
      description: 'От 1 часа с оператором',
      price: 'от 1200 ₽/час',
      icon: 'Clock'
    },
    {
      title: 'Посуточная аренда',
      description: 'Минимум 8 часов работы',
      price: 'от 8500 ₽/сутки',
      icon: 'Calendar'
    },
    {
      title: 'Долгосрочная аренда',
      description: 'От 1 месяца со скидкой',
      price: 'от 180000 ₽/мес',
      icon: 'TrendingUp'
    }
  ]

  const handleBooking = () => {
    if (selectedEquipment && selectedDate) {
      alert(`Заявка отправлена на ${selectedEquipment} на ${selectedDate.toLocaleDateString()}`)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Icon name="Truck" size={32} className="text-blue-800" />
              <h1 className="text-2xl font-bold text-gray-900">СпецТехАренда</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-600 hover:text-blue-800 transition-colors">Каталог</a>
              <a href="#services" className="text-gray-600 hover:text-blue-800 transition-colors">Услуги</a>
              <a href="#about" className="text-gray-600 hover:text-blue-800 transition-colors">О компании</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-800 transition-colors">Прайс-лист</a>
              <a href="#contacts" className="text-gray-600 hover:text-blue-800 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-800 hover:bg-blue-900">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Надежная аренда спецтехники</h2>
          <p className="text-xl mb-8 text-blue-100">Широкий парк современной техники для строительства и земляных работ</p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
              <Icon name="Search" className="mr-2 h-5 w-5" />
              Выбрать технику
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
              <Icon name="Calculator" className="mr-2 h-5 w-5" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Каталог техники</h3>
            <p className="text-lg text-gray-600">Современная и исправная техника для любых задач</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge 
                    className={`absolute top-3 right-3 ${item.availability ? 'bg-green-600' : 'bg-red-600'}`}
                  >
                    {item.availability ? 'Доступна' : 'Занята'}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    {item.specs.map((spec, index) => (
                      <li key={index}>• {spec}</li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-800">{item.price} ₽/сутки</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          disabled={!item.availability}
                          onClick={() => setSelectedEquipment(item.name)}
                          className="bg-blue-800 hover:bg-blue-900"
                        >
                          Забронировать
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Бронирование техники</DialogTitle>
                          <DialogDescription>
                            Выберите дату для аренды {item.name}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="date" className="text-right">
                              Дата аренды
                            </Label>
                            <div className="col-span-3">
                              <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                className="rounded-md border"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="duration" className="text-right">
                              Продолжительность
                            </Label>
                            <Input id="duration" defaultValue="1 день" className="col-span-3" />
                          </div>
                        </div>
                        <Button onClick={handleBooking} className="bg-blue-800 hover:bg-blue-900">
                          Отправить заявку
                        </Button>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Услуги аренды</h3>
            <p className="text-lg text-gray-600">Гибкие условия для любых проектов</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-blue-800" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-800 mb-4">{service.price}</div>
                  <Button variant="outline" className="w-full border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">О компании</h3>
              <p className="text-lg text-gray-600 mb-6">
                Более 15 лет предоставляем качественные услуги аренды спецтехники. 
                Наш парк насчитывает свыше 200 единиц современной техники от ведущих производителей.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">200+</div>
                  <div className="text-gray-600">Единиц техники</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">15</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">1500+</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">24/7</div>
                  <div className="text-gray-600">Техническая поддержка</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-800 text-white p-8 rounded-lg">
              <h4 className="text-2xl font-bold mb-6">Наши преимущества</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-400" />
                  <span>Техника в идеальном состоянии</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-400" />
                  <span>Опытные операторы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-400" />
                  <span>Доставка по городу</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-400" />
                  <span>Гарантия качества работ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Прайс-лист</h3>
            <p className="text-lg text-gray-600">Прозрачные цены без скрытых доплат</p>
          </div>
          
          <Tabs defaultValue="excavators" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="excavators">Экскаваторы</TabsTrigger>
              <TabsTrigger value="trucks">Грузовики</TabsTrigger>
              <TabsTrigger value="cranes">Краны</TabsTrigger>
            </TabsList>
            
            <TabsContent value="excavators" className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Модель</th>
                      <th className="border p-3 text-left">Час</th>
                      <th className="border p-3 text-left">Смена (8ч)</th>
                      <th className="border p-3 text-left">Сутки</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">JCB JS200</td>
                      <td className="border p-3 font-semibold">650 ₽</td>
                      <td className="border p-3 font-semibold">4 800 ₽</td>
                      <td className="border p-3 font-semibold">4 500 ₽</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="trucks" className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Модель</th>
                      <th className="border p-3 text-left">Час</th>
                      <th className="border p-3 text-left">Смена (8ч)</th>
                      <th className="border p-3 text-left">Сутки</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">КАМАЗ-65115</td>
                      <td className="border p-3 font-semibold">450 ₽</td>
                      <td className="border p-3 font-semibold">3 400 ₽</td>
                      <td className="border p-3 font-semibold">3 200 ₽</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="cranes" className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Модель</th>
                      <th className="border p-3 text-left">Час</th>
                      <th className="border p-3 text-left">Смена (8ч)</th>
                      <th className="border p-3 text-left">Сутки</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">КС-45719</td>
                      <td className="border p-3 font-semibold">800 ₽</td>
                      <td className="border p-3 font-semibold">6 200 ₽</td>
                      <td className="border p-3 font-semibold">5 800 ₽</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h3>
            <p className="text-lg text-gray-600">Свяжитесь с нами удобным способом</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Phone" size={48} className="mx-auto text-blue-800 mb-4" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+7 (495) 123-45-67</p>
                <p className="text-gray-600">Круглосуточно</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Icon name="Mail" size={48} className="mx-auto text-blue-800 mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">info@specteh.ru</p>
                <p className="text-gray-600">Ответим в течение часа</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Icon name="MapPin" size={48} className="mx-auto text-blue-800 mb-4" />
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">г. Москва</p>
                <p className="text-gray-600">ул. Промышленная, 25</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Truck" size={24} />
                <h4 className="text-xl font-bold">СпецТехАренда</h4>
              </div>
              <p className="text-gray-400">
                Надежная аренда спецтехники для строительства и земляных работ
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Аренда экскаваторов</a></li>
                <li><a href="#" className="hover:text-white">Аренда самосвалов</a></li>
                <li><a href="#" className="hover:text-white">Аренда кранов</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Лицензии</a></li>
                <li><a href="#" className="hover:text-white">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@specteh.ru</p>
                <p>г. Москва, ул. Промышленная, 25</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 СпецТехАренда. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index