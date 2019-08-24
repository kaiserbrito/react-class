import React from 'react';

function SeriesResult (props) {
  const show = props.result;

  return (
    <div>
      <h1><a href={ show.url }>{ show.name }</a></h1>
      <p>{ show.summary }</p>
      <p>Premiered: { show.premiered }</p>
      <p>Rating: { show.rating.average }</p>
      <p>{ show._embedded.episodes.length } Episodes</p>
      <p>
        <img src={show.image.medium} alt="Show" />
      </p>
    </div>
  );
}

export default SeriesResult;
