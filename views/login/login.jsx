var React = require("react");

class Head extends React.Component{
    render() {
        return(
            <html>
                <head>
                <meta charSet="utf-8"/>
                <title>One Corner</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="/style.css"/>
            </head>
            </html>
        )
    }
}

class Aside extends React.Component{
    render(){
        return(
            <html>
                <div class="row login-page-left justify-content-center">
                    <section class="">
                    <img class="login-img" src="https://static.wixstatic.com/media/319c7f_9ec69a5cb5924ad7a33d4d94e2e6b697~mv2.jpg"/>
                    </section>
                </div>
            </html>
        )
    }
}

class LoginForm extends React.Component{
    render(){
        return (
            <html>
                <div class="p-3 m-5 text-center">
                    <h2>Login with Existing Account</h2>
                    <div class="row pt-4 justify-content-center">
                        <form method="POST" action="/login">
                            <input type="text" class="p-3 ml-2 mr-1" name="username" placeholder="Username"/>
                            <input type="password" class="p-3 ml-1 mr-2" name="password" placeholder="Password"/>
                            <input type="submit" class="btn btn-outline-primary border border-primary btn-lg" value="Login"/>
                        </form>
                    </div>
                </div>
            </html>
        )
    }
}

class SignUp extends React.Component{
    render(){
        return (
            <html>
                <div class="p-3 m-5">
                    <h2 class="text-center">New?</h2>
                        <div class="row">
                        <form method="GET" action="/register/user" class="col">
                            <div class="row justify-content-center">
                                <button type="submit" class="btn-success border border-primary btn-lg mt-3">Kia?</button>
                            </div>
                        </form>
                        <form method="GET" action="/register/entity" class="col">
                            <div class="row justify-content-center">
                                <button type="submit" class="btn-success border border-primary btn-lg mt-3">Ah Pek?</button>
                            </div>
                        </form>
                    </div>
                </div>
            </html>
        )
    }
}

class Login extends React.Component {
    render(){

        return (
            <html>
                <Head/>
                <body class="py-3 my-5 login-body">
                    <div class="container">
                        <div class="row justify-content-center">

                            <div class="col-6  bg-light">
                                <LoginForm/>
                                <SignUp/>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Login;


// <div class="col-6 bg-primary">
//                                 <Aside/>
//                             </div>