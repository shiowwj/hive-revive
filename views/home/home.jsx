var React = require("react");

class Head extends React.Component{
    render() {
        return(
            <html>
                <head>
                <meta name="viewport" content="initial-scale=1.0"/>
                <meta charSet="utf-8"/>
                <title>Hive: Rev</title>
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
                <nav class="navbar  bg-dark">
                     <form class="" method="POST" action="/addtweeds">

                                        <div class="form-group row">

                                            <div class="col">
                                                <input class="form-control "  name="SEARCH FOR LOCATION" value="SEARCH FOR LOCATION"/>
                                            </div>
                                            <div class="col">
                                                <input type="submit" class="btn btn-outline-primary border border-primary btn-sm " value="SEARCH"/>
                                            </div>
                                        </div>
                                    </form>
                    <div>
                        <a class="navbar-brand" href="/home">HIVE   </a>
                    </div>
                    <div>
                        <h3 class="text-danger">NEED A LOG OUT BUTTON</h3>
                    </div>
                </nav>
            </html>
        )
    }
}

class LeftSidebar extends React.Component{
    render(){

        // console.log('VIEW LEFTSIDE!!!')
        // console.log(this.props.data);
        let userName = this.props.data.userDetails.username;
        let formAction = '/profile/'+ userName;

        return(
            <aside>
                <figure class="dash-board-left">
                    <div class="profile-img text-center">
                        <img class="profile-photo" src={this.props.data.userDetails.profile_pic_url}/>
                    </div>
                    <div class="profile-info">
                    <p>
                    <h6>Location: </h6>
                    <h8>{this.props.data.userDetails.location}</h8>
                    </p>


                    </div>
                    <div class="form-button text-center my-3">
                        <a href={formAction} class="btn btn-primary btn-sm active" role="button" aria-pressed="true">View Profile</a>
                    </div>

                </figure>
            </aside>
        )
    }
}

class RightSidebar extends React.Component{
    render(){

        // console.log('RIGHTT SIDEE');
        // console.log(this.props.data.otherUsers);
        const otherUsers = this.props.data.otherUsers;
        let outList;
        if(otherUsers == undefined){
            outList = "No one really uses Tweeder....";
        } else {
            outList = otherUsers.map((item,index) =>{
                //NEED TO EDITT!!!!
                let formAction = "/follow/" + item.username;
                return      <div class="row">
                                <div class="col profile-img text-center">
                                    <img class="side-profile-photo" src={item.profile_pic_url}/>
                                </div>
                                <div class="col">
                                    <div class="">
                                        <p class="text-left">{item.username}</p>
                                    </div>
                                    <div class="">
                                        <form method="POST" action={formAction}>
                                            <input type="submit" class="btn btn-default btn-sm" value="View"/>
                                        </form>
                                    </div>
                                </div>
                            </div>

            });
        }

        return(
            <aside >
                <figure class="d-flex dash-board-right flex-column">
                    <h4 class="text-center">Other Users</h4>
                    {outList}
                </figure>
            </aside>
        )
    }
}

class ViewNearby extends React.Component{
    render(){

        //THIS DATA PASSING IS WRONG
        console.log('VIEW OTHER USERS!!!')
        console.log(this.props);

        const tweedsAll = this.props.data.resultTweeds;
        let outList;
        if(tweedsAll == undefined){
            outList = 'List of Community Spaces';
        } else {

            outList = tweedsAll.map((item,index)=>{
            return  <div class="content tweeds-box">
                        <div class="text-container">
                            <div class="d-flex flex-row justify-content-between">
                                <div>
                                    <p class="text text-left">{item.username}</p>
                                </div>
                                <div>
                                    <a href="/tweeds/edit" class="btn btn-default"><span class="glyphicon glyphicon-pencil"></span></a>
                                    <a href="/tweeds/delete" class="btn btn-default"><span class="glyphicon glyphicon-trash"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
            })
        }


        return(
            <html>
               {outList}

            </html>
        )
    }
}

class Home extends React.Component {
    render(){

        // console.log('home JSX');
        // console.log(this.props.data);
        // // let userId =
        // let formAddPage = `/`
        let formSortKia = `/home`;

        return (
            <html>
                <Head/>
                <body>

                    <main>
                        <NavBar/>
                        <div class="container">

                            <div class="row">
                                <div class="col-2">
                                    <LeftSidebar data={this.props.data}/>
                                </div>
                                <div class="col-8">

                                    <div class="row">
                                        <input type="submit" class="btn btn-outline-primary border border-primary btn-sm " value="Sort"/>
                                        <input type="submit" class="btn btn-outline-primary border border-primary btn-sm " value="sort"/>
                                    </div>
                                    <ViewNearby data={this.props.data}/>
                                </div>
                                <div class="col-2">
                                    <RightSidebar data={this.props.data}/>
                                </div>
                            </div>
                        </div>
                    </main>
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