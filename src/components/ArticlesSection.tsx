import { BookOpen, TrendingUp, Users, Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ArticlesSection = () => {
  const articles = [
    {
      category: "เทรนด์เทคโนโลยี",
      title: "5 เทรนด์เทคโนโลジี Healthcare ที่จะเปลี่ยนอุตสาหกรรมคลินิกในปี 2024",
      excerpt: "ดูเทรนด์ใหม่ที่กำลังจะมาแรง ตั้งแต่ AI Diagnosis ไปจนถึง Telemedicine ที่คลินิกต้องเตรียมพร้อม",
      readTime: "5 นาที",
      date: "15 ธ.ค. 2567",
      featured: true
    },
    {
      category: "การจัดการ",
      title: "วิธีเพิ่มรายได้คลินิกด้วยระบบ CRM อัจฉริยะ",
      excerpt: "เทคนิคการใช้ระบบ CRM เพื่อดูแลลูกค้าเก่า หาลูกค้าใหม่ และเพิ่มยอดขายได้อย่างมีประสิทธิภาพ",
      readTime: "7 นาที", 
      date: "12 ธ.ค. 2567",
      featured: false
    },
    {
      category: "ความปลอดภัย",
      title: "PDPA สำหรับคลินิก: ปกป้องข้อมูลผู้ป่วยอย่างถูกต้อง",
      excerpt: "รู้จักกฎหมาย PDPA และวิธีการปกป้องข้อมูลส่วนบุคคลของผู้ป่วยให้ถูกต้องและปลอดภัย",
      readTime: "6 นาที",
      date: "10 ธ.ค. 2567",
      featured: false
    }
  ];

  return (
    <section id="articles" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              บทความ & ความรู้
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            อัปเดตความรู้ใหม่ ๆ เพื่อพัฒนาคลินิกให้ก้าวทันยุคดิจิทัล
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className={`group bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-smooth animate-fade-in ${
                article.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`p-6 ${article.featured ? 'lg:p-8' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                  <div className="flex items-center space-x-2 text-muted-foreground text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-smooth ${
                  article.featured ? 'text-2xl lg:text-3xl' : 'text-lg'
                }`}>
                  {article.title}
                </h3>

                <p className={`text-muted-foreground leading-relaxed mb-4 ${
                  article.featured ? 'text-base' : 'text-sm'
                }`}>
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-xs">
                    {article.date}
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                    อ่านต่อ
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="text-lg px-8 py-4">
            <BookOpen className="w-5 h-5 mr-2" />
            ดูบทความทั้งหมด
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;