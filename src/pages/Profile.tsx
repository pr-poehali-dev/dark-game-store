import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data
  const [userData, setUserData] = useState({
    name: "Алексей Петров",
    email: "alexey.petrov@example.com",
    avatar: "",
    memberSince: "2022-01-15",
    totalSpent: 299.97,
    gamesOwned: 12,
  });

  // Mock order history
  const orderHistory = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      items: [
        {
          title: "Dark Fantasy Quest",
          price: 59.99,
          image: "/img/580eb3c1-a1a8-4a4b-8871-5efded4afec1.jpg",
        },
        {
          title: "Neon Racer",
          price: 39.99,
          image: "/img/1cb2cbcb-75d1-4357-8b3b-4072e4f2cb48.jpg",
        },
      ],
      total: 99.98,
      status: "completed",
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      items: [
        {
          title: "Forest of Shadows",
          price: 29.99,
          image: "/img/f12c4a06-acfd-451b-90f3-86508e4d192d.jpg",
        },
      ],
      total: 29.99,
      status: "completed",
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      items: [
        {
          title: "Space Warriors",
          price: 49.99,
          image: "/img/580eb3c1-a1a8-4a4b-8871-5efded4afec1.jpg",
        },
        {
          title: "Puzzle Master",
          price: 19.99,
          image: "/img/1cb2cbcb-75d1-4357-8b3b-4072e4f2cb48.jpg",
        },
      ],
      total: 69.98,
      status: "completed",
    },
  ];

  // Mock library
  const gameLibrary = [
    {
      id: 1,
      title: "Dark Fantasy Quest",
      image: "/img/580eb3c1-a1a8-4a4b-8871-5efded4afec1.jpg",
      purchaseDate: "2024-01-15",
      playTime: "45 часов",
      lastPlayed: "2024-01-20",
      status: "installed",
    },
    {
      id: 2,
      title: "Neon Racer",
      image: "/img/1cb2cbcb-75d1-4357-8b3b-4072e4f2cb48.jpg",
      purchaseDate: "2024-01-15",
      playTime: "12 часов",
      lastPlayed: "2024-01-18",
      status: "not_installed",
    },
    {
      id: 3,
      title: "Forest of Shadows",
      image: "/img/f12c4a06-acfd-451b-90f3-86508e4d192d.jpg",
      purchaseDate: "2024-01-10",
      playTime: "8 часов",
      lastPlayed: "2024-01-16",
      status: "installed",
    },
  ];

  const saveProfile = () => {
    setIsEditing(false);
    // Здесь будет логика сохранения профиля
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-600";
      case "processing":
        return "bg-yellow-600";
      case "cancelled":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Выполнен";
      case "processing":
        return "Обработка";
      case "cancelled":
        return "Отменен";
      default:
        return "Неизвестно";
    }
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
                className="border-gray-600 text-[#4A4AFF] border-[#4A4AFF]"
              >
                <Icon name="User" size={20} />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-[#2D2D2D] border-gray-700">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={userData.avatar} />
                  <AvatarFallback className="bg-[#FF6B35] text-white text-2xl">
                    {userData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold mb-2">{userData.name}</h2>
                <p className="text-gray-400 mb-4">{userData.email}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Участник с:</span>
                    <span>
                      {new Date(userData.memberSince).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Потрачено:</span>
                    <span className="text-[#FF6B35]">
                      ${userData.totalSpent}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Игр в библиотеке:</span>
                    <span>{userData.gamesOwned}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-[#2D2D2D]">
                <TabsTrigger value="profile">Профиль</TabsTrigger>
                <TabsTrigger value="library">Библиотека</TabsTrigger>
                <TabsTrigger value="orders">История заказов</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="mt-6">
                <Card className="bg-[#2D2D2D] border-gray-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Информация профиля</CardTitle>
                      <Button
                        variant={isEditing ? "default" : "outline"}
                        onClick={() =>
                          isEditing ? saveProfile() : setIsEditing(true)
                        }
                        className={
                          isEditing
                            ? "bg-[#FF6B35] hover:bg-[#e55a2b]"
                            : "border-gray-600 hover:bg-[#4A4AFF] hover:border-[#4A4AFF]"
                        }
                      >
                        {isEditing ? (
                          <>
                            <Icon name="Check" size={16} className="mr-2" />
                            Сохранить
                          </>
                        ) : (
                          <>
                            <Icon name="Edit2" size={16} className="mr-2" />
                            Редактировать
                          </>
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя</Label>
                        <Input
                          id="name"
                          value={userData.name}
                          onChange={(e) =>
                            setUserData({ ...userData, name: e.target.value })
                          }
                          disabled={!isEditing}
                          className="bg-[#1A1A1A] border-gray-600 disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          value={userData.email}
                          onChange={(e) =>
                            setUserData({ ...userData, email: e.target.value })
                          }
                          disabled={!isEditing}
                          className="bg-[#1A1A1A] border-gray-600 disabled:opacity-50"
                        />
                      </div>
                    </div>

                    {isEditing && (
                      <div>
                        <Label htmlFor="password">Новый пароль</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Оставьте пустым, чтобы не менять"
                          className="bg-[#1A1A1A] border-gray-600"
                        />
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                      <Card className="bg-[#1A1A1A] border-gray-600">
                        <CardContent className="p-4 text-center">
                          <Icon
                            name="Trophy"
                            size={24}
                            className="mx-auto mb-2 text-[#FF6B35]"
                          />
                          <h3 className="font-semibold">Уровень</h3>
                          <p className="text-2xl font-bold text-[#FF6B35]">
                            15
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="bg-[#1A1A1A] border-gray-600">
                        <CardContent className="p-4 text-center">
                          <Icon
                            name="Target"
                            size={24}
                            className="mx-auto mb-2 text-[#4A4AFF]"
                          />
                          <h3 className="font-semibold">Достижения</h3>
                          <p className="text-2xl font-bold text-[#4A4AFF]">
                            23
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="bg-[#1A1A1A] border-gray-600">
                        <CardContent className="p-4 text-center">
                          <Icon
                            name="Clock"
                            size={24}
                            className="mx-auto mb-2 text-green-400"
                          />
                          <h3 className="font-semibold">Время игры</h3>
                          <p className="text-2xl font-bold text-green-400">
                            156ч
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="library" className="mt-6">
                <Card className="bg-[#2D2D2D] border-gray-700">
                  <CardHeader>
                    <CardTitle>Моя библиотека</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {gameLibrary.map((game) => (
                        <div
                          key={game.id}
                          className="flex items-center space-x-4 p-4 bg-[#1A1A1A] rounded-lg"
                        >
                          <img
                            src={game.image}
                            alt={game.title}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{game.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                              <span>
                                Куплено:{" "}
                                {new Date(
                                  game.purchaseDate,
                                ).toLocaleDateString()}
                              </span>
                              <span>Время игры: {game.playTime}</span>
                              <span>
                                Последняя игра:{" "}
                                {new Date(game.lastPlayed).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge
                              className={
                                game.status === "installed"
                                  ? "bg-green-600"
                                  : "bg-gray-600"
                              }
                            >
                              {game.status === "installed"
                                ? "Установлено"
                                : "Не установлено"}
                            </Badge>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => navigate(`/game/${game.id}`)}
                              className="border-gray-600 hover:bg-[#4A4AFF] hover:border-[#4A4AFF]"
                            >
                              <Icon name="Play" size={16} className="mr-1" />
                              {game.status === "installed"
                                ? "Играть"
                                : "Установить"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="orders" className="mt-6">
                <Card className="bg-[#2D2D2D] border-gray-700">
                  <CardHeader>
                    <CardTitle>История заказов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {orderHistory.map((order) => (
                        <div
                          key={order.id}
                          className="border border-gray-600 rounded-lg p-4"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="font-semibold">
                                Заказ #{order.id}
                              </h3>
                              <p className="text-sm text-gray-400">
                                {new Date(order.date).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="text-right">
                              <Badge className={getStatusColor(order.status)}>
                                {getStatusText(order.status)}
                              </Badge>
                              <p className="text-lg font-bold text-[#FF6B35] mt-1">
                                ${order.total}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            {order.items.map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-3"
                              >
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-12 h-12 object-cover rounded"
                                />
                                <div className="flex-1">
                                  <h4 className="font-medium">{item.title}</h4>
                                  <p className="text-sm text-gray-400">
                                    ${item.price}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
