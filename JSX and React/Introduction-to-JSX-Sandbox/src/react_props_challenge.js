import React from "react";
import ReactDom from "react-dom";
import contacts from "./contacts";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.img} alt="contact-image" />
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

ReactDom.render(
  <div>
    <h1 className="heading">My Contacts</h1>
    <Card
      name="John Doe"
      phone="+91 9876543210"
      email="johndoe@gmail.com"
      img="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
    />
    <Card
      name="Jane Doe"
      phone="+91 9876543211"
      email="janedoe@gmail.com"
      img="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
    />
    <Card
      name={contacts[0].name}
      img={contacts[0].imgURL}
      phone={contacts[0].phone}
      email={contacts[0].email}
    />
    <Card
      name={contacts[1].name}
      img={contacts[1].imgURL}
      phone={contacts[1].phone}
      email={contacts[1].email}
    />
    <Card
      name={contacts[2].name}
      img={contacts[2].imgURL}
      phone={contacts[2].phone}
      email={contacts[2].email}
    />
  </div>,
  document.getElementById("root")
);
