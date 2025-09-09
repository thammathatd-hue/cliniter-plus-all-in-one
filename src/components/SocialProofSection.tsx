import { Badge } from "@/components/ui/badge";

const SocialProofSection = () => {
  // Mock clinic logos/names - in real implementation, these would be actual client logos
  const clinics = [
    "คลินิกดีเซล",
    "โรงพยาบาลสมุทรปราการ",
    "คลินิกหมอรำ",
    "คลินิกบิวตี้",
    "โรงพยาบาลราชวิถี",
    "คลินิกแฟมิลี่",
    "คลินิกเฮลท์แคร์",
    "คลินิกเวลล์เนส"
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="px-4 py-2 text-base font-medium">
              เชื่อถือได้จากคลินิกชั้นนำ
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              คลินิกที่ไว้วางใจ Cliniter Plus
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              มากกว่า 100 คลินิกทั่วประเทศไทยเลือกใช้ Cliniter Plus เป็นระบบจัดการหลัก
            </p>
          </div>

          {/* Clinic Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {clinics.map((clinic, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-medical transition-smooth flex items-center justify-center h-20"
              >
                <span className="text-sm font-medium text-muted-foreground text-center">
                  {clinic}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">คลินิกใช้งาน</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-muted-foreground">ระบบทำงานต่อเนื่อง</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-muted-foreground">ความเสถียรระบบ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;