import { useState } from "react";
import { useRouter } from "next/router";
import { useSignUpEmailPassword } from "@nhost/nextjs";
import Link from "next/link";
import Image from "next/image";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const {
    signUpEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignUpEmailPassword();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    await signUpEmailPassword(email, password, {
      displayName: `${firstName} ${lastName}`.trim(),
      metadata: {
        firstName,
        lastName,
      },
    });
  };

  if (isSuccess) {
    console.log("Done in");
    router.push("/");
    return null;
  }

  const disableForm = isLoading || needsEmailVerification;

  return (
    <div>
      <div>
        {needsEmailVerification ? (
          <p>
            Please check your mailbox and follow the verification link to verify
            your email.
          </p>
        ) : (
          <section class="bg-[#2AAA8A]">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
              <a
                href="#"
                class="flex items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white italic"
              >
                Tradify
              </a>
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create account
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#"  onSubmit={handleOnSubmit}>
                    <div>
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="jhon"
                        onChange={(e) => setFirstName(e.target.value)}
                        disabled={disableForm}
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Byard"
                        onChange={(e) => setLastName(e.target.value)}
                        disabled={disableForm}
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="name@gmail.com"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={disableForm}
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={disableForm}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      disabled={disableForm}
                    >
                      {isLoading ? "Loading" : "Create account"}
                    </button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?{" "}
                      <a
                        href="#"
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Login here
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
         {isError ? <p> {error?.message}</p> : null}
      </div>
    </div>
  );
};

export default SignUp;