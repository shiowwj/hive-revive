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
                <link rel="stylesheet" href="reset.css"/>
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

class Comments extends React.Component{
    render(){

        console.log('COMMENTS AREA');
        console.log(this.props.data);

        return(
            <html>
            </html>
        )
    }
}

class Connect extends React.Component {
    render(){

        console.log('CONNECTTT JSX');
        console.log(this.props.data);

        return (
            <html>
                <Head/>
                <body>
                    <NavBar/>
                    <div>
                        <div class="row">
                            <div class="col-lg-10 col-md-12 dash-board">
                                <Comments data={this.props.data.comments}/>
                            </div>
                            <div class="col-lg-2 col-md-12 dash-board-right">

                            </div>
                        </div>


                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Connect;