import React, { useState } from 'react';
import { Card, Button } from 'antd';
import "./ProductPage.css";
import card1 from "./img1.webp";
import card2 from "./img2.webp";
import card3 from "./img3.webp";
import card4 from "./img4.webp";
import card5 from "./img5.webp";
import card6 from "./img6.webp";
import card7 from "./img7.webp";
import card8 from "./img8.webp";
import card9 from "./img9.webp";  
import card10 from "./img10.webp";
import card11 from "./img11.webp";
import card12 from "./img12.webp";
import card13 from "./img13.webp";
import card14 from "./img15.webp";
import card15 from "./img16.webp";
import card16 from "./img17.webp";
import card17 from "./img18.webp";
import card18 from "./img19.webp";
import card19 from "./img20.webp";
import card20 from "./img21.webp";
import Nav_Bar from './Nav_Bar';
import Footer from './Footer';

const { Meta } = Card;

export default function ProductPage() {
  const [counts, setCounts] = useState(Array(20).fill(0));
  const [totalPrices, setTotalPrices] = useState(Array(20).fill(0));

  const increment = (index, price) => {
    if (counts[index] < 25) {
      const newCounts = [...counts];
      newCounts[index] += 1;
      setCounts(newCounts);

      const newTotalPrices = [...totalPrices];
      newTotalPrices[index] += price;
      setTotalPrices(newTotalPrices);
    }
  };

  const decrement = (index, price) => {
    if (counts[index] > 0) {
      const newCounts = [...counts];
      newCounts[index] -= 1;
      setCounts(newCounts);

      const newTotalPrices = [...totalPrices];
      newTotalPrices[index] -= price;
      setTotalPrices(newTotalPrices);
    }
  };

  const cards = [
    { src: card1, title: "Floor Cleaner Liquid", price: 229 },
    { src: card2, title: "Mops", price: 499 },
    { src: card3, title: "Broom & Dustpan", price: 685 },
    { src: card4, title: "Toilet Cleaner", price: 188 },
    { src: card5, title: "Microfiber Cloths", price: 391 },
    { src: card6, title: "Laundry Liquid", price: 369 },
    { src: card7, title: "Scrub Brushes", price: 139 },
    { src: card8, title: "Degreasing Sprays", price: 299 },
    { src: card9, title: "Stain Remover", price: 139 },
    { src: card10, title: "Glass Cleaner", price: 209 },
    { src: card11, title: "Soap", price: 257 },
    { src: card12, title: "Hand Wash", price: 198 },
    { src: card13, title: "Fabric Softener", price: 199 },
    { src: card14, title: "Wiper", price: 336 },
    { src: card15, title: "Pet Area Cleaner", price: 540 },
    { src: card16, title: "Tap Cleaner", price: 244 },
    { src: card17, title: "Ant Repellent Spray", price: 390 },
    { src: card18, title: "Mosquito Spray", price: 359 },
    { src: card19, title: "Air Freshener ", price: 239 },
    { src: card20, title: "Kitchen Cleaning Sponge", price: 575 },
  ];

  return (
    <div className="page-container">
      <Nav_Bar/>
      <div className="content-wrap">
        <div className="card-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              hoverable
              style={{ width: 240 }}
              cover={<img src={card.src} className='course-image-size' alt={`${card.title} - ${card.price}`} />}
            >
              <Meta title={card.title} />
              <p>Price: Rs {card.price}</p>
              <p>Total Count: {counts[index]}</p>
              <p>Total Price: Rs{totalPrices[index]}</p> {/* Added total price display */}
              <Button onClick={() => increment(index, card.price)}>+</Button>
              <Button onClick={() => decrement(index, card.price)}>-</Button>
            </Card>
          ))}
        </div>
      </div>

      <Footer/>
    </div>
  );
}