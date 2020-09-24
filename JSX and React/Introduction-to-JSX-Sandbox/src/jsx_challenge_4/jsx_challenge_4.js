import React from "react";
import ReactDom from "react-dom";

const img = "https://picsum.photos/200";

ReactDom.render(
  <div>
    <h1 className="heading">My Favourite Anime!</h1>
    <img
      src="https://i0.wp.com/www.bubbleblabber.com/wp-content/uploads/2014/05/Naruto-Shippuden-Konoha-Wallpapers-HD.jpg?fit=800%2C449&ssl=1"
      alt="naruto"
    />

    <img
      src="https://lh3.googleusercontent.com/6ect2ag5wPTQ9yLoqUrqWPZnH6xKN7nNH4lVdQUgQR_lVvoTFqlUo8s_p4zl6Q5a65Q"
      alt="bleach"
    />

    <img
      src="https://sm.ign.com/t/ign_ap/screenshot/default/2018012446166639_ayt5.1200.jpg"
      alt="hunterxhunter"
    />

    <img
      src="https://images-na.ssl-images-amazon.com/images/I/91-fiTNFIQL._RI_.jpg"
      alt="fairytail"
    />

    <img
      src="https://images6.alphacoders.com/512/thumb-1920-512323.jpg"
      alt="nogamenolife"
    />

    <img
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/fcf8db2e-1b68-477c-9679-8c3e67e1cdc8/d9c6gcj-4e87bad2-6cc3-4b8b-8f13-8f6f7286d668.png/v1/fill/w_512,h_512,strp/haikyuu___folder_icon_by_gzeromus_d9c6gcj-fullview.png"
      alt="haikyuu"
    />

    <p>Some random image</p>
    <img src={img} alt="randomimage" />
  </div>,
  document.getElementById("root")
);
