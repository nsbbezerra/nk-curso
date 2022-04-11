import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../components/header";
import * as Tabs from "@radix-ui/react-tabs";
import { AiOutlineBook } from "react-icons/ai";

const Home: NextPage = () => {
  const [selected, setSelected] = useState<string>("html");

  useEffect(() => {
    const target = document.querySelectorAll("[data-anime]");
    const animationClass = "animate-scroll";

    function animeScroll() {
      const windowTop = window.pageYOffset + (window.innerHeight * 3) / 5;
      target.forEach((el) => {
        if (windowTop > el.getBoundingClientRect().top) {
          el.classList.add(animationClass);
        } else {
          el.classList.remove(animationClass);
        }
      });
    }

    window.addEventListener("scroll", () => {
      setTimeout(() => {
        animeScroll();
      }, 200);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>NK Informática | Desenvolvendo o Mundo com você!</title>
        <meta
          name="description"
          content="Curso de desenvolvimento de sites e softwares"
        />
        <link rel="icon" href="/img/logo.svg" />
      </Head>

      <Header />

      <section id="objetivos" className="w-full mt-16">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="flex items-center justify-center flex-col gap-3">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-sky-200 font-extrabold">
              Objetivos do Curso
            </h1>
            <div className="bg-gradient-to-r from-blue-900 to-sky-600 h-1 w-52" />
            <span className="text-center text-sm">
              Veja o que aprenderemos com o decorrer do curso
            </span>
          </div>

          <div className="w-full mt-10" data-anime="left">
            <div className="rounded-md shadow-lg bg-sky-400 bg-opacity-10">
              <div className="grid grid-cols-3 border-b border-b-black">
                <div className="flex flex-col justify-center items-center gap-2 p-3">
                  <div className="w-7 md:w-16">
                    <Image
                      src={"/img/html.svg"}
                      alt="Programador NK Informática"
                      width={100}
                      height={80}
                      layout="responsive"
                    />
                  </div>
                  <span className="font-bold">HTML</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 p-3 border-l border-l-black border-r border-r-black">
                  <div className="w-7 md:w-16">
                    <Image
                      src={"/img/css.svg"}
                      alt="Programador NK Informática"
                      width={100}
                      height={80}
                      layout="responsive"
                    />
                  </div>
                  <span className="font-bold">CSS</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 p-3">
                  <div className="w-7 md:w-16">
                    <Image
                      src={"/img/javascript.svg"}
                      alt="Programador NK Informática"
                      width={100}
                      height={80}
                      layout="responsive"
                    />
                  </div>
                  <span className="font-bold">JavaScript</span>
                </div>
              </div>

              <div className="py-5 px-10">
                <ul className="list-inside list-disc text-gray-300">
                  <li>Aprenderemos como funciona a estrutura de um site</li>
                  <li>
                    Aprenderemos a estruturar a página de um site utilizando a
                    linguagem de marcação HTML5
                  </li>
                  <li>
                    Aprenderemos a utilizar os conceitos básicos do HTML5, como
                    sintaxe e semântica
                  </li>
                  <li>
                    Aprenderemos a escrever e identificar as Tags do HTML5 para
                    preparar a página do site para ser ranqueada e indexada
                    pelos motores de busca, como Google, Bing, Yahoo e etc...
                  </li>
                  <li>
                    Aprenderemos a capturar dados através dos formulários do
                    HTML5
                  </li>
                  <li>
                    Aprenderemos a estilizar a nossa página HTML5 com a
                    linguagem de estilos CSS3, aprenderemos como utilizar fontes
                    personalizadas, cores, cores de fundo, sombras,
                    posicionamentos de elementos na página, alinhamento,
                    controle de animações e muito mais...
                  </li>
                  <li>
                    Aprenderemos a utilizar do CSS3 as melhores tecnologias para
                    construção de layouts personalizados utilizando como por
                    exemplo: Flexbox, Grid, Box-layout
                  </li>
                  <li>
                    Aprenderemos a controlar todos os elementos da página
                    utilizando a linguagem de programação JavaScript, utilizando
                    dela os escutadores de eventos (event-listener), as capturas
                    de dados dos inputs, cliques em botões, dando asas à uma
                    gama de possibilidades para deixarmos o nosso site o mais
                    profissional
                  </li>
                </ul>

                <span className="text-3xl mt-5 block font-bold text-sky-200">
                  + Bônus
                </span>
                <span>
                  Aprenderemos a criar 5 site completos, veja abaixo os sites
                  que replicaremos no nosso curso:
                </span>

                <div className="grid grid-cols-5 mt-3 gap-5">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-full rounded-md overflow-hidden shadow-md">
                      <Image
                        src={"/img/instagram.png"}
                        alt="Programador NK Informática"
                        width={1360}
                        height={680}
                        layout="responsive"
                      />
                    </div>
                    <span>Instagram</span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-full rounded-md overflow-hidden shadow-md">
                      <Image
                        src={"/img/twitter.png"}
                        alt="Programador NK Informática"
                        width={1360}
                        height={680}
                        layout="responsive"
                      />
                    </div>
                    <span>Twitter</span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-full rounded-md overflow-hidden shadow-md">
                      <Image
                        src={"/img/i435003.png"}
                        alt="Programador NK Informática"
                        width={1360}
                        height={680}
                        layout="responsive"
                      />
                    </div>
                    <span>Spotify</span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-full rounded-md overflow-hidden shadow-md">
                      <Image
                        src={"/img/facebook.jpg"}
                        alt="Programador NK Informática"
                        width={1360}
                        height={680}
                        layout="responsive"
                      />
                    </div>
                    <span>Facebook</span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-full rounded-md overflow-hidden shadow-md">
                      <Image
                        src={"/img/youtube.png"}
                        alt="Programador NK Informática"
                        width={1360}
                        height={680}
                        layout="responsive"
                      />
                    </div>
                    <span>Youtube</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
