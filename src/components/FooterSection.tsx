import { Phone, Mail, MapPin, MessageCircle, Facebook, Youtube, Clock, Shield, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Final CTA */}
      <div className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            เปลี่ยนคลินิกของคุณเป็นคลินิกดิจิทัลวันนี้
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
            มากกว่า 100 คลินิกเลือกใช้ Cliniter Plus เพื่อเพิ่มประสิทธิภาพและรายได้
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="cta" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
              <Phone className="w-5 h-5 mr-2" />
              ขอนัดเดโม่ฟรี
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10">
              <MessageCircle className="w-5 h-5 mr-2" />
              คุยกับทีมทาง LINE
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C+</span>
                </div>
                <span className="font-bold text-xl">Cliniter Plus</span>
              </div>
              <p className="text-background/70 leading-relaxed">
                ระบบจัดการคลินิกออนไลน์ครบวงจร ที่ช่วยให้คลินิกของคุณทำงานได้อย่างมีประสิทธิภาพ
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-background/70">
                    123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-background/70">
                    จันทร์-ศุกร์ 09:00-18:00 น.
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg">เมนูหลัก</h3>
              <div className="space-y-3">
                {[
                  { label: "หน้าแรก", href: "#home" },
                  { label: "คุณสมบัติ", href: "#features" },
                  { label: "ราคา", href: "#pricing" },
                  { label: "รีวิว", href: "#reviews" },
                  { label: "บทความ", href: "#articles" }
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-background/70 hover:text-primary transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg">ติดต่อเรา</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm text-background/70">02-123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm text-background/70">info@cliniterplus.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-background/70">@cliniterplus</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-smooth cursor-pointer">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-smooth cursor-pointer">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-smooth cursor-pointer">
                  <Youtube className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg">ข้อมูลสำคัญ</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-2 text-background/70 hover:text-primary transition-smooth text-sm">
                  <Shield className="w-4 h-4" />
                  <span>นโยบายความเป็นส่วนตัว</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-background/70 hover:text-primary transition-smooth text-sm">
                  <FileText className="w-4 h-4" />
                  <span>ข้อกำหนดการใช้งาน</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-background/70 hover:text-primary transition-smooth text-sm">
                  <FileText className="w-4 h-4" />
                  <span>Company Profile</span>
                </a>
              </div>
              
              <div className="pt-4">
                <div className="text-xs text-background/50">
                  <p>DBD Registered</p>
                  <p>© 2024 Cliniter Plus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;