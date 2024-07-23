import React from 'react';

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-prev`} onClick={onClick}>
      <i className="custom-prev-arrow">‹</i>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-next`} onClick={onClick}>
      <i className="custom-next-arrow">›</i>
    </div>
  );
};

export { CustomPrevArrow, CustomNextArrow };
