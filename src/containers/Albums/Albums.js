import React, { Component } from 'react';
import Album from "../../components/Album/Album";
import Loader from '../../components/Loader/Loader';


class Albums extends Component {
  
  constructor() {
    super();
    this.state = {
      albums: [],
      isLoading: true
    }
  }

  componentDidMount = () => {
    const albumsUrl = "https://gist.githubusercontent.com/rarmatei/f5ae92ac93d9716affab822a3f54f95b/raw/e62641b3f5ddd12c4fe34aa0912488224594e5a7/beyonce-albums.json";
    fetch(albumsUrl).then(response => response.json())
      .then(data => {
        console.log(data[0].artistName);
        setTimeout(() => {

          this.setState({
            albums: data,
            isLoading: false
          })
        }, 2000)
      })
  }

  toggleLoader() {
    if (this.state.isLoading === true) {
      return <Loader />
    } else {
      return null;
    }
  }

  render() {
    return <div className="album-back" >
      {this.toggleLoader()}
      <div className="container">
        <div className="row">
          {this.state.albums.map((item) => {
            return <Album
              key={item.albumId}  
              album={item.collectionName}
              imageUrl={item.artworkUrl100}
              releaseDate={item.releaseDate}
              genre={item.primaryGenreName}
              link={item.url}
            />
          })}
        </div>
      </div>
    </div>
  }
}


export default Albums;
