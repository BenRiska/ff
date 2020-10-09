import React from "react";
import "./Shop.css";
import Sidebar from "./Sidebar";
import InstagramTab from "./InstagramTab";
import Item from "./Item";

function Shop() {
  return (
    <div className="shop">
      <Sidebar />
      <div className="shop__items">
        <div className="shop__container">
          <Item
            title="Anime Hoodie (Unisex)"
            price="39.99"
            image="https://vangogh.teespring.com/v3/image/VdZ1hll1zMclR4c6cC3234Fb4iw/480/560.jpg"
            url="https://teespring.com/anime-hoodie-unisex?tsmac=store&tsmic=featurefield-merchandise&pid=377&cid=100057"
          />
          <Item
            title="Anime T-Shirt (unisex)"
            price="24.99"
            image="https://vangogh.teespring.com/v3/image/EYOVZXavtAu30fnH3wdq_klHgJg/480/560.jpg"
            url="https://teespring.com/anime-t-shirt-unisex?tsmac=store&tsmic=featurefield-merchandise&pid=389&cid=100019"
          />
          <Item
            title="Anime Phone Case (IPhone)"
            price="19.99"
            image="https://vangogh.teespring.com/v3/image/TNIWZjoOkgOqWChsUsDuRDureSg/480/560.jpg"
            url="https://teespring.com/new-anime-phone-case-iphone?tsmac=store&tsmic=featurefield-merchandise&pid=649&cid=103041"
          />
          <Item
            title="Anime Coffee Mug"
            price="14.99"
            image="https://vangogh.teespring.com/v3/image/Fg8BkPsnSLF7fkVeQctjHJCGppk/480/560.jpg"
            url="https://teespring.com/anime-coffee-mug?tsmac=store&tsmic=featurefield-merchandise&pid=659&cid=102910"
          />
        </div>
      </div>
      <InstagramTab />
    </div>
  );
}

export default Shop;
