import Head from "next/head";
import MagnifyingGlass from "../components/MagnifyingGlass";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-2">
      <Head>
        <title>Magnifying Glass Effect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl text-center">Scroll to Zoom</h1>
        <MagnifyingGlass />
      </main>
    </div>
  );
};

export default Home;
