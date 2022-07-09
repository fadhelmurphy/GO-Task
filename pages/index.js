import ParentRect from "Components/parent-rect";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import React from "react";
const Button = dynamic(
	() => import("Components/button"),
	{
		ssr: false,
	},
);

export default function Colors() {
  return (
    <>
    <Head>
      <title>Color Picker</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="layout-container" style={{maxWidth: "80vw"}}>
        <h1>Simple Color Picker</h1>
      {Array.from({ length: 8 }, (_, idx) => (
        <ParentRect idx={idx} />
      ))}
      <Link href="/photos">
        <Button active>Next Task</Button>
      </Link>
    </div>
    </>
  );
}
