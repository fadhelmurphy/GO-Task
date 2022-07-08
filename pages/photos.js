/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Pagination from "Components/pagination";

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
      <div className="layout-container">
            <button onClick={()=>setList(!list)}>
              View
            </button>
        {!data ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <div className="list">
              {data?.length > 0 &&
                data.map((item) => (
                  <>
                    <div className="card">
                      <img src={item?.download_url} />
                    </div>
                  </>
                ))}
            </div>
            <Pagination fetchPage={(val) => setPage(val)} curPage={page} />
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
          .list {
            display: grid;
            grid-template-columns: repeat(${list? "1" : "3"}, 1fr);
            grid-gap: 28px;
          }
          .card {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            height: 293px;
            position: relative;
          }
          .card img {
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
