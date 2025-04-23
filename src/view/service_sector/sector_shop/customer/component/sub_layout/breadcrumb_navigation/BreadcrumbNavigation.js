import React from "react";

const BreadcrumbNavigation = ({ prevPage = [], thisPage }) => {
  return (
    <div className="breadcrumb-navigation">
      <div className="container">
        <ol
          className="breadcrumb breadcrumb-arrows"
          itemScope
          itemType="http://schema.org/BreadcrumbList"
        >
          {prevPage.map((item, index) => (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <a href={item.link} target="_self" itemProp="item">
                <span itemProp="name">{item.pageName}</span>
              </a>
              <meta itemProp="position" content={index + 1} />
            </li>
          ))}

          <li
            className="active"
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/ListItem"
          >
            <span>
              <span itemProp="name">{thisPage}</span>
            </span>
            <meta itemProp="position" content={prevPage.length + 1} />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default BreadcrumbNavigation;
