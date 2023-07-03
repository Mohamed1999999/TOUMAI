// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import { Card } from "react-bootstrap";
// import players from "./players";

// const Player = () => {
//   const jackson = players[0];
//   const gosens = players[1];
//   const kudus = players[2];
//   const diallo = players[3];

//   return (
//     <div className="Players">
//       <Card className="Jackson">
//         <Card.Title>{jackson.nom}</Card.Title>
//         <Card.Img variant="top" src={jackson.image} alt={jackson.nom} />
//         <Card.Text>{jackson.age}</Card.Text>
//         <Card.Text>{jackson.equipe}</Card.Text>
//         <Card.Text>{jackson.numeroMaillot}</Card.Text>
//         <Card.Text>{jackson.nationalite}</Card.Text>
//       </Card>

//       <Card className="Gosens">
//         <Card.Title>{gosens.nom}</Card.Title>
//         <Card.Img variant="top" src={gosens.image} alt={gosens.nom} />
//         <Card.Text>{gosens.age}</Card.Text>
//         <Card.Text>{gosens.equipe}</Card.Text>
//         <Card.Text>{gosens.numeroMaillot}</Card.Text>
//         <Card.Text>{gosens.nationalite}</Card.Text>
//       </Card>

//       <Card className="Kudus">
//         <Card.Title>{kudus.nom}</Card.Title>
//         <Card.Img variant="top" src={kudus.image} alt={kudus.nom} />
//         <Card.Text>{kudus.age}</Card.Text>
//         <Card.Text>{kudus.equipe}</Card.Text>
//         <Card.Text>{kudus.numeroMaillot}</Card.Text>
//         <Card.Text>{kudus.nationalite}</Card.Text>
//       </Card>

//       <Card className="Diallo">
//         <Card.Title>{diallo.nom}</Card.Title>
//         <Card.Img variant="top" src={diallo.image} alt={diallo.nom} />
//         <Card.Text>{diallo.age}</Card.Text>
//         <Card.Text>{diallo.equipe}</Card.Text>
//         <Card.Text>{diallo.numeroMaillot}</Card.Text>
//         <Card.Text>{diallo.nationalite}</Card.Text>
//       </Card>
//     </div>
//   );
// };

// export default Player;
import React from "react";
import { Card } from "react-bootstrap";

const Player = (props) => {
  const { nom, image, age, equipe, numeroMaillot, nationalite } = props;

  const cardStyle = {
    width: "18rem",
    marginBottom: "1rem",
    backgroundColor: "#f8f9fa",
    border: "1px solid #dee2e6",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  };

  return (
    <Card style={cardStyle}>
      <Card.Title>{nom}</Card.Title>
      <Card.Img variant="top" src={image} alt={nom} style={imageStyle} />
      <Card.Body>
        <Card.Text>Age: {age}</Card.Text>
        <Card.Text>Equipe: {equipe}</Card.Text>
        <Card.Text>Numéro Maillot: {numeroMaillot}</Card.Text>
        <Card.Text>Nationalité: {nationalite}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  nom: "Unknown",
  image: "default-image.jpg",
  age: 0,
  equipe: "Unknown",
  numeroMaillot: 0,
  nationalite: "Unknown",
};

export default Player;
