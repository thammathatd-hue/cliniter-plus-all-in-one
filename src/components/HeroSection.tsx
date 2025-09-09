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
    <section id="home" className="pt-20 pb-16 bg-gradient-subtle bg-mesh min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-animated-gradient"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-accent rounded-full opacity-15 animate-pulse-glow"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-hero rounded-lg rotate-45 opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  CLINITER PLUS
                </span>
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
              <Button size="lg" variant="cta" className="text-lg px-8 py-4" asChild>
                <a href="tel:099-264-4446">
                  <Phone className="w-5 h-5 mr-3" />
                  ขอนัดเดโม่ฟรี
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
                <a href="https://lin.ee/rQIBIYa" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  คุยกับทีมทาง LINE
                </a>
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

          {/* Right Content - Multi-Device Dashboard */}
          <div className="relative">
            {/* Desktop Monitor */}
            <div className="relative z-10 mb-8">
              <div className="bg-gray-800 rounded-t-2xl p-2 shadow-2xl">
                <div className="bg-gray-700 rounded-lg p-1 mb-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <img
                  src="/lovable-uploads/b5a49245-03fa-48df-b302-6c51acf3f2e1.png"
                  alt="Cliniter Plus Dashboard - Desktop View"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="bg-gray-800 h-6 rounded-b-2xl shadow-2xl relative">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-600 rounded-t-lg"></div>
              </div>
            </div>

            {/* Tablet and Mobile */}
            <div className="flex justify-center space-x-8 relative z-5">
              {/* Tablet */}
              <div className="transform rotate-12 -mt-16">
                <div className="bg-gray-800 rounded-2xl p-3 shadow-xl w-48">
                  <img
                    src="/lovable-uploads/b5a49245-03fa-48df-b302-6c51acf3f2e1.png"
                    alt="Cliniter Plus Dashboard - Tablet View"
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="flex justify-center mt-2">
                    <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Mobile */}
              <div className="transform -rotate-6 -mt-8">
                <div className="bg-gray-800 rounded-3xl p-2 shadow-xl w-24">
                  <div className="bg-black rounded-2xl overflow-hidden">
                    <div className="bg-gray-900 h-4 rounded-t-2xl flex justify-center items-center">
                      <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                    <img
                      src="/lovable-uploads/b5a49245-03fa-48df-b302-6c51acf3f2e1.png"
                      alt="Cliniter Plus Dashboard - Mobile View"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
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