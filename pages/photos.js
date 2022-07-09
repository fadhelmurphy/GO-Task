/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
const Button = dynamic(() => import("Components/button"), {
  ssr: false,
});
const Pagination = dynamic(() => import("Components/pagination"), {
  ssr: false,
});
const Card = dynamic(() => import("Components/card"), {
  ssr: false,
});

const photos = ({ query }) => {
  const router = useRouter();
  const [data, setData] = useState(false);
  const [page, setPage] = useState(parseInt(query));
  const [list, setList] = useState(false);

  const handleFetching = async ({ page = 1 }) => {
    try {
      setData(false);
      const res = await fetch(`/api/photos?page=${page}&limit=10`);
      const data = await res.json();
      setData(data);
      router.push(`photos?page=${page}`, undefined, { shallow: true });
    } catch (error) {
      setData([]);
    }
  };

  useEffect(() => {
    handleFetching({ page });
  }, [page]);

  return (
    <>
      <Head>
        <title>Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="layout-container">
        <h1>Images container</h1>
        <div className="button-control">
          <div className="left-button">
            {/* Flexible grid */}
            <Button margin="2px" active={!list} onClick={() => setList(false)}>
              <AppstoreOutlined />
            </Button>
            {/* Column list */}
            <Button
              margin="0 20px 0 0"
              active={list}
              onClick={() => setList(true)}
            >
              <BarsOutlined />
            </Button>
            <Pagination fetchPage={(val) => setPage(val)} curPage={page} />
          </div>
          <div className="right-button">
            <Link href="/">
              <Button active>Prev Task</Button>
            </Link>
            <Link href="/number">
              <Button active>Next Task</Button>
            </Link>
          </div>
        </div>
        {!data ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <div className="list">
              {data?.length > 0 &&
                data.map((item, idx) => (
                  <>
                    <Card key={String(idx)} {...item} list={list} />
                  </>
                ))}
            </div>
          </>
        )}
      </div>
      <style jsx="true">
        {`
          .layout-container h1 {
            font-weight: 400;
            font-size: 3rem;
            text-align: center;
          }
          .layout-container .button-control {
            display: flex;
            justify-content: space-between;
          }
          .layout-container .button-control div{
            display: flex;
          }
          .list {
            display: grid;
            grid-template-columns: repeat(${list ? `4` : `2`}, 1fr);
            grid-gap: 14px;
          }
          /* Medium devices (landscape tablets, 768px and up) */
          @media only screen and (min-width: 768px) {
            .list {
              grid-template-columns: repeat(${list ? `4` : `3`}, 1fr);
              grid-gap: 28px;
            }
          }
        `}
      </style>
    </>
  );
};

export async function getServerSideProps(context) {
  const {
    query: { page },
  } = context;
  return {
    props: { query: page || 1 }, // will be passed to the page component as props
  };
}

export default photos;
