import { Play, UserPlus, Calendar, Stethoscope, CreditCard, BarChart3, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoFlowSection = () => {
  const flowSteps = [
    {
      step: "01",
      icon: UserPlus,
      title: "รับผู้ป่วย",
      description: "ลงทะเบียนรวดเร็ว สแกนบัตรประชาชน ข้อมูลเข้าระบบทันที",
      time: "30 วินาที",
      color: "bg-primary"
    },
    {
      step: "02", 
      icon: Calendar,
      title: "นัดหมาย",
      description: "จัดคิวอัตโนมัติ แจ้งเตือนผู้ป่วยทาง LINE เรียกคิวผ่านจอ",
      time: "1 นาที",
      color: "bg-secondary"
    },
    {
      step: "03",
      icon: Stethoscope,
      title: "ตรวจรักษา",
      description: "บันทึก OPD Chart ถ่ายภาพ Before-After ลายเซ็นดิจิทัล",
      time: "5 นาที",
      color: "bg-accent"
    },
    {
      step: "04",
      icon: CreditCard,
      title: "จ่ายเงิน",
      description: "คิดค่ารักษาอัตโนมัติ พิมพ์ใบเสร็จ คำนวณค่าตอบแทนหมอ",
      time: "2 นาที",
      color: "bg-primary"
    },
    {
      step: "05",
      icon: BarChart3,
      title: "รายงาน",
      description: "ดูรายได้เรียลไทม์ วิเคราะห์ยอดขาย รายงานสำหรับผู้บริหาร",
      time: "ทันที",
      color: "bg-secondary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              ดูการทำงานจริง
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-muted-foreground">
              ใน 5 ขั้นตอนง่าย ๆ
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            จากรับผู้ป่วย ไปจนถึงออกรายงาน ทุกอย่างเสร็จในเวลาไม่ถึง 10 นาที
          </p>
        </div>

        {/* Demo Video Placeholder */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-primary rounded-2xl shadow-glow flex items-center justify-center group cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-smooth">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  ดู Demo การทำงาน 90 วินาที
                </h3>
                <p className="text-white/80">
                  ดูการใช้งานจริงตั้งแต่รับผู้ป่วยจนถึงออกรายงาน
                </p>
              </div>
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="animate-pulse-glow">
                <div className="w-24 h-24 bg-white rounded-full shadow-glow flex items-center justify-center">
                  <Play className="w-12 h-12 text-primary ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Steps */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {flowSteps.map((step, index) => (
              <div
                key={index}
                className="group text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Circle */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-medical group-hover:shadow-glow transition-smooth animate-float`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-card group-hover:shadow-medical transition-smooth">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    ⏱️ {step.time}
                  </div>
                </div>

                {/* Arrow (except last item) */}
                {index < flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Result Summary */}
        <div className="mt-16">
          <div className="bg-card border border-primary/20 rounded-2xl p-8 shadow-medical max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ผลลัพธ์: ประหยัดเวลา 70% เพิ่มประสิทธิภาพ 300%
              </span>
            </h3>
            <p className="text-muted-foreground mb-6">
              จากการใช้งานจริงของคลินิกต่าง ๆ พบว่าสามารถลดเวลาการทำงานและเพิ่มความแม่นยำได้อย่างมาก
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4" asChild>
                <a href="tel:099-264-4446">
                  <Play className="w-5 h-5 mr-2" />
                  ขอนัดเดโม่สด
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
                <a href="https://lin.ee/rQIBIYa" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  คุยกับทีมทาง LINE
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoFlowSection;