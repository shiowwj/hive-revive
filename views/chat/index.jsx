var React = require("react");

class Head extends React.Component{
    render() {
        return(
            <html>
                <head>
                    <title>Chat Stuff</title>
                    <link rel="stylesheet" href="/chatStyle.css"/>
                </head>
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
                    <ul id="messages"></ul>
                    <form action="">
                        <input id="m" autocomplete="off" /><button>Send</button>
                    </form>
                    <script src="/socket.io/socket.io.js"></script>
                    <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
                    <script src="/chatScript.js"></script>
                </body>
            </html>
        );
    }
}
module.exports = Contact;