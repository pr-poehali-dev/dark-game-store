import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const Cart = () => {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Dark Fantasy Quest",
      price: 59.99,
      originalPrice: 79.99,
      image: "/img/580eb3c1-a1a8-4a4b-8871-5efded4afec1.jpg",
      quantity: 1,
      platform: "PC",
      discount: 25,
    },
    {
      id: 2,
      title: "Neon Racer",
      price: 39.99,
      originalPrice: 49.99,
      image: "/img/1cb2cbcb-75d1-4357-8b3b-4072e4f2cb48.jpg",
      quantity: 1,
      platform: "PC",
      discount: 20,
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.1; // 10% налог
  const total = subtotal + tax;

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Имитация обработки заказа
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    navigate("/profile");
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Корзина</h1>
          <p className="text-gray-400">{cartItems.length} товаров в корзине</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <Icon
              name="ShoppingCart"
              size={64}
              className="mx-auto mb-4 text-gray-600"
            />
            <h2 className="text-2xl font-semibold mb-4">Корзина пуста</h2>
            <p className="text-gray-400 mb-8">
              Добавьте игры в корзину, чтобы оформить заказ
            </p>
            <Button
              onClick={() => navigate("/")}
              className="bg-[#FF6B35] hover:bg-[#e55a2b]"
            >
              Перейти к каталогу
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="bg-[#2D2D2D] border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">
                          {item.title}
                        </h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge
                            variant="outline"
                            className="text-gray-400 border-gray-600"
                          >
                            {item.platform}
                          </Badge>
                          {item.discount > 0 && (
                            <Badge className="bg-[#FF6B35] text-white">
                              -{item.discount}%
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="border-gray-600 w-8 h-8 p-0"
                            >
                              <Icon name="Minus" size={16} />
                            </Button>
                            <span className="w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="border-gray-600 w-8 h-8 p-0"
                            >
                              <Icon name="Plus" size={16} />
                            </Button>
                          </div>

                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-[#FF6B35]">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            {item.originalPrice > item.price && (
                              <span className="text-sm text-gray-400 line-through">
                                $
                                {(item.originalPrice * item.quantity).toFixed(
                                  2,
                                )}
                              </span>
                            )}
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                          >
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="bg-[#2D2D2D] border-gray-700">
                <CardHeader>
                  <CardTitle>Итого</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Подытог:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Налог (10%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator className="bg-gray-600" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Итого:</span>
                    <span className="text-[#FF6B35]">${total.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Promo Code */}
              <Card className="bg-[#2D2D2D] border-gray-700">
                <CardHeader>
                  <CardTitle>Промокод</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Введите промокод"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="bg-[#1A1A1A] border-gray-600"
                    />
                    <Button
                      variant="outline"
                      className="border-gray-600 hover:bg-[#4A4AFF] hover:border-[#4A4AFF]"
                    >
                      Применить
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="bg-[#2D2D2D] border-gray-700">
                <CardHeader>
                  <CardTitle>Способ оплаты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="card"
                        checked={paymentMethod === "card"}
                        onCheckedChange={() => setPaymentMethod("card")}
                      />
                      <label
                        htmlFor="card"
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <Icon name="CreditCard" size={16} />
                        <span>Банковская карта</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="paypal"
                        checked={paymentMethod === "paypal"}
                        onCheckedChange={() => setPaymentMethod("paypal")}
                      />
                      <label
                        htmlFor="paypal"
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <Icon name="Wallet" size={16} />
                        <span>PayPal</span>
                      </label>
                    </div>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="space-y-3">
                      <Input
                        placeholder="Номер карты"
                        className="bg-[#1A1A1A] border-gray-600"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          placeholder="ММ/ГГ"
                          className="bg-[#1A1A1A] border-gray-600"
                        />
                        <Input
                          placeholder="CVV"
                          className="bg-[#1A1A1A] border-gray-600"
                        />
                      </div>
                      <Input
                        placeholder="Имя на карте"
                        className="bg-[#1A1A1A] border-gray-600"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Checkout Button */}
              <Button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white py-3 text-lg font-semibold"
              >
                {isProcessing ? (
                  <>
                    <Icon
                      name="Loader2"
                      size={20}
                      className="mr-2 animate-spin"
                    />
                    Обработка...
                  </>
                ) : (
                  <>
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Оформить заказ
                  </>
                )}
              </Button>

              <p className="text-sm text-gray-400 text-center">
                Нажимая "Оформить заказ", вы соглашаетесь с условиями
                использования
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
