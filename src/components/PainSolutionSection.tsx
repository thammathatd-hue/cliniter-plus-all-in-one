import { ArrowRight, X, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import painSolutionImage from "@/assets/pain-solution.jpg";

const PainSolutionSection = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: "งานซ้ำซ้อนมากเกินไป",
      description: "เขียนข้อมูลซ้ำหลายที่ เสียเวลาใส่ข้อมูลเดิมๆ",
      color: "text-destructive"
    },
    {
      icon: AlertTriangle,
      title: "รอคิวนาน ผู้ป่วยไม่พอใจ",
      description: "ไม่รู้ว่าต้องรอนานแค่ไหน ระบบคิวไม่มีประสิทธิภาพ",
      color: "text-destructive"
    },
    {
      icon: AlertTriangle,
      title: "คิดเงินผิดพลาด",
      description: "คำนวณค่าตอบแทนหมอผิด หรือคิดค่ารักษาไม่ถูกต้อง",
      color: "text-destructive"
    },
    {
      icon: AlertTriangle,
      title: "ข้อมูลกระจัดกระจาย",
      description: "ข้อมูลเก็บหลายที่ หาไม่เจอ ทำรายงานยาก",
      color: "text-destructive"
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "ระบบเดียวจบครบทุกงาน",
      description: "ใส่ข้อมูลครั้งเดียว ใช้ได้ทุกจุด ประหยัดเวลา",
      color: "text-secondary"
    },
    {
      icon: CheckCircle,
      title: "จัดคิวอัตโนมัติ + แจ้งเตือน",
      description: "ผู้ป่วยรู้คิวตัวเอง แจ้งเตือนทาง LINE",
      color: "text-secondary"
    },
    {
      icon: CheckCircle,
      title: "คำนวณเงินอัตโนมัติ",
      description: "คิดค่าตอบแทนแม่นยำ ไม่มีข้อผิดพลาด",
      color: "text-secondary"
    },
    {
      icon: CheckCircle,
      title: "ข้อมูลรวมศูนย์ + รายงานสำเร็จรูป",
      description: "ข้อมูลทุกอย่างอยู่ที่เดียว รายงานออกทันที",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-destructive">ปัญหาที่คลินิกเจอทุกวัน</span>
            <br />
            <span className="text-muted-foreground text-2xl md:text-3xl">VS</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              โซลูชันจาก Cliniter Plus
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Pain Points */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-destructive mb-4 flex items-center justify-center lg:justify-start">
                <X className="w-8 h-8 mr-3" />
                ปัญหาที่พบบ่อย
              </h3>
            </div>
            
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-card border border-destructive/20 rounded-xl p-6 shadow-card hover:shadow-lg transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                        <point.icon className={`w-6 h-6 ${point.color}`} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{point.title}</h4>
                      <p className="text-muted-foreground text-sm">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-8 h-8 mr-3" />
                คำตอบจาก Cliniter Plus
              </h3>
            </div>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-card border border-secondary/20 rounded-xl p-6 shadow-card hover:shadow-medical transition-smooth animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                        <solution.icon className={`w-6 h-6 ${solution.color}`} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{solution.title}</h4>
                      <p className="text-muted-foreground text-sm">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow and CTA */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center mb-8">
            <ArrowRight className="w-12 h-12 text-primary animate-pulse-glow" />
          </div>
          <div className="bg-card border border-primary/20 rounded-2xl p-8 shadow-medical max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Cliniter Plus แก้ทุกจุดในระบบเดียว
              </span>
            </h3>
            <p className="text-muted-foreground mb-6">
              ปรับปรุงประสิทธิภาพคลินิกของคุณได้ใน 1 วัน ลดงานซ้ำซ้อน เพิ่มความพึงพอใจของผู้ป่วย
            </p>
            <Button size="lg" variant="cta" className="text-lg px-8 py-4">
              ดูว่าระบบทำงานยังไง
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSolutionSection;