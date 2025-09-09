import { Star, Quote, ThumbsUp, TrendingUp, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "นพ.สมชาย วงศ์เจริญ",
      position: "เจ้าของคลินิกเดอะบิวตี้",
      clinic: "คลินิกเดอะบิวตี้ สยาม",
      rating: 5,
      review: "ใช้ Cliniter Plus มา 8 เดือนแล้ว ระบบใช้งานง่ายมาก ลดเวลาทำงานแอดมินไปเยอะมาก ผู้ป่วยก็พอใจเพราะรอคิวไม่นาน รายได้เพิ่มขึ้น 40% เลยครับ",
      improvement: "เพิ่มรายได้ 40%",
      timeUsed: "8 เดือน",
      image: "👨‍⚕️"
    },
    {
      name: "คุณสุดา จันทรเพ็ญ",  
      position: "ผู้จัดการคลินิก",
      clinic: "คลินิกแฟมิลี่แคร์",
      rating: 5,
      review: "ตอนแรกกลัวว่าพนักงานจะใช้ยาก แต่จริงๆ แล้วง่ายมาก ฝึกแค่ 2 วันก็ใช้ได้หมดแล้ว รายงานออกแบบอัตโนมัติ ไม่ต้องนั่งคำนวณเอง ประหยัดเวลาไปเยอะเลย",
      improvement: "ประหยัดเวลา 4 ชม/วัน",
      timeUsed: "1 ปี 2 เดือน",
      image: "👩‍💼"
    },
    {
      name: "นพ.วิชญ์ สุขสันต์",
      position: "แพทย์ประจำคลินิก",
      clinic: "คลินิกเดนทอลแคร์",
      rating: 5,
      review: "ชอบฟีเจอร์ Doctor Note มาก บันทึกการรักษาได้ละเอียด รูปภาพ Before-After ชัดเจน ค้นหาประวัติผู้ป่วยได้ง่าย ค่าตอบแทนหมอก็คำนวณให้อัตโนมัติ",
      improvement: "ลดข้อผิดพลาด 95%",
      timeUsed: "6 เดือน",
      image: "🦷"
    },
    {
      name: "คุณนิดา ประจวบเหมาะ",
      position: "เจ้าหน้าที่แผนกหน้า",
      clinic: "คลินิกสุขภาพดี",
      rating: 5,
      review: "งานง่ายขึ้นมาก ลงทะเบียนผู้ป่วยเร็ว แค่สแกนบัตรประชาชน ข้อมูลก็เข้าไปหมดแล้ว จัดคิวอัตโนมัติ ผู้ป่วยไม่บ่น ทำงานสบายใจขึ้นเยอะเลย",
      improvement: "ลดการร้องเรียน 80%",
      timeUsed: "10 เดือน",
      image: "👩‍💻"
    },
    {
      name: "นพ.กิตติ์ มั่นคง",
      position: "เจ้าของคลินิก",
      clinic: "คลินิกออร์โธเปดิก",
      rating: 5,
      review: "เปิดสาขาใหม่ได้ง่ายมาก ไม่ต้องลงทุนระบบใหม่ ข้อมูลเชื่อมกันทุกสาขา ดูรายงานได้แบบเรียลไทม์ ควบคุมธุรกิจได้จากที่ไหนก็ได้ คุ้มค่ามากครับ",
      improvement: "ขยายเป็น 3 สาขา",
      timeUsed: "1 ปี 6 เดือน",
      image: "🏥"
    },
    {
      name: "คุณอัญชนา สมบูรณ์",
      position: "เภสัชกร",
      clinic: "คลินิกเวลเนส",
      rating: 5,
      review: "ระบบคลังยาดีมาก ตรวจสอบ Stock ได้ตลอดเวลา แจ้งเตือนยาหมดอายุ สั่งซื้อยาใหม่ได้จากระบบ ไม่เสียเวลาทำงานเอกสาร ขายยาผิดลดลงเยอะเลย",
      improvement: "ลดความผิดพลาด 90%",
      timeUsed: "7 เดือน",
      image: "💊"
    }
  ];

  const overallStats = [
    {
      icon: Star,
      value: "4.9/5",
      label: "ความพึงพอใจเฉลี่ย",
      color: "text-accent"
    },
    {
      icon: Users,
      value: "100+",
      label: "คลินิกที่ใช้งาน",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      value: "25%",
      label: "เพิ่มรายได้เฉลี่ย",
      color: "text-secondary"
    },
    {
      icon: Clock,
      value: "30%",
      label: "ประหยัดเวลา",
      color: "text-primary"
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-testimonial-clean relative overflow-hidden">
      {/* Ultra minimal background elements */}
      <div className="absolute top-32 right-16 w-32 h-32 bg-gradient-primary rounded-full opacity-2 animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              รีวิวจากลูกค้าจริง
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-muted-foreground">
              100+ คลินิกที่เชื่อใจ
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ฟังเสียงจริงจากเจ้าของคลินิก หมอ และเจ้าหน้าที่ที่ใช้งาน Cliniter Plus
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {overallStats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-2xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-medical transition-smooth animate-slide-in-left group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{review.image}</div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">
                      {review.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {review.position}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {review.clinic}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
              </div>

              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Review Text */}
              <p className="text-foreground text-sm leading-relaxed mb-4">
                "{review.review}"
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Badge variant="secondary" className="text-xs">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {review.improvement}
                </Badge>
                <div className="text-xs text-muted-foreground">
                  ใช้งาน: {review.timeUsed}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-subtle rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-accent fill-current animate-pulse-glow" />
                ))}
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                คลินิกของคุณจะเป็นเรื่องราวความสำเร็จถัดไป
              </span>
            </h3>
            <p className="text-muted-foreground mb-6">
              มากกว่า 100 คลินิกที่เปลี่ยนมาใช้ Cliniter Plus ได้ผลลัพธ์ที่ดีกว่าที่คาดไว้
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
                <ThumbsUp className="w-4 h-4 mr-2" />
                ความพึงพอใจ 4.9/5 ดาว
              </Badge>
              <Badge className="bg-primary text-primary-foreground px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                ใช้งานจริง 100+ คลินิก
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;