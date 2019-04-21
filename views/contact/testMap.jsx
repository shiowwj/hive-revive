var React = require("react");

class Head extends React.Component{
    render() {
        return(
            <html>
                <head>
                <meta name="viewport" content="initial-scale=1.0"/>
                <meta charSet="utf-8"/>
                <title>Go One Corner</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" type="text/css" href="/reset.css"/>
                <link rel="stylesheet" href="/style.css"/>

                <script type="text/javascript" src="/gMap.js" />
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDB3x7-VzZ46Ozbqdpsb_VAt9_gcxAfuRs&callback=initMap"
    async defer></script>


            </head>
            </html>
        )
    }
}

class NavBar extends React.Component{
    render(){

        return(
            <html>
                <nav class="navbar navbar-light bg-light">
                    <form class="" method="POST" action="/search">
                        <div class="row">
                            <div class="col-8">
                                <input class="form-control"  name="SEARCH FOR LOCATION" placeholder="SEARCH FOR LOCATION"/>
                            </div>
                            <div class="col-4">
                                <input type="submit" class="btn btn-outline-primary border border-primary btn-sm " value="SEARCH"/>
                            </div>
                        </div>
                    </form>
                </nav>
            </html>
        )
    }
}

class Draft extends React.Component {
    render(){

        return (
            <html>
                <Head/>
                <body>
                    <NavBar/>
                    <div class="map-wrapper">

                         <div id="map"></div>

                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Draft;

 // <div className="pageWrapper">
 //                            <h1>Test</h1>
 //                            <div className="searchBox">
 //                                <input type="text" id="userInput" name="mapsearch" placeholder="Enter your current location here" />
 //                            </div>
 //                            </div>