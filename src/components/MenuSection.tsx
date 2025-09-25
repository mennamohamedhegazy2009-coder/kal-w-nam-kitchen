import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = [
  {
    id: 1,
    name: "منسف أردني",
    description: "لحم غنم طري مع الأرز والجميد واللبن الرائب",
    price: "25 دينار",
    category: "الأطباق الرئيسية"
  },
  {
    id: 2,
    name: "كبسة دجاج",
    description: "دجاج مشوي مع الأرز المبهر والخضروات",
    price: "18 دينار",
    category: "الأطباق الرئيسية"
  },
  {
    id: 3,
    name: "حمص بالطحينة",
    description: "حمص كريمي مع الطحينة وزيت الزيتون",
    price: "8 دينار",
    category: "المقبلات"
  },
  {
    id: 4,
    name: "فتوش",
    description: "سلطة خضروات مع الخبز المحمص والسماق",
    price: "10 دينار",
    category: "السلطات"
  },
  {
    id: 5,
    name: "كنافة نابلسية",
    description: "حلوى تقليدية بالجبن والقطر والفستق",
    price: "12 دينار",
    category: "الحلويات"
  },
  {
    id: 6,
    name: "قهوة عربية",
    description: "قهوة عربية أصيلة بالهيل والزعفران",
    price: "5 دينار",
    category: "المشروبات"
  }
];

const categories = ["الأطباق الرئيسية", "المقبلات", "السلطات", "الحلويات", "المشروبات"];

const MenuSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-4">
            قائمة الطعام
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعة متنوعة من الأطباق الشهية المحضرة بحب وعناية
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              {category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <Card key={item.id} className="shadow-card hover:shadow-warm transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-right text-warm-brown">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="text-right text-muted-foreground">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-cozy-orange">
                          {item.price}
                        </span>
                        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                          أضف للطلب
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;