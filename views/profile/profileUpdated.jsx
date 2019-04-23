var React = require("react");

class Head extends React.Component{
    render() {
        console.log('ATTT HEADER????');
        console.log(this.props.data)
        const userName = this.props.data.username;
        return(
            <html>
                <head>
                <meta charSet="utf-8"/>
                <title>{userName}</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="/style.css"/>
            </head>
            </html>
        )
    }
}

class NavBar extends React.Component{
    render(){

        return(
            <html>
                <nav class="navbar navbar-light bg-light" >
                    <img class="logo-photo" src="/logo.png"/>
                    <form class="" method="GET" action="/?search=location">
                        <div class="row">
                            <div class="">
                                <input class="form-control"  name="search" placeholder="SEARCH FOR LOCATION" id="search"/>
                            </div>
                            <div class="ml-2">
                                <input type="submit"  class="btn btn-outline-dark border border-dark btn-sm" id="search-button" value="SEARCH"/>
                            </div>
                        </div>
                    </form>
                </nav>
            </html>
        )
    }
}

class ProfileUpdated extends React.Component {
    render(){

        console.log('PROFILEEEE JSX');
        console.log(this.props.data);
        // let userId =

        return (
            <html>
                <Head data={this.props.data}/>
                <body>
                    <main>
                            <NavBar/>
                            <div class="row">
                            <h2>Username: {this.props.data.username}</h2>
                                <div class="col-3">
                                    <img src={this.props.data.profile_pic_url}/>
                                    <h4>Interest: {this.props.data.interest}</h4>
                                    <h4>Location: {this.props.data.location}</h4>
                                    <h4>Looking For:{this.props.data.type}</h4>
                                    <h4>Headline: {this.props.data.profile_desc}</h4>
                                    <h2><strong>button to edit page</strong></h2>
                                </div>
                                <div class="col-6">

                                </div>
                                <div class="col-3">

                                </div>
                            </div>

                    </main>
                </body>
            </html>
        );
    }
}

module.exports = ProfileUpdated;