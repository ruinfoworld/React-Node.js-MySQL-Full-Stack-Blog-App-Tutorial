import React from "react";

const Category = ({ clabel, cname, setCat, cat }) => {
  return (
    <div className="cat">
      <input
        type="radio"
        checked={cat === cname}
        onChange={(e) => setCat(e.target.value)}
        name={cname}
        value={cname}
        id={cname}
      />
      <label htmlFor="art">{clabel}</label>
    </div>
  );
};

export default Category;
