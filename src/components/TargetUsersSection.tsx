import { Crown, Stethoscope, Users, BarChart3, Clock, CreditCard, Calendar, FileText, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import targetUsersImage from "@/assets/target-users.jpg";

const TargetUsersSection = () => {
  const userGroups = [
    {
      icon: Crown,
      title: "เจ้าของคลินิก",
      subtitle: "ผู้บริหาร & นักลงทุน",
      description: "ควบคุมธุรกิจได้ทุกมุมมอง เห็นรายได้-ต้นทุนแบบเรียลไทม์",
      features: [
        {
          icon: BarChart3,
          text: "Dashboard รายได้-ต้นทุนเรียลไทม์"
        },
        {
          icon: Monitor,
          text: "รายงานเปรียบเทียบหลายสาขา"
        },
        {
          icon: Crown,
          text: "วิเคราะห์ผลกำไรแต่ละบริการ"
        }
      ],
      bgColor: "bg-gradient-accent",
      borderColor: "border-accent/30"
    },
    {
      icon: Stethoscope,
      title: "คุณหมอ",
      subtitle: "แพทย์ & ผู้เชี่ยวชาญ",
      description: "จัดการตารางงาน บันทึกการรักษา ดูแลผู้ป่วยได้อย่างมีประสิทธิภาพ",
      features: [
        {
          icon: Calendar,
          text: "ตารางเวรและนัดหมายส่วนตัว"
        },
        {
          icon: FileText,
          text: "Doctor Note & OPD Chart"
        },
        {
          icon: CreditCard,
          text: "ติดตามค่าตอบแทนแต่ละเคส"
        }
      ],
      bgColor: "bg-gradient-primary",
      borderColor: "border-primary/30"
    },
    {
      icon: Users,
      title: "เจ้าหน้าที่เคาน์เตอร์",
      subtitle: "Front Office & Admin",
      description: "รับผู้ป่วย จัดคิว เก็บเงิน จัดการทุกขั้นตอนได้อย่างรวดเร็ว",
      features: [
        {
          icon: Users,
          text: "ลงทะเบียนผู้ป่วยรวดเร็ว"
        },
        {
          icon: Clock,
          text: "จัดการคิวและนัดหมาย"
        },
        {
          icon: CreditCard,
          text: "ระบบการเงินครบวงจร"
        }
      ],
      bgColor: "bg-gradient-hero",
      borderColor: "border-secondary/30"
    }
  ];

  return (
    <section className="py-16 bg-white-clean relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-20 right-12 w-40 h-40 bg-gradient-primary rounded-full opacity-4 animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-32 left-20 w-28 h-28 bg-gradient-secondary rounded-lg rotate-45 opacity-3 animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              เหมาะกับทุกคนในคลินิก
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-muted-foreground">
              3 กลุ่มผู้ใช้หลัก
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ระบบที่ออกแบบมาให้ทุกคนในคลินิกใช้งานได้ง่าย ตอบโจทย์การทำงานจริง
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <img
              src={targetUsersImage}
              alt="Target Users - ผู้ใช้งานระบบ Cliniter Plus"
              className="w-full h-auto rounded-2xl shadow-glow border border-border/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl pointer-events-none"></div>
          </div>
        </div>

        {/* User Groups */}
        <div className="grid lg:grid-cols-3 gap-8">
          {userGroups.map((group, index) => (
            <div
              key={index}
              className={`group bg-card border ${group.borderColor} rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <div className={`w-20 h-20 ${group.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth animate-float`}>
                  <group.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {group.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {group.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-muted-foreground leading-relaxed text-center">
                  {group.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {group.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <span className="text-sm text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-border">
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary/50 transition-smooth"
                >
                  ดูรายละเอียดเพิ่มเติม
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ไม่ว่าคุณจะเป็นใครในคลินิก
            </h3>
            <p className="text-muted-foreground mb-6">
              Cliniter Plus ช่วยให้ทุกคนทำงานได้เร็วขึ้น ผิดพลาดน้อยลง และมีความสุขกับการทำงานมากขึ้น
            </p>
            <Button size="lg" variant="hero" className="text-lg px-8 py-4" asChild>
              <a href="tel:099-264-4446">
                ลองใช้ฟรี 30 วัน
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetUsersSection;