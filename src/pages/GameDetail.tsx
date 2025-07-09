import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const GameDetail = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  // Mock game data - в реальном проекте это будет из API
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
      fullDescription:
        "Погрузитесь в захватывающий мир Dark Fantasy Quest, где вас ждут невероятные приключения, опасные враги и магические артефакты. Создайте своего уникального героя и отправляйтесь в путешествие через темные леса, заброшенные замки и мистические подземелья.",
      features: [
        "Открытый мир",
        "Кастомизация персонажа",
        "Система крафта",
        "Кооперативный режим",
      ],
      trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      screenshots: [
        "/img/580eb3c1-a1a8-4a4b-8871-5efded4afec1.jpg",
        "/img/1cb2cbcb-75d1-4357-8b3b-4072e4f2cb48.jpg",
        "/img/f12c4a06-acfd-451b-90f3-86508e4d192d.jpg",
      ],
      systemRequirements: {
        minimum: {
          os: "Windows 10 64-bit",
          processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
          memory: "8 GB RAM",
          graphics: "NVIDIA GTX 1060 6GB / AMD RX 580 8GB",
          storage: "50 GB available space",
        },
        recommended: {
          os: "Windows 11 64-bit",
          processor: "Intel Core i7-10700K / AMD Ryzen 7 3700X",
          memory: "16 GB RAM",
          graphics: "NVIDIA RTX 3070 / AMD RX 6700 XT",
          storage: "50 GB available space (SSD)",
        },
      },
    },
  ];

  const game = games.find((g) => g.id === parseInt(gameId || "1"));

  if (!game) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Игра не найдена</h1>
          <Button
            onClick={() => navigate("/")}
            className="bg-[#FF6B35] hover:bg-[#e55a2b]"
          >
            Вернуться к каталогу
          </Button>
        </div>
      </div>
    );
  }

  const addToCart = () => {
    setIsInCart(true);
    // Здесь будет логика добавления в корзину
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="bg-[#2D2D2D] border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-white hover:bg-[#1A1A1A]"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад
              </Button>
              <Icon name="Gamepad2" size={32} className="text-[#FF6B35]" />
              <h1 className="text-2xl font-bold">GameStore</h1>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate("/cart")}
                className="border-gray-600 hover:bg-[#FF6B35] hover:border-[#FF6B35]"
              >
                <Icon name="ShoppingCart" size={20} />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/profile")}
                className="border-gray-600 hover:bg-[#4A4AFF] hover:border-[#4A4AFF]"
              >
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Media */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {game.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>

          {/* Game Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Icon
                    name="Star"
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                  <span className="text-sm">{game.rating}</span>
                </div>
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

              <p className="text-gray-400 mb-4">{game.description}</p>

              <div className="space-y-2">
                <h3 className="font-semibold">Особенности:</h3>
                <ul className="text-gray-400 space-y-1">
                  {game.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-400 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Card className="bg-[#2D2D2D] border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    {game.discount > 0 && (
                      <Badge className="bg-[#FF6B35] text-white mb-2">
                        -{game.discount}%
                      </Badge>
                    )}
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-[#FF6B35]">
                        ${game.price}
                      </span>
                      {game.originalPrice > game.price && (
                        <span className="text-lg text-gray-400 line-through">
                          ${game.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="border-gray-600"
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="border-gray-600"
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>

                  <Button
                    onClick={addToCart}
                    className={`w-full ${
                      isInCart
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-[#FF6B35] hover:bg-[#e55a2b]"
                    } text-white`}
                  >
                    {isInCart ? (
                      <>
                        <Icon name="Check" size={16} className="mr-2" />В
                        корзине
                      </>
                    ) : (
                      <>
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Добавить в корзину
                      </>
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-gray-600 hover:bg-[#4A4AFF] hover:border-[#4A4AFF]"
                  >
                    <Icon name="Heart" size={16} className="mr-2" />В избранное
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-[#2D2D2D]">
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="requirements">
                Системные требования
              </TabsTrigger>
              <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card className="bg-[#2D2D2D] border-gray-700">
                <CardHeader>
                  <CardTitle>Об игре</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    {game.fullDescription}
                  </p>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Трейлер</h3>
                    <div className="bg-[#1A1A1A] rounded-lg p-8 text-center">
                      <Icon
                        name="Play"
                        size={48}
                        className="mx-auto mb-4 text-[#FF6B35]"
                      />
                      <p className="text-gray-400">Трейлер будет здесь</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="requirements" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-[#2D2D2D] border-gray-700">
                  <CardHeader>
                    <CardTitle>Минимальные требования</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <span className="font-semibold text-[#FF6B35]">ОС:</span>
                      <p className="text-gray-300">
                        {game.systemRequirements.minimum.os}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#FF6B35]">
                        Процессор:
                      </span>
                      <p className="text-gray-300">
                        {game.systemRequirements.minimum.processor}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#FF6B35]">
                        Память:
                      </span>
                      <p className="text-gray-300">
                        {game.systemRequirements.minimum.memory}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#FF6B35]">
                        Видеокарта:
                      </span>
                      <p className="text-gray-300">
                        {game.systemRequirements.minimum.graphics}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#FF6B35]">
                        Место на диске:
                      </span>
                      <p className="text-gray-300">
                        {game.systemRequirements.minimum.storage}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#2D2D2D] border-gray-700">
                  <CardHeader>
                    <CardTitle>Рекомендуемые требования</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <span className="font-semibold text-[#4A4AFF]">ОС:</span>
                      <p className="text-gray-300">
                        {game.systemRequirements.recommended.os}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#4A4AFF]">
                        Процессор:
                      </span>
                      <p className="text-gray-300">
                        {game.systemRequirements.recommended.processor}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#4A4AFF]">
                        Память:
                      </span>
                      <p className="text-gray-300">
                        {game.systemRequirements.recommended.memory}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#4A4AFF]">
                        Видеокарта:
                      </span>
                      <p className="text-gray-300">
                        {game.systemRequirements.recommended.graphics}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#4A4AFF]">
                        Место на диске:
                      </span>
                      <p className="text-gray-300">
                        {game.systemRequirements.recommended.storage}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card className="bg-[#2D2D2D] border-gray-700">
                <CardHeader>
                  <CardTitle>Отзывы игроков</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((review) => (
                      <div
                        key={review}
                        className="border-b border-gray-700 pb-4"
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Icon
                                key={star}
                                name="Star"
                                size={16}
                                className={`${star <= 4 ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">
                            Игрок_{review}
                          </span>
                        </div>
                        <p className="text-gray-300">
                          Отличная игра! Захватывающий сюжет и красивая графика.
                          Рекомендую всем любителям RPG.
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default GameDetail;
