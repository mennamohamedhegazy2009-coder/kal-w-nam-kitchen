import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-brown mb-4">
            تواصل معنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نحن هنا لخدمتك في أي وقت. تواصل معنا أو قم بزيارتنا
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center shadow-card hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-cozy-orange rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-warm-brown">الموقع</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                شارع الملك حسين<br />
                عمان، الأردن
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-cozy-orange rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-warm-brown">الهاتف</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                +962 6 123 4567<br />
                +962 79 123 4567
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-cozy-orange rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-warm-brown">ساعات العمل</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                يومياً: 11:00 ص - 12:00 م<br />
                الجمعة: 2:00 ظ - 12:00 م
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-cozy-orange rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-warm-brown">البريد الإلكتروني</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                info@eatandsleep.jo<br />
                orders@eatandsleep.jo
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-warm hover:opacity-90 text-white border-none shadow-warm text-lg px-8 py-6"
          >
            احجز طاولتك الآن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;