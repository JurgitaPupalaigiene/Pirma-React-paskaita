console.log('Pasileido')
for (var i = 0; i < 10; i++) {
    console.log('Pasileido' + i)
}
const component = < h1 > Hello,
    world < /h1>;

ReactDOM.render(
    component,
    document.getElementById('root')
);

var HelloComponent = React.createClass({
    render: function () {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
        );
    }
});

ReactDOM.render(React.createElement(
        HelloComponent, {
            name: "Jane"
        }),
    document.getElementById('root')
);