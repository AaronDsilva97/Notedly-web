import React, { useEffect } from "react";

const MyNotes = () => {
  useEffect(() => {
    document.title = "My Notes - Notedly";
  }, []);

  return (
    <div>
      <p>This is myNotes page</p>
    </div>
  );
};

export default MyNotes;
