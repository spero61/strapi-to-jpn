import { fetcher } from "../../lib/api";
import Layout from "../../components/Layout";

const Menu = ({ menu }) => {
  return (
    <Layout>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
          {menu.attributes.Name}
        </span>
        <p className="text-xl text-slate-700 mt-5">
          {menu.attributes.Description}
        </p>
      </h1>
    </Layout>
  );
};


export async function getServerSideProps({ req, params }) {
  const { slug } = params;
  const menuResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/menus/${slug}`);
  return {
      props: {
        menu: menuResponse.data,
      },
    };
}

export default Menu;
