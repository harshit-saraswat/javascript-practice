import React from "react";
import ReactDom from "react-dom";
import contacts from "./contacts";
import Avatar from "./comps/Avatar";
import Card from "./comps/Card";

ReactDom.render(
  <div>
    <h1 className="heading">My Contacts</h1>

    <Avatar img="https://dslv9ilpbe7p1.cloudfront.net/kPtHR9HxLCkBR5SiZuTtbA_store_banner_image.jpeg" />

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
