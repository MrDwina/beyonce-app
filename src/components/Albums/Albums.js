import React, { Component } from 'react';
import Album from "../Album/Album";

class Albums extends Component {
  
  constructor() {
    super();
    this.state = {
      albums: []
    }
  }

  componentDidMount = () => {
    const albumsUrl = "https://gist.githubusercontent.com/rarmatei/f5ae92ac93d9716affab822a3f54f95b/raw/e62641b3f5ddd12c4fe34aa0912488224594e5a7/beyonce-albums.json";
    fetch(albumsUrl).then(response => response.json())
      .then(data => {
        console.log(data[0].artistName);
        this.setState({
          albums: data
        })
      })
  }
    render() {
      return <div className="album-back" >
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
