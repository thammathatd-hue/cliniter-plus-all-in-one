import { 
  FileText, 
  Calendar, 
  Stethoscope, 
  CreditCard, 
  Package, 
  FlaskConical, 
  BarChart3, 
  Globe,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "ลงทะเบียน/เวชระเบียน (EMR)",
      description: "จัดการข้อมูลผู้ป่วยครบถ้วน ค้นหาง่าย ปลอดภัยตามมาตรฐาน PDPA",
      benefits: ["ลงทะเบียนรวดเร็ว", "เวชระเบียนดิจิทัล", "ค้นหาข้อมูลฉับไว"]
    },
    {
      icon: Calendar,
      title: "ระบบนัดหมาย + Queue",
      description: "จัดคิวอัตโนมัติ แจ้งเตือนผู้ป่วย ลดเวลารอ เพิ่มความพึงพอใจ",
      benefits: ["จัดคิวอัตโนมัติ", "แจ้งเตือน SMS/LINE", "ลดเวลารอคอย"]
    },
    {
      icon: Stethoscope,
      title: "ห้องตรวจ + Doctor Note",
      description: "บันทึกการตรวจ OPD Chart ภาพ Before-After พร้อมลายเซ็นดิจิทัล",
      benefits: ["OPD Chart ครบถ้วน", "Before-After", "ลายเซ็นดิจิทัล"]
    },
    {
      icon: CreditCard,
      title: "การเงินครบวงจร",
      description: "คิดค่าตอบแทนหมอ จัดการรายจ่าย มัดจำ รายงานการเงินแม่นยำ",
      benefits: ["ค่าตอบแทนอัตโนมัติ", "จัดการรายจ่าย", "รายงานเรียลไทม์"]
    },
    {
      icon: Package,
      title: "คลังยาและวัสดุเวชกรรม",
      description: "จัดการ Stock ตาม Lot แจ้งเตือนหมดอายุ สั่งซื้อออโต้",
      benefits: ["จัดการ Stock/Lot", "แจ้งหมดอายุ", "สั่งซื้ออัตโนมัติ"]
    },
    {
      icon: FlaskConical,
      title: "LAB & X-ray",
      description: "สั่งตรวจ LAB/X-ray แนบไฟล์ผลตรวจ ส่งผลให้ผู้ป่วยทาง LINE",
      benefits: ["สั่งตรวจง่าย", "แนบไฟล์ผล", "ส่งผล LINE OA"]
    },
    {
      icon: BarChart3,
      title: "รายงาน & Dashboard",
      description: "วิเคราะห์รายได้-ต้นทุน เปรียบเทียบสาขา รายงานสำหรับผู้บริหาร",
      benefits: ["Dashboard เรียลไทม์", "เปรียบเทียบสาขา", "รายงานผู้บริหาร"]
    },
    {
      icon: Globe,
      title: "CRM & Website",
      description: "โปรโมชัน Voucher ส่วนลด เชื่อมต่อ LINE OA เว็บไซต์คลินิก",
      benefits: ["CRM ครบเครื่อง", "LINE OA Integration", "เว็บไซต์คลินิก"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-section bg-dots relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-28 h-28 bg-gradient-primary rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-16 w-20 h-20 bg-gradient-accent rounded-lg rotate-12 opacity-15 animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              ฟีเจอร์ครบครัน
            </span>
            <br />
            ตาม Flow การทำงานจริงในคลินิก
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ทุกฟีเจอร์ออกแบบมาเพื่อใช้งานจริง ลดความซับซ้อน เพิ่มประสิทธิภาพการทำงาน
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-medical transition-smooth hover:border-primary/30"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-smooth">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-16">
          <Button size="lg" variant="hero" className="text-lg px-8 py-4">
            ดูการทำงานแบบเต็ม
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;