const monObjet = {
    name: "Hervé",
    campus: "Bordeaux",
}

const mesInfos = () => {
    var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hi my name is ${monObjet.name}, I'm from ${monObjet.campus} campus`,
	e : "oO",
	T : "U "
}));
};

module.exports = mesInfos;