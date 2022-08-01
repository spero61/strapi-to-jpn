import Layout from "../components/Layout";
import Menus from "../components/Menus";
import { fetcher } from "../lib/api";
import useSWR from "swr";
import { useState } from "react";

const MenusList = ({ menus }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/menus?pagination[page]=${pageIndex}&pagination[pageSize]=10`,
    fetcher,
    {
      fallbackData: menus,
    }
  );
  return (
    <Layout>
      <h1 className="text 5xl md:text-6xl font-extrabold leading-tighter mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
          Menus List
        </span>
      </h1>
      <Menus menus={menus} />
      <div className="space-x-2 space-y-2">
        <button
          className={`md:p-2 rounded py-2 text-black text-white p-2 ${
            pageIndex === 1 ? "bg-gray-300" : "bg-blue-400"
          }`}
          disabled={pageIndex === 1}
          onClick={() => setPageIndex(pageIndex - 1)}
        >
          {" "}
          Previous
        </button>
        <button
          className={`md:p-2 rounded py-2 text-black text-white p-2 ${
            pageIndex === (data && data.meta.pagination.pageCount)
              ? "bg-gray-300"
              : "bg-blue-400"
          }`}
          disabled={pageIndex === (data && data.meta.pagination.pageCount)}
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          Next
        </button>
        <span>{`${pageIndex} of ${
          data && data.meta.pagination.pageCount
        }`}</span>
      </div>
    </Layout>
  );
};

export default MenusList;

// Static Site Generation (SSG)
export async function getStaticProps() {
  const menusResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/menus?pagination[page]=1&pagination[pageSize]=10`
  );
  console.log(menusResponse);
  return {
    props: {
      menus: menusResponse,
    },
  };
}
