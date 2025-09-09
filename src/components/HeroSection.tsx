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
              {/* Cliniter Plus Premium Brand */}
              <div className="inline-block mb-8">
                <div className="bg-gradient-primary text-primary-foreground px-10 py-5 rounded-2xl shadow-excellence border-2 border-primary/20 backdrop-blur-sm">
                  <h2 className="text-3xl md:text-4xl font-luxury font-bold tracking-wide cliniter-brand">
                    CLINITER PLUS
                  </h2>
                </div>
              </div>
              
              <h1 className="font-luxury font-bold text-foreground leading-tight mb-6">
                <span className="text-medical-title bg-gradient-primary bg-clip-text text-transparent">
                  ระบบคลินิกออนไลน์
                </span>
                <br />
                <span className="text-medical-subtitle text-secondary font-premium font-semibold">
                  ครบครัน จบในที่เดียว
                </span>
              </h1>
              
              <p className="text-medical-body max-w-2xl leading-relaxed">
                ลดงานซ้ำซ้อน เพิ่มประสิทธิภาพการทำงาน เห็นรายได้แบบเรียลไทม์ 
                <span className="text-high-contrast font-semibold text-primary">รองรับหลายสาขาพร้อมกัน</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button size="lg" variant="cta" className="premium-button text-lg px-12 py-6 font-premium font-bold text-primary-foreground" asChild>
                <a href="tel:099-264-4446">
                  <Phone className="w-6 h-6 mr-3" />
                  ขอนัดเดโม่ฟรี
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="premium-button text-lg px-12 py-6 font-premium font-semibold" asChild>
                <a href="https://lin.ee/rQIBIYa" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  คุยกับทีมทาง LINE
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid sm:grid-cols-3 gap-6 pt-12">
              {trustIndicators.map((item, index) => (
                <div key={index} className="medical-card flex items-center space-x-4 p-8 hover:shadow-premium transition-luxury">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                  <p className="text-medical-body font-medium text-high-contrast leading-snug">
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
                alt="Cliniter Plus Dashboard - ระบบจัดการคลินิกออนไลน์ระดับพรีเมียม"
                className="w-full h-auto rounded-3xl shadow-excellence border-4 border-primary/15 backdrop-blur-sm"
              />
            </div>
            
            {/* Premium Floating Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-primary rounded-full opacity-15 animate-pulse shadow-glow"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-accent rounded-full opacity-12 animate-pulse shadow-luxury" style={{ animationDelay: '1s' }}></div>
            
            {/* Luxury Feature Badges */}
            <div className="absolute top-8 right-8 medical-card px-8 py-4 rounded-full shadow-excellence border-2 border-primary/20 backdrop-blur-md">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-medical-body font-semibold text-high-contrast">รองรับหลายสาขา</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 medical-card px-8 py-4 rounded-full shadow-premium backdrop-blur-md">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💡</span>
                <span className="text-medical-body font-medium text-high-contrast">ใช้งานง่าย ภายใน 1 วัน</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;