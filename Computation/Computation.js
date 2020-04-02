module.exports = function(RED) {
	function ComputationNode(config) {
		RED.nodes.createNode (this,config);
		var node= this;
		this.input1= config.input1;
		this.input2= config.input2;
		node.on('input', function(msg) {
			msg.payload = Number(this.input1) + Number(this.input2);
			node.send(msg);
		});
	}
	RED.nodes.registerType('Computation', ComputationNode); 
}