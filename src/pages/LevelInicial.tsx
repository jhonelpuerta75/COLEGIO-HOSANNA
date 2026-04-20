import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LevelInicial: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="bg-background font-body text-on-surface">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 px-6 bg-gradient-to-b from-yellow-50 via-pink-50 to-sky-50">
          <div className="absolute top-16 left-4 md:left-12 bg-yellow-200 text-yellow-700 rounded-full px-4 py-3 shadow-lg border-2 border-yellow-300 floaty-sticker hidden md:flex">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
          </div>
          <div className="absolute top-24 right-6 md:right-16 bg-pink-200 text-pink-600 rounded-full px-4 py-3 shadow-lg border-2 border-pink-300 floaty-sticker-delay hidden md:flex">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </div>
          <div className="absolute bottom-20 left-8 bg-sky-200 text-sky-700 rounded-full px-4 py-3 shadow-lg border-2 border-sky-300 floaty-sticker-slow hidden lg:flex">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
          </div>
          <div className="absolute bottom-24 right-10 bg-lime-200 text-lime-700 rounded-full px-4 py-3 shadow-lg border-2 border-lime-300 floaty-sticker hidden lg:flex">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>toys</span>
          </div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white text-pink-600 px-4 py-2 rounded-full font-black text-sm mb-6 border-4 border-pink-200 shadow-md transform -rotate-1">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ¡NIVEL INICIAL DESBLOQUEADO!
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-on-surface leading-[1.1] tracking-tight mb-8">
                ¡Donde cada día se vive una <span className="text-pink-500 italic">nueva aventura!</span>
              </h1>
              <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                En Colegio Hosanna, transformamos el aprendizaje en la aventura más emocionante. Preparamos a los pequeños exploradores para el futuro con valores y diversión.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <div className="bg-yellow-200 text-amber-800 text-sm font-black px-4 py-2 rounded-full border-2 border-yellow-300 rotate-[-2deg] shadow-sm">
                  <span className="material-symbols-outlined text-base align-middle mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>sentiment_excited</span>
                  Juegos felices
                </div>
                <div className="bg-sky-200 text-sky-800 text-sm font-black px-4 py-2 rounded-full border-2 border-sky-300 rotate-[2deg] shadow-sm">
                  <span className="material-symbols-outlined text-base align-middle mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                  Aprender jugando
                </div>
                <div className="bg-pink-200 text-pink-700 text-sm font-black px-4 py-2 rounded-full border-2 border-pink-300 rotate-[-1deg] shadow-sm">
                  <span className="material-symbols-outlined text-base align-middle mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  Amor y cuidado
                </div>
              </div>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <button
                  onClick={() => window.location.href = '#contacto'}
                  className="bg-primary text-on-primary text-xl font-black px-10 py-5 rounded-xl btn-3d-primary active:translate-y-1 transition-all">
                  Iniciar Aventura
                </button>
                <button
                  onClick={() => document.getElementById('mapa-escolar')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-secondary-container text-on-secondary-container text-xl font-black px-10 py-5 rounded-xl btn-3d-secondary active:translate-y-1 transition-all">
                  Ver Mapa Escolar
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
              <div className="absolute top-6 -left-5 hidden md:flex bg-white text-sky-600 px-4 py-2 rounded-full border-4 border-sky-200 font-black text-sm shadow-md rotate-[-8deg] floaty-sticker">
                <span className="material-symbols-outlined text-base mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                Diversión diaria
              </div>
              <div className="absolute bottom-12 -right-4 hidden md:flex bg-white text-yellow-600 px-4 py-2 rounded-full border-4 border-yellow-200 font-black text-sm shadow-md rotate-[8deg] floaty-sticker-delay">
                <span className="material-symbols-outlined text-base mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>mood</span>
                Sonrisas reales
              </div>
              <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-[2rem] rotate-2 shadow-xl border-4 border-white group-hover:rotate-0 transition-transform duration-500">
                <img alt="Kids Learning" className="rounded-lg w-full object-cover aspect-[4/3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb1Rflw0CCMkw27GIMtz89Tpsxq8ZYWODKK0PmSvv-e0e-X5g1PvKvnHluH0EWJUqqEz8eWivk1xvnsp451sK9RpaN85NWouLCbtQNFh6E9t3o0eEVRCkOMEBpVkZ0DQ9KFJglwohovRFkfKZGlTdCivmUwYZSlpheyREhF3fqOFb931b868GRZ6tI8o0llEnx0g-9dvKaYzE96T3E4hOY2KBiN9C7_3GfOTo0yzeatnPORkKbY7_Dw292eIhGvLOEPo_KcTcrzqA" />
                <div className="absolute -top-5 right-6 bg-pink-300 text-pink-900 text-xs font-black px-3 py-2 rounded-full border-2 border-pink-400 shadow-sm hidden md:block">
                  Aventuras
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border-4 border-primary rotate-[-4deg] hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-tertiary text-white p-2 rounded-lg">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                    </div>
                    <div className="font-black text-sm uppercase">100% Amor & Cuidado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Methodology */}
        <section className="relative overflow-hidden bg-gradient-to-b from-pink-100 via-yellow-50 to-sky-100 py-24 px-6 rounded-t-[4rem]">
          <div className="absolute top-10 left-8 w-24 h-24 bg-pink-300/40 rounded-full blur-2xl"></div>
          <div className="absolute top-24 right-10 w-28 h-28 bg-yellow-300/50 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-sky-300/40 rounded-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto relative">
            <div data-aos="fade-up" className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/80 text-pink-600 px-5 py-2 rounded-full font-black text-sm border-4 border-pink-200 shadow-md rotate-[-2deg]">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>toys</span>
                Superpoderes en acción
              </div>
              <h2 className="text-4xl md:text-5xl font-black mt-6 mb-4 tracking-tight text-slate-800">Grandes Pasos en su Crecimiento</h2>
              <p className="text-slate-600 font-bold max-w-2xl mx-auto">
                Nuestra propuesta educativa está diseñada para potenciar las capacidades naturales de cada niño a través del juego y la exploración.
              </p>
            </div>
            <div className="grid lg:grid-cols-[1.1fr_1.9fr] gap-8 items-start">
              <div data-aos="fade-right" className="bg-white/85 backdrop-blur-sm p-8 rounded-[2rem] border-4 border-white shadow-[0_10px_0_0_rgba(255,255,255,0.7)]">
                <div className="inline-flex items-center gap-2 bg-yellow-200 text-amber-700 px-4 py-2 rounded-full font-black text-sm mb-5">
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  Ruta de aprendizaje
                </div>
                <h3 className="text-3xl font-black text-slate-800 leading-tight mb-4">Pequeños héroes descubriendo su mundo</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Cada experiencia se convierte en una mini aventura llena de color, movimiento, ternura y nuevos logros.
                </p>
                <div className="space-y-4">
                  <div className="bg-pink-100 rounded-2xl p-4 border-2 border-pink-200">
                    <div className="flex items-center justify-between text-sm font-black text-pink-700 mb-2">
                      <span>Curiosidad</span>
                      <span>+100</span>
                    </div>
                    <div className="h-3 bg-white rounded-full overflow-hidden">
                      <div className="h-full w-[88%] bg-gradient-to-r from-pink-400 to-fuchsia-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-sky-100 rounded-2xl p-4 border-2 border-sky-200">
                    <div className="flex items-center justify-between text-sm font-black text-sky-700 mb-2">
                      <span>Confianza</span>
                      <span>+95</span>
                    </div>
                    <div className="h-3 bg-white rounded-full overflow-hidden">
                      <div className="h-full w-[82%] bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-lime-100 rounded-2xl p-4 border-2 border-lime-200">
                    <div className="flex items-center justify-between text-sm font-black text-lime-700 mb-2">
                      <span>Creatividad</span>
                      <span>+110</span>
                    </div>
                    <div className="h-3 bg-white rounded-full overflow-hidden">
                      <div className="h-full w-[92%] bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div data-aos="fade-up" data-aos-delay="0" className="bg-white p-7 rounded-[2rem] border-4 border-pink-200 shadow-[0_10px_0_0_rgba(244,114,182,0.18)] group hover:-translate-y-2 hover:rotate-[-1deg] transition-all duration-300">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-16 h-16 bg-pink-100 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-pink-500 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
                    </div>
                    <span className="bg-pink-500 text-white text-xs font-black px-3 py-2 rounded-full">Nivel 1</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-3">Exploro y Descubro</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-5">
                    Aprenden con juegos, preguntas y retos sencillos que despiertan su curiosidad natural.
                  </p>
                  <div className="inline-flex items-center gap-2 text-pink-600 font-black text-sm">
                    <span className="material-symbols-outlined text-base">rocket_launch</span>
                    Misión activa
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-7 rounded-[2rem] border-4 border-yellow-200 shadow-[0_10px_0_0_rgba(250,204,21,0.2)] group hover:-translate-y-2 hover:rotate-[1deg] transition-all duration-300">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-16 h-16 bg-yellow-100 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-yellow-500 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                    </div>
                    <span className="bg-yellow-400 text-amber-900 text-xs font-black px-3 py-2 rounded-full">Nivel 2</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-3">Comparto con Amor</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-5">
                    Fortalecen valores cristianos con actividades llenas de respeto, amistad, fe y alegría.
                  </p>
                  <div className="inline-flex items-center gap-2 text-amber-600 font-black text-sm">
                    <span className="material-symbols-outlined text-base">sunny</span>
                    Corazón brillante
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-7 rounded-[2rem] border-4 border-sky-200 shadow-[0_10px_0_0_rgba(56,189,248,0.18)] group hover:-translate-y-2 hover:rotate-[-1deg] transition-all duration-300">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-16 h-16 bg-sky-100 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-sky-500 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>sports_handball</span>
                    </div>
                    <span className="bg-sky-500 text-white text-xs font-black px-3 py-2 rounded-full">Nivel 3</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-3">Me Muevo y Creo</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-5">
                    Impulsan su desarrollo motriz, artístico y sensorial con experiencias activas y divertidas.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-600 font-black text-sm">
                    <span className="material-symbols-outlined text-base">celebration</span>
                    Energía en juego
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Workshops */}
        <section className="py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-aos="fade-right" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-primary font-black uppercase tracking-widest text-sm">Misiones Especiales</span>
                <h2 className="text-4xl md:text-5xl font-black mt-2">Talleres Creativos</h2>
              </div>
              <p className="max-w-md text-on-surface-variant font-medium italic">
                "Desbloquea el potencial creativo de tu pequeño con actividades diseñadas para inspirar."
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div data-aos="zoom-in" className="flex flex-col lg:flex-row bg-white rounded-xl card-extruded border-4 border-outline-variant/10 overflow-hidden group">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtYmP9y1OkKzwt-2--T6PJgb9TtUzXOWTXOwF0M2DvAIuWV_cZnkuL5kEDT5ZLvrHWnIW8YH4uvT15prMpEOGPyMS8o26AI_YWHpFqrqJ8rfBxvsEIY1Mgu2iuTrT1FEKaKGnt-xXbJ0n4V5ncncLlhBj5T-5m2QlHUTp6kPO0P-6C9i7BnKSNQ1pV79lszjn-iEKcbMUsRXYU2iQe3GaqLnJwWemn7U2tgmprUrR0Q02QjqQFCQXdfnM7Mk23lM-BIMFH4K1BUhM" alt="Music" />
                  <div className="absolute top-4 left-4 bg-primary text-white p-2 rounded-lg">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>music_note</span>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black mb-2">Música</h3>
                    <p className="text-primary font-bold text-sm mb-4 uppercase">'Sintoniza tus sentidos'</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                      Mejora la coordinación, el lenguaje y la inteligencia emocional a través del ritmo y la melodía.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="inline-flex items-center gap-2 bg-primary-container text-primary px-4 py-2 rounded-full text-sm font-black">
                      <span className="material-symbols-outlined text-base">music_note</span>
                      Sintoniza tus sentidos
                    </span>
                    <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-black">
                      <span className="material-symbols-outlined text-base">favorite</span>
                      Ritmo y emoción
                    </span>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" className="flex flex-col lg:flex-row bg-white rounded-xl card-extruded border-4 border-outline-variant/10 overflow-hidden group">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAErfDGKCkWl7AAcEuBWh0A8ZRRcz_n-diEGGpubY_4kf1Ah3sTQz1reBLWHuSZ8qK7K8A9AKq3_6FNdP9_loVSidVFhLIyaBZRshL9EuRXyvVe12N8W_uYW5GfKZEBD1QdJCk6BMzEdYDxD2vSn51QMDZWeKAtVZc4cG19erjT9EeXBmx72XEY32HXyB0gwhGy751e1iIbb9Dh10TziZAfPRPtBe8pNIeW3UFX2CJNZhrcwGdeMw5bzVEy70RWING4veSXYWNAuU0" alt="Art" />
                  <div className="absolute top-4 left-4 bg-secondary text-white p-2 rounded-lg">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black mb-2">Arte</h3>
                    <p className="text-secondary font-bold text-sm mb-4 uppercase">'Crea tu mundo'</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                      Enfoque en motricidad fina y expresión libre. Donde las manchas se convierten en obras maestras.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="inline-flex items-center gap-2 bg-secondary-container text-secondary px-4 py-2 rounded-full text-sm font-black">
                      <span className="material-symbols-outlined text-base">palette</span>
                      Crea tu mundo
                    </span>
                    <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-black">
                      <span className="material-symbols-outlined text-base">brush</span>
                      Imaginación libre
                    </span>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" className="flex flex-col lg:flex-row bg-white rounded-xl card-extruded border-4 border-outline-variant/10 overflow-hidden group">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD53P6Lx488RVRasfc6-J_uMZ6kKF6epXcjlMJazVkPkj_vlgxRTzk3DbT91rVIHcVyjorfC7QLbVTiBcG3EcNPxitQ9pEQAm3mv9RyaPBqCSRhhMUaSH4zS-5f0gAoxdAuUOjsEfqBe6kIFv6jj0Vbpg4DQEZ17urF2kBAR2mBfpXSw9HZA-odnAqL3ZunUmLz8Sdi_IzDXE_X07CZOUxxzVMNYcJIiCAORrjJK928gs42HsK-ZZ6qE0xfu0p26vTbxm_vPT7Ppkk" alt="Psychomotricity" />
                  <div className="absolute top-4 left-4 bg-tertiary text-white p-2 rounded-lg">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>directions_run</span>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black mb-2">Psicomotricidad</h3>
                    <p className="text-tertiary font-bold text-sm mb-4 uppercase">'Nivel de Energía al Máximo'</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                      Fomentamos el crecimiento físico y el trabajo en equipo a través del juego dirigido y el movimiento.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="inline-flex items-center gap-2 bg-tertiary-container text-tertiary px-4 py-2 rounded-full text-sm font-black">
                      <span className="material-symbols-outlined text-base">directions_run</span>
                      Nivel de Energía al Máximo
                    </span>
                    <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-black">
                      <span className="material-symbols-outlined text-base">sports_handball</span>
                      Movimiento feliz
                    </span>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in" className="flex flex-col lg:flex-row bg-white rounded-xl card-extruded border-4 border-outline-variant/10 overflow-hidden group">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHQc5U6MJ3FdjvB0KHqNHiORCO4559Z7QLQOnMai6570B5IpqGe03jvYQeUWykBibkM6lqSwJu2LtW-e1ty0MfP61l8mbxi0LAOe7N30McZwc7LcNq_jPvNIS9TgPkqS16u4z_T1IKo11bq17jq4vjNyXyznLaPabW91qFQg7dd1ROy84ZIMaZirhPnZ3AZN62qZgcH2bxrtmBBWAaAldnq1b8uJ7lutNCOAfwDNiIpVVKBmdb78retjJRMek1h4v2F0DhRWhXJgk" alt="English" />
                  <div className="absolute top-4 left-4 bg-primary-dim text-white p-2 rounded-lg">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>translate</span>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black mb-2">Inglés</h3>
                    <p className="text-primary-dim font-bold text-sm mb-4 uppercase">'Desbloquea un nuevo idioma'</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                      Bilingüismo temprano para mayor flexibilidad cognitiva y conexión con el mundo global.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="inline-flex items-center gap-2 bg-primary-container text-primary-dim px-4 py-2 rounded-full text-sm font-black">
                      <span className="material-symbols-outlined text-base">translate</span>
                      Desbloquea un nuevo idioma
                    </span>
                    <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-black">
                      <span className="material-symbols-outlined text-base">language</span>
                      Pequeños bilingües
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section id="mapa-escolar" className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-amber-50 via-rose-50 to-sky-50 border-y-4 border-pink-100">
          <div className="absolute top-10 left-6 md:left-16 bg-yellow-200 text-yellow-700 rounded-full px-4 py-3 shadow-lg border-2 border-yellow-300 floaty-sticker">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
          </div>
          <div className="absolute top-24 right-8 md:right-20 bg-pink-200 text-pink-600 rounded-full px-4 py-3 shadow-lg border-2 border-pink-300 floaty-sticker-delay">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>toys</span>
          </div>
          <div className="absolute bottom-16 left-10 md:left-24 bg-sky-200 text-sky-700 rounded-full px-4 py-3 shadow-lg border-2 border-sky-300 floaty-sticker-slow hidden md:flex">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
          </div>
          <div className="absolute bottom-20 right-6 md:right-16 bg-lime-200 text-lime-700 rounded-full px-4 py-3 shadow-lg border-2 border-lime-300 map-stop-sticker hidden md:flex">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </div>
          <div className="max-w-7xl mx-auto relative">
            <div data-aos="fade-up" className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white text-fuchsia-600 px-5 py-2 rounded-full border-4 border-pink-200 shadow-md font-black text-sm rotate-[-2deg]">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>travel_explore</span>
                Paseo por Hosanna
              </div>
              <h2 className="text-4xl md:text-5xl font-black mt-6 mb-4 tracking-tight text-slate-800">Explora el Mapa</h2>
              <p className="text-slate-600 font-bold max-w-2xl mx-auto">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="grid lg:grid-cols-[0.95fr_2.05fr] gap-8 items-start">
              <div data-aos="fade-right" className="bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 border-4 border-white shadow-[0_10px_0_0_rgba(244,114,182,0.12)]">
                <div className="inline-flex items-center gap-2 bg-yellow-200 text-amber-800 px-4 py-2 rounded-full font-black text-sm mb-5">
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>directions_bus</span>
                  Subete al paseo
                </div>
                <h3 className="text-3xl font-black text-slate-800 leading-tight mb-4">Tres paradas llenas de juego y ternura</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Los niños recorren espacios pensados para aprender, moverse y soñar. Cada parada tiene su propia magia.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-pink-100 border-2 border-pink-200 rounded-2xl p-4">
                    <span className="w-10 h-10 rounded-full bg-white text-pink-600 flex items-center justify-center font-black">1</span>
                    <p className="text-slate-700 font-black">Aulas con materiales visuales y coloridos</p>
                  </div>
                  <div className="flex items-center gap-3 bg-yellow-100 border-2 border-yellow-200 rounded-2xl p-4">
                    <span className="w-10 h-10 rounded-full bg-white text-amber-700 flex items-center justify-center font-black">2</span>
                    <p className="text-slate-700 font-black">Playground para correr, saltar y reir</p>
                  </div>
                  <div className="flex items-center gap-3 bg-sky-100 border-2 border-sky-200 rounded-2xl p-4">
                    <span className="w-10 h-10 rounded-full bg-white text-sky-700 flex items-center justify-center font-black">3</span>
                    <p className="text-slate-700 font-black">Biblioteca para cuentos y momentos tranquilos</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-3 border-t-4 border-dashed border-pink-300"></div>
                <div className="grid md:grid-cols-3 gap-6 relative">
                  <article data-aos="fade-up" data-aos-delay="0" className="map-stop relative bg-white rounded-[2rem] border-4 border-pink-200 shadow-[0_12px_0_0_rgba(244,114,182,0.14)] overflow-hidden">
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-pink-400 border-4 border-white z-20 map-stop-ring"></div>
                    <div className="absolute top-4 left-4 bg-pink-300 text-pink-900 text-xs font-black px-3 py-2 rounded-full border-2 border-pink-400 shadow-sm">Parada 1</div>
                    <div className="absolute top-4 right-4 bg-white/90 text-pink-600 text-xs font-black px-3 py-2 rounded-full border-2 border-pink-200 shadow-sm">Aulas</div>
                    <div className="p-4 pt-14">
                      <div className="overflow-hidden rounded-[1.5rem]">
                        <img className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeAkQc04RkxBxmFPOEgf9Swi-FFZtwKf89N-v3w_Pj2WoeIIqDVo3sObnnSLDa9BTK8MnPah5xgB2qHwlWOXUUaqNjul2VdkJsilyWbJWKK_i2iqEawSn4DNT4vVLoOHOYgnBIdNeb5wX2lTbJFHwOucvvkESZAbx_u7MKhJiRV4el8NZVNy8_V8GgZMbPVNuveYgYtCXViR3MMoa4-cwO6bkB_2-TH8tlrHVNn8aTIAw9M-mewASZ_Hhq03SokFRNtWhQ81Sq5sQ" alt="Aulas" />
                      </div>
                      <div className="pt-5">
                        <div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-4 border-2 border-pink-200">
                          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>meeting_room</span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-800 mb-2">Aulas Mágicas</h3>
                        <p className="text-sm text-slate-600 font-medium mb-4">Colores, juegos y actividades que invitan a aprender con curiosidad.</p>
                        <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-black text-sm">
                          <span className="material-symbols-outlined text-base">palette</span>
                          Color y creatividad
                        </div>
                      </div>
                    </div>
                  </article>
                  <article data-aos="fade-up" data-aos-delay="100" className="map-stop relative bg-white rounded-[2rem] border-4 border-yellow-200 shadow-[0_12px_0_0_rgba(250,204,21,0.16)] overflow-hidden md:mt-12">
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-yellow-400 border-4 border-white z-20 map-stop-ring"></div>
                    <div className="absolute top-4 left-4 bg-yellow-300 text-amber-900 text-xs font-black px-3 py-2 rounded-full border-2 border-yellow-400 shadow-sm">Parada 2</div>
                    <div className="absolute top-4 right-4 bg-white/90 text-amber-700 text-xs font-black px-3 py-2 rounded-full border-2 border-yellow-200 shadow-sm">Playground</div>
                    <div className="p-4 pt-14">
                      <div className="overflow-hidden rounded-[1.5rem]">
                        <img className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9FBrX8GMQwrQUEh5PM9LbmQnNT2AjCIfDKPXK8o0TuNEVOUYn8ah91E__6BZe6y5fx08KLts-GfnAZvRRfizOhmH9MtseTEibBNxneM5VoOtOA8GOLOGF-G-4wIjdm4uGfqHkXMzf9MvT8kC04EOQ4ys2FpoCtbYNOcaBB1CS0J42RLXnc9FUzLZOpA89xdDdjvy4nxkSqL0UVpaesFvjLRjVkUA9SL2Y2w05ECi3teeVVNN-l9vLgn51SvS6LGTIayPdI4NIJXE" alt="Playground" />
                      </div>
                      <div className="pt-5">
                        <div className="w-14 h-14 rounded-2xl bg-yellow-100 text-amber-600 flex items-center justify-center mb-4 border-2 border-yellow-200">
                          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>skateboarding</span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-800 mb-2">Parque de Aventuras</h3>
                        <p className="text-sm text-slate-600 font-medium mb-4">Un espacio feliz para moverse, explorar y descargar energia con seguridad.</p>
                        <div className="inline-flex items-center gap-2 bg-yellow-100 text-amber-700 px-4 py-2 rounded-full font-black text-sm">
                          <span className="material-symbols-outlined text-base">rocket_launch</span>
                          Mucha energía
                        </div>
                      </div>
                    </div>
                  </article>
                  <article data-aos="fade-up" data-aos-delay="200" className="map-stop relative bg-white rounded-[2rem] border-4 border-sky-200 shadow-[0_12px_0_0_rgba(56,189,248,0.14)] overflow-hidden">
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-sky-400 border-4 border-white z-20 map-stop-ring"></div>
                    <div className="absolute top-4 left-4 bg-sky-300 text-sky-900 text-xs font-black px-3 py-2 rounded-full border-2 border-sky-400 shadow-sm">Parada 3</div>
                    <div className="absolute top-4 right-4 bg-white/90 text-sky-700 text-xs font-black px-3 py-2 rounded-full border-2 border-sky-200 shadow-sm">Biblioteca</div>
                    <div className="p-4 pt-14">
                      <div className="overflow-hidden rounded-[1.5rem]">
                        <img className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmb0upk9SP5HpdulUvrQj_851cHV41aLB8G9z5j7s_J2CLkKuN48FV6AcjT3nEZ4PYe-fgYk-nGgNtgzD4Z23P9Z8aBmcjxEvK3tAgbwc5qOu6gh25giRpctmHOsVsjJ2hlQPfJT9ipRHznrU9F9ZDjnAUDpVv17tRSTfplZgnTjJ0YAxOyDwqXerQalb-ezXlv3IKh0iO0VhPvHk-Cn-3LSBKgM1-EWByj6A5lTfSc7rRaBmYi6VDgZwM0HfVyY7mz-0kao9eBec" alt="Biblioteca" />
                      </div>
                      <div className="pt-5">
                        <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4 border-2 border-sky-200">
                          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-800 mb-2">Biblioteca de Sueños</h3>
                        <p className="text-sm text-slate-600 font-medium mb-4">Lecturas, cuentos y rincones tranquilos para imaginar y aprender.</p>
                        <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full font-black text-sm">
                          <span className="material-symbols-outlined text-base">menu_book</span>
                          Hora del cuento
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kids Gallery */}
        <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-sky-50 via-white to-pink-50">
          <div className="absolute top-12 left-6 md:left-12 bg-yellow-200 text-yellow-700 rounded-full px-4 py-3 shadow-lg border-2 border-yellow-300 floaty-sticker">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
          </div>
          <div className="absolute top-24 right-8 md:right-16 bg-pink-200 text-pink-600 rounded-full px-4 py-3 shadow-lg border-2 border-pink-300 floaty-sticker-delay">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </div>
          <div className="absolute bottom-20 left-10 md:left-24 bg-sky-200 text-sky-700 rounded-full px-4 py-3 shadow-lg border-2 border-sky-300 floaty-sticker-slow">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
          </div>
          <div className="absolute bottom-12 right-6 md:right-20 bg-lime-200 text-lime-700 rounded-full px-4 py-3 shadow-lg border-2 border-lime-300 floaty-sticker">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>toys</span>
          </div>
          <div className="max-w-7xl mx-auto relative">
            <div data-aos="fade-up" className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white text-sky-600 px-5 py-2 rounded-full border-4 border-sky-200 shadow-md font-black text-sm rotate-[2deg]">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>photo_camera</span>
                Momentos felices
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 mt-6 mb-4">Galería de pequeños exploradores</h2>
              <p className="max-w-2xl mx-auto text-slate-600 font-bold">
                Sonrisas, juegos y descubrimientos en un espacio lleno de color, ternura y aventuras para crecer.
              </p>
            </div>
            <div className="grid lg:grid-cols-[1fr_1.7fr] gap-8 items-start">
              <div data-aos="fade-right" className="bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 border-4 border-white shadow-[0_10px_0_0_rgba(191,219,254,0.65)]">
                <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-black text-sm mb-5">
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>celebration</span>
                  Album de aventuras
                </div>
                <h3 className="text-3xl font-black text-slate-800 mb-4">Cada foto cuenta una historia bonita</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Capturamos momentos reales de aprendizaje, amistad y alegría para mostrar el ambiente cálido y creativo que viven los niños cada día.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-100 border-2 border-yellow-200 rounded-2xl p-4 text-center">
                    <span className="material-symbols-outlined text-yellow-600 text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>sentiment_excited</span>
                    <p className="text-sm font-black text-slate-700">Juegos felices</p>
                  </div>
                  <div className="bg-sky-100 border-2 border-sky-200 rounded-2xl p-4 text-center">
                    <span className="material-symbols-outlined text-sky-600 text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                    <p className="text-sm font-black text-slate-700">Aprender jugando</p>
                  </div>
                  <div className="bg-pink-100 border-2 border-pink-200 rounded-2xl p-4 text-center">
                    <span className="material-symbols-outlined text-pink-600 text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>diversity_3</span>
                    <p className="text-sm font-black text-slate-700">Amigos y valores</p>
                  </div>
                  <div className="bg-lime-100 border-2 border-lime-200 rounded-2xl p-4 text-center">
                    <span className="material-symbols-outlined text-lime-600 text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>park</span>
                    <p className="text-sm font-black text-slate-700">Explorar y crear</p>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <div data-aos="zoom-in" data-aos-delay="0" className="group relative bg-white p-4 rounded-[2rem] border-4 border-pink-200 shadow-[0_10px_0_0_rgba(244,114,182,0.16)] rotate-[-2deg] hover:rotate-0 hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-4 -right-3 bg-yellow-300 text-amber-800 text-xs font-black px-3 py-2 rounded-full border-2 border-yellow-400 shadow-sm">Diversión</div>
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img alt="Arte" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80" />
                  </div>
                  <p className="mt-4 text-slate-700 font-black text-lg">Arte con mucha imaginación</p>
                  <p className="text-sm text-slate-500 font-medium">Pinceles, risas y creatividad en cada detalle.</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="100" className="group relative bg-white p-4 rounded-[2rem] border-4 border-sky-200 shadow-[0_10px_0_0_rgba(56,189,248,0.16)] rotate-[2deg] hover:rotate-0 hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-4 -left-3 bg-sky-300 text-sky-900 text-xs font-black px-3 py-2 rounded-full border-2 border-sky-400 shadow-sm">Explorar</div>
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img alt="Descubriendo" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80" />
                  </div>
                  <p className="mt-4 text-slate-700 font-black text-lg">Descubriendo juntos</p>
                  <p className="text-sm text-slate-500 font-medium">Aprendizaje activo con curiosidad y asombro.</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="200" className="group relative bg-white p-4 rounded-[2rem] border-4 border-yellow-200 shadow-[0_10px_0_0_rgba(250,204,21,0.18)] rotate-[-1deg] hover:rotate-0 hover:-translate-y-2 transition-all duration-300 sm:col-span-2 xl:col-span-1">
                  <div className="absolute -top-4 right-4 bg-pink-300 text-pink-900 text-xs font-black px-3 py-2 rounded-full border-2 border-pink-400 shadow-sm">Sonrisas</div>
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img alt="Patio" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80" />
                  </div>
                  <p className="mt-4 text-slate-700 font-black text-lg">Aventuras al aire libre</p>
                  <p className="text-sm text-slate-500 font-medium">Movimiento, companerismo y energia positiva.</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="300" className="group relative bg-white p-4 rounded-[2rem] border-4 border-lime-200 shadow-[0_10px_0_0_rgba(132,204,22,0.18)] rotate-[1deg] hover:rotate-0 hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-4 left-4 bg-lime-300 text-lime-900 text-xs font-black px-3 py-2 rounded-full border-2 border-lime-400 shadow-sm">Lectura</div>
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img alt="Lectura" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80" />
                  </div>
                  <p className="mt-4 text-slate-700 font-black text-lg">Momentos de cuento</p>
                  <p className="text-sm text-slate-500 font-medium">Historias que despiertan la imaginacion y el lenguaje.</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="400" className="group relative bg-white p-4 rounded-[2rem] border-4 border-purple-200 shadow-[0_10px_0_0_rgba(196,181,253,0.2)] rotate-[-2deg] hover:rotate-0 hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-4 right-4 bg-purple-300 text-purple-900 text-xs font-black px-3 py-2 rounded-full border-2 border-purple-400 shadow-sm">Música</div>
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img alt="Musica" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80" />
                  </div>
                  <p className="mt-4 text-slate-700 font-black text-lg">Ritmo y alegria</p>
                  <p className="text-sm text-slate-500 font-medium">Experiencias sensoriales para disfrutar y expresarse.</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="500" className="group relative bg-white p-4 rounded-[2rem] border-4 border-orange-200 shadow-[0_10px_0_0_rgba(251,146,60,0.16)] rotate-[2deg] hover:rotate-0 hover:-translate-y-2 transition-all duration-300 sm:col-span-2 xl:col-span-1">
                  <div className="absolute -top-4 left-4 bg-orange-300 text-orange-900 text-xs font-black px-3 py-2 rounded-full border-2 border-orange-400 shadow-sm">Equipo</div>
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img alt="Equipo" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?auto=format&fit=crop&w=900&q=80" />
                  </div>
                  <p className="mt-4 text-slate-700 font-black text-lg">Aprender en compañía</p>
                  <p className="text-sm text-slate-500 font-medium">Amistad, confianza y trabajo en equipo desde pequeños.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-gradient-to-b from-white to-rose-50/60 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-aos="fade-up" className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full border-2 border-pink-200 font-black text-sm rotate-[-2deg]">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
                Voces de la comunidad
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 mt-6 mb-4">Testimonios que llenan el corazón</h2>
              <p className="max-w-2xl mx-auto text-slate-600 font-bold">
                Familias que viven la experiencia Hosanna y ven a sus pequeños crecer con alegría, fe y confianza.
              </p>
            </div>
            <div className="grid lg:grid-cols-[1.1fr_1.9fr] gap-8 items-start">
              <div data-aos="fade-right" className="bg-white rounded-[2rem] p-8 border-4 border-yellow-200 shadow-[0_10px_0_0_rgba(250,204,21,0.18)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-yellow-500 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>grade</span>
                  </div>
                  <div>
                    <p className="text-slate-800 font-black text-xl">Familias felices</p>
                    <p className="text-slate-500 font-bold text-sm">Reseñas llenas de amor</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-pink-50 border-2 border-pink-100 rounded-2xl p-4">
                    <p className="text-pink-600 font-black text-sm mb-1">Acompañamiento</p>
                    <p className="text-slate-600 font-medium">Cada niño se siente visto, amado y motivado desde el primer día.</p>
                  </div>
                  <div className="bg-sky-50 border-2 border-sky-100 rounded-2xl p-4">
                    <p className="text-sky-600 font-black text-sm mb-1">Aprendizaje feliz</p>
                    <p className="text-slate-600 font-medium">Las actividades convierten el aprendizaje en una aventura divertida.</p>
                  </div>
                  <div className="bg-lime-50 border-2 border-lime-100 rounded-2xl p-4">
                    <p className="text-lime-600 font-black text-sm mb-1">Valores</p>
                    <p className="text-slate-600 font-medium">La formacion con fe y ternura se nota en casa todos los dias.</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <article data-aos="fade-up" data-aos-delay="0" className="bg-white rounded-[2rem] p-7 border-4 border-pink-200 shadow-[0_10px_0_0_rgba(244,114,182,0.16)] hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed mb-6">
                    "Mi hija llega feliz todos los días. Ha aprendido a compartir, expresarse mejor y ahora ama ir al colegio."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 font-black flex items-center justify-center">LP</div>
                    <div>
                      <h3 className="font-black text-slate-800">Laura P.</h3>
                      <p className="text-sm font-bold text-slate-500">Mamá de Prekínder</p>
                    </div>
                  </div>
                </article>
                <article data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-[2rem] p-7 border-4 border-yellow-200 shadow-[0_10px_0_0_rgba(250,204,21,0.18)] hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed mb-6">
                    "Nos encanta el ambiente de amor y respeto. Los docentes acompañan con paciencia y mucha dedicación."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-100 text-amber-700 font-black flex items-center justify-center">CM</div>
                    <div>
                      <h3 className="font-black text-slate-800">Carlos M.</h3>
                      <p className="text-sm font-bold text-slate-500">Papá de Inicial</p>
                    </div>
                  </div>
                </article>
                <article data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-[2rem] p-7 border-4 border-sky-200 shadow-[0_10px_0_0_rgba(56,189,248,0.16)] hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed mb-6">
                    "Vemos avances en su seguridad, lenguaje y creatividad. Es un lugar donde aprenden jugando de verdad."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-700 font-black flex items-center justify-center">AR</div>
                    <div>
                      <h3 className="font-black text-slate-800">Ana R.</h3>
                      <p className="text-sm font-bold text-slate-500">Mamá de Kínder</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
};

export default LevelInicial;
