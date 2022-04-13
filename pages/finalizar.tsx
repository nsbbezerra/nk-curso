import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineDollar,
  AiOutlineHome,
  AiOutlineWarning,
} from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";

export default function Finish() {
  const { query, push } = useRouter();
  const { status, external_reference } = query;
  const [loading, setLoading] = useState<boolean>(false);

  const tryPayAgain = async () => {
    try {
      setLoading(true);

      const response = await axios.post("/api/payAgain", {
        id: external_reference,
      });
      push(response.data.url);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error) && error.message) {
        alert(error.response?.data.message);
      } else {
        let message = (error as Error).message;
        alert(message);
      }
    }
  };

  return (
    <Fragment>
      <Head>
        <title>NK Informática | Desenvolvendo o Mundo com você!</title>
        <meta
          name="description"
          content="Curso de desenvolvimento de sites e softwares"
        />
        <link rel="icon" href="/img/logo.svg" />
      </Head>
      <section className="grid grid-rows-4">
        <div className="flex flex-col items-center justify-center text-3xl bg-sky-400 bg-opacity-10 row-span-1">
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

        <div className="flex flex-col items-center justify-center row-span-3 container mx-auto px-5 md:px-10 lg:px-20 py-10">
          {(status === "approved" && (
            <AiOutlineCheckCircle className="text-green-500 text-7xl" />
          )) ||
            (status === "pending" && (
              <AiOutlineWarning className="text-yellow-500 text-7xl" />
            )) ||
            (status === "rejected" && (
              <AiOutlineClose className="text-red-600 text-7xl" />
            ))}
          <span
            className={`block mt-3 text-xl font-semibold ${
              (status === "approved" && "text-green-500") ||
              (status === "pending" && "text-yellow-500") ||
              (status === "rejected" && "text-red-600")
            } text-center md:text-2xl`}
          >
            {(status === "approved" && "INSCRIÇÃO CONFIRMADA!") ||
              (status === "pending" && "AGUARDANDO PAGAMENTO") ||
              (status === "rejected" && "PAGAMENTO REJEITADO")}
          </span>
          {status === "approved" && (
            <span className="block text-center mt-3 text-green-100 text-sm md:text-base">
              Agora entre na nossa comunidade no{" "}
              <span className="text-purple-200 font-bold">Discord</span> ou no{" "}
              <span className="text-cyan-500 font-bold">Telegram</span> para
              ficar por dentro das novidades, dos horários das aulas e das
              turmas. Aproveite para ir tirando as dúvidas com o Professor
              Natanael Bezerra sobre todas as atividades do curso.
            </span>
          )}
          {status === "pending" && (
            <span className="block text-center mt-3 text-yellow-100 text-sm md:text-base">
              Após o seu pagamento o sistema identificará automaticamente o
              processo, clique na{" "}
              <Link href={"/"} passHref>
                <a className="text-sky-200 font-bold hover:underline">
                  Página Inicial
                </a>
              </Link>{" "}
              no botão <strong>MINHA INSCRIÇÃO</strong> para ver o status da
              inscrição. Aproveite e entre na nossa comunidade no{" "}
              <span className="text-purple-200 font-bold">Discord</span> ou no{" "}
              <span className="text-cyan-500 font-bold">Telegram</span> para
              ficar por dentro das novidades, dos horários das aulas e das
              turmas. Aproveite para ir tirando as dúvidas com o Professor
              Natanael Bezerra sobre todas as atividades do curso.
            </span>
          )}
          {status === "rejected" && (
            <span className="block text-center mt-3 text-red-100 text-sm md:text-base">
              Ops! Seu pagamento por algum motivo foi rejeitado, clique o botão
              abaixo para tentar pagar novamente ou vá até a{" "}
              <Link href={"/"} passHref>
                <a className="text-sky-200 font-bold hover:underline">
                  Página Inicial
                </a>
              </Link>{" "}
              clique no botão <strong>MINHA INSCRIÇÃO</strong> para ver o status
              da inscrição lá terá um botão para efetuar o pagamento também.
              Qualquer dúvida entre na nossa comunidade no{" "}
              <span className="text-purple-200 font-bold">Discord</span> ou no{" "}
              <span className="text-cyan-500 font-bold">Telegram</span> para
              ficar por dentro das novidades, tirar dúvidas ou receber uma ajuda
              para concluir sua inscrição.
            </span>
          )}

          {status === "rejected" && (
            <button
              className={`h-12 flex items-center justify-center gap-3 bg-gradient-to-r from-green-400 to-green-600 px-4 font-semibold rounded-md shadow-lg active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 select-none hover:opacity-90 cursor-pointer mt-2 text-gray-900 ${
                loading &&
                "opacity-40 cursor-not-allowed hover:opacity-40 active:ring-0"
              }`}
              disabled={loading}
              onClick={() => tryPayAgain()}
            >
              <AiOutlineDollar />
              <span>
                {loading === true
                  ? "Processando o pagamento..."
                  : "Tentar pagar novamente"}
              </span>
            </button>
          )}

          <div className="grid grid-cols-1 gap-5 mt-7 lg:grid-cols-2 lg:gap-10 lg:mt-12">
            <Link href={"https://discord.gg/XzuaUFZJ"} passHref>
              <a
                className="h-12 flex items-center justify-center gap-3 bg-gradient-to-r from-purple-400 to-purple-500 px-4 font-semibold rounded-md shadow-lg active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 select-none hover:opacity-90 cursor-pointer"
                target={"_blank"}
              >
                <FaDiscord />
                <span>Entrar na comunidade no Discord</span>
              </a>
            </Link>
            <a className="h-12 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-400 to-blue-500 px-4 font-semibold rounded-md shadow-lg active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 select-none hover:opacity-90 cursor-pointer">
              <FaTelegramPlane />
              <span>Entrar na comunidade no Telegram</span>
            </a>
          </div>

          <Link passHref href={"/"}>
            <a className="flex items-center gap-3 px-3 h-11 border border-sky-400 active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 rounded-md cursor-pointer hover:bg-sky-400 select-none font-medium mb-5 w-fit mt-10">
              <AiOutlineHome />
              <span>Voltar ao Início</span>
            </a>
          </Link>
        </div>
      </section>
    </Fragment>
  );
}
