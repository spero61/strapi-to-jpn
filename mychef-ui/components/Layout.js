import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>MyChef menu database</title>
    </Head>
    <Navbar />
    <main className="px-4">
      <div className="flex justify-center items-center bg-stone-50 mx-auto w-3/5 rounded-lg my-16 p-16">
        <div className="text-2xl font-medium">{children}</div>
      </div>
    </main>
  </>
);

export default Layout;
