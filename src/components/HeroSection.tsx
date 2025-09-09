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
    <section id="home" className="pt-20 pb-16 bg-hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Very Subtle Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-3 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-accent rounded-full opacity-2 animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Cliniter Plus Brand - Luxury Edition */}
              <div className="inline-block">
                <div className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-2xl shadow-luxury border-2 border-primary/30 backdrop-blur-sm">
                  <h2 className="text-2xl md:text-3xl font-luxury font-bold tracking-wide">
                    CLINITER PLUS
                  </h2>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-luxury font-bold text-foreground leading-tight">
                <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-primary bg-clip-text text-transparent">
                  ระบบคลินิกออนไลน์
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl text-secondary font-premium font-semibold">
                  ครบ จบในที่เดียว
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg font-premium">
                ลดงานซ้ำซ้อน เพิ่มประสิทธิภาพ เห็นรายได้แบบเรียลไทม์ 
                <span className="text-primary font-semibold">รองรับหลายสาขา</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4 shadow-luxury hover:shadow-glow transition-all duration-300 font-premium font-semibold" asChild>
                <a href="tel:099-264-4446">
                  <Phone className="w-5 h-5 mr-3" />
                  ขอนัดเดโม่ฟรี
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 shadow-premium hover:shadow-luxury transition-all duration-300 font-premium font-medium" asChild>
                <a href="https://lin.ee/rQIBIYa" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  คุยกับทีมทาง LINE
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid sm:grid-cols-3 gap-4 pt-8">
              {trustIndicators.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-6 bg-card rounded-xl shadow-luxury border border-border/50 hover:shadow-premium transition-all duration-300 backdrop-blur-sm">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <p className="text-sm font-premium font-medium text-foreground leading-snug">
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
                className="w-full h-auto rounded-2xl shadow-premium border-2 border-primary/20 backdrop-blur-sm"
              />
            </div>
            
            {/* Premium Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse shadow-glow"></div>
            <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-gradient-accent rounded-full opacity-15 animate-pulse shadow-luxury" style={{ animationDelay: '1s' }}></div>
            
            {/* Luxury Feature Badges */}
            <div className="absolute top-6 right-6 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full shadow-luxury text-sm font-luxury font-semibold backdrop-blur-sm border border-primary/30">
              <CheckCircle className="w-4 h-4 inline mr-2" />
              รองรับหลายสาขา
            </div>
            
            <div className="absolute bottom-6 left-6 bg-card border-2 border-primary/20 shadow-premium px-6 py-3 rounded-full text-sm font-premium font-medium backdrop-blur-sm">
              💡 ใช้งานง่าย ภายใน 1 วัน
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;