import React from 'react';

const Track = ({ className, included, vertical, offset, length, backgroundColor }) => {
  const style = {
    visibility: included ? 'visible' : 'hidden',
    backgroundColor: backgroundColor
  };
  if (vertical) {
    style.bottom = `${ offset }%`;
    style.height = `${ length }%`;
  } else {
    style.left = `${ offset }%`;
    style.width = `${ length }%`;
  }
  return React.createElement('div', { className: className, style: style });
};

export default Track;