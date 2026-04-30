import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Truck,
  Plane,
  Train,
  Package,
  CheckCircle,
  Phone,
  Send,
  Clock,
  ShieldCheck,
  X,
  ArrowRight,
  Star,
  Anchor,
  ArrowUpRight,
  Check,
} from "lucide-react";

const FadeIn = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: any) => {
  const yOffset = direction === "up" ? 30 : direction === "down" ? -30 : 0;
  const xOffset = direction === "left" ? 30 : direction === "right" ? -30 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: any) => {
  const base =
    "relative inline-flex items-center justify-center font-medium overflow-hidden transition-all duration-300 rounded-full px-8 py-4";
  const variants = {
    primary:
      "bg-brand text-white hover:bg-brand-dark hover:scale-[1.02] shadow-[0_0_20px_rgba(254,125,8,0.15)] hover:shadow-[0_0_30px_rgba(254,125,8,0.3)]",
    secondary:
      "bg-white text-navy hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    glass:
      "bg-white/5 border border-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/10",
  };
  return (
    <button
      type={type}
      className={`${base} ${variants[variant as keyof typeof variants]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const ProcessStep = ({ num, title, desc }: any) => (
  <div className="flex flex-col p-8 xl:p-10 rounded-[2rem] border border-white/5 bg-navy/40 hover:bg-white/5 transition-colors">
    <span className="text-7xl font-display font-bold text-white/10 mb-6 leading-none select-none">
      {num}
    </span>
    <h3 className="text-2xl font-display font-medium text-brand mb-3">
      {title}
    </h3>
    <p className="text-text-secondary leading-relaxed font-light">{desc}</p>
  </div>
);

const TariffCard = ({ icon: Icon, title, time, desc, onClick }: any) => (
  <div onClick={onClick} className="glass-panel p-8 rounded-[2rem] group relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(254,125,8,0.1)] transition-all duration-500 cursor-pointer flex flex-col h-full border border-white/5 hover:border-brand/30">
    <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand/20 transition-all duration-500">
      <Icon className="w-6 h-6 text-brand" />
    </div>
    <h3 className="text-2xl font-display font-medium mb-2 group-hover:text-brand transition-colors">
      {title}
    </h3>
    <div className="text-brand font-medium flex items-center gap-2 mb-4">
      <Clock className="w-4 h-4" /> {time}
    </div>
    <p className="text-text-secondary leading-relaxed font-light mb-8 flex-grow">
      {desc}
    </p>
    <div className="flex items-center text-sm font-medium text-text-muted group-hover:text-brand transition-colors">
      Batafsil
    </div>
  </div>
);

const Testimonial = ({ quote, name, role }: any) => (
  <div className="glass-panel p-8 rounded-[2rem] flex flex-col justify-between h-full relative overflow-hidden group hover:bg-white/[0.1] transition-colors duration-500 border-white/5 hover:border-white/30">
    <p className="text-lg md:text-xl text-white font-light leading-relaxed z-10 relative mb-8">
      "{quote}"
    </p>
    <div className="mt-auto z-10">
      <h4 className="font-display text-white font-medium">{name}</h4>
      <div className="text-brand/80 text-sm mt-1">{role}</div>
    </div>
  </div>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", type: "" });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openForm = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const closeForm = () => setIsModalOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-navy min-h-screen font-sans selection:bg-brand selection:text-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-navy/80 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/logo.svg"
              alt="Yaqiin Logistics"
              className="h-8 md:h-10 w-auto"
            />
          </div>
          <div className="hidden md:flex gap-4">
            <Button
              variant="glass"
              onClick={() => window.open("https://t.me/yaqiin", "_blank")}
              className="px-6 py-2.5 text-sm h-auto"
            >
              Telegram
            </Button>
            <Button
              variant="primary"
              onClick={openForm}
              className="px-6 py-2.5 text-sm h-auto"
            >
              Tarifni hisoblash
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-navy">
          <img
            src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2940&auto=format&fit=crop"
            alt="Cargo Background"
            className="w-full h-full object-cover opacity-[0.15] mix-blend-luminosity scale-105 transform-gpu motion-safe:animate-[pulse_10s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(254,125,8,0.2),transparent_60%)]" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1}>
            <div className="px-4 py-2 rounded-full border border-brand/20 bg-brand/10 text-brand text-sm font-medium backdrop-blur-md mb-8 inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> 1000+ Muvaffaqiyatli
              yetkazishlar
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-medium tracking-tighter mb-8 max-w-5xl mx-auto leading-[1.05] text-white">
              Yuklaringizni{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand italic pr-2">
                Premium
              </span>{" "}
              tezlikda yetkazamiz.
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-2xl text-text-secondary mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Xitoydan O'zbekistonga ishonchli logistika hamkori. Biznesingiz
              uchun 4 xil xavfsiz va aniq tariflar.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="w-full flex justify-center">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                onClick={openForm}
                className="w-full sm:w-auto text-lg"
              >
                Bepul hisob-kitob
              </Button>
              <Button
                variant="glass"
                onClick={() => window.open("https://t.me/yaqiin", "_blank")}
                className="w-full sm:w-auto text-lg group bg-white/[0.03]"
              >
                Telegram orqali yozish
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01] relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="w-full md:w-1/3 py-6 md:py-0 text-center px-4">
              <div className="text-4xl md:text-5xl font-display font-medium text-white mb-2">
                5000+
              </div>
              <div className="text-brand font-light uppercase tracking-wider text-sm">
                Yetkazilgan yuklar
              </div>
            </div>
            <div className="w-full md:w-1/3 py-6 md:py-0 text-center px-4">
              <div className="text-4xl md:text-5xl font-display font-medium text-white mb-2">
                99.8%
              </div>
              <div className="text-brand font-light uppercase tracking-wider text-sm">
                Vaqtida yetkazish
              </div>
            </div>
            <div className="w-full md:w-1/3 py-6 md:py-0 text-center px-4">
              <div className="text-4xl md:text-5xl font-display font-medium text-white mb-2">
                4 xil
              </div>
              <div className="text-brand font-light uppercase tracking-wider text-sm">
                Moslashuvchan tarif
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 relative z-10 bg-navy">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4 text-center">
              Tez va Oson <span className="text-brand">Jarayon</span>
            </h2>
            <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto text-lg font-light">
              Biz sizning vaqtingizni qadrlaymiz. Yukingizni yetkazish 3 ta
              oddiy qadamdan iborat.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <ProcessStep
                num="01"
                title="So'rov yuborish"
                desc="Saytimiz yoki Telegram orqali yukingiz haqida qisqacha ma'lumot qoldirasiz."
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <ProcessStep
                num="02"
                title="Aniq hisob-kitob"
                desc="Mutaxassislarimiz 10 daqiqa ichida narx va muddatni aniq hisoblab berishadi."
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <ProcessStep
                num="03"
                title="Xavfsiz yetkazish"
                desc="Siz belgilagan manzilga yukingizni ishonchli va butun holatda yetkazamiz."
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-navy to-[#0F2645] relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="inline-block border border-brand/30 bg-brand/5 text-brand text-sm font-medium px-4 py-1.5 rounded-full mb-6 max-w-max mx-auto border-dashed">
              4 Xil Tanlov
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-16">
              Narx va vaqtning{" "}
              <span className="text-brand font-medium italic">optimal</span>{" "}
              balansi
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.1}>
              <TariffCard
                icon={Plane}
                title="Avia"
                time="5-7 kun"
                desc="Tezkor yetkazib berish, shoshilinch biznes ehtiyojlari uchun optimal tanlov."
                onClick={openForm}
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <TariffCard
                icon={Package}
                title="Tezkor"
                time="2-3 kun"
                desc="Kichik va o'ta shoshilinch yuklarni yashin tezligida yetkazamiz."
                onClick={openForm}
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <TariffCard
                icon={Truck}
                title="Avto"
                time="12-22 kun"
                desc="Eng hamyonbop, arzon va O'zbekistonda keng tarqalgan tanlov."
                onClick={openForm}
              />
            </FadeIn>
            <FadeIn delay={0.4}>
              <TariffCard
                icon={Train}
                title="Temiryo'l"
                time="25-30 kun"
                desc="Katta hajmli va og'ir yuklar (Bulk cargo) uchun xavfsiz va ishonchli."
                onClick={openForm}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 relative bg-navy">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4 text-center">
              Nima uchun <span className="text-brand">aynan biz?</span>
            </h2>
            <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto text-lg font-light">
              Biznes egalari va tadbirkorlar bizga ishonishadi, sababi biz
              so'zimizda turamiz.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <Testimonial
                quote="Xitoydan tovarlarimizni har safar o'z vaqtida, hech qanday yo'qotishlarsiz yetkazib berishadi. Katta raxmat!"
                name="Azizbek Toirov"
                role="Tadbirkor"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <Testimonial
                quote="Boshqa logistika kompaniyalaridan charchagandim. Yaqiin jamoasi ishonchimni to'la oqladi. Aloqa zo'r, har qadam nazoratda."
                name="Nigora Sodiqova"
                role="Do'kon egasi"
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <Testimonial
                quote="Avia tarifda buyurtma bergandim, haqiqatdan ham 5 kunda Toshkentga yetib keldi. Tezlik a'lo darajada!"
                name="Shoxrux Xalilov"
                role="Elektronika savdosi"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(254,125,8,0.3),transparent_70%)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center glass-panel p-10 md:p-20 rounded-[3rem] border border-white/20 shadow-2xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
              Yukingizni qachon yetkazish kerak?
            </h2>
            <p className="text-xl text-text-secondary mb-10 font-light max-w-2xl mx-auto">
              So'rov qoldiring va mutaxassisimiz sizga{" "}
              <span className="text-brand font-medium">10 daqiqa ichida</span>{" "}
              eng zo'r taklifni beradi.
            </p>
            <Button
              variant="primary"
              onClick={openForm}
              className="text-lg px-12 text-navy mb-4 w-full md:w-auto"
            >
              Tarifni hisoblash
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            <div>
              <div className="flex items-center mb-6">
                <img
                  src="/logo.svg"
                  alt="Yaqiin Logistics"
                  className="h-10 md:h-12 w-auto"
                />
              </div>
              <p className="text-text-secondary font-light leading-relaxed mb-6">
                Xitoydan O'zbekistonga ishonchli va premium logistika xizmati.
                Biznesingiz biz bilan xavfsiz qo'llarda.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6 text-white">
                Bog'lanish
              </h4>
              <ul className="space-y-4 text-text-secondary font-light">
                <li>
                  <a
                    href="tel:+998971759797"
                    className="hover:text-brand transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> +998 97 175 97 97
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/yaqiin"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand transition-colors flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Telegram: @yaqiin
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted text-sm font-light">
            <div>
              © {new Date().getFullYear()} Yaqiin Logistics. Barcha huquqlar
              himoyalangan.
            </div>
            <div className="flex gap-4">
              <span>Premium Logistic Services</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 md:hidden z-40 pointer-events-none">
        <div className="bg-navy/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex gap-2 pointer-events-auto shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          <Button
            variant="primary"
            className="flex-1 py-4 px-2 text-[15px]"
            onClick={openForm}
          >
            Hisob-kitob qilish
          </Button>
          <a
            href="tel:+998971759797"
            className="bg-white/[0.05] border border-white/10 text-white w-[60px] rounded-xl flex items-center justify-center shrink-0 active:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5 text-brand" />
          </a>
        </div>
      </div>

      {/* Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-navy/80 backdrop-blur-md"
              onClick={closeForm}
            ></div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-[#0D2240] border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto"
            >
              <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-brand-light via-brand to-[#8E4415]" />
              <button
                type="button"
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-colors"
                onClick={closeForm}
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <div className="absolute inset-0 rounded-full animate-ping bg-brand/20" />
                    <Check className="w-10 h-10 text-brand" strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-display font-medium mb-3 text-white">
                    So'rov qabul qilindi!
                  </h3>
                  <p className="text-text-secondary mb-8 font-light">
                    Siz bilan mutaxassisimiz{" "}
                    <span className="text-brand font-medium">
                      10 daqiqa ichida
                    </span>{" "}
                    tanishib chiqib, qo'ng'iroq qiladi.
                  </p>
                  <Button
                    className="w-full text-base font-medium py-4"
                    onClick={closeForm}
                  >
                    Yopish
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-[1.75rem] font-display font-medium mb-2 leading-tight">
                      Yuboriladigan yukingiz narxini bilib oling
                    </h3>
                    <p className="text-sm font-light text-text-secondary">
                      Sizga eng yaxshi tariflarni tanlab beramiz.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <input
                      required
                      autoFocus
                      type="text"
                      placeholder="Ismingiz"
                      className="w-full bg-navy/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand/50 hover:border-white/20 transition-all text-white placeholder:text-text-muted font-light"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    <input
                      required
                      type="tel"
                      placeholder="+998"
                      className="w-full bg-navy/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand/50 hover:border-white/20 transition-all text-white placeholder:text-text-muted font-light"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                    <div className="relative">
                      <select
                        required
                        className="w-full bg-navy/50 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand/50 hover:border-white/20 transition-all text-white appearance-none cursor-pointer font-light"
                        value={formData.type}
                        onChange={(e) =>
                          setFormData({ ...formData, type: e.target.value })
                        }
                      >
                        <option
                          value=""
                          disabled
                          className="bg-navy text-text-muted"
                        >
                          Yuk turi (Tanlang)
                        </option>
                        <option
                          value="electronics"
                          className="bg-navy text-white"
                        >
                          Elektronika
                        </option>
                        <option value="clothing" className="bg-navy text-white">
                          Kiyim-kechak
                        </option>
                        <option value="oversize" className="bg-navy text-white">
                          Katta o'lchamli yuk (Bulk)
                        </option>
                        <option value="other" className="bg-navy text-white">
                          Boshqa
                        </option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full text-lg mt-4 py-4 !rounded-2xl"
                    >
                      Hoziroq yuborish
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-xs text-text-muted mt-6 font-light">
                      <ShieldCheck className="w-3.5 h-3.5" /> Ma'lumotlaringiz
                      xavfsiz himoyalangan
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
