import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi, amet reprehenderit assumenda temporibus cum consectetur adipisci sit aliquam obcaecati. Totam, temporibus. Et quod, labore hic aperiam unde omnis expedita."
  },
  {
    id: 2,
    title: "Czym jest  paradoks Fermiego?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi, amet reprehenderit assumenda temporibus cum consectetur adipisci sit aliquam obcaecati. Totam, temporibus. Et quod, labore hic aperiam unde omnis expedita."
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi, amet reprehenderit assumenda temporibus cum consectetur adipisci sit aliquam obcaecati. Totam, temporibus. Et quod, labore hic aperiam unde omnis expedita."
  }
];
const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
