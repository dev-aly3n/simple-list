import Head from "next/head";
import { Fragment } from "react";
import ListPage from "../components/listPage/ListPage";

export default function list(): JSX.Element {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* {careerMeta.preload.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))} */}
        <title>محصولات فرخی</title>
        <meta name="description" content={"جنسای بنجول ، آهن پاره و غیره"} />
        {/* <meta name="keywords" content={careerMeta.keywords} />
        <meta name="author" content={careerMeta.author} /> */}
      </Head>
        <ListPage />
    </Fragment>
  );
}
