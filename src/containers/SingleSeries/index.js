import React, { Component } from 'react';
import Loader from '../../components/Loader';
import SeriesResult from '../../components/SeriesResult';

class SingleSeries extends Component {
  state = {
    show: null
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const url = `http://api.tvmaze.com/shows/${id}?embed=episodes`;

    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ show: json }));
  }

  render() {
    const { show } = this.state;

    return (
      <div>
        { show === null && <Loader /> }
        {
          show !== null && <SeriesResult result={show} />
        }
      </div>
    );
  }
}

export default SingleSeries;
