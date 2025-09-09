import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle, Users, Clock, BarChart3 } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  const trustIndicators = [
    { icon: Users, text: "เชื่อถือจากแพทย์มืออาชีพ 100+ คลินิก" },
    { icon: Clock, text: "สนับสนุนระบบ 24/7 โดยทีมแพทย์" },
    { icon: BarChart3, text: "อัปเดตตามมาตรฐานการแพทย์" },
  ];

  return (
    <section id="home" className="pt-20 pb-16 bg-hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Reduced Opacity Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-1 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-accent rounded-full opacity-1 animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Cliniter Plus Medical Professional Brand */}
              <div className="inline-block mb-8 relative">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-kanit font-extrabold cliniter-brand-readable tracking-wide">
                  CLINITER PLUS
                </h2>
              </div>
              
              <h1 className="font-kanit font-bold text-foreground leading-tight mb-6">
                <span className="text-medical-title bg-gradient-primary bg-clip-text text-transparent">
                  ระบบคลินิกออนไลน์
                </span>
                <br />
                <span className="text-doctor-professional text-secondary">
                  สำหรับแพทย์ผู้เชี่ยวชาญ
                </span>
              </h1>
              
              <p className="text-medical-body max-w-2xl leading-relaxed">
                เพิ่มประสิทธิภาพการดูแลผู้ป่วย ลดงานเอกสาร เห็นรายได้แบบเรียลไทม์ 
                <span className="text-high-contrast font-semibold text-primary">เชื่อถือได้จากแพทย์มืออาชีพกว่า 100 คลินิก</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button size="lg" variant="cta" className="premium-button text-lg px-12 py-6 font-kanit font-bold text-primary-foreground" asChild>
                <a href="tel:099-264-4446">
                  <Phone className="w-6 h-6 mr-3" />
                  ปรึกษาฟรี สำหรับแพทย์
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="premium-button text-lg px-12 py-6 font-kanit font-semibold" asChild>
                <a href="https://lin.ee/rQIBIYa" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  คุยกับที่ปรึกษาคลินิก
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid sm:grid-cols-3 gap-6 pt-12">
              {trustIndicators.map((item, index) => (
                <div key={index} className="medical-professional-card flex items-center space-x-4 p-8">
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
            
            {/* Medical Professional Feature Badges */}
            <div className="absolute top-8 right-8 medical-professional-card px-8 py-4 rounded-full shadow-excellence backdrop-blur-md">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-medical-body font-semibold text-high-contrast">มาตรฐานการแพทย์</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 medical-professional-card px-8 py-4 rounded-full shadow-premium backdrop-blur-md">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏥</span>
                <span className="text-medical-body font-medium text-high-contrast">ระบบมืออาชีพ สำหรับแพทย์</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;