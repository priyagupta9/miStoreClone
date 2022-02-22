import React,{useState, useEffect} from "react";
import "../styles/navOptions.css";
import NavOCard from "./NavOCard";


function NavOptions({
  miPhones,
  redmiPhones,
  lifestyle,
  tv,
  laptops,
  home,
  audio,
  accessories,
}) {

  const [miPhoneToggle,setmiPhoneToggle] = useState(false);
  const [redmiPhoneToggle,setredmiPhoneToggle] = useState(false);
  const [lifestyleToggle,setlifestyleToggle] = useState(false);
  const [tvToggle,settvToggle] = useState(false);
  const [laptopsToggle,setlaptopsToggle] = useState(false);
  const [homeToggle, sethomeToggle] = useState(false);
  const [audioToggle, setaudioToggle] = useState(false);
  const [accessoriesToggle, setaccessoriesToggle] = useState(false);


  useEffect(()=>{
    if(window.location.pathname === "/miPhones"){
      return setmiPhoneToggle(true)
    }
        if (window.location.pathname === "/redmiPhones") {
          return setredmiPhoneToggle(true);
        }
        if(window.location.pathname === "/lifestyle"){
      return setlifestyleToggle(true)
    }
        if(window.location.pathname === "/tv"){
      return settvToggle(true)
    }
        if(window.location.pathname === "/laptops"){
      return setlaptopsToggle(true)
    }
        if(window.location.pathname === "/home"){
      return sethomeToggle(true)
    }
        if (window.location.pathname === "/audio") {
          return setaudioToggle(true);
        }
        if (window.location.pathname === "/accessories") {
          return setaccessoriesToggle(true);
        }
  },[])



  return (
    <div className="navcard-wrapper">
      {miPhoneToggle
        ? miPhones.map((item, index) => (
            <NavOCard
              key={item.image}
              name={item.name}
              price={item.price}
              img={item.image}
              index={index}
            />
          ))
        : null}

      {redmiPhoneToggle
        ? redmiPhones.map((item, index) => (
            <NavOCard
              key={item.image}
              name={item.name}
              price={item.price}
              img={item.image}
              index={index}
            />
          ))
        : null}

      {lifestyleToggle
        ? lifestyle.map((item, index) => (
            <NavOCard
              key={item.image}
              name={item.name}
              price={item.price}
              img={item.image}
              index={index}
            />
          ))
        : null}

      {tvToggle
        ? tv.map((item, index) => (
            <NavOCard
              key={item.image}
              name={item.name}
              price={item.price}
              img={item.image}
              index={index}
            />
          ))
        : null}

      {laptopsToggle
        ? laptops.map((item, index) => (
            <NavOCard
              key={item.image}
              name={item.name}
              price={item.price}
              img={item.image}
              index={index}
            />
          ))
        : null}

      {homeToggle
        ? home.map((item, index) => (
            <NavOCard
              key={item.image}
              name={item.name}
              price={item.price}
              img={item.image}
              index={index}
            />
          ))
        : null}

      {audioToggle
        ? audio.map((item, index) => (
            <NavOCard
              key={item.image}
              name={item.name}
              price={item.price}
              img={item.image}
              index={index}
            />
          ))
        : null}

      {accessoriesToggle
        ? accessories.map((item, index) => (
            <NavOCard
              key={item.image}
              name={item.name}
              price={item.price}
              img={item.image}
              index={index}
            />
          ))
        : null}
    </div>
  );
   }
  
export default NavOptions;









// function NavOptions({
//   miPhones,
//   redmiPhones,
//   lifestyle,
//   tv,
//   laptops,
//   home,
//   audio,
//   accessories,
// }) {
//   return (
//     <div className="navcard-wrapper">
//       {miPhones &&
//         miPhones.map((d, index) => (
//           <NavOCard name={d.name} price={d.price} img={d.image} index={index} />
//         ))}

//       {redmiPhones &&
//         redmiPhones.map((d, index) => (
//           <NavOCard name={d.name} price={d.price} img={d.image} index={index} />
//         ))}

//       {lifestyle &&
//         lifestyle.map((d, index) => (
//           <NavOCard name={d.name} price={d.price} img={d.image} index={index} />
//         ))}

//       {tv &&
//         tv.map((d, index) => (
//           <NavOCard name={d.name} price={d.price} img={d.image} index={index} />
//         ))}

//       {laptops &&
//         laptops.map((d, index) => (
//           <NavOCard name={d.name} price={d.price} img={d.image} index={index} />
//         ))}

//       {home &&
//         home.map((d, index) => (
//           <NavOCard name={d.name} price={d.price} img={d.image} index={index} />
//         ))}

//       {audio &&
//         audio.map((d, index) => (
//           <NavOCard name={d.name} price={d.price} img={d.image} index={index} />
//         ))}

//       {accessories &&
//         accessories.map((d, index) => (
//           <NavOCard name={d.name} price={d.price} img={d.image} index={index} />
//         ))}
//     </div>
//   );
// }

// export default NavOptions;