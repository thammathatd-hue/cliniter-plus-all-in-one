import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle, Users, Clock, BarChart3 } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  const trustIndicators = [
    { icon: Users, text: "กว่า 100 คลินิกใช้งานจริง" },
    { icon: Clock, text: "Support ทุกวัน 09:00–22:00" },
    { icon: BarChart3, text: "อัปเดตระบบต่อเนื่อง" },
  ];

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-subtle min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src="/lovable-uploads/fbf5ef50-39aa-4d0a-9c28-02bb91cd185e.png" 
                  alt="Cliniter Plus Logo" 
                  className="h-16 md:h-20 w-auto"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl">
                  ระบบคลินิกออนไลน์
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
                  ครบ จบในที่เดียว
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                ลดงานซ้ำซ้อน เพิ่มประสิทธิภาพ เห็นรายได้แบบเรียลไทม์ 
                <span className="text-secondary font-semibold">รองรับหลายสาขา</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-3" />
                ขอนัดเดโม่ฟรี
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                <MessageCircle className="w-5 h-5 mr-3" />
                คุยกับทีมทาง LINE
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid sm:grid-cols-3 gap-4 pt-8">
              {trustIndicators.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-card border border-border/50">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-foreground leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Dashboard Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroDashboard}
                alt="Cliniter Plus Dashboard - ระบบจัดการคลินิกออนไลน์"
                className="w-full h-auto rounded-2xl shadow-glow border border-border/20"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Feature Badges */}
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full shadow-medical text-sm font-semibold">
              <CheckCircle className="w-4 h-4 inline mr-2" />
              รองรับหลายสาขา
            </div>
            
            <div className="absolute bottom-4 left-4 bg-card border border-border shadow-card px-4 py-2 rounded-full text-sm font-medium">
              💡 ใช้งานง่าย ภายใน 1 วัน
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;