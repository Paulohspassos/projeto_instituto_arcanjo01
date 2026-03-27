import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Lado Esquerdo: Logo e Nome */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo-instituto.png" 
            alt="Logo" 
            width={50} 
            height={50} 
          />
          <span className="font-bold text-lg hidden sm:block">
            INSTITUTO <span className="text-[#AA0000]">JUDÔ</span>
          </span>
        </Link>

        {/* Centro: Links de Navegação */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <Link href="#sobre" className="hover:text-[#AA0000] transition-colors">Sobre Nós</Link>
          <Link href="#projetos" className="hover:text-[#AA0000] transition-colors">Projetos</Link>
          <Link href="#contato" className="hover:text-[#AA0000] transition-colors">Contato</Link>
        </div>

        {/* Lado Direito: Botão de Ação */}
        <button className="bg-[#AA0000] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#C10303] transition-all">
          Doe Agora
        </button>

      </div>
    </nav>
  );
}