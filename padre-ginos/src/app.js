const pizza = (props) => {
    return React.createElement("div", {}, [
        React.createElement("hi", {}, props.name),
        React.createElement("p", {}, props.description), 
    ]);
}
const App = () => {
    return React.createElement ("div", {},[
            React.createElement("h1", {}, "Padre Gino's"),
            React.createElement(pizza, {
                name: "Pepperoni pizza", 
                description: "pepperoni and cheese",
            }),
            React.createElement(pizza, {
                name: "Hawaiian pizza", 
                description: "ham and pineapple",
            }),
            React.createElement(pizza, {
                name: "Americano pizza", 
                descripiton: "tomato base, deep dish and lots of cheese",
            }),
            React.createElement(pizza, {
                name: "Vegetarian pizza",
                description: "spinach, mushrooms and olives"
            }),
            React.createElement(pizza, {
                name: "Cheese pizza",
                description: "garlic and you guessed it cheese!"
            }),
    ]);
};

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(React.createElement(App));

