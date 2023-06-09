import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import React from "react";
import Image from "next/image";
import { useGithubApi } from "@/hooks/useGihubApi";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(true);
  const { data, loading } = useGithubApi()

  return !loading && (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content="Website's Douglas Matos da Silva" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_io/favicon-32x32.png" />
      </Head>
      <main className="w-full h-full bg-white dark:bg-gray-900 px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">
              <Link href="/">{data.login}</Link>
            </h1>
            <ul className="flex items-center">
              <li
                title={`Change theme to ${darkMode ? "light mode" : "dark mode"
                  }`}
              >
                {darkMode ? (
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl text-yellow-500"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                )}
              </li>
            </ul>
          </nav>
          <div className="text-center py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
            {data.name.split(' ').filter((_, index) => index == 0 || index === 3).join(' ')}
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              {data.bio}
            </h3>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <Link
              href="https://www.linkedin.com/in/devdouglasmatos/"
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>
            <Link href={`https://twitter.com/${data.twitter_username}`} target="_blank">
              <AiFillTwitterCircle />
            </Link>
            <Link href={`https://github.com/${data.login}`} target="_blank">
              <AiFillGithub />
            </Link>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image
              loader={() => data.avatar_url}
              alt="avatar"
              src={data.avatar_url}
              width={384}
              height={384}
            />
          </div>
        </section>
        {/* <section className="w-full mx-auto">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">I work with</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Software Development, front-web, back-end. Get in touch and let's
              talk.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 mx-auto">
              <Image
                className="mx-auto"
                alt="Software Developement"
                src={dev}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Software Developement
              </h3>
              <p className="py-2">
                Creation of systems from scratch, maintenance of legacy systems
                focused on Web Development.
              </p>
              <h4 className="py-4 text-teal-600">Some technologies</h4>
              <p className="text-gray-800 py-1">JavaScript (EcmaScript)</p>
              <p className="text-gray-800 py-1">nodeJS</p>
              <p className="text-gray-800 py-1">Typescript</p>
              <p className="text-gray-800 py-1">ReactJS</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">Maven</p>
              <p className="text-gray-800 py-1">HTML 5</p>
              <p className="text-gray-800 py-1">CSS 3, SASS, Less</p>
              <p className="text-gray-800 py-1">
                Styled-Components, TailwindCSS
              </p>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">E muito mais!</p>
            </div>
          </div>
        </section> */}
        <section className="w-[50rem] mx-auto py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Under construction - coming soon
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap jus">
            <div className="basis-1/3 flex-1 ">
              {/* <Image
                title="under construction - comming soon"
                alt="under construction"
                className="rounded-lg object-cover max-w-[60%]  mx-auto -mt-[200px]"
                src={underConstruction}
              /> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
