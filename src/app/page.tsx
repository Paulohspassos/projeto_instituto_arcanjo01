"use client";
import { useState } from "react"; // Importamos o "gancho" de estado
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  // Criamos uma "caixinha" para guardar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  // Função que roda toda vez que o usuário digita algo
  const handleChange = (e: any) => {
    setFormData({
      ...formData, // Mantém o que já tinha
      [e.target.name]: e.target.value // Atualiza apenas o campo que mudou
    });
  };

  // Função que roda ao clicar no botão Enviar
  const handleSubmit = (e: any) => {
    e.preventDefault(); // Impede a página de recarregar
    console.log("Dados enviados:", formData);
    alert(`Obrigado, ${formData.nome}! Sua mensagem foi enviada (simulação).`);
    
    // Limpa o formulário após enviar
    setFormData({ nome: "", email: "", mensagem: "" });
  };
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      {/* Faixa de Destaque no Topo */}
      <div className="h-2 bg-[#AA0000] w-full" />

      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        
        {/* LOGO DO INSTITUTO */}
        <div className="mb-8 p-2 bg-white shadow-2xl rounded-full border-4 border-[#C10303] overflow-hidden flex items-center justify-center">
          <Image 
            src="/logo-instituto.png" 
            alt="Logo do Instituto" 
            width={220} // Ajuste o tamanho aqui se ficar muito grande
            height={220} 
            priority // Carrega a logo com prioridade máxima
            className="object-contain"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          INSTITUTO <span className="text-[#AA0000]">JUDÔ</span> & ARTES
        </h1>

        <p className="text-xl text-gray-700 max-w-2xl mb-10 leading-relaxed">
          Transformando vidas através do esporte e da educação. 
          Um projeto dedicado à inclusão social e ao desenvolvimento humano.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-[#AA0000] hover:bg-[#C10303] text-white px-10 py-4 rounded-md font-bold transition-all shadow-lg active:scale-95">
            Conheça Nossos Projetos
          </button>
          <button className="border-2 border-black text-black hover:bg-black hover:text-white px-10 py-4 rounded-md font-bold transition-all active:scale-95">
            Seja um Voluntário
          </button>
        </div>
      </section>

      {/* Seção de Valores com Fundo Preto */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="group">
            <div className="w-12 h-1 bg-[#C10303] mx-auto mb-6 group-hover:w-24 transition-all"></div>
            <h3 className="text-[#C10303] text-2xl font-bold mb-4">Disciplina</h3>
            <p className="text-gray-400 leading-relaxed">O judô como base para o foco, respeito mútuo e autoconfiança dos nossos jovens.</p>
          </div>
          <div className="group">
            <div className="w-12 h-1 bg-[#C10303] mx-auto mb-6 group-hover:w-24 transition-all"></div>
            <h3 className="text-[#C10303] text-2xl font-bold mb-4">Arte</h3>
            <p className="text-gray-400 leading-relaxed">Expressão criativa e atividades pedagógicas que estimulam o pensamento crítico.</p>
          </div>
          <div className="group">
            <div className="w-12 h-1 bg-[#C10303] mx-auto mb-6 group-hover:w-24 transition-all"></div>
            <h3 className="text-[#C10303] text-2xl font-bold mb-4">Comunidade</h3>
            <p className="text-gray-400 leading-relaxed">Fortalecimento de vínculos e apoio direto a famílias em situação de risco.</p>
          </div>
        </div>
      </section>
      {/* Seção de Contato */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Coluna 1: Informações (Preta) */}
            <div className="bg-black text-white p-12 md:w-2/5 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Fale Conosco</h2>
                <p className="text-gray-400 mb-8">
                  Tem alguma dúvida sobre as aulas de judô ou quer ser um parceiro do nosso instituto? 
                  Mande uma mensagem!
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-sm">
                  <span className="text-[#C10303]">📍</span> Rua do Exemplo, 123 - Cidade/UF
                </p>
                <p className="flex items-center gap-3 text-sm">
                  <span className="text-[#C10303]">📞</span> (00) 99999-9999
                </p>
              </div>
            </div>

            {/* Coluna 2: Formulário (Branca) */}
            <div className="p-12 md:w-3/5">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                    <input 
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      type="text" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AA0000] outline-none" 
                      placeholder="Seu nome" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AA0000] outline-none" 
                      placeholder="seu@email.com" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea 
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={4} 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AA0000] outline-none" 
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-[#AA0000] hover:bg-[#C10303] text-white font-bold py-3 rounded-md transition-all shadow-lg active:scale-95">
                  Enviar Mensagem
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}