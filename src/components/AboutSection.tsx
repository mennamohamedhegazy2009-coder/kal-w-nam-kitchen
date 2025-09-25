import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-6">
              من نحن
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              مطعم "كل ونام" ليس مجرد مكان لتناول الطعام، بل هو تجربة كاملة تجمع بين الطعم الأصيل والراحة التامة. نؤمن بأن الطعام الجيد يجب أن يُقدم في بيئة مريحة ودافئة.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              نحن نقدم أشهى الأطباق العربية التقليدية مع لمسة عصرية، في أجواء تشعرك بالراحة والاسترخاء كما لو كنت في منزلك.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center shadow-card">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-cozy-orange mb-2">15+</div>
                  <div className="text-muted-foreground">سنة من الخبرة</div>
                </CardContent>
              </Card>
              <Card className="text-center shadow-card">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-cozy-orange mb-2">50+</div>
                  <div className="text-muted-foreground">طبق شهي</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-4">
            <Card className="p-6 shadow-card bg-gradient-to-br from-cream to-secondary">
              <h3 className="text-xl font-bold text-warm-brown mb-3">فلسفتنا</h3>
              <p className="text-muted-foreground">
                نؤمن بأن الطعام الجيد هو أساس الصحة والسعادة، ولذلك نحرص على استخدام أجود المكونات الطبيعية
              </p>
            </Card>
            
            <Card className="p-6 shadow-card bg-gradient-to-br from-secondary to-cream">
              <h3 className="text-xl font-bold text-warm-brown mb-3">رؤيتنا</h3>
              <p className="text-muted-foreground">
                أن نكون المكان المفضل للعائلات والأصدقاء للاستمتاع بالطعام الأصيل في أجواء مريحة ودافئة
              </p>
            </Card>
            
            <Card className="p-6 shadow-card bg-gradient-to-br from-cream to-secondary">
              <h3 className="text-xl font-bold text-warm-brown mb-3">التزامنا</h3>
              <p className="text-muted-foreground">
                نلتزم بتقديم أعلى مستويات الجودة والخدمة، مع الحفاظ على التراث الغذائي العربي الأصيل
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;