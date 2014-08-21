function Connector(){
	this.limit = DHT_SETTINGS().connections;
	this.connections = new Array(this.limit);
};

Connector.prototype.connections = function(peerId){
	// not implemented
};