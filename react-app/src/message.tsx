
//PascalCasing - conventionally used for react where first letter is also captialised
function Message () {
    // this is jsx code NOT html which gets complied down to JS - go to babeljs.io/repl to see how its converted
    const name = 'harkirt';
if (name)
    return <h1>Hello World {name}</h1>; // can write any JS expression in '{}' - which a a value 
return <h1>Hello World</h1>
}

export default Message;