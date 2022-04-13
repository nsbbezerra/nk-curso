import { FormHandles, SubmitHandler } from "@unform/core";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import {
  AiOutlineDollar,
  AiOutlineHome,
  AiOutlineSearch,
} from "react-icons/ai";
import InpuMask from "../components/inputMask";
import * as Yup from "yup";
import { Form } from "@unform/web";
import axios from "axios";

interface ISubscribe {
  _id: string;
  name: string;
  cpf: string;
  phone: string;
  email?: string;
  sala: string;
  obs?: string;
  status: "wait" | "confirmed" | "refused";
}

interface FormProps {
  cpf: string;
}

export default function Register() {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [subscribe, setSubscribe] = useState<ISubscribe>();

  const findSubscribe: SubmitHandler<FormProps> = async (data) => {
    try {
      const schema = Yup.object().shape({
        cpf: Yup.string().required("Insira seu CPF"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setLoading(true);

      const response = await axios.post("/api/findSubscribe", data);

      setSubscribe(response.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          alert(err.message);
        });
      }
      if (axios.isAxiosError(error) && error.message) {
        alert(error.response?.data.message);
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
      <section className="w-screen h-screen overflow-x-hidden">
        <div className="flex flex-col items-center justify-center text-3xl bg-sky-400 bg-opacity-10 h-36 relative">
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

        <div className="flex flex-col items-center justify-start row-span-3 container mx-auto px-5 md:px-10 lg:px-20 py-10">
          <Form ref={formRef} onSubmit={findSubscribe}>
            <div className="flex items-end gap-3 flex-col sm:flex-row">
              <div>
                <label>Insira seu CPF</label>
                <InpuMask
                  mask={"999.999.999-99"}
                  name="cpf"
                  className="flex-1 block w-full rounded-md sm:text-sm px-4 h-12 bg-transparent border-sky-200 border outline-none focus:ring-sky-100 focus:border-sky-200 focus:ring-2"
                  placeholder="CPF"
                />
              </div>

              <button
                className={`flex items-center justify-center gap-3 px-5 h-12 bg-gradient-to-r from-sky-500 to-purple-400 active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 rounded-md cursor-pointer hover:opacity-90 select-none font-medium sm:w-fit w-full ${
                  loading &&
                  "opacity-40 cursor-not-allowed hover:opacity-40 active:ring-0"
                }`}
                type="submit"
                disabled={loading}
              >
                <AiOutlineSearch />
                <span>{loading === true ? "Buscando..." : "Buscar"}</span>
              </button>
            </div>
          </Form>

          <div className="bg-sky-400 bg-opacity-10 shadow-lg rounded-md mt-10 w-full">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-sky-200">
                Informações da sua Inscrição
              </h3>
            </div>
            <div className="border-t border-black">
              <dl>
                <div className="bg-sky-400 bg-opacity-5 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Nome</dt>
                  <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                    {subscribe?.name}
                  </dd>
                </div>
                <div className="bg-transparent px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Telefone
                  </dt>
                  <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                    {subscribe?.phone}
                  </dd>
                </div>
                <div className="bg-sky-400 bg-opacity-5 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Turma</dt>
                  <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                    {subscribe?.sala}
                  </dd>
                </div>
                <div className="bg-transparent px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Status da Inscrição
                  </dt>
                  <dd
                    className={`mt-1 text-sm ${
                      (subscribe?.status === "confirmed" && "text-green-500") ||
                      (subscribe?.status === "wait" && "text-yellow-500") ||
                      (subscribe?.status === "refused" && "text-red-600")
                    }  font-bold sm:mt-0 sm:col-span-2`}
                  >
                    {(subscribe?.status === "confirmed" && "Confirmado") ||
                      (subscribe?.status === "wait" &&
                        "Aguardando Pagamento") ||
                      (subscribe?.status === "refused" &&
                        "Houve um problema com seu pagamento")}

                    {subscribe?.status !== "confirmed" && subscribe?.status ? (
                      <button
                        className={`h-10 flex items-center justify-center gap-3 bg-gradient-to-r from-green-400 to-green-600 px-4 font-semibold rounded-md shadow-lg active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 select-none hover:opacity-90 cursor-pointer mt-2 text-gray-900 ${
                          loading &&
                          "opacity-40 cursor-not-allowed hover:opacity-40 active:ring-0"
                        }`}
                        disabled={loading}
                        onClick={() => {}}
                      >
                        <AiOutlineDollar />
                        <span>
                          {loading === true
                            ? "Processando o pagamento..."
                            : "Tentar pagar novamente"}
                        </span>
                      </button>
                    ) : (
                      ""
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <Link passHref href={"/"}>
            <a className="flex items-center gap-3 px-3 h-11 min-h-[2.75rem] border border-sky-400 active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 rounded-md cursor-pointer hover:bg-sky-400 select-none font-medium mb-5 w-fit text-base mt-10">
              <AiOutlineHome />
              <span>Ir ao Início</span>
            </a>
          </Link>
        </div>
      </section>
    </Fragment>
  );
}
