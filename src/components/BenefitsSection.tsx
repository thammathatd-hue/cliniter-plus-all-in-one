import { TrendingUp, Shield, Clock, Zap, Users, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "ลดเวลาทำงานซ้ำซ้อน",
      percentage: "30%",
      description: "ไม่ต้องใส่ข้อมูลซ้ำ ไม่ต้องค้นหาเวชระเบียน ทุกอย่างเชื่อมต่อกัน",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Shield,
      title: "ลดข้อผิดพลาดจากคน",
      percentage: "95%",
      description: "ระบบคำนวณอัตโนมัติ ไม่มีการคิดเงินผิด ไม่มีการสูญหายของข้อมูล",
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary"
    },
    {
      icon: BarChart3,
      title: "เห็นรายได้-ต้นทุนเรียลไทม์",
      percentage: "100%",
      description: "Dashboard แสดงยอดขาย กำไร ค่าใช้จ่าย อัปเดตทุกการทำธุรกรรม",
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      icon: Zap,
      title: "ขยายสาขาได้ทันที",
      percentage: "∞",
      description: "ไม่ต้องลงทุนระบบใหม่ เพิ่มสาขาใหม่ได้ในวันเดียว",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    }
  ];

  const results = [
    {
      icon: TrendingUp,
      title: "เพิ่มรายได้เฉลี่ย",
      value: "25%",
      description: "จากการลดเวลารอ เพิ่มความพึงพอใจของผู้ป่วย"
    },
    {
      icon: Users,
      title: "ลดการร้องเรียน",
      value: "80%",
      description: "ระบบคิวที่มีประสิทธิภาพ ลดความไม่พอใจ"
    },
    {
      icon: Clock,
      title: "ประหยัดเวลาแอดมิน",
      value: "4 ชม/วัน",
      description: "ลดงานเอกสาร รายงานออกอัตโนมัติ"
    },
    {
      icon: Shield,
      title: "ความปลอดภัยข้อมูล",
      value: "99.9%",
      description: "ระบบ Backup อัตโนมัติ ความปลอดภัยระดับธนาคาร"
    }
  ];

  return (
    <section className="py-16 bg-section-clean relative overflow-hidden">
      {/* Ultra minimal decorative elements */}
      <div className="absolute top-16 right-20 w-36 h-36 bg-gradient-primary rounded-full opacity-1 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              ผลลัพธ์ที่ได้จริง
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-muted-foreground">
              จากคลินิกที่ใช้งาน Cliniter Plus
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            มากกว่า 100 คลินิกที่เปลี่ยนมาใช้ Cliniter Plus ได้ผลลัพธ์เหล่านี้
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-medical transition-smooth`}>
                <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
              </div>
              
              <div className="mb-4">
                <div className={`text-4xl font-bold ${benefit.iconColor} mb-2`}>
                  {benefit.percentage}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Results */}
        <div className="bg-gradient-subtle rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ผลลัพธ์เชิงตัวเลขที่วัดได้
            </h3>
            <p className="text-muted-foreground">
              จากการสำรวจคลินิกที่ใช้งาน Cliniter Plus มากกว่า 1 ปี
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="text-center bg-card rounded-xl p-6 shadow-card animate-slide-in-left"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <result.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {result.value}
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {result.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Success Stories
              </span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">คลินิกเดอะบิวตี้</h4>
                  <p className="text-muted-foreground text-sm">เพิ่มรายได้ 40% ใน 6 เดือน จากการลดเวลารอคอยและเพิ่มการนัดหมาย</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">คลินิกแฟมิลี่แคร์</h4>
                  <p className="text-muted-foreground text-sm">ขยายจาก 1 สาขาเป็น 3 สาขา ภายใน 1 ปี ด้วยระบบจัดการที่มีประสิทธิภาพ</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">คลินิกเดนทอลแคร์</h4>
                  <p className="text-muted-foreground text-sm">ลดการร้องเรียน 90% และเพิ่มผู้ป่วยประจำ 60%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-primary/20 rounded-2xl p-8 shadow-medical">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                คลินิกของคุณจะเป็นอย่างไร?
              </h3>
              <p className="text-muted-foreground mb-6">
                ดูการเปลี่ยนแปลงที่เกิดขึ้นกับคลินิกของคุณ ด้วยการนัดเดโม่ฟรี
              </p>
              <Button size="lg" variant="hero" className="w-full text-lg py-4" asChild>
                <a href="tel:099-264-4446">
                  ขอนัดเดโม่เพื่อดูผลลัพธ์
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;