import numToWords from "Functions/numToWords";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
const Button = dynamic(
	() => import("Components/button"),
	{
		ssr: false,
	},
);
const Input = dynamic(
	() => import("Components/input"),
	{
		ssr: false,
	},
);

export default function Home() {
  const [input, setInput] = useState({
    number: 0,
    result: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const result = numToWords(input.number);
    setInput((prev) => ({ ...prev, result }));
  };

  return (
    <>
      <Head>
        <title>Number to word</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="layout-container">
        <h1 className="judul">Convert number to words</h1>
        <form onSubmit={onSubmit}>
          <Input
            label="Input number to word"
            placeholder="Mohon diisi angka"
            onChange={(value) =>
              setInput((prev) => ({ ...prev, number: value }))
            }
          />
          <Button active type="submit">
            Submit
          </Button>
        </form>
        <h1>{input.result}</h1>
        <Link href="/photos">
          <Button active>Prev Task</Button>
        </Link>
      </div>
      <style jsx="true">
        {`
          .layout-container {
            flex-grow: 1;
            margin: 0 auto 30px;
            max-width: 935px;
          }
          .layout-container h1 {
            font-weight: 400;
          }
        `}
      </style>
    </>
  );
}
