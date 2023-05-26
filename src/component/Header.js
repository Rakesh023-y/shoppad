import React from "react";
const Header = () => {
  return (
    <div>
      <nav className="navbar fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex">
            <select className="selected___item">
              <option className="text__size">
                {" "}
                <span>Supplier</span>{" "}
              </option>
              <option value="1">Sareemall</option>
              <option value="2">Sainoor</option>
              <option value="3">Vastrananda</option>
            </select>

            <select className="selected___itemfabric mx-3">
              <option className="text__size">
                {" "}
                <span>Saree Fabric</span>{" "}
              </option>
              <option value="1">Cotton</option>
              <option value="2">Georgette</option>
              <option value="3">Brasso</option>
              <option value="3">Organza</option>
              <option value="3">Silk-blend</option>
            </select>
          </div>
          <div className="select__wraper">
            <span className="mx-2">Sort by :</span>
            <select className="selected___itemprice">
              <option value=":">
                <span>Select</span>
              </option>
              <option value="Sort by:">Price low to high</option>
              <option value="Sort by:">Price high to low</option>
              <option value="Sort by:">Popularity</option>
              <option value="Sort by:">Rating</option>
            </select>
          </div>
        </div>
        <div className="checkbox_item ">
          <input type="checkbox" value="Saree mall" name="saree" />
          <label for=""> Sareemall</label>
          <input
            className="checkbox__style"
            type="checkbox"
            value="Saree shop"
            name="saree"
          />
          <label for=""> Saree shop</label>
        </div>
      </nav>
    </div>
  );
};
export default Header;