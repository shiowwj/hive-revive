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
                    <h4>
                        <p>
                        Do Something
                        <br></br>
                        Do Something
                        <br></br>
                        Do Something
                        </p>
                    </h4>
                    </section>
                </div>
            </html>
        )
    }
}

class SignUpForm extends React.Component{
    render(){
        return (
            <html>
                <div class="p-2 m-4">
                    <h2>Register an account</h2>
                    <div class="row justify-content-center">
                        <form method="POST" action="/register/user">
                        <div class="mt-3">
                            <label>Location</label>
                            <input type="text" class="form-control" name="location" required/>
                        </div>
                         <div class="mt-3">
                            <label>Profile Description</label>
                            <textarea class="form-control" rows="2" name="profile_desc" required></textarea>
                        </div>
                         <div class="mt-3">
                            <label>What type of help do you want to provide?</label>
                            <textarea class="form-control" rows="2" name="interest" required></textarea>
                        </div>
                            <input type="text" class="form-control invisible" name="type" value="freelance"/>
                        <div class="">
                            <label>Upload Photo</label>
                            <input type="text" class="form-control" name="profile_pic_url"/>
                        </div>
                        <div class="mt-3">
                            <label>New Username for Login</label>
                            <input type="text" class="form-control" name="username" required/>
                        </div>
                        <div class="mt-3">
                            <label>Password</label>
                            <input type="password" class="form-control" name="password" required/>
                        </div>
                        <button type="submit" class="btn-success border border-primary btn-lg mt-5">Create Account</button>
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
                <body>
                    <div class="container">
                        <div class="row justify-content-center">

                            <div class="col-6  bg-light">
                                <SignUpForm/>
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
 //                                <Aside/>
 //                            </div>