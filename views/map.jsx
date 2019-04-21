var React = require("react");

var Marker = require('./marker');

class Home extends React.Component {
  render() {
    // console.log(this.props.list[0].name+': '+this.props.list[0].latitude+', '+this.props.list[0].longitude);
    let list = this.props.list;

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="style.css" />
            <script type="text/javascript" src="gMap.js" />
            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDB3x7-VzZ46Ozbqdpsb_VAt9_gcxAfuRs&libraries=places&callback=initMap" />

        </head>
        <body>
        <div className="pageWrapper">
            <h1>Stuff</h1>
            <div className="searchBox">
                <input type="text" id="userInput" name="mapsearch" placeholder="Enter your current location here" />
            </div>
            <div id="map"></div>
        </div>
        <Marker list={list} />
        </body>
      </html>
    );
  }
}

module.exports = Home;