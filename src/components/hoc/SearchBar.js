import React, { useState, useEffect } from "react";

const SearchBar = (Component, details) => {
  const APIURL = details.apiURl;
  const filterKey = details.filterKey;

  const SearchHoc = () => {
    const [listOfData, setListOfData] = useState([]);
    const [originalResponse, setOriginalResponse] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetch(APIURL);
        const response = await data.json();
        setOriginalResponse(response);
        setListOfData(response);
      };
      fetchData();
    }, []);

    const handleSearch = (e) => {
      if (e.target.value && e.target.value.trim().length) {
        setListOfData(
          [...originalResponse].filter(
            (item) =>
              item[filterKey]
                .toLowerCase()
                .indexOf(e.target.value.toLowerCase()) >= 0
          )
        );
      } else {
        setListOfData(originalResponse);
      }
    };
    return (
      <div>
        <div>
          <input type="text" onChange={handleSearch} />
        </div>
        {listOfData.slice(0, 20).map((item) => (
          <Component key={item.id} {...item} />
        ))}
      </div>
    );
  };

  return SearchHoc;
};

export default SearchBar;
