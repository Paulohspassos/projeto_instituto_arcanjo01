export default function Footer() {
  const year = new Date().getFullYear(); // Pega o ano atual automaticamente

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Coluna 1: Sobre */}
          <div>
            <h4 className="font-bold text-xl mb-6">Instituto <span className="text-[#AA0000]">Judô</span></h4>
            <p className="text-gray-500 leading-relaxed">
              Transformando a realidade de jovens através do esporte, da arte e da educação desde [Ano de Fundação].
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navegação</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#sobre" className="hover:text-[#AA0000] transition">Sobre o Instituto</a></li>
              <li><a href="#projetos" className="hover:text-[#AA0000] transition">Nossos Projetos</a></li>
              <li><a href="#contato" className="hover:text-[#AA0000] transition">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-500">
              <li>📍 Endereço do Instituto, Cidade - UF</li>
              <li>✉️ email@exemplo.com</li>
              <li>📞 (00) 00000-0000</li>
            </ul>
          </div>
        </div>

        {/* Linha Final */}
        <div className="border-t border-gray-100 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {year} Instituto de Judô e Artes. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs uppercase tracking-widest">Desenvolvido por você</p>
        </div>
      </div>
    </footer>
  );
}