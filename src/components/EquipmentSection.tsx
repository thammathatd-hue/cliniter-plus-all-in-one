import { Printer, CreditCard, ScanLine, Tablet, Package, CheckCircle, Truck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EquipmentSection = () => {
  const equipment = [
    {
      icon: Printer,
      name: "เครื่องพิมพ์ใบเสร็จ",
      model: "Thermal Printer 80mm",
      price: "3,500",
      description: "พิมพ์ใบเสร็จรวดเร็ว ใช้กระดาษความร้อน ประหยัดค่าใช้จ่าย",
      features: [
        "พิมพ์เร็ว 250mm/วินาที",
        "เชื่อมต่อ USB & Ethernet",
        "ประหยัดพลังงาน",
        "รองรับกระดาษ 80mm"
      ],
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: CreditCard,
      name: "เครื่องอ่านบัตรประชาชน",
      model: "Smart Card Reader",
      price: "2,200",
      description: "อ่านข้อมูลบัตรประชาชนอัตโนมัติ ลดเวลาลงทะเบียน",
      features: [
        "อ่านบัตรประชาชนไทย",
        "เชื่อมต่อ USB ง่าย",
        "ใช้งานง่าย Plug & Play",
        "รองรับ Windows/Mac"
      ],
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary"
    },
    {
      icon: Package,
      name: "ลิ้นชักเก็บเงิน",
      model: "Cash Drawer 410mm",
      price: "4,500",
      description: "ลิ้นชักเก็บเงินสดอัตโนมัติ เปิดพร้อมการพิมพ์ใบเสร็จ",
      features: [
        "เปิดอัตโนมัติตอนพิมพ์ใบเสร็จ",
        "ช่องใส่เงิน 8 ช่อง",
        "กุญแจล็อคปลอดภัย",
        "วัสดุแข็งแรงทนทาน"
      ],
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      icon: ScanLine,
      name: "Barcode Scanner",
      model: "1D/2D Scanner",
      price: "2,800",
      description: "สแกนบาร์โค้ดยา เวชภัณฑ์ เร็วแม่นยำ รองรับทุกประเภท",
      features: [
        "สแกน 1D/2D Barcode",
        "ระยะอ่าน 30cm",
        "เชื่อมต่อ USB",
        "ทนทาน IP54"
      ],
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Printer,
      name: "Label Printer",
      model: "Thermal Label 58mm",
      price: "3,200",
      description: "พิมพ์ลาเบลยา ใบปิดกระปุก บาร์โค้ด คมชัดทนทาน",
      features: [
        "พิมพ์ลาเบล 58mm",
        "ความละเอียดสูง 203 DPI",
        "รองรับกระดาษหลายประเภท",
        "ซอฟต์แวร์ออกแบบฟรี"
      ],
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary"
    },
    {
      icon: Tablet,
      name: "แท็บเล็ตวาดภาพ/ลายเซ็น",
      model: "Huion Inspiroy H430P",
      price: "2,559",
      description: "วาดภาพ Before-After ลายเซ็นดิจิทัล ใช้ง่าย แม่นยำ",
      features: [
        "ขนาดกะทัดรัด 6×4 นิ้ว",
        "เซ็นชื่อคนไข้ดิจิทัล",
        "วาดภาพได้แม่นยำ",
        "เชื่อมต่อ USB ใช้งานง่าย"
      ],
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "พร้อมใช้งานกับ Cliniter Plus",
      description: "ทุกอุปกรณ์ทดสอบแล้ว เชื่อมต่อง่าย"
    },
    {
      icon: Truck,
      title: "ส่งฟรีทั่วประเทศ",
      description: "จัดส่งฟรี ติดตั้งให้ถึงที่"
    },
    {
      icon: ShieldCheck,
      title: "รับประกัน 1 ปีเต็ม",
      description: "รับประกันสินค้า + บริการหลังการขาย"
    }
  ];

  return (
    <section id="equipment" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              อุปกรณ์เสริม
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-muted-foreground">
              ครบครันในชุดเดียว
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            อุปกรณ์คุณภาพสูง เชื่อมต่อกับ Cliniter Plus ได้ทันที
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-medical transition-smooth animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center group-hover:shadow-glow transition-smooth`}>
                  <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    ฿{item.price}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    รวม VAT
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 font-medium">
                  {item.model}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-xs text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="outline" size="sm" className="w-full">
                เพิ่มในแพ็กเกจ
              </Button>
            </div>
          ))}
        </div>

        {/* Package Deal */}
        <div className="bg-card border border-primary/20 rounded-2xl p-8 shadow-medical max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <Badge className="bg-accent text-accent-foreground px-4 py-2 text-base mb-4">
              🎁 แพ็กเกจคุ้มค่า
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ชุดอุปกรณ์ครบเซ็ต
              </span>
            </h3>
            <p className="text-muted-foreground mb-6">
              ซื้อครบชุดประหยัดกว่า 30% + ส่งฟรี + ติดตั้งฟรี
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">ราคาปกติ:</span>
                <span className="text-xl line-through text-muted-foreground">฿18,759</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-foreground">ราคาแพ็กเกจ:</span>
                <span className="text-3xl font-bold text-primary">฿12,990</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-secondary font-semibold">คุณประหยัด:</span>
                <span className="text-xl font-bold text-secondary">฿5,769</span>
              </div>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="cta" className="text-lg px-8 py-4">
              สั่งซื้อแพ็กเกจครบเซ็ต
            </Button>
          </div>
        </div>

        {/* Special Note */}
        <div className="text-center">
          <div className="bg-muted/50 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="font-bold text-foreground mb-2">
              💡 หมายเหตุสำคัญ
            </h4>
            <p className="text-muted-foreground text-sm">
              คุณสามารถใช้งาน Cliniter Plus ได้โดยไม่ต้องซื้ออุปกรณ์เสริม 
              แต่อุปกรณ์เหล่านี้จะช่วยเพิ่มประสิทธิภาพการทำงานได้อย่างมาก
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;