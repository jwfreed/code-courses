import React from 'react';
import PropTypes from 'prop-types';

export default function Course({ title, image, courseAuthId, author }) {
  return (
    <div className='course-card'>
      <div className='card' id={courseAuthId}>
        <h1 className='card-title'>{title}</h1>
        <h2 className='card-author'>{author}</h2>
        <div>
          <img src={image} alt={image} />
        </div>
      </div>
    </div>
  );
}

Course.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  courseAuthId: PropTypes.number,
  author: PropTypes.string
};
