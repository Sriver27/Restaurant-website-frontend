import React, { useEffect, useState } from "react";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Laurels,
  SpecialMenu,
} from "./container";
import Reviews from "./container/Reviews/reviews";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  console.log("inside App");
  const [resData, setResData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      console.log("inside fetchData");
      try {
        const response = await fetch("http://localhost:3000/restaurant");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("initial --->", data);
        setResData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
    console.log("inside useEffect");
  }, []);

  if (!resData) {
    // Render a loading state or spinner while waiting for data
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar resName={resData?.name} />
      <Header initiatives={resData?.sustainability?.initiatives} />
      <AboutUs desc={resData?.ambiance?.description} />
      <SpecialMenu menu={resData?.menu} />
      <Chef
        chefname={resData?.chef?.name}
        chefBio={resData?.chef?.bio}
        signatureDish={resData?.chef?.signature_dish}
      />
      {/* <Intro /> */}
      <Laurels awards={resData?.awards} />
      <Reviews reviewsCollection={resData?.reviews} />
      <Gallery />
      <FindUs addr={resData?.location?.address} />
      <Footer
        addr={resData?.location?.address}
        resName={resData?.name}
        latitude={resData?.location?.latitude}
        longitude={resData?.location?.longitude}
        socials={resData?.online_presence?.social_media}
      />
    </>
  );
};

export default App;
