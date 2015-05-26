var _width = 640;
var _height = 640;
var _left = 400;
var _top = 10;

function Timer(start, elapsed, tick, interval, enabled){
	this.start = start;
	this.elapsed = elapsed;
	this.tick = tick;
	this.interval = interval;
	this.enabled = enabled;
};

function Picture(left, top, width, height, visible){
	this.left = left;
	this.top = top;
	this.width = width;
	this.height = height;
	this.visible = visible;
};

function Anim(left, top, width, height){
	this.left = left;
	this.top = top;
	this.width = width;
	this.height = height;
};

function Enemy(left, top, width, height, visible, bool_left, bool_top, bool_right, bool_bottom, count){
	this.left = left;
	this.top = top;
	this.width = width;
	this.height = height;
	this.visible = visible;
	this.bool_left = bool_left;
	this.bool_top = bool_top;
	this.bool_right = bool_right;
	this.bool_bottom = bool_bottom;
	this.count = count;
};