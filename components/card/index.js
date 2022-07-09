import dynamic from "next/dynamic";
import React from "react";
const Button = dynamic(() => import("Components/button"), {
  ssr: false,
});
const Card = (item) => {
  return (
    <>
    <div className="card">
      <div className="image">
        <img alt={item?.author} src={item?.download_url} />
      </div>
      <span className="text">
        <p>{item?.author}</p>
        <a href={item?.download_url}>
          <Button>Download</Button>
        </a>
      </span>
    </div>
    <style jsx>
        {`
        
        .card {
            column-count: ${item.list ? `2` : `1`};
            ${item.list && `display: contents;`}
            position: relative;
          }
          .card div.image {
            position: relative;
            overflow: hidden;
            height: ${item.list ? `150px` : `293px`};
            width: ${item.list ? `150px` : `293px`};
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
export default Card;