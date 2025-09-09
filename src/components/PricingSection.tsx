import { Check, Star, Zap, Crown, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PricingSection = () => {
  const packages = [
    {
      name: "Mini",
      subtitle: "เริ่มต้นธุรกิจคลินิก",
      price: "2,990",
      originalPrice: "3,990",
      suitable: "คลินิกเล็ก 1-2 หมอ",
      icon: Star,
      popular: false,
      features: [
        "ลงทะเบียนผู้ป่วย + เวชระเบียน",
        "ระบบนัดหมาย + จัดคิวพื้นฐาน",
        "บันทึกการตรวจ + Doctor Note",
        "การเงินพื้นฐาน (เก็บเงิน/ใบเสร็จ)",
        "รายงานยอดขายรายวัน",
        "Support ทางโทรศัพท์",
        "ผู้ใช้งาน 3 คน",
        "ข้อมูลผู้ป่วย 1,000 ราย"
      ],
      bgColor: "bg-card",
      borderColor: "border-border",
      buttonVariant: "outline" as const
    },
    {
      name: "More",
      subtitle: "เหมาะสำหรับคลินิกกลาง",
      price: "4,990",
      originalPrice: "6,990",
      suitable: "คลินิกกลาง 3-6 หมอ",
      icon: Zap,
      popular: true,
      features: [
        "ฟีเจอร์ทั้งหมดของ Mini",
        "ระบบ LAB & X-ray + แนบไฟล์",
        "คลังยา + จัดการ Stock/Lot",
        "CRM + ส่งข้อความ LINE OA",
        "รายงานขั้นสูง + Dashboard",
        "ค่าตอบแทนหมออัตโนมัติ",
        "ผู้ใช้งาน 10 คน",
        "ข้อมูลผู้ป่วยไม่จำกัด",
        "Support 24/7 ทุกช่องทาง"
      ],
      bgColor: "bg-gradient-primary",
      borderColor: "border-primary",
      buttonVariant: "cta" as const
    },
    {
      name: "Ultimate",
      subtitle: "สำหรับคลินิกใหญ่/หลายสาขา",
      price: "9,990",
      originalPrice: "12,990",
      suitable: "คลินิกใหญ่ + หลายสาขา",
      icon: Crown,
      popular: false,
      features: [
        "ฟีเจอร์ทั้งหมดของ More",
        "รองรับหลายสาขาไม่จำกัด",
        "รายงานเปรียบเทียบสาขา",
        "ระบบ Franchise Management",
        "API Integration กับระบบอื่น",
        "เว็บไซต์คลินิก + SEO",
        "ผู้ใช้งานไม่จำกัด",
        "ระบบ Backup ขั้นสูง",
        "Onsite Training + Consultant"
      ],
      bgColor: "bg-gradient-accent",
      borderColor: "border-accent",
      buttonVariant: "hero" as const
    }
  ];

  const additionalBenefits = [
    "✅ ใช้งานทันที ไม่มีค่าติดตั้ง",
    "✅ อัปเดตระบบฟรีตลอดชีพ",
    "✅ ฝึกอบรมการใช้งานฟรี",
    "✅ ย้ายข้อมูลเก่าให้ฟรี",
    "✅ รับประกันความพึงพอใจ 30 วัน",
    "✅ ไม่มีค่าใช้จ่ายแอบแฝง"
  ];

  return (
    <section id="pricing" className="py-16 bg-pricing-pattern relative overflow-hidden">
      {/* Clean background elements */}
      <div className="absolute top-40 left-8 w-24 h-24 bg-gradient-primary rounded-full opacity-8 animate-float"></div>
      <div className="absolute bottom-32 right-12 w-32 h-32 bg-gradient-secondary rounded-lg rotate-45 opacity-6 animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              แพ็กเกจที่เหมาะกับ
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-muted-foreground">
              คลินิกทุกขนาด
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            เลือกแพ็กเกจที่เหมาะกับการใช้งานของคุณ อัปเกรดได้ตลอดเวลา
          </p>
          <Badge variant="secondary" className="text-base px-4 py-2">
            🎉 ลดราคาพิเศษ 25% สำหรับลูกค้าใหม่
          </Badge>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative ${pkg.bgColor} border-2 ${pkg.borderColor} rounded-3xl p-8 shadow-card hover:shadow-glow transition-smooth animate-fade-in ${
                pkg.popular ? 'transform scale-105 z-10' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold">
                    ⭐ แนะนำ
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className={`text-center mb-8 ${pkg.name === 'More' ? 'text-white' : ''}`}>
                <div className={`w-16 h-16 ${pkg.name === 'More' ? 'bg-white/20' : 'bg-primary/10'} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <pkg.icon className={`w-8 h-8 ${pkg.name === 'More' ? 'text-white' : 'text-primary'}`} />
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-4 ${pkg.name === 'More' ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {pkg.subtitle}
                </p>
                <div className="mb-2">
                  <span className="text-4xl font-bold">
                    ฿{pkg.price}
                  </span>
                  <span className={`text-sm ${pkg.name === 'More' ? 'text-white/60' : 'text-muted-foreground'}`}>
                    /เดือน
                  </span>
                </div>
                <div className={`text-sm ${pkg.name === 'More' ? 'text-white/60' : 'text-muted-foreground'}`}>
                  <span className="line-through">฿{pkg.originalPrice}</span>
                  <span className="ml-2 text-destructive font-semibold">ประหยัด 25%</span>
                </div>
                <p className={`text-sm mt-2 font-medium ${pkg.name === 'More' ? 'text-white' : 'text-foreground'}`}>
                  {pkg.suitable}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.name === 'More' ? 'text-white' : 'text-secondary'}`} />
                    <span className={`text-sm ${pkg.name === 'More' ? 'text-white' : 'text-foreground'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                variant={pkg.buttonVariant}
                className={`w-full text-lg py-4 ${pkg.name === 'More' ? 'bg-white text-primary hover:bg-white/90' : ''}`}
                asChild
              >
                <a href="tel:099-264-4446">
                  <Phone className="w-5 h-5 mr-2" />
                  ขอนัดเดโม่ {pkg.name}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            สิ่งที่คุณได้รับทุกแพ็กเกจ
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center">
          <div className="bg-card border border-secondary/20 rounded-2xl p-8 shadow-medical max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Crown className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              รับประกันความพึงพอใจ 100%
            </h3>
            <p className="text-muted-foreground mb-6">
              ทดลองใช้ 30 วันฟรี หากไม่พอใจ เราคืนเงิน 100% ไม่ถามคำถาม
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <a href="tel:099-264-4446">
                เริ่มทดลองใช้ฟรี 30 วัน
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;