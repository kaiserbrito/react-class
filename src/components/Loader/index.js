import React from 'react';
import LoaderSrc from '../../assets/loader.gif';

const Loader = props => (
  <div>
    <img
      style= {{ width: 75 }}
      alt="loader-icon"
      src={LoaderSrc} />
  </div>
);

export default Loader;
