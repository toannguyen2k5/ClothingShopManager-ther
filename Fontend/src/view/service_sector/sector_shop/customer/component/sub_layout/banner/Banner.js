import React from "react";

const Banner = ({ src, alt}) => {
  return (
    <div className="banner-collection-header">
      <picture>
        <img
          className="dt-width-100 ls-is-cached lazyloaded"
          width="1920"
          height="200"
          src={src}
          alt={alt}
        />
      </picture>
    </div>
  );
};

export default Banner;
