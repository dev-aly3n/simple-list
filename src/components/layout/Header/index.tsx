import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, {
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import Head from "next/head";

interface Links {
  ref: string;
  text: string;
  handler?: MouseEventHandler<HTMLLIElement> | undefined;
}

const Header: React.FC = () => {
  const router = useRouter();
  const headerLinks: Links[] = [
  ];

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap"
          rel="stylesheet"
        />
      </Head>
      <motion.div
        className="header-container"
      >
        <h1>
          <Link href="/">Farokhi production</Link>
        </h1>
        <ul>
          {headerLinks.map((headLink) => {
            return (
              <li key={headLink.text} onClick={headLink.handler}>
                <Link href={headLink.ref}>
                  <a
                    className={`${
                      router.pathname === headLink.ref
                        ? "bg-gray-100 text-gray-900"
                        : "text-white"
                    }`}
                  >
                    {headLink.text}
                  </a>
                </Link>
              </li>
            );
          })}
          <li className="text-white" >
            <a onClick={(e) => e.preventDefault()}>ToTheGate</a>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Header;
