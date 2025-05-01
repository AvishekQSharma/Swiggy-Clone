import React from "react";
import Hearder from "../Components/Header/Hearder";
import Catogory from "../Components/Catogory";
import CardItems from "../Components/Card/CardItems";
import OnlineDelivery from "../Components/OnlineDelivery/OnlineDelivery";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hearder />
      <Catogory />
      <CardItems />
      <OnlineDelivery />
      <Footer />
    </>
  );
};

export default Home;
