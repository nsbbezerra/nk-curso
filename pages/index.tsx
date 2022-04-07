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

      <section id="conteudo" className="w-full mt-16">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="flex items-center justify-center flex-col gap-3">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-sky-200 font-extrabold">
              Conteúdo do Curso
            </h1>
            <div className="bg-gradient-to-r from-blue-900 to-sky-600 h-1 w-52" />
            <span className="text-center text-sm">
              Veja o que aprenderemos com o decorrer do curso
            </span>
          </div>

          <div className="w-full mt-10" data-anime="left">
            <Tabs.Root
              orientation="horizontal"
              onValueChange={(tab) => setSelected(tab)}
              value={selected}
              className="shadow-lg rounded-md overflow-hidden"
            >
              <Tabs.List
                aria-label="tabs do conteúdo do curso"
                className="grid grid-cols-3 border-b border-b-black w-full"
              >
                <Tabs.Trigger
                  value="html"
                  className={`flex items-center flex-col md:flex-row justify-center gap-1 md:gap-3 h-14 px-4 font-semibold md:text-xl text-sm ${
                    selected === "html"
                      ? "bg-sky-400 bg-opacity-40"
                      : "bg-sky-400 bg-opacity-10"
                  } rounded-tl-md`}
                >
                  <div className="w-7 md:w-10">
                    <Image
                      src={"/img/html.svg"}
                      alt="Programador NK Informática"
                      width={100}
                      height={80}
                      layout="responsive"
                    />
                  </div>
                  <span>HTML</span>
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="css"
                  className={`flex items-center gap-1 flex-col md:flex-row md:gap-3 h-14 px-4 justify-center font-semibold md:text-xl text-sm ${
                    selected === "css"
                      ? "bg-sky-400 bg-opacity-40"
                      : "bg-sky-400 bg-opacity-10"
                  } border-l border-r border-l-black border-r-black`}
                >
                  <div className="w-7 md:w-10">
                    <Image
                      src={"/img/css.svg"}
                      alt="Programador NK Informática"
                      width={100}
                      height={80}
                      layout="responsive"
                    />
                  </div>
                  <span>CSS</span>
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="javascript"
                  className={`flex items-center flex-col md:flex-row gap-1 md:gap-3 h-14 px-4 justify-center font-semibold md:text-xl text-sm ${
                    selected === "javascript"
                      ? "bg-sky-400 bg-opacity-40"
                      : "bg-sky-400 bg-opacity-10"
                  } rounded-tr-md`}
                >
                  <div className="w-7 md:w-10">
                    <Image
                      src={"/img/javascript.svg"}
                      alt="Programador NK Informática"
                      width={100}
                      height={80}
                      layout="responsive"
                    />
                  </div>
                  <span>JavaScript</span>
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content
                value="html"
                className="bg-sky-400 rounded-b-md bg-opacity-10 p-5"
              >
                <ul className="list-disc list-inside md:text-lg text-sm text-gray-400">
                  <li>
                    Introdução ao HTML - Exibir informações na Web, Sintaxe
                  </li>
                  <li>
                    Estrutura do HTML - Conheceremos as TAGS, como utilizá-las e
                    a aplicação de cada uma
                  </li>
                  <li>
                    Listas em HTML - Aprenderemos como mostrar informações em
                    listas
                  </li>
                  <li>
                    Tabelas em HTML - Exibiremos informações utilizando tabelas,
                    aprenderemos a utilizar cada TAG das tabelas
                  </li>
                  <li>
                    Formulários - Criaremos formulários para captura de dados de
                    usuários, utilizando as mais diversas formas de inputs
                  </li>
                  <li>
                    Semântica do HTML - Organizaremos nosso site através das
                    TAGs semânticas com o intuito de organizarmos o nosso
                    conteúdo facilitando assim a indexação nos motores de busca
                  </li>
                  <li>Introdução ao SEO e Indexação utilizando HTML</li>
                </ul>
              </Tabs.Content>
              <Tabs.Content
                value="css"
                className="bg-sky-400 rounded-b-md bg-opacity-10 p-5"
              >
                <ul className="list-disc list-inside md:text-lg text-gray-400 text-sm">
                  <li>
                    Introdução ao CSS - Aprenderemos como fazer link do CSS ao
                    HTML do nosso site
                  </li>
                  <li>Sintaxe do CSS</li>
                  <li>Trabalhando com Backgrounds, fontes, cores</li>
                  <li>Box model, a fase inicial do CSS</li>
                  <li>
                    Trabalhando com Espaçamentos - Padding, margin, border
                  </li>
                  <li>Trabalhando com a propriedade Display</li>
                  <li>Trabalhando com Flexbox</li>
                  <li>Trabalhando com Grid</li>
                  <li>
                    Trabalhando com Responsividade utilizando Media Queries
                  </li>
                  <li>Trabalhando com Efeitos - Animações, Sombras e etc...</li>
                </ul>
              </Tabs.Content>
              <Tabs.Content
                value="javascript"
                className="bg-sky-400 rounded-b-md bg-opacity-10 p-5"
              >
                <ul className="list-disc list-inside md:text-lg text-gray-400 text-sm">
                  <li>
                    Introdução ao JavaScript - A linguagem de programação que
                    manipula os elementos da nossa página
                  </li>
                  <li>Declaração de variáveis - VAR, LET, CONST</li>
                  <li>Tipos de variáveis - Boolean, String, Number</li>
                  <li>Introdução à Listas - Objetos e Arrays</li>
                  <li>
                    Declaração de funções, e como utilizá-las para controlar
                    nossa interface
                  </li>
                  <li>Introdução aos Loops - For, ForEach, While, Map</li>
                  <li>Trabalhando com condicionais - IF e ELSE</li>
                  <li>Trabalhando com manipulação de interface (DOM)</li>
                  <li>
                    Utilizando eventos de capturas de ações para manipular
                    objetos
                  </li>
                </ul>
              </Tabs.Content>
            </Tabs.Root>
          </div>

          <div data-anime="left" className="mt-7 flex flex-col">
            <span className="text-sky-200 font-extrabold text-3xl md:text-4xl">
              + Bônus
            </span>
            <span className="text-gray-400">
              Criaremos 5 sites totalmente do 0.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
