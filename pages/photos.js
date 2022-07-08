/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Pagination from "Components/pagination";
import { AppstoreOutlined,BarsOutlined } from "@ant-design/icons";
import Button from "Components/button";
import Head from "next/head";

const photos = ({ query }) => {
  const router = useRouter();
  const [data, setData] = useState(false);
  const [page, setPage] = useState(parseInt(query));
  const [list, setList] = useState(false);

  const handleFetching = async ({ page = 1 }) => {
    try {
      setData(false);
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
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
        {/* Flexible grid */}
        <Button margin="2px" active={!list} onClick={() => setList(false)}><AppstoreOutlined /></Button>
        {/* Column list */}
        <Button margin="0 20px 0 0" active={list} onClick={() => setList(true)}><BarsOutlined /></Button>
        <Pagination fetchPage={(val) => setPage(val)} curPage={page} />
        {!data ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <div className="list">
              {data?.length > 0 &&
                data.map((item) => (
                  <>
                    <div className="card">
                      <div className="image">
                        <img src={item?.download_url} />
                      </div>
                      <span className="text">
                        <p>{item?.author}</p>
                        <a href={item?.download_url}>
                        <Button>Download</Button>
                        </a>
                      </span>
                    </div>
                  </>
                ))}
            </div>
          </>
        )}
      </div>
      <style jsx>
        {`
          .layout-container {
            flex-grow: 1;
            margin: 0 auto 30px;
            max-width: 935px;
          }
          .layout-container h1 {
            font-weight: 400;
            font-size: 3rem;
            text-align: center;
          }
          .list {
            display: grid;
            grid-template-columns: repeat(${list ? `4` : `3`}, 1fr);
            grid-gap: 28px;
          }
          .card {
            column-count: ${list ? `2` : `1`};
            ${list && `display: contents;`}
            position: relative;
          }
          .card div.image {
            position: relative;
            overflow: hidden;
            height: ${list ? `150px` : `293px`};
            width: ${list ? `150px` : `293px`};
            position: relative;
          }
          .card span.text {
            align-self: center;
          }
          .card div img {
            position: absolute;
            inset: 0px;
            box-sizing: border-box;
            padding: 0px;
            border: none;
            margin: auto;
            display: block;
            width: 0px;
            height: 0px;
            min-width: 100%;
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
            object-fit: cover;
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
