import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <footer className="bg-sky-400 bg-opacity-10 p-10 py-10 mt-16" id="sobre">
        <div className="container mx-auto px-5 md:px-10">
          <h4 className="text-3xl font-bold text-sky-200 mb-5">
            Sobre a NK Informática
          </h4>
          <p className="text-justify text-gray-300 text-sm md:text-base">
            A NK Informática é uma Startup de desenvolvimento de sistemas web,
            mobile e desktop com sede em Pedro Afonso - TO, seu CEO é o Analista
            de Desenvolvimento de Sistemas (UNOPAR) Natanael Bezerra, com pouco
            mais de 3 anos atuando no mercado de desenvolvimento especificamente
            na região do estado do Tocantins, tem um portifólio de mais de 40
            projetos no{" "}
            <a
              href="https://github.com/nsbbezerra"
              target={"_blank"}
              rel="noreferrer"
              className="text-sky-200 hover:underline"
            >
              GitHub
            </a>{" "}
            .
          </p>
          <p className="text-justify text-gray-300 text-sm md:text-base">
            Buscamos sempre nos atualizar para empregarmos em nossos projetos as
            melhores tecnologias do mercado, presando sempre pela segurança,
            rapidez e eficiência dos sistemas desenvolvidos, veja alguns dos
            nossos principais projetos:
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-4">
            <Link href={"https://www.brazmultimidia.com.br/"} passHref>
              <a
                target={"_blank"}
                className="flex flex-col items-center justify-center w-full hover:scale-105 transition-all"
              >
                <div className="w-full rounded-md shadow-lg overflow-hidden">
                  <Image
                    src={"/img/braz.png"}
                    alt="Programador NK Informática"
                    width={100}
                    height={60}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <span className="block mt-2 text-sm">Braz Multimídia</span>
              </a>
            </Link>
            <Link href={"https://www.vchtrading.com/"} passHref>
              <a
                target={"_blank"}
                className="flex flex-col items-center justify-center w-full hover:scale-105 transition-all"
              >
                <div className="w-full rounded-md shadow-lg overflow-hidden">
                  <Image
                    src={"/img/vch.png"}
                    alt="Programador NK Informática"
                    width={100}
                    height={60}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <span className="block mt-2 text-sm">VCH Trading</span>
              </a>
            </Link>
            <Link href={"https://palmieriuniformes.com.br/"} passHref>
              <a
                target={"_blank"}
                className="flex flex-col items-center justify-center w-full hover:scale-105 transition-all"
              >
                <div className="w-full rounded-md shadow-lg overflow-hidden">
                  <Image
                    src={"/img/palmieri.png"}
                    alt="Programador NK Informática"
                    width={100}
                    height={60}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <span className="block mt-2 text-sm">Palmieri Uniformes</span>
              </a>
            </Link>
            <Link href={"https://santamariadotocantins.to.gov.br/"} passHref>
              <a
                target={"_blank"}
                className="flex flex-col items-center justify-center w-full hover:scale-105 transition-all"
              >
                <div className="w-full rounded-md shadow-lg overflow-hidden">
                  <Image
                    src={"/img/prefeitura.png"}
                    alt="Programador NK Informática"
                    width={100}
                    height={60}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <span className="block mt-2 text-sm">
                  Prefeitura de Santa Maria do Tocantins
                </span>
              </a>
            </Link>
          </div>

          <div className="pt-5 -mb-5 text-center flex flex-col items-center justify-center border-t mt-10 border-t-black gap-3 sm:flex-row">
            <div className="w-12">
              <Image
                src={"/img/logo.svg"}
                alt="Programador NK Informática"
                width={100}
                height={80}
                layout="responsive"
              />
            </div>
            <span className="text-sky-200 text-sm md:text-base">
              © 2022 NK Informática - Todos os direitos reservados
            </span>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
