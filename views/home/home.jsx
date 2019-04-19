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

        let userName = this.props.data.userDetails.username;
        let formAction = '/profile/'+ userName;

        return(
            <html>
                <div class="col">
                    <a class="navbar-brand col" href="/home">
                        <span class="glyphicon glyphicon-home"> Home</span>
                    </a>
                    <a class="navbar-brand col" href={formAction}>
                        <span class="glyphicon glyphicon-user text-capitalize"> {userName}</span>
                    </a>
                </div>
            </html>
        )
    }
}

class RightSidebar extends React.Component{
    render(){

        return(
            <html>

            </html>
        )
    }
}

class ViewOthers extends React.Component{
    render(){
        console.log('VIEW OTHER USERS!!!')
        console.log(this.props.data.otherUsers);

        const usersList = this.props.data.otherUsers;
        let outList;

        if(usersList == undefined){
            outList = 'List of Community Spaces';
        } else {

            outList = usersList.map((item,index)=>{
                let formAction = `/profile/${item.username}`
            return    <div class="card">
                            <div class="d-flex flex-column">
                            <div class="profile-img text-center">
                                <img class="card-img" src={item.profile_pic_url}/>
                            </div>
                            <div class="mb-4 mt-1 ml-2">
                                <h2 class="text-left font-weight-bold text-nowrap text-capitalize">{item.profile_desc}</h2>
                            </div>
                            <div>

                                <a href={formAction} class="" role="button" aria-pressed="true">
                                <h4 class="text-secondary p-2">Contact: {item.username}</h4>
                                <h4 class="text-secondary p-2">Location: {item.location}</h4>
                                </a>
                            </div>
                        </div>
                    </div>
            })
        }

        return(
            <html>
                <div class="row p-2">
                    {outList}
                </div>
            </html>
        )
    }
}

// class sort

class Home extends React.Component {
    render(){


        return (
            <html>
                <Head/>
                <body>
                    <NavBar/>

                    <div>
                        <div class="row">
                            <div class="col-lg-2 col-md-12 dash-board-left">
                                <LeftSidebar data={this.props.data}/>
                            </div>
                            <div class="col-lg-9 col-md-12 dash-board">
                                <ViewOthers data={this.props.data}/>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Home;




/*
<div class="form-button text-right">
                                            <input type="submit" class="btn btn-outline-primary border border-primary btn-lg " value="SEARCH"/>
                                        </div>
*/


// spare user userDetails
/*
<h6>User profile: </h6>
                    <h8>{this.props.data.userDetails.username}</h8>
                    <div class="border">
                        <h8>{this.props.data.userDetails.profile_desc}</h8>
                    </div>
                    <h6>Location: </h6>
                    <h8>{this.props.data.userDetails.location}</h8>
                    <h6>Location: </h6>
                    <h8>{this.props.data.userDetails.location}</h8>
                    <h3>User profile: {this.props.data.userDetails.username}</h3>
                    <h3>{this.props.data.userDetails.profile_desc}</h3>
                    <h3>{this.props.data.userDetails.interest}</h3>
                    */