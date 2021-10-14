import Head from "next/head";
import Banner from "./components/banner/Banner";
import LargeCard from "./components/cards/LargeCard";
import MediumCard from "./components/cards/MediumCard";
import SmallCard from "./components/cards/SmallCard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function Home({ smallCards, mediumCards }) {
  return (
    <div className="r">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Header />
   
      <Banner />

      <main className="max-w-8xl mx-auto px-8 sm:px-16">
        {/* Small Cards Section */}
        <section className="pt-5 mt-3 max-w-7xl">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>

          {/* Pull data from a server - API endpoints */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {smallCards?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        {/* Medium Cards Section */}
        <section className="pt-5 mt-10 max-w-7xl">
          <h2 className="text-4xl font-semibold pb-5">Live anywhere</h2>
          <div className="flex justify-between space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3"> 

            {mediumCards?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        {/* Large Card Section */}
        <section className="pt-5 mt-10 max-w-7xl">
          <LargeCard
          img='https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=720'
          title='Try hosting'
          description='Earn extra income and unlock new opportunities by sharing your space.'
          buttonText='Learn more'
          />
        </section>
      </main>


      <footer className="grid bg-gray-100 p-5 items-center">
              <Footer />
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const smallCards = await fetch("https://jsonkeeper.com/b/8E3H").then((res) =>
    res.json()
  );

  const mediumCards = await fetch("https://jsonkeeper.com/b/L7I4").then((res) =>
    res.json()
  );

  return {
    props: {
      smallCards,
      mediumCards,
    },
  };
}
