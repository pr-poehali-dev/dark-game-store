import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const Index = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [cartItems, setCartItems] = useState<number[]>([]);

  const games = [
    {
      id: 1,
      title: "Dark Fantasy Quest",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.8,
      genre: "RPG",
      platform: "PC",
      image: "/img/580eb3c1-a1a8-4a4b-8871-5efded4afec1.jpg",
      description: "Эпическое приключение в мрачном фэнтезийном мире",
      discount: 25,
    },
    {
      id: 2,
      title: "Neon Racer",
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.5,
      genre: "Racing",
      platform: "PC",
      image: "/img/1cb2cbcb-75d1-4357-8b3b-4072e4f2cb48.jpg",
      description: "Футуристичные гонки в киберпанк-мире",
      discount: 20,
    },
    {
      id: 3,
      title: "Forest of Shadows",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.3,
      genre: "Horror",
      platform: "PC",
      image: "/img/f12c4a06-acfd-451b-90f3-86508e4d192d.jpg",
      description: "Выживание в мрачном лесу полном тайн",
      discount: 25,
    },
    {
      id: 4,
      title: "Space Warriors",
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.6,
      genre: "Action",
      platform: "Console",
      image: "/img/580eb3c1-a1a8-4a4b-8871-5efded4afec1.jpg",
      description: "Космические битвы против инопланетных захватчиков",
      discount: 17,
    },
    {
      id: 5,
      title: "Puzzle Master",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.4,
      genre: "Puzzle",
      platform: "Mobile",
      image: "/img/1cb2cbcb-75d1-4357-8b3b-4072e4f2cb48.jpg",
      description: "Сложные головоломки для тренировки мозга",
      discount: 20,
    },
    {
      id: 6,
      title: "Medieval Legends",
      price: 44.99,
      originalPrice: 59.99,
      rating: 4.7,
      genre: "Strategy",
      platform: "PC",
      image: "/img/f12c4a06-acfd-451b-90f3-86508e4d192d.jpg",
      description: "Стратегическая игра в средневековом мире",
      discount: 25,
    },
  ];

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGenre =
      selectedGenre === "all" || game.genre === selectedGenre;
    const matchesPlatform =
      selectedPlatform === "all" || game.platform === selectedPlatform;
    const matchesPrice =
      game.price >= priceRange[0] && game.price <= priceRange[1];
    return matchesSearch && matchesGenre && matchesPlatform && matchesPrice;
  });

  const addToCart = (gameId: number) => {
    setCartItems((prev) => [...prev, gameId]);
  };

  const removeFromCart = (gameId: number) => {
    setCartItems((prev) => prev.filter((id) => id !== gameId));
  };

  const genres = [
    "all",
    "RPG",
    "Racing",
    "Horror",
    "Action",
    "Puzzle",
    "Strategy",
  ];
  const platforms = ["all", "PC", "Console", "Mobile"];

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="bg-[#2D2D2D] border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Icon name="Gamepad2" size={32} className="text-[#FF6B35]" />
              <h1 className="text-2xl font-bold">GameStore</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="Поиск игр..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 bg-[#1A1A1A] border-gray-600 text-white placeholder-gray-400"
                />
                <Icon
                  name="Search"
                  size={16}
                  className="absolute right-3 top-3 text-gray-400"
                />
              </div>

              <Button
                variant="outline"
                onClick={() => navigate("/cart")}
                className="relative border-gray-600 hover:bg-[#FF6B35] hover:border-[#FF6B35]"
              >
                <Icon name="ShoppingCart" size={20} />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-[#FF6B35] text-white text-xs">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>

              <Button
                variant="outline"
                onClick={() => navigate("/profile")}
                className="border-gray-600 hover:bg-[#4A4AFF] hover:border-[#4A4AFF]"
              >
                <Icon name="User" size={20} />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#4A4AFF] rounded-lg p-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Лучшие игры по отличным ценам
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Откройте для себя новые миры и приключения
            </p>
            <Button
              size="lg"
              className="bg-white text-[#1A1A1A] hover:bg-gray-200"
            >
              Смотреть каталог
            </Button>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <div className="bg-[#2D2D2D] rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Icon name="Filter" size={20} className="mr-2" />
              Фильтры
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Жанр</label>
                <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                  <SelectTrigger className="bg-[#1A1A1A] border-gray-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2D2D2D] border-gray-600">
                    {genres.map((genre) => (
                      <SelectItem key={genre} value={genre}>
                        {genre === "all" ? "Все жанры" : genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Платформа
                </label>
                <Select
                  value={selectedPlatform}
                  onValueChange={setSelectedPlatform}
                >
                  <SelectTrigger className="bg-[#1A1A1A] border-gray-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2D2D2D] border-gray-600">
                    {platforms.map((platform) => (
                      <SelectItem key={platform} value={platform}>
                        {platform === "all" ? "Все платформы" : platform}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Цена: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={100}
                  min={0}
                  step={5}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Games Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Каталог игр</h3>
            <p className="text-gray-400">{filteredGames.length} игр найдено</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <Card
                key={game.id}
                className="bg-[#2D2D2D] border-gray-700 hover:border-[#FF6B35] transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => navigate(`/game/${game.id}`)}
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {game.discount > 0 && (
                      <Badge className="absolute top-2 right-2 bg-[#FF6B35] text-white">
                        -{game.discount}%
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{game.title}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Star"
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                      <span className="text-sm text-gray-400">
                        {game.rating}
                      </span>
                    </div>
                  </div>

                  <CardDescription className="text-gray-400 mb-3">
                    {game.description}
                  </CardDescription>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant="outline"
                        className="text-[#4A4AFF] border-[#4A4AFF]"
                      >
                        {game.genre}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-gray-400 border-gray-600"
                      >
                        {game.platform}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-[#FF6B35]">
                        ${game.price}
                      </span>
                      {game.originalPrice > game.price && (
                        <span className="text-sm text-gray-400 line-through">
                          ${game.originalPrice}
                        </span>
                      )}
                    </div>

                    <Button
                      onClick={() =>
                        cartItems.includes(game.id)
                          ? removeFromCart(game.id)
                          : addToCart(game.id)
                      }
                      className={`${
                        cartItems.includes(game.id)
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-[#FF6B35] hover:bg-[#e55a2b]"
                      } text-white`}
                    >
                      {cartItems.includes(game.id) ? (
                        <>
                          <Icon name="Check" size={16} className="mr-2" />В
                          корзине
                        </>
                      ) : (
                        <>
                          <Icon
                            name="ShoppingCart"
                            size={16}
                            className="mr-2"
                          />
                          Купить
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gamepad2" size={24} className="text-[#FF6B35]" />
                <h4 className="text-lg font-semibold">GameStore</h4>
              </div>
              <p className="text-gray-400">Лучшие игры по отличным ценам</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Новинки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Акции
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Топ игр
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Возврат
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Аккаунт</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Вход
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Регистрация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Библиотека
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2024 GameStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
