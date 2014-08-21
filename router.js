function Bucket(){
	this.size = DHT_SETTINGS().k;
	this.routes = new Array(this.size);
};

function Route(peerId){
	this.peerId = peerId;
};