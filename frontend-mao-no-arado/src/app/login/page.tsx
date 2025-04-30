"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the login logic
    console.log("Login attempt with:", email, password);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <Link href="/">
              <Image
                src="/img/logotipo.svg"
                alt="Mão no Arado Logo"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">Bem-vindo de volta</h1>
            <p className="text-gray-600 mt-2">Entre na sua conta para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Lembrar-me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                  Esqueceu a senha?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Entrar
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou continue com</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <FaGoogle className="text-red-500 text-xl" />
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <FaFacebook className="text-blue-600 text-xl" />
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <FaLinkedin className="text-blue-700 text-xl" />
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            Não tem uma conta?{" "}
            <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Registre-se
            </Link>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:block md:w-1/2 bg-blue-600">
        <div className="h-full w-full relative">
          <Image
            src="/img/criancas.jpg"
            alt="Crianças da ONG Mão no Arado"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-30 flex flex-col justify-center items-center text-white p-12">
            <h2 className="text-4xl font-bold mb-4 text-center">Faça a diferença na vida de quem precisa</h2>
            <p className="text-xl text-center">
              Junte-se a nós na missão de transformar vidas através da educação, cuidado e amor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}