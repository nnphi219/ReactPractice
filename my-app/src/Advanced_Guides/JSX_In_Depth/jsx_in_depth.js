import React, { Component } from 'react';

const MyComponents = {
    DatePicker: function DatePicker(props) {
        return <div>Imagine a {props.color} datepicker here.</div>;
    }
}

function BlueDatePicker() {
    return <MyComponents.DatePicker color="blue" />;
}

class Jsx_in_depth extends Component {
    render() {
        const Button = props => {
            const { kind, ...other } = props;
            const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
            return <button className={className} {...other} />;
          };
          
          const App = () => {
            return (
              <div>
                <Button kind="primary" onClick={() => console.log("clicked!")}>
                  Hello World!
                </Button>
              </div>
            );
          };
        return (
            <div>
                <App />
              </div>
        );
    }
}

export default Jsx_in_depth;