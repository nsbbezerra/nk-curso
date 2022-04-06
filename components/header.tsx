import Image from "next/image";
import { useState } from "react";
import {
  AiOutlineBook,
  AiOutlineDollar,
  AiOutlineForm,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const MenuItems = () => (
    <div className="flex flex-col gap-3 lg:gap-8 lg:items-center lg:flex-row border-t border-t-gray-800 w-full lg:w-fit pt-2 lg:pt-0 md:mb-5 lg:mb-0">
      <a className="h-10 lg:h-16 flex items-center gap-3 border-b-2 border-transparent hover:border-b-sky-300 -mb-1 cursor-pointer select-none font-medium text-gray-300">
        <AiOutlineHome />
        <span>Início</span>
      </a>
      <a className="h-10 lg:h-16 flex items-center gap-3 border-b-2 border-transparent hover:border-b-sky-300 -mb-1 cursor-pointer select-none font-medium text-gray-300">
        <AiOutlineBook />
        <span>Conteúdo</span>
      </a>
      <a className="h-10 lg:h-16 flex items-center gap-3 border-b-2 border-transparent hover:border-b-sky-300 -mb-1 cursor-pointer select-none font-medium text-gray-300">
        <AiOutlineDollar />
        <span>Preço</span>
      </a>
      <a className="h-10 lg:h-16 flex items-center gap-3 border-b-2 border-transparent hover:border-b-sky-300 -mb-1 cursor-pointer select-none font-medium text-gray-300">
        <AiOutlineInfoCircle />
        <span>Sobre Nós</span>
      </a>
      <a className="h-10 lg:h-16 flex items-center gap-3 border-b-2 border-transparent hover:border-b-sky-300 -mb-1 cursor-pointer select-none font-medium text-gray-300">
        <AiOutlinePhone />
        <span>Fale Conosco</span>
      </a>
      <a className="flex md:hidden items-center gap-3 px-3 h-11 border border-sky-400 active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 rounded-md cursor-pointer hover:bg-sky-400 select-none font-medium mb-5 w-fit mt-2">
        <AiOutlineUser />
        <span>Minha Inscrição</span>
      </a>
    </div>
  );

  return (
    <header className="w-full bg-gradient-to-t from-purple-900 to-transparent">
      <div className="border-b border-b-gray-800 bg-black bg-opacity-80 backdrop-blur-sm fixed left-0 right-0 top-0 z-50 shadow-lg">
        <nav className="container mx-auto px-10 flex justify-between items-center h-full">
          <div className="h-16 w-20">
            <Image
              src={"/img/logo.svg"}
              alt="Programador NK Informática"
              width={100}
              height={80}
              layout="responsive"
            />
          </div>

          <div className="hidden lg:block">
            <MenuItems />
          </div>

          <div className="flex gap-3 items-center">
            <a className="hidden md:flex items-center gap-3 px-3 h-11 border border-sky-400 active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 rounded-md cursor-pointer hover:bg-sky-400 select-none font-medium">
              <AiOutlineUser />
              <span>Minha Inscrição</span>
            </a>

            <button
              className="flex items-center gap-3 px-2 h-11 w-11 justify-center border border-sky-400 active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 rounded-md cursor-pointer hover:bg-sky-400 select-none font-medium text-xl lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <AiOutlineMenu />
            </button>
          </div>
        </nav>
        {open ? (
          <div className="container mx-auto px-10 flex justify-between items-center h-full">
            <MenuItems />
          </div>
        ) : (
          ""
        )}
      </div>
      <section className="container mx-auto px-10 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-10 items-center">
          <div className="md:col-span-1 relative">
            <Image
              src={"/img/programer.svg"}
              alt="Programador NK Informática"
              width={512}
              height={512}
              layout="responsive"
            />
          </div>
          <div className="md:col-span-2 h-full flex flex-col justify-center items-center gap-5">
            <h1 className="text-center text-3xl md:text-3xl lg:text-4xl font-extrabold xl:text-5xl text-sky-200">
              Dê asas à sua imaginação, aprenda a criar e desenvolver sistemas e
              websites de forma prática e simplificada.
            </h1>
            <span className="text-center w-10/12 lg:text-base text-xs">
              Aprenda a desenvolver com as tecnologias mais usadas pelas grandes
              empresas, entre neste universo junto conosco.
            </span>
            <a className="flex items-center gap-3 px-5 h-12 bg-sky-500 active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 rounded-md cursor-pointer hover:bg-sky-400 select-none font-medium text-xl">
              <AiOutlineForm />
              <span>Quero me Inscrever</span>
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}
