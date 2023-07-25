import React from "react";
import "./FirstPage.css";
import { useHistory } from "react-router-dom";

export default function FirstPage() {
  const history = useHistory();
  const toMainPage = () => {
    history.push("/mainpage");
  }


  return (
    <div className="firstPageContainer">
      <div className="heading">
        <h1 className="mainHeadingFirst">
          <img
            alt="logo"
            src="https://seeklogo.com/images/C/cici-s-pizza-logo-9BC7601F3D-seeklogo.com.png"
            style={{ width: "100px" }}
          />
          Teknolojik Yemekler
        </h1>
        <h5 className="happy">Acıktın Mı ?</h5>
        <button className="firstButton" onClick={toMainPage}>
          Acıktım !!
        </button>
      </div>
      <img
        alt="pizzaphoto"
        className="firstPhoto"
        src="https://www.eauclairesbestpizza.com/wp-cdontent/uploads/2022/06/pizza-6-speciality-1-1fx9ae.png"
      />
    </div>
  );
}