import React, { useEffect } from "react";

const Favorites = () => {
  useEffect(() => {
    document.title = "Favorites - Notedly";
  }, []);
  return (
    <div>
      <p>This is favorites page</p>
    </div>
  );
};

export default Favorites;
