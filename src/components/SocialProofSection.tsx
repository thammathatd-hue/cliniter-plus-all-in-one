import { Badge } from "@/components/ui/badge";
import clinicThanananLogo from "@/assets/clinic-thananan-logo.png";
import clinicPrasitEntLogo from "@/assets/clinic-prasit-ent-logo.png";
import rebornDoctorBondLogo from "@/assets/reborn-doctor-bond-logo.png";

const SocialProofSection = () => {
  const clinics = [
    {
      name: "Body Conscious at Wellness",
      logo: "/lovable-uploads/117436a3-96c4-4be4-a5fb-7b18f4f0d4b1.png"
    },
    {
      name: "The Mind",
      logo: "/lovable-uploads/d54293ed-8c30-4e62-8807-56264b4b3d9f.png"
    },
    {
      name: "DE Waw",
      logo: "/lovable-uploads/39952b8d-4d85-477d-aecd-61ebf4c257f5.png"
    },
    {
      name: "Glycan Clinic",
      logo: "/lovable-uploads/dab231f6-cf4d-439b-ad4e-c084111975bb.png"
    },
    {
      name: "Maesariang Clinic",
      logo: "/lovable-uploads/6c576d4e-c755-4f2b-9710-de95af2da347.png"
    },
    {
      name: "คลินิก พญ.ธนนันท์",
      logo: clinicThanananLogo
    },
    {
      name: "คลินิก หู คอ จมูก หมอประสิทธิ์",
      logo: clinicPrasitEntLogo
    },
    {
      name: "รีบอร์นบายดอกเตอร์บอนด์",
      logo: rebornDoctorBondLogo
    }
  ];

  return (
    <section className="py-16 bg-professional-clean bg-clinic-dots relative overflow-hidden">
      {/* Professional medical decorative elements */}
      <div className="absolute top-12 left-10 w-24 h-24 bg-gradient-medical rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-gradient-health rounded-lg rotate-12 opacity-15 animate-pulse-glow"></div>
      <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-gradient-clinic rounded-full opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {clinics.map((clinic, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-medical transition-smooth flex items-center justify-center h-24 min-h-[96px]"
              >
                {clinic.logo ? (
                  <img
                    src={clinic.logo}
                    alt={`${clinic.name} Logo`}
                    className="max-h-16 max-w-full object-contain"
                  />
                ) : (
                  <span className="text-sm font-medium text-muted-foreground text-center">
                    {clinic.name}
                  </span>
                )}
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