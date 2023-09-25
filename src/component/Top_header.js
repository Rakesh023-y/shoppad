import React from "react";

const Top_header = () => {
  return (
    <nav class="navbar fixed-top bg-body-tertiary">
      <div class="container-fluid ">
        <div className="row">
          <div className="col-sm-6 d-flex">
            <img className="arrow" src="https://cdn-icons-png.flaticon.com/128/545/545680.png" />
            <span className="top_head_txt">Saree</span>
            <img className="search_icon" src="https://cdn-icons-png.flaticon.com/128/141/141944.png" />
            <img className="wishlist" src="https://img.icons8.com/?size=1x&id=86&format=png" />
            <img className="bag" src="https://cdn-icons-png.flaticon.com/128/6248/6248715.png" />
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Top_header;