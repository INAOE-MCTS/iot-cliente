import React from "react";
import { Formik } from "formik";
import Image from "next/image";
import { decrypt_AES_CBC, encrypt_AES_CBC, session_key } from "@/Context/Cipher_simetric";

import Axios from '../services/axios'

export default function Home() {
  const plaintext = "Hola mundo";
  const session_key = "INGa13wNM00T7vkCbZ9U9A==";
  const ciphertext =
    "H4CJH5qOwyjYxQu3wtCAWBHLXVWeo8xtG+VO6fSL8RORm86GTXAgLVv9v8oSHHuY";
  const iv = "i1eeOiE53Hovfs/a8gHOiA==";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/Logotipo_de_la_CONACYT.png"
            alt="Logo CONACYT"
            width={120}
            height={37}
            priority
          />
        </div>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Internet de las Cosas 3 -&nbsp;
          <code className="font-mono font-bold">Cliente web</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/inaoe.png"
            alt="Logo INAOE"
            width={120}
            height={37}
            priority
          />
        </div>
      </div>

      <div className="relative flex place-items-center flex-col before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Formik
          initialValues={{ email: "", password: "" }}

          validate={(values) => {
            const errors = {};

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 6) {
              errors.password = "Password must be at least 6 characters";
            }

            return errors;
          }}
          onSubmit={async(values, { setSubmitting }) => {

              const data = {
                email: values.email,
                password: values.password,
                public_key: null,
                session_key: session_key,
              }
              console.log(data)

              // const ciphertext = encrypt_RSA(data, Public_key_server)
              // console.log(ciphertext)
              const ciphertext = encrypt_AES_CBC("HOLA MUNDO", session_key)
              console.log(ciphertext)
              const plaintext = decrypt_AES_CBC(ciphertext.ciphertext, ciphertext.iv, session_key)
              console.log(plaintext)

              const response = await Axios.post(`auth/login/`, ciphertext);
              console.log(response)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className="relative flex place-items-center flex-col before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]" onSubmit={handleSubmit}>
              <label className="" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="relative z-10 w-full max-w-2xl p-4 m-4 text-center text-2xl font-semibold text-gray-900 transition-colors bg-white border border-gray-300 rounded-lg shadow-sm appearance-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 dark:focus:ring-offset-gray-800"
              />
              <label className="" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="relative z-10 w-full max-w-2xl p-4 m-4 text-center text-2xl font-semibold text-gray-900 transition-colors bg-white border border-gray-300 rounded-lg shadow-sm appearance-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 dark:focus:ring-offset-gray-800"
              />
              <button
                type="submit" 
                disabled={isSubmitting}
                className="relative z-10 w-full max-w-2xl p-4 m-4 text-center text-2xl font-semibold text-gray-900 transition-colors bg-white border border-gray-300 rounded-lg shadow-sm appearance-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 dark:focus:ring-offset-gray-800"
              >
                Ingresar
              </button>
            </form>
          )}
        </Formik>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://github.com/INAOE-MCTS"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Conoce mas{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Revisa el proyecto de seguridad implementado.
          </p>
        </a>
      </div>
    </main>
  );
}
