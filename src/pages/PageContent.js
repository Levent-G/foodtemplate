import React from "react";
import PopulerRecipePage from "./PopulerRecipePage";
import CategoryFoodPage from "./CategoryFoodPage";
import foodCard from "../assets/foodCard.jpg";
import foodCard2 from "../assets/foodCard2.jpg";
import foodCard3 from "../assets/foodCard3.jpg";
import foodCard4 from "../assets/foodCard4.jpg";
import foodCard5 from "../assets/foodCard5.jpg";
import foodCard6 from "../assets/foodCard6.jpg";
import PopulerChefPage from "./PopulerChefPage";
import CommentPage from "./CommentPage";
import Footer from "../layout/Footer";
const PageContent = () => {
  const foodCardAPI = [
    {
      img: foodCard,
      cardBaslik: "Baslik",
      cardContent:
        "Bu alanda kart içeriği bulunabilir. Metin, açıklamalar, vb.",
      rating: 2,
    },
    {
      img: foodCard2,
      cardBaslik: "Baslik",
      cardContent:
        "Bu alanda kart içeriği bulunabilir. Metin, açıklamalar, vb.",
      rating: 3,
    },
    {
      img: foodCard3,
      cardBaslik: "Baslik",
      cardContent:
        "Bu alanda kart içeriği bulunabilir. Metin, açıklamalar, vb.",
      rating: 4,
    },
    {
      img: foodCard4,
      cardBaslik: "Baslik",
      cardContent:
        "Bu alanda kart içeriği bulunabilir. Metin, açıklamalar, vb.",
      rating: 5,
    },
    {
      img: foodCard5,
      cardBaslik: "Baslik",
      cardContent:
        "Bu alanda kart içeriği bulunabilir. Metin, açıklamalar, vb.",
      rating: 1,
    },
    {
      img: foodCard6,
      cardBaslik: "Baslik",
      cardContent:
        "Bu alanda kart içeriği bulunabilir. Metin, açıklamalar, vb.",
      rating: 2.5,
    },
  ];
  return (
    <>
      <div className="bg-white ml-20 h-screen p-12 mt-52 rounded-tl-3xl">
        <PopulerRecipePage foodCardApi={foodCardAPI} />
        <PopulerChefPage />
        <CategoryFoodPage foodCardCategory={foodCardAPI} />
        <CommentPage />
        <Footer />
      </div>
     
    </>
  );
};

export default PageContent;
