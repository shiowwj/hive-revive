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
                <title>{userName} EDIT PROFILE VIEW</title>
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
                <nav class="navbar navbar-dark bg-dark">
                    <div>
                        <a class="navbar-brand" href="/home">HIVE   </a>
                    </div>
                </nav>
            </html>
        )
    }
}

class Edit extends React.Component {
    render(){

        console.log('PROFILEEEE JSX');
        console.log(this.props.data);
        let userName = this.props.data.username;
        // let userId =
        let formAction = '/profile/' + this.props.data.username + '?_method=PUT';
        return (
            <html>
                <Head data={this.props.data}/>
                <body>
                    <main>
                        <div class="container">
                            <NavBar/>
                            <div class="row">
                                <div class="col-4 text-center">
                                EDIT PROFILE
                                </div>
                                <div class="p-3 col-7">
                                    <div class="row justify-content-center d-flex flex-column">
                                        <form method="POST" action={formAction}>
                                        <div class="mt-3">
                                            <label>Change Location</label>
                                            <input type="text" class="form-control" name="location" value={this.props.data.location}/>
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
                        </div>
                    </main>
                </body>
            </html>
        );
    }
}

module.exports = Edit;