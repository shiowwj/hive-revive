var React = require("react");

class Head extends React.Component{
    render() {
        return(
            <html>
                <head>
                <meta name="viewport" content="initial-scale=1.0"/>
                <meta charSet="utf-8"/>
                <title>One Corner</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" type="text/css" href="reset.css"/>
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
                    <form class="" method="POST" action="/search">
                        <div class="row">
                            <div class="">
                                <input class="form-control"  name="SEARCH FOR LOCATION" placeholder="SEARCH FOR LOCATION" id="search-bar"/>
                            </div>
                            <div class="ml-2">
                                <input type="submit" class="btn btn-outline-primary border border-primary btn-sm " value="SEARCH"/>
                            </div>
                        </div>
                    </form>
                </nav>
            </html>
        )
    }
}

class LeftSidebar extends React.Component{
    render(){

        let userName = this.props.data.username;
        let formAction = '/profile/'+ userName +"/edit";

        return(
            <html>
                <div class="col mt-2">
                    <a class="navbar-brand col bg-light menu-bar" id="home-button" href="/home">
                        <span class="glyphicon glyphicon-home"> Home</span>
                    </a>
                    <a class="navbar-brand col bg-light menu-bar" id="edit-button" href={formAction}>
                        <span class="glyphicon glyphicon-wrench"> Edit</span>
                    </a>
                </div>
            </html>
        )
    }
}

class View extends React.Component{
    render(){
        console.log('VIEWWW PROFILE SECTION');
        console.log(this.props.data);


        return(
            <html>
                <div class="col">
                    DISPLAY PROFILE STUFF
                </div>
            </html>
        )
    }
}

class Profile extends React.Component {
    render(){

        console.log('PROFILEEEE JSX');
        console.log(this.props.data);

        return (
            <html>
                <Head/>
                <body>
                    <NavBar/>
                    <div>
                        <div class="row">
                            <div class="col-lg-2 col-md-12">
                                <LeftSidebar data={this.props.data}/>
                            </div>
                            <div class="col-lg-10 col-md-12 dash-board">
                                <View data={this.props.data}/>
                            </div>
                        </div>


                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Profile;