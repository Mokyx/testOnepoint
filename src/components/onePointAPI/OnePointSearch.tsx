import { Button } from "primereact/button";
import { useState } from "react";
import OnePointAlbums from "./OnePointAlbums";

function OnePointSearch() {
  const [showAlbums, setShowAlbums] = useState(false);

  const handleButtonClick = () => {
    setShowAlbums(!showAlbums);
  };

  return (
    <div>
      <Button
        style={{
          margin: "auto",
          width: "100%",
          backgroundColor: "teal",
          marginBottom: "5px",
          marginTop: "5px",
        }}
        label={
          showAlbums
            ? "Fermer les albums OnePoint"
            : "Afficher les albums de OnePoint (les 10 plus écoutés)"
        }
        onClick={handleButtonClick}
      />
      {showAlbums && <OnePointAlbums />}
    </div>
  );
}
export default OnePointSearch;
