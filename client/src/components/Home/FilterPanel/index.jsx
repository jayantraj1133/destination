import React, { useEffect, useState } from 'react';
import CheckboxProton from '../../common/CheckboxProton';
import FilterListToggle from '../../common/FilterListToggle';
import SliderProton from '../../common/SliderProton';
import axios from 'axios';
import './styles.css';

const FilterPanel = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectedPrice,
  selectRating,
  cuisines,
  changeChecked,
  changePrice,
}) => {
  const [catList, setCatList] = useState([]);
  const [ratList, setRatList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const catResp = await axios.get(
        'https://filterprod.herokuapp.com/categoryList/'
      );
      setCatList(catResp.data);
      const ratResp = await axios.get(
        'https://filterprod.herokuapp.com/ratingList/'
      );
      setRatList(ratResp.data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={catList}
          value={selectedCategory}
          selectToggle={selectCategory}
        />
      </div>
      <div className="input-group">
        <p className="label">Cuisine</p>
        {cuisines.map((cuisine) => (
          <CheckboxProton
            key={cuisine.id}
            cuisine={cuisine}
            changeChecked={changeChecked}
          />
        ))}
      </div>
      <div className="input-group">
        <p className="label-range">Price Range</p>
        <SliderProton value={selectedPrice} changePrice={changePrice} />
      </div>
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
