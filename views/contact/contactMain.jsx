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

        let userName = this.props.data.resultUser.username;
        let formAction = '/profile/'+ userName;

        return(
            <html>
                <div class="col mt-2">
                    <a class="navbar-brand col bg-light menu-bar" id="home-button" href="/home">
                        <span class="glyphicon glyphicon-home"> </span>
                    </a>
                    <a class="navbar-brand col bg-light menu-bar" id="profile-button" href={formAction}>
                        <span class="glyphicon glyphicon-user text-capitalize"> </span>
                    </a>
                    <a class="navbar-brand col bg-light menu-bar" id="edit-button" href="/login">
                        <span class="glyphicon glyphicon-log-out"></span>
                    </a>
                </div>
            </html>
        )
    }
}

class UserProfile extends React.Component{
    render(){

        // console.log("PROFilLEEEE AREA");
        // console.log(this.props.data);

        const dateRaw = this.props.data.created_at;
        const date = dateRaw.slice(0,10);
        let textInterest;
        if(this.props.data.type == 'entity'){

            textInterest = "Looking for: ";
        } else if(this.props.data.type == 'freelance'){

            textInterest = "Able to provide: ";
        }

        return(
            <html>
                <div>
                    <div class="row">
                        <div class="profile-img">
                            <img class="profile-photo" src={this.props.data.profile_pic_url}/>
                        </div>
                         <div class="user-details-section py-5 px-2 mx-4 ">
                            <p class="text-secondary py-2 font-italic">{this.props.data.username}</p>
                            <p class="text-capitalize py-2"> {textInterest} <span class="font-weight-bold"> {this.props.data.interest}</span></p>
                            <p class="py-2">What he has to say: <span class="font-weight-bold font-italic">{this.props.data.profile_desc}</span></p>
                            <p class="py-2">Joined: <span class="text-secondary font-italic">{date}</span></p>
                        </div>
                    </div>
                </div>
            </html>
        )
    }
}

class View extends React.Component{
    render(){
        console.log('VIEWWW PROFILE SECTION');
        console.log(this.props.data);
        let things = this.props.data.resultProfile;
        let setColor;
        let textStuff;
        if(things.type == "freelance"){
            setColor =  'text-success';
        } else {
            setColor =  'text-info';
        }

         if(this.props.data.resultProfile.type == 'entity'){

            textStuff = "Looking for: ";
        } else if(this.props.data.resultProfile.type == 'freelance'){

            textStuff = "Able to provide: ";
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
                                <p class="profile-title text-capitalize">{things.interest}</p>
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

class CommmentsForm extends React.Component{
    render(){

        const currentprofileViewUser = this.props.data.resultProfile.username;
        let formActionPostComment = `/contact/${currentprofileViewUser}`;

        return(
            <form method="POST" action={formActionPostComment}>
                <div class="my-1">
                    <label class="my-1 py-1 mx-1 px-1 text-secondary">Say something luh</label>
                    <div class="d-flex flex-row">
                        <textarea class="form-control comment-drawer" rows="3" name="comments"></textarea>
                        <button type="submit" class="btn-success border border-primary btn-sm my-1 mx-2 px-4">Enter</button>
                    </div>
                </div>
            </form>
        )
    }
}

class Comments extends React.Component{
    render(){

        // console.log('COMMENTS AREA');
        // console.log(this.props.data);
        const comments = this.props.data;

        let outList = comments.map((item,index) => {

            let rawDate = item.created_at;
            let date = rawDate.slice(0,10);

            return  <div class="comment-item">
                        <div>
                            <p class="comment-word">{item.comments}</p>
                        </div>
                        <div>
                            <p class="font-italic mt-2">Posted by {item.username} on {date}</p>
                        </div>
                    </div>

        })


        return(
            <html>
                <div class="">
                    <p class="">Comments</p>
                    {outList}
                </div>
            </html>
        )
    }
}



class Contact extends React.Component {
    render(){

        // console.log('CONTACTTT JSX');
        // console.log(this.props.data);

        return (
            <html>
                <Head/>
                <body>
                    <NavBar/>
                        <View data={this.props.data}/>
                        <div class="container justify-content-center comment-drawer">
                            <CommmentsForm data={this.props.data}/>
                            <Comments data={this.props.data.resultComment}/>
                        </div>
                </body>
            </html>
        );
    }
}

module.exports = Contact;