import React from "react";
const Bottom_header = () => {
    return (
        <div>
            <nav class="navbar fixed-bottom bg-body-tertiary">
                <div class="container-fluid">
                    <div className="col mb-2 ">
                        <img className="sort_img" src="https://cdn-icons-png.flaticon.com/128/4662/4662255.png"
                        />
                        <span className="txt">SORT</span>
                        <img className="filter_img" src="https://cdn-icons-png.flaticon.com/128/7693/7693332.png" />
                        <span className="txt">FILTER</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Bottom_header;