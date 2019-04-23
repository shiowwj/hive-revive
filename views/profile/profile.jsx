var React = require("react");

class Head extends React.Component{
    render() {
        return(
            <html>
                <head>
                <meta name="viewport" content="initial-scale=1.0"/>
                <meta charSet="utf-8"/>
                <title>GOVOIDDECK</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

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

class LeftSidebar extends React.Component{
    render(){

        let userName = this.props.data.username;
        let formAction = '/profile/'+ userName +"/edit";

        return(
            <html>
                <div class="col mt-2">
                    <a class="navbar-brand col bg-light menu-bar-profile" id="home-button" href="/home">
                        <span class="glyphicon glyphicon-home"></span>
                    </a>
                    <a class="navbar-brand col bg-light menu-bar-profile" id="edit-button" href={formAction}>
                        <span class="glyphicon glyphicon-wrench"></span>
                    </a>
                    <a class="navbar-brand col bg-light menu-bar-profile" id="edit-button" href="/login">
                        <span class="glyphicon glyphicon-log-out"></span>
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
        let things = this.props.data;
        let setColor;
        let textStuff;
        if(things.type == "freelance"){
            setColor =  'text-success';
        } else if (things.type == "entity"){
            setColor =  'text-info';
        }

        if(things.type == "freelance"){
            textStuff = "I CAN HELP WITH: "
        } else if (things.type == "entity"){
            textStuff = "LOOKING FOR: "
        }

        return(
            <html>
                <div class="col p-0 border-top">
                    <div class="profile-view bg-light">
                        <div class="row">
                            <div class="col-lg-2">
                                <LeftSidebar data={this.props.data}/>
                            </div>
                            <div class="col-lg-3 col-md-12 profile-photo-section">
                                <a href={things.profile_pic_url}>
                                    <img class="profile-view-img" src={things.profile_pic_url}/>
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-12 profile-header">
                                <p class="profile-name text-capitalize">{things.name}</p>
                                <p class="profile-title text-capitalize"></p>
                                <p class="profile-location text-capitalize">{things.location}, Singapore</p>
                            </div>
                            <div class="col-lg-2 col-md-12">
                                <p class={setColor} id="profile-alert">{textStuff}<br></br>{things.interest}</p>
                            </div>
                        </div>
                   </div>
                        <div class="row m-0">
                            <div class="container">
                                <section class="profile-summary">
                                    <p class="header_bottom">Summary</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </section>
                            </div>
                        </div>
                        <div class="row m-0">
                            <div class="container">
                                <section class="profile-interest">
                                    <p class="header_bottom">Interest</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </section>
                            </div>
                        </div>
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
                        <div class="col-lg-12 col-md-12 profile-content p-0">
                            <View data={this.props.data}/>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Profile;

// <LeftSidebar data={this.props.data}/>