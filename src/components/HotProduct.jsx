import React from "react";
import "../styles/hotItemCard.css";
import HotItemCard from "./HotItemCard";


function HotProduct({
  music,
  musicCover,
  smartDevice,
  smartDevicesCover,
  home,
  homeCover,
  lifeStyle,
  lifeStyleCover,
  mobileAccessories,
  mobileAccessoriesCover
}) {
  return (
    <div className="HotItemsWrapper">
      <div>
        <img
          src={
            musicCover ||
            smartDevicesCover ||
            homeCover ||
            lifeStyleCover ||
            mobileAccessoriesCover
          }
          alt="Cover"
        />
      </div>
      <div>
        {music &&
          music.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              img={item.image}
              index={index}
            />
          ))}

        {smartDevice &&
          smartDevice.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              img={item.image}
              index={index}
            />
          ))}
        {home &&
          home.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              img={item.image}
              index={index}
            />
          ))}
        {lifeStyle &&
          lifeStyle.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              img={item.image}
              index={index}
            />
          ))}
        {mobileAccessories &&
          mobileAccessories.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              img={item.image}
              index={index}
            />
          ))}

          <HotItemCard img="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
      </div>
    </div>
  );
}

export default HotProduct;
