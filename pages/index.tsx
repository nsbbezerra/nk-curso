import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../components/header";
import { BsMegaphoneFill } from "react-icons/bs";
import {
  AiOutlineCalendar,
  AiOutlineDollar,
  AiOutlineSave,
  AiOutlineSend,
} from "react-icons/ai";
import ReactInputMask from "react-input-mask";
import * as Select from "@radix-ui/react-select";
import Footer from "../components/footer";

const Home: NextPage = () => {
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

      <section className="w-full mt-16">
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
                <ul className="list-inside list-disc text-gray-300 text-sm sm:text-base">
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
                <span className="text-sm sm:text-base">
                  Aprenderemos a criar 5 site completos, veja abaixo os sites
                  que replicaremos no nosso curso:
                </span>

                <div
                  className="grid grid-cols-2 mt-3 gap-5 md:grid-cols-3 xl:grid-cols-5"
                  id="valor"
                >
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
                    <span className="text-sm sm:text-base">Instagram</span>
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
                    <span className="text-sm sm:text-base">Twitter</span>
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
                    <span className="text-sm sm:text-base">Spotify</span>
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
                    <span className="text-sm sm:text-base">Facebook</span>
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
                    <span className="text-sm sm:text-base">Youtube</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex items-center justify-center mt-16 px-10"
        data-anime="left"
      >
        <div className="rounded-md bg-sky-400 bg-opacity-10 p-5 shadow-lg flex gap-5 items-center justify-items-center">
          <AiOutlineDollar className="text-6xl text-sky-200" />
          <div className="flex flex-col gap-2">
            <span className="text-xl text-gray-300">Valor do Curso</span>
            <span className="text-5xl text-sky-200 font-bold">R$ 100,00</span>
          </div>
        </div>
      </section>

      <section className="mt-16 w-full relative">
        <div className=" bg-sky-400 bg-opacity-10 h-full w-full">
          <div className="container mx-auto px-10 text-center py-14 w-full">
            <div className="flex flex-col items-center justify-center gap-3 h-fll">
              <div className="flex items-center justify-center flex-col gap-3">
                <h1 className="text-center text-4xl  text-sky-50 font-extrabold">
                  APROVEITE ESTA OPORTUNIDADE!
                </h1>
                <div className="bg-gradient-to-r from-blue-900 to-sky-600 h-1 w-52" />
                <span className="text-center">
                  O Mercado de Desenvolvimento no mundo tem um grande déficit de
                  profissionais qualificados, a cada ano abre-se um grande
                  número de vagas, porém, grande parte das vagas não são
                  preenchidas por não ter profissionais disponíveis no mercado,
                  profissionalize-se, garanta já a sua vaga!
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col animate-bounce gap-2 mt-10">
              <div className="flex items-center justify-center gap-3 text-center text-4xl font-extrabold">
                <BsMegaphoneFill className="text-sky-400" />
                <span className="bg-clip-text bg-gradient-to-br from-sky-400 to-yellow-400 text-transparent">
                  INSCRIÇÕES ABERTAS
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 text-center text-4xl font-extrabold">
                <span className="bg-clip-text bg-gradient-to-br from-red-400 to-red-700 text-transparent">
                  Vagas Limitadas
                </span>
              </div>
            </div>

            <div
              className="flex justify-center items-center mt-3 gap-2 text-xl sm:text-2xl text-yellow-400 font-bold"
              id="inscricao"
            >
              <AiOutlineCalendar />
              <span>Inscrições até 15/05/2022</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 w-full">
        <div className="container mx-auto px-10 flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center flex-col gap-3">
              <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-sky-200 font-extrabold">
                Faça sua Inscrição Aqui
              </h1>
              <div className="bg-gradient-to-r from-blue-900 to-sky-600 h-1 w-52" />
            </div>
          </div>
          <div className="mt-10">
            <label>
              Nome Completo <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="company-website"
              id="company-website"
              className="flex-1 block w-full rounded-md sm:text-sm px-4 py-3 bg-transparent border-sky-200 border outline-none focus:ring-sky-100 focus:border-sky-200 focus:ring-2"
              placeholder="Nome Completo"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label>
                CPF <span className="text-red-400">*</span>
              </label>
              <ReactInputMask
                mask={"999.999.999-99"}
                type="text"
                name="company-website"
                id="company-website"
                className="flex-1 block w-full rounded-md sm:text-sm px-4 py-3 bg-transparent border-sky-200 border outline-none focus:ring-sky-100 focus:border-sky-200 focus:ring-2"
                placeholder="CPF"
              />
            </div>
            <div>
              <label>
                Whatsapp <span className="text-red-400">*</span>
              </label>
              <ReactInputMask
                mask={"(99) 99999-9999"}
                type="text"
                name="company-website"
                id="company-website"
                className="flex-1 block w-full rounded-md sm:text-sm px-4 py-3 bg-transparent border-sky-200 border outline-none focus:ring-sky-100 focus:border-sky-200 focus:ring-2"
                placeholder="Whatsapp"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="flex-1 block w-full rounded-md sm:text-sm px-4 py-3 bg-transparent border-sky-200 border outline-none focus:ring-sky-100 focus:border-sky-200 focus:ring-2"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <label>
                Escolha um período para realizar o curso{" "}
                <span className="text-red-400">*</span>
              </label>
              <input
                name="company-website"
                id="company-website"
                className="flex-1 block w-full rounded-md sm:text-sm px-4 py-3 bg-transparent border-sky-200 border outline-none focus:ring-sky-100 focus:border-sky-200 focus:ring-2"
                placeholder="Manhã, tarde ou noite"
              />
            </div>
            <div>
              <label>Deixe uma observação</label>
              <input
                name="company-website"
                id="company-website"
                className="flex-1 block w-full rounded-md sm:text-sm px-4 py-3 bg-transparent border-sky-200 border outline-none focus:ring-sky-100 focus:border-sky-200 focus:ring-2"
                placeholder="Deixe uma observação"
              />
            </div>
          </div>

          <div className="flex gap-3 items-center flex-col md:flex-row">
            <button className="flex items-center justify-center gap-3 px-10 py-3 bg-gradient-to-r from-sky-500 to-purple-400 active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 rounded-md cursor-pointer hover:opacity-90 select-none font-medium mb-5 md:w-fit mt-2 text-xl w-full">
              <AiOutlineSend />
              <span>Garantir minha vaga</span>
            </button>
            <div className="flex flex-col -mt-2">
              <span className="text-sm">Você irá pagar</span>
              <span className="text-sky-200 font-bold text-lg">R$ 100,00</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
