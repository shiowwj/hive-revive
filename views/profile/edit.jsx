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
                    <a class="navbar-brand col bg-light menu-bar" id="home-button" href="/home">
                        <span class="glyphicon glyphicon-home"></span>
                    </a>
                    <a class="navbar-brand col bg-light menu-bar" id="edit-button" href={formAction}>
                        <span class="glyphicon glyphicon-wrench"></span>
                    </a>
                </div>
            </html>
        )
    }
}

class Edit extends React.Component {
    render(){

        console.log('PROFILEEEE JSX');
        console.log(this.props.data);
        let userName = this.props.data.username;
        let typeOfName;
        let skills;
        if(this.props.data.type == "freelance"){
            typeOfName = 'Name';
        } else {
            typeOfName = 'Shop Name';
        }
        // let userId =
        let formAction = '/profile/' + this.props.data.username + '?_method=PUT';
        return (
            <html>
                <Head data={this.props.data}/>
                <body>
                    <main>

                            <NavBar/>
                            <div class="row">
                                <div class="col-lg-2">
                                    <LeftSidebar data={this.props.data}/>
                                </div>
                                <div class="col-lg-1">

                                </div>
                                <div class="p-3 col-lg-7 my-3">
                                    EDIT PROFILE
                                    <div class="row justify-content-center d-flex flex-column">
                                        <form method="POST" action={formAction}>
                                        <div class="mt-3">
                                            <label>Change Location</label>
                                            <input type="text" class="form-control" name="location" value={this.props.data.location}/>
                                        </div>
                                        <div class="mt-3">
                                            <label>{typeOfName}</label>
                                            <input type="text" class="form-control" name="name" value={this.props.data.name}/>
                                        </div>
                                         <div class="mt-3">
                                            <label>Edit Profile Description</label>
                                            <textarea class="form-control" rows="2" name="profile_desc" value={this.props.data.profile_desc}></textarea>
                                        </div>
                                         <div class="mt-3">
                                            <label>Edit Interest</label>
                                            <textarea class="form-control" rows="2" name="interest" value={this.props.data.interest}></textarea>
                                        </div>
                                        <div class="mt-3">
                                            <label>Change Type</label>
                                            <textarea type="text" class="form-control" name="type" value={this.props.data.type}></textarea>
                                        </div>
                                        <div class="mt-3">
                                            <label>Photo URL</label>
                                            <input type="text" class="form-control" name="profile_pic_url" value={this.props.data.profile_pic_url}/>
                                        </div>
                                        <div class="mt-3">
                                            <label>Edit Username</label>
                                            <input type="text" class="form-control" name="username" value={this.props.data.username}/>
                                        </div>
                                        <button type="submit" class="btn-success border border-primary btn-lg mt-5">Submit Changes</button>
                                        </form>
                                    </div>
                                </div>

                            </div>

                    </main>
                </body>
            </html>
        );
    }
}

module.exports = Edit;