import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineHome,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import ReactInputMask from "react-input-mask";

export default function Register() {
  return (
    <Fragment>
      <section className="w-screen h-screen">
        <div className="flex flex-col items-center justify-center text-3xl bg-gradient-to-t from-purple-900 to-transparent h-36 relative">
          <div className="w-32">
            <Image
              src={"/img/logo.svg"}
              alt="Programador NK Informática"
              width={100}
              height={80}
              layout="responsive"
            />
          </div>
          <Link passHref href={"/"}>
            <a className="flex absolute top-5 left-5 items-center gap-3 px-3 h-11 border border-sky-400 active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 rounded-md cursor-pointer hover:bg-sky-400 select-none font-medium mb-5 w-fit mt-2 text-base">
              <AiOutlineHome />
              <span>Início</span>
            </a>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-start row-span-3 container mx-auto px-5 md:px-10 lg:px-20 py-10 overflow-auto max-h-full">
          <div className="flex items-end gap-3 flex-col sm:flex-row">
            <div>
              <label>Insira seu CPF</label>
              <ReactInputMask
                mask={"999.999.999-99"}
                type="text"
                name="company-website"
                id="company-website"
                className="flex-1 block w-full rounded-md sm:text-sm px-4 h-12 bg-transparent border-sky-200 border outline-none focus:ring-sky-100 focus:border-sky-200 focus:ring-2"
                placeholder="CPF"
              />
            </div>

            <button className="flex items-center justify-center gap-3 px-5 h-12 bg-gradient-to-r from-sky-500 to-purple-400 active:ring-2 active:ring-sky-200 focus:ring-2 focus:ring-sky-200 rounded-md cursor-pointer hover:opacity-90 select-none font-medium sm:w-fit text-xl w-full">
              <AiOutlineSearch />
              <span>Buscar</span>
            </button>
          </div>

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
                    Natanael dos Santos Bezerra
                  </dd>
                </div>
                <div className="bg-transparent px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Turma</dt>
                  <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                    Manhã
                  </dd>
                </div>
                <div className="bg-sky-400 bg-opacity-5 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Horário da Aula
                  </dt>
                  <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
                    Às 18:00h
                  </dd>
                </div>
                <div className="bg-transparent px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Status da Inscrição
                  </dt>
                  <dd className="mt-1 text-sm text-green-500 font-bold sm:mt-0 sm:col-span-2">
                    Inscrito
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
