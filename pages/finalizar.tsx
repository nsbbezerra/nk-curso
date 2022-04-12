import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { AiOutlineCheckCircle, AiOutlineHome } from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";

export default function Finish() {
  return (
    <Fragment>
      <section className="w-screen h-screen grid grid-rows-4 overflow-hidden">
        <Link passHref href={"/"}>
          <a className="flex fixed top-5 left-5 items-center gap-3 px-3 h-11 border border-sky-400 active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 rounded-md cursor-pointer hover:bg-sky-400 select-none font-medium mb-5 w-fit mt-2">
            <AiOutlineHome />
            <span>Início</span>
          </a>
        </Link>
        <div className="flex flex-col items-center justify-center text-3xl bg-gradient-to-t from-purple-900 to-transparent row-span-1">
          <div className="w-32">
            <Image
              src={"/img/logo.svg"}
              alt="Programador NK Informática"
              width={100}
              height={80}
              layout="responsive"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center row-span-3 container mx-auto px-5 md:px-10 lg:px-20">
          <AiOutlineCheckCircle className="text-7xl text-green-500" />
          <span className="block mt-3 text-xl font-semibold text-green-200 text-center md:text-2xl">
            INSCRIÇÃO CONFIRMADA!
          </span>
          <span className="block text-center mt-3 text-gray-400 text-sm md:text-base">
            Agora entre na nossa comunidade no{" "}
            <span className="text-purple-200 font-bold">Discord</span> ou no{" "}
            <span className="text-cyan-500 font-bold">Telegram</span> para ficar
            por dentro das novidades, dos horários das aulas e das turmas.
            Aproveite para ir tirando as dúvidas com o Professor Natanael
            Bezerra sobre todas as atividades do curso.
          </span>

          <div className="grid grid-cols-1 gap-5 mt-7 lg:grid-cols-2 lg:gap-10 lg:mt-12">
            <a className="h-12 flex items-center justify-center gap-3 bg-gradient-to-r from-purple-400 to-purple-500 px-4 font-semibold rounded-md shadow-lg active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 select-none hover:opacity-90 cursor-pointer">
              <FaDiscord />
              <span>Entrar na comunidade no Discord</span>
            </a>
            <a className="h-12 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-400 to-blue-500 px-4 font-semibold rounded-md shadow-lg active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 select-none hover:opacity-90 cursor-pointer">
              <FaTelegramPlane />
              <span>Entrar na comunidade no Telegram</span>
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
