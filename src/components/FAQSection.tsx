import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Shield, Smartphone, Clock, Globe, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: Globe,
      question: "รองรับหลายสาขาไหม?",
      answer: "ใช่ครับ Cliniter Plus รองรับการใช้งานหลายสาขาในแพ็กเกจ More และ Ultimate คุณสามารถเปิดสาขาใหม่และเชื่อมต่อข้อมูลได้ทันที โดยไม่ต้องลงทุนระบบใหม่ ดูรายงานรวมทุกสาขาได้ในหน้าเดียว"
    },
    {
      icon: Smartphone,
      question: "ใช้บนมือถือได้หรือไม่?",
      answer: "ได้เลยครับ Cliniter Plus รองรับการใช้งานบนมือถือ แท็บเล็ต และคอมพิวเตอร์ ใช้งานผ่าน Web Browser ไม่ต้องติดตั้งแอปพิเคชัน หมอสามารถดูข้อมูลผู้ป่วย บันทึกการรักษาได้จากที่ไหนก็ได้"
    },
    {
      icon: Clock,
      question: "Support กี่โมงถึงกี่โมง?",
      answer: "ทีม Support ของเราให้บริการ:\n• แพ็กเกจ Mini: จันทร์-ศุกร์ 09:00-18:00\n• แพ็กเกจ More: ทุกวัน 09:00-22:00\n• แพ็กเกจ Ultimate: 24/7 ทุกช่องทาง (โทร, LINE, Email, Live Chat)\n\nมีทีมงานไทยตอบเอง รู้เรื่องการใช้งานจริงในคลินิก"
    },
    {
      icon: Shield,
      question: "ข้อมูลปลอดภัยไหม?",
      answer: "ปลอดภัยมากครับ เราใช้:\n• SSL Encryption 256-bit\n• Backup อัตโนมัติ 3 จุด\n• Server ในประเทศไทย ตาม PDPA\n• ระบบ Login 2-Factor Authentication\n• Log การเข้าใช้งานทุกครั้ง\n• ผ่านการตรวจสอบความปลอดภัยระดับธนาคาร"
    },
    {
      icon: CreditCard,
      question: "มีค่าใช้จ่ายแอบแฝงหรือไม่?",
      answer: "ไม่มีเลยครับ ราคาที่เห็นคือราคาจริง ไม่มีค่าซ่อนเร้น:\n• ค่าติดตั้ง: ฟรี\n• ค่าอัปเดต: ฟรีตลอดชีพ\n• ค่าฝึกอบรม: ฟรี\n• ค่าย้ายข้อมูล: ฟรี\n• ค่าบำรุงรักษา: รวมในค่าบริการรายเดือนแล้ว"
    },
    {
      icon: Globe,
      question: "ย้ายข้อมูลจากระบบเก่าได้ไหม?",
      answer: "ย้ายได้ครับ ทีมงานเราช่วยย้ายข้อมูลให้ฟรี:\n• ข้อมูลผู้ป่วย\n• ประวัติการรักษา\n• ข้อมูลยาและสต็อก\n• รายการสินค้า/บริการ\n• ข้อมูลพนักงานและแพทย์\n\nใช้เวลาประมาณ 3-7 วันทำการ ไม่หยุดการใช้งาน"
    },
    {
      icon: Smartphone,
      question: "ต้องใช้อินเตอร์เน็ตตลอดเวลาไหม?",
      answer: "ใช่ครับ เพราะเป็นระบบ Cloud-based แต่ดีตรงที่:\n• ไม่ต้องกลัวข้อมูลหาย (Auto Backup)\n• เข้าใช้งานได้จากที่ไหนก็ได้\n• ไม่ต้องดูแลเซิร์ฟเวอร์เอง\n• อัปเดตอัตโนมัติ\n\nแนะนำความเร็วขั้นต่ำ 10 Mbps เพื่อการใช้งานที่ลื่นไหล"
    },
    {
      icon: Clock,
      question: "ใช้เวลาเรียนรู้นานไหม?",
      answer: "ไม่นานเลยครับ ออกแบบใช้งานง่าย:\n• พนักงานใหม่: 2-3 วัน\n• พนักงานเก่า: 1 วันเท่านั้น\n• มีคู่มือภาษาไทย\n• วิดีโอสอนใช้งาน\n• ทีมงานฝึกสอนฟรีถึงที่\n• Support ตอบคำถามตลอด"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              คำถามที่พบบ่อย
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-muted-foreground">
              FAQ
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            รวบรวมคำถามที่ลูกค้าถามบ่อย เพื่อให้คุณได้ข้อมูลที่ชัดเจน
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl shadow-card hover:shadow-medical transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 rounded-2xl transition-smooth"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <faq.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-primary" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-16">
                      <div className="border-l-2 border-primary/20 pl-6">
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="text-center mt-16">
          <div className="bg-card border border-primary/20 rounded-2xl p-8 shadow-medical max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ยังมีคำถาม?
            </h3>
            <p className="text-muted-foreground mb-6">
              ทีมงานมืออาชีพพร้อมตอบทุกคำถาม และให้คำปรึกษาฟรี
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                คุยกับ Expert
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                ส่งคำถามทาง Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;