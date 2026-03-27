"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });

  const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Obrigado, ${formData.nome}! Entraremos em contato.`);
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-black font-sans selection:bg-[#AA0000] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION MODERNA --- */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Elementos Decorativos de Fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#AA0000] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-black rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#AA0000] uppercase bg-red-50 rounded-full border border-red-100">
            Instituto Arcanjo • Transformação Social
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-center mb-8 tracking-tighter leading-[0.9]">
            MAIS QUE <span className="text-[#AA0000]">JUDÔ</span>,<br />
            UM NOVO <span className="italic font-serif text-gray-400">DESTINO.</span>
          </h1>

          <p className="text-xl text-gray-500 text-center max-w-2xl mb-12 leading-relaxed">
            Unindo a disciplina milenar do tatame com a sensibilidade das artes para resgatar o potencial de cada jovem.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#AA0000] transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95">
              Conheça o Projeto
            </button>
            <button className="bg-white text-black border border-gray-200 px-10 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-sm">
              Fale Conosco
            </button>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID (Diferencial Moderno) --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            
            {/* Bloco 1: Vídeo/Foto Destaque */}
            <div className="md:col-span-2 md:row-span-2 bg-gray-100 rounded-[2rem] overflow-hidden relative group">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
               <div className="absolute bottom-8 left-8 z-20 text-white">
                  <span className="bg-[#AA0000] px-3 py-1 rounded-lg text-xs font-bold uppercase mb-2 inline-block">Judô & Disciplina</span>
                  <h3 className="text-3xl font-bold">Respeito e Foco no Tatame</h3>
               </div>
               <div className="w-full h-full bg-gray-300 animate-pulse">
                  {/* Espaço para Foto de Ação */}
               </div>
            </div>

            {/* Bloco 2: Artes */}
            <div className="md:col-span-2 bg-[#AA0000] rounded-[2rem] p-8 text-white flex flex-col justify-end relative overflow-hidden">
               <div className="absolute top-[-20%] right-[-10%] text-[10rem] font-black opacity-10 italic uppercase tracking-tighter">Art</div>
               <h3 className="text-2xl font-bold mb-2">Atividades Artísticas</h3>
               <p className="text-white/80">Despertando a criatividade e a sensibilidade pedagógica.</p>
            </div>

            {/* Bloco 3: Pequeno Stats */}
            <div className="bg-black rounded-[2rem] p-8 text-white flex flex-col justify-center items-center text-center">
               <span className="text-4xl font-black text-[#AA0000]">+200</span>
               <p className="text-xs uppercase font-bold tracking-widest text-gray-500">Jovens Atendidos</p>
            </div>

            {/* Bloco 4: Localização */}
            <div className="bg-gray-100 rounded-[2rem] p-8 flex flex-col justify-center relative group cursor-pointer hover:bg-gray-200 transition-colors">
               <p className="text-sm font-bold text-gray-400 mb-1 italic uppercase tracking-widest">Local</p>
               <h3 className="text-xl font-bold">Nossa Sede em Sobral</h3>
               <div className="mt-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                 <span className="text-[#AA0000]">→</span>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONTATO GLASSMORPHISM --- */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="bg-white/70 backdrop-blur-md border border-white p-12 rounded-[3rem] shadow-2xl relative">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase">Vamos <span className="text-[#AA0000]">Conversar?</span></h2>
                <p className="text-gray-500">Ajude-nos a transformar mais vidas.</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome completo" className="w-full bg-gray-50 border-none p-5 rounded-2xl focus:ring-2 focus:ring-[#AA0000] outline-none" required />
                  <input name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" className="w-full bg-gray-50 border-none p-5 rounded-2xl focus:ring-2 focus:ring-[#AA0000] outline-none" required />
                </div>
                <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} placeholder="Sua mensagem..." rows={4} className="w-full bg-gray-50 border-none p-5 rounded-2xl focus:ring-2 focus:ring-[#AA0000] outline-none" required></textarea>
                <button type="submit" className="w-full bg-[#AA0000] text-white font-black py-5 rounded-2xl hover:bg-black transition-all shadow-lg active:scale-95 uppercase tracking-widest text-sm">
                  Enviar Mensagem Agora
                </button>
              </form>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}