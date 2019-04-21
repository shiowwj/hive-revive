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

                <script type="text/javascript" src="gMap.js" />
                <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDB3x7-VzZ46Ozbqdpsb_VAt9_gcxAfuRs&libraries=places&callback=initMap" />
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

class LeftSidebar extends React.Component{
    render(){

        let userName = this.props.data.resultUser.username;
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

class UserProfile extends React.Component{
    render(){

        console.log("PROFilLEEEE AREA");
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

class Comments extends React.Component{
    render(){

        console.log('COMMENTS AREA');
        console.log(this.props.data);
        const comments = this.props.data;

        let outList = comments.map((item,index) => {
            return  <div class="comment-drawer border border-primary py-3 my-2 mx-2">
                        <div>
                            {item.comments}
                        </div>
                        <div>
                            {item.username}
                        </div>
                    </div>

        })


        return(
            <html>
                <div class="col">
                    <p class="px-2 mx-2 py-2 my-2">Comments</p>
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
        const currentprofileViewUser = this.props.data.resultProfile.username;
        let formActionPostComment = `/contact/${currentprofileViewUser}`;

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
                            <div class="px-5 py-5 my-4 mx-4 border border-danger">
                                PHOTO ALBUM STUFF!!!
                            </div>

                                <div class="col">
                                    <UserProfile data={this.props.data.resultProfile}/>
                                </div>
                                <div class="col border-primary">
                                    <Comments data={this.props.data.resultComment}/>
                                    <div class="px-5 py-5 my-4 mx-4">
                                        <form method="POST" action={formActionPostComment}>
                                        <div class="my-1">
                                            <label class="my-1 py-1 mx-1 px-1 text-secondary">Say something to Uncle luh</label>
                                            <div class="d-flex flex-row">
                                            <textarea class="form-control comment-drawer" rows="3" name="comments"></textarea>
                                            <button type="submit" class="btn-success border border-primary btn-sm my-1 mx-2 px-4">Enter</button>
                                            </div>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Contact
;