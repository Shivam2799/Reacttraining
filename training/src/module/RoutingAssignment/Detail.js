import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./detail.css"
function Details() {
  const { id } = useParams();
  const history = useHistory();
  console.log(id);
  return (
    <div className={"mainContainer"}>
      <div className={"innerContainer"}>
        
        
        <button
          className={"logout"}
          onClick={() => {
            history.push("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default Details;
