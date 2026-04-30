"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Activity,
  MessageCircle,
  Leaf,
  Compass,
  Sparkles,
  HeartCrack,
  Baby,
  Droplets,
  AlertCircle,
  HeartHandshake,
} from "lucide-react";
import { servicosPreview, testemunhos, contacto } from "@/lib/data";
import { fadeUp, fadeUpAnimate } from "@/lib/animations";

export default function HomeClient() {
  return (
    <main>
      {/* Section 1 — Hero */}
      <section
        className="relative overflow-hidden md:h-screen"
        style={{ background: "var(--color-bg)", minHeight: 0 }}
      >
        {/* Desktop: fullscreen background image */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/images/hero-mulher-pelvis-linho.png"
            alt="Saúde pélvica feminina"
            fill
            priority
            className="object-cover object-right"
            style={{ filter: "sepia(18%) saturate(78%) brightness(1.04)" }}
          />
          {/* Warm left gradient for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(250,247,244,0.92) 0%, rgba(250,247,244,0.70) 38%, rgba(250,247,244,0.28) 62%, transparent 82%)",
            }}
          />
          {/* Top fade for navbar legibility */}
          <div
            className="absolute top-0 left-0 right-0"
            style={{ height: "22%", background: "linear-gradient(to bottom, rgba(250,247,244,0.95), transparent)" }}
          />
        </div>

        {/* Mobile: visible image strip */}
        <div
          className="relative w-full md:hidden overflow-hidden"
          style={{ height: "48vh", minHeight: 260, maxHeight: 400 }}
        >
          <Image
            src="/images/hero-mulher-pelvis-linho.png"
            alt="Saúde pélvica feminina"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "right 52%", filter: "sepia(18%) saturate(78%) brightness(1.04)" }}
          />
          {/* Top fade for navbar legibility */}
          <div
            className="absolute top-0 left-0 right-0"
            style={{ height: "25%", background: "linear-gradient(to bottom, rgba(250,247,244,0.95), transparent)" }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: "18%", background: "linear-gradient(to bottom, transparent, var(--color-bg))" }}
          />
        </div>

        {/* Scroll indicator — desktop only */}
        <motion.div
          className="hidden md:flex absolute bottom-8 left-1/2 z-10 flex-col items-center gap-1.5"
          style={{ translateX: "-50%" }}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(139,94,60,0.35)" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>

        {/* Content — flows on mobile, absolute-centered on desktop */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-2 pb-12 md:pb-0 md:absolute md:inset-0 md:flex md:flex-col md:justify-center">
          <motion.p
            {...fadeUpAnimate(0)}
            className="italic mb-4"
            style={{ color: "var(--color-gold)", fontSize: "0.8rem", letterSpacing: "0.18em" }}
          >
            SAÚDE INTEGRATIVA DA MULHER
          </motion.p>
          <motion.h1
            {...fadeUpAnimate(1)}
            className="font-cormorant max-w-2xl mb-5"
            style={{ color: "var(--color-dark)", fontSize: "clamp(30px, 4.2vw, 58px)", lineHeight: 1.18, fontWeight: 300 }}
          >
            Muitas Mulheres vivem anos com sintomas que não deveriam ser considerados normais.
          </motion.h1>
          <motion.p
            {...fadeUpAnimate(2)}
            className="text-base max-w-lg mb-8"
            style={{ color: "var(--color-muted)", lineHeight: 1.75 }}
          >
            Na WOMAN, olhamos para a saúde da Mulher como um todo — corpo, mente e emoção.
          </motion.p>
          {/* Service chips */}
          <motion.div {...fadeUpAnimate(3)} className="flex flex-wrap gap-2 mb-8">
            {["Saúde Pélvica", "Nutrição", "Coaching", "Inteligência Emocional", "Medicina Integrativa", "Medicina Tradicional Chinesa", "Sexologia"].map((label) => (
              <span
                key={label}
                className="text-xs px-3 py-1.5 rounded-full border"
                style={{
                  borderColor: "rgba(184,145,58,0.45)",
                  color: "var(--color-primary)",
                  background: "rgba(242,235,227,0.80)",
                  backdropFilter: "blur(6px)",
                  letterSpacing: "0.04em",
                }}
              >
                {label}
              </span>
            ))}
          </motion.div>
          <motion.div {...fadeUpAnimate(4)} className="flex gap-3 flex-wrap">
            <a
              href={`https://wa.me/${contacto.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md transition-opacity hover:opacity-85"
              style={{ background: "var(--color-gold)", color: "white" }}
            >
              <MessageCircle size={16} />
              Marcar consulta
            </a>
            <Link
              href="/servicos"
              className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md border transition-opacity hover:opacity-75"
              style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
            >
              Os nossos serviços
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Credenciais strip — subtle, light */}
      <section style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }} className="py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
            {[
              { valor: "10+", label: "anos de experiência" },
              { valor: "800+", label: "pacientes acompanhadas" },
              { valor: "100%", label: "cuidado personalizado" },
            ].map((m, i) => (
              <motion.div key={i} {...fadeUp(i)} className="flex items-baseline gap-2">
                <span
                  className="font-cormorant"
                  style={{ color: "var(--color-primary)", fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 400 }}
                >
                  {m.valor}
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--color-muted)" }}
                >
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Apresentação */}
      <section style={{ background: "var(--color-bg)" }} className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp()}>
            <p
              className="italic mb-4"
              style={{ color: "var(--color-gold)", fontSize: "0.8rem", letterSpacing: "0.12em" }}
            >
              SOBRE A DRA. MICHELE CARVALHO COLCHETE
            </p>
            <h2
              className="font-cormorant mb-6"
              style={{
                color: "var(--color-dark)",
                fontSize: "clamp(34px, 3.5vw, 50px)",
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              Uma especialista que a compreende
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--color-muted)", lineHeight: 1.8 }}
            >
              Sou Mulher, Esposa, Mãe e Fisioterapeuta. Há mais de 10 anos que
              trabalho na Saúde da Mulher, com especial foco em questões que
              têm um impacto profundo no bem-estar e na autoestima.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--color-muted)", lineHeight: 1.8 }}
            >
              O meu propósito é cuidar da mulher para que viva com mais saúde,
              confiança e qualidade de vida — corpo, mente e emoção.
            </p>
            <Link
              href="/sobre"
              className="text-sm font-medium transition-opacity hover:opacity-60"
              style={{ color: "var(--color-primary)" }}
            >
              Conhecer a minha história →
            </Link>
          </motion.div>
          <motion.div {...fadeUp(1)}>
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{
                aspectRatio: "4/5",
                maxHeight: 520,
              }}
            >
              <Image
                src="/images/doutora-coluna.png"
                alt="Dra. Michele Carvalho Colchete"
                fill
                priority
                className="object-cover object-top"
              />
              {/* Gold accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ background: "var(--color-gold)" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Para Quem É */}
      <section style={{ background: "var(--color-surface)" }} className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="mb-16">
            <p
              className="italic mb-3"
              style={{ color: "var(--color-gold)", fontSize: "0.8rem", letterSpacing: "0.12em" }}
            >
              DISFUNÇÕES QUE TRATAMOS
            </p>
            <h2
              className="font-cormorant"
              style={{ color: "var(--color-dark)", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 300 }}
            >
              Compreendemos a sua dor
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {[
              {
                icon: <HeartCrack size={22} style={{ color: "var(--color-gold)" }} />,
                title: "Dor na Relação Sexual",
                desc: "Tratamento especializado de dispareunia, vaginismo e outras causas de dor durante a intimidade, com uma abordagem respeitosa e integrativa.",
              },
              {
                icon: <Shield size={22} style={{ color: "var(--color-gold)" }} />,
                title: "Dor Pélvica Crónica / Endometriose",
                desc: "Alívio da dor pélvica persistente e acompanhamento em casos de endometriose, com técnicas miofasciais e educação para o autocuidado.",
              },
              {
                icon: <Baby size={22} style={{ color: "var(--color-gold)" }} />,
                title: "Alterações Físicas e Emocionais na Gravidez",
                desc: "Acompanhamento das transformações do corpo e das emoções durante a gravidez, prevenindo dores e preparando para o parto.",
              },
              {
                icon: <Droplets size={22} style={{ color: "var(--color-gold)" }} />,
                title: "Incontinência Urinária",
                desc: "Recuperação do controlo urinário através de técnicas especializadas e fortalecimento do pavimento pélvico.",
              },
              {
                icon: <AlertCircle size={22} style={{ color: "var(--color-gold)" }} />,
                title: "Urgência Urinária",
                desc: "Tratamento da necessidade súbita e urgente de urinar, com estratégias de reeducação vesical e fortalecimento muscular.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp(index)}
                className="py-8 px-6 border-b lg:border-b-0 lg:border-r last:border-b-0 last:border-r-0"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3
                  className="font-cormorant text-xl mb-3"
                  style={{ color: "var(--color-dark)", fontWeight: 400 }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-muted)", lineHeight: 1.75 }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(5)} className="mt-12">
            <Link
              href="/servicos"
              className="text-sm font-medium transition-opacity hover:opacity-60"
              style={{ color: "var(--color-gold)" }}
            >
              Ver todos os serviços →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 4 — Serviços Preview */}
      <section style={{ background: "var(--color-bg)" }} className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp()}>
              <p
                className="italic mb-3"
                style={{ color: "var(--color-gold)", fontSize: "0.8rem", letterSpacing: "0.12em" }}
              >
                OS NOSSOS SERVIÇOS
              </p>
              <h2
                className="font-cormorant mb-6"
                style={{ color: "var(--color-dark)", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 300, lineHeight: 1.2 }}
              >
                Uma saúde completa começa aqui
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "var(--color-muted)", lineHeight: 1.8 }}
              >
                Oferecemos uma abordagem integrada da saúde feminina, combinando
                Fisioterapia Pélvica, Nutrição e Coaching para um bem-estar genuíno.
              </p>
              <Link
                href="/servicos"
                className="text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: "var(--color-primary)" }}
              >
                Ver todos os serviços →
              </Link>
            </motion.div>

            <div className="flex flex-col divide-y" style={{ borderColor: "var(--color-border)" }}>
              {servicosPreview.map((servico, i) => {
                const icons = [
                  <Activity size={20} key="a" style={{ color: "var(--color-gold)" }} />,
                  <Leaf size={20} key="l" style={{ color: "var(--color-gold)" }} />,
                  <Compass size={20} key="c" style={{ color: "var(--color-gold)" }} />,
                  <HeartHandshake size={20} key="h" style={{ color: "var(--color-gold)" }} />,
                ];
                return (
                  <motion.div
                    key={servico.id ?? i}
                    {...fadeUp(i)}
                    className="py-7 flex gap-5 items-start"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <div className="mt-0.5 shrink-0">{icons[i]}</div>
                    <div>
                      <h3
                        className="font-cormorant text-xl mb-2"
                        style={{ color: "var(--color-dark)", fontWeight: 400 }}
                      >
                        {servico.titulo}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-muted)", lineHeight: 1.7 }}
                      >
                        {servico.descricaoCurta}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Diferenciais */}
      <section style={{ background: "var(--color-dark)" }} className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="mb-16 max-w-xl">
            <h2 className="font-cormorant text-white mb-4"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 300 }}>
              O que nos distingue
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }} className="text-sm">
              Uma clínica especializada que une rigor técnico e cuidado humano.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Activity size={24} style={{ color: "var(--color-gold)" }} />,
                title: "Especialização Certificada",
                desc: "Formação contínua e certificações internacionais em Fisioterapia Pélvica e Uroginecologia.",
              },
              {
                icon: <Sparkles size={24} style={{ color: "var(--color-gold)" }} />,
                title: "Abordagem Integrativa",
                desc: "Olhamos para a mulher como um todo, integrando técnicas manuais, exercício terapêutico e educação para a saúde.",
              },
              {
                icon: <Heart size={24} style={{ color: "var(--color-gold)" }} />,
                title: "Cuidado Personalizado",
                desc: "Cada consulta é única. Plano de tratamento adaptado às necessidades e objetivos de cada paciente.",
              },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i)}>
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center mb-5"
                  style={{ background: "rgba(184,145,58,0.12)", border: "1px solid rgba(184,145,58,0.2)" }}
                >
                  {item.icon}
                </div>
                <h3 className="font-cormorant text-white text-xl mb-3" style={{ fontWeight: 400 }}>
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.52)", lineHeight: 1.8 }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Testemunhos */}
      <section style={{ background: "var(--color-bg)" }} className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp()} className="mb-16">
            <p
              className="italic mb-3"
              style={{ color: "var(--color-gold)", fontSize: "0.8rem", letterSpacing: "0.12em" }}
            >
              TESTEMUNHOS
            </p>
            <h2
              className="font-cormorant"
              style={{ color: "var(--color-dark)", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 300 }}
            >
              O que dizem as nossas pacientes
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {testemunhos.map((t, i) => (
              <motion.div key={t.nome ?? i} {...fadeUp(i)}>
                {/* Quote mark */}
                <div
                  className="font-cormorant mb-4"
                  style={{ color: "var(--color-gold)", fontSize: "4rem", lineHeight: 1, opacity: 0.5 }}
                  aria-hidden="true"
                >
                  "
                </div>
                {/* Quote text */}
                <p
                  className="font-cormorant italic text-lg leading-relaxed mb-8"
                  style={{ color: "var(--color-dark)", lineHeight: 1.75, fontWeight: 300 }}
                >
                  {t.texto}
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0"
                    style={{ background: "var(--color-primary)", opacity: 0.8 }}
                  >
                    {t.nome.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--color-dark)" }}>{t.nome}</p>
                    {t.condicao && (
                      <p className="text-xs" style={{ color: "var(--color-muted)" }}>{t.condicao}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — CTA Final */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="/images/textura-linho.svg"
          alt=""
          aria-hidden="true"
          fill
          loading="lazy"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(139, 94, 60, 0.78)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()}>
            <h2
              className="font-cormorant text-white mb-5"
              style={{ fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 300, lineHeight: 1.2 }}
            >
              Dê o primeiro passo para o seu bem-estar
            </h2>
            <p
              className="text-base mb-10"
              style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.75 }}
            >
              O primeiro passo é uma conversa. Estamos aqui para si.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={`https://wa.me/${contacto.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-medium text-sm transition-opacity hover:opacity-90"
                style={{ background: "white", color: "var(--color-primary)" }}
              >
                <MessageCircle size={16} />
                Fale Connosco pelo WhatsApp
              </a>
              <Link
                href="/contactos"
                className="inline-flex items-center px-7 py-3.5 rounded-md font-medium text-sm border transition-opacity hover:opacity-80"
                style={{ borderColor: "rgba(255,255,255,0.45)", color: "white" }}
              >
                Ver Contactos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
