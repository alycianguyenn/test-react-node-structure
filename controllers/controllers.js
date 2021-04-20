
// example 
const saySomething = (req, res, next) => {
    res.status(200).json({
        body: 'Hello from the server!'
    });
};

// added communication
const helloWorldd = (req, res, next) => {
    res.status(200).json({
        body: 'HELLO WORLD!'
    })
}

module.exports.saySomething = saySomething;
module.exports.helloWorldd = helloWorldd;