import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Header from "../components/header";

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

      <section id="conteudo" className="w-full mt-16">
        <div className="container mx-auto px-10 md:px-0 lg:px-20">
          <div className="flex items-center justify-center flex-col gap-3">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-sky-200 font-extrabold">
              Conteúdo do Curso
            </h1>
            <div className="bg-gradient-to-r from-blue-900 to-sky-600 h-1 w-52" />
            <span className="text-center text-sm">
              Veja o que aprenderemos com o decorrer do curso
            </span>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12"
            data-anime="left"
          >
            <div className="bg-sky-500 bg-opacity-10 rounded-md shadow-lg h-fit hover:scale-105 transition-transform">
              <div className="flex flex-col items-center justify-center p-3 border-b border-b-black">
                <div className="w-20">
                  <Image
                    src={"/img/html.svg"}
                    alt="HTML Logotipo"
                    width={218}
                    height={250}
                    layout="responsive"
                  />
                </div>
                <h2 className="text-center font-extrabold text-sky-200 mt-2">
                  HTML
                </h2>
              </div>

              <div className="p-3">
                <ul className="list-disc ml-10">
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                </ul>
              </div>
            </div>

            <div className="bg-sky-500 bg-opacity-10 rounded-md shadow-lg h-fit hover:scale-105 transition-transform">
              <div className="flex flex-col items-center justify-center p-3 border-b border-b-black">
                <div className="w-20">
                  <Image
                    src={"/img/css.svg"}
                    alt="HTML Logotipo"
                    width={218}
                    height={250}
                    layout="responsive"
                  />
                </div>
                <h2 className="text-center font-extrabold text-sky-200 mt-2">
                  CSS
                </h2>
              </div>

              <div className="p-3">
                <ul className="list-disc ml-10">
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                </ul>
              </div>
            </div>

            <div className="bg-sky-500 bg-opacity-10 rounded-md shadow-lg h-fit hover:scale-105 transition-transform">
              <div className="flex flex-col items-center justify-center p-3 border-b border-b-black">
                <div className="w-20">
                  <Image
                    src={"/img/javascript.svg"}
                    alt="HTML Logotipo"
                    width={218}
                    height={250}
                    layout="responsive"
                  />
                </div>
                <h2 className="text-center font-extrabold text-sky-200 mt-2">
                  JavaScript
                </h2>
              </div>

              <div className="p-3">
                <ul className="list-disc ml-10">
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
