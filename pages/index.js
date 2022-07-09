import ParentRect from "Components/parent-rect";
import Head from "next/head";
import React from "react";

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
    </div>
    </>
  );
}
