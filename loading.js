function ImgBank(){
	this.buffer = new Array();
	this.pic = new Object();
	this.error = 0;
	this.unload = 0;
	this.loaded = 0;
	this.nextLoad = 0;
}
ImgBank.prototype = {
		preload: function(imglist,callback){
			this.unload = imglist.length;
			this.error = 0;
			this.loaded = 0;
			this.nextLoad = 0;
			this.buffer = imglist;
						
			var self = this;
			var timer = function(){
				if(self.loaded == self.unload){	
					callback();
				}else if(self.loaded > self.nextLoad){	
					self.nextLoad++;
					self.loadimg();
					setTimeout(timer,10);
				}else{
					setTimeout(timer,10);
				}
			}
			this.loadimg();
			setTimeout(timer,10);
		
		},
		
		loadimg: function(){	
			var ref = this.buffer[this.nextLoad];
			var img = new Image();
				img.src = ref;
			var self = this;
			
			img.onload = function(){
				var canvas = document.createElement("canvas");
					canvas.height = img.height;
					canvas.width = img.width;
				var ctx = canvas.getContext("2d");
					ctx.drawImage(img,0,0);
					
				self.pic[ref] = canvas;
				self.loaded++;
			};
			
			img.onerror = function(){
				self.loaded++;
				self.error++;			
			};
			
		}
}
var list = ["img/link.png", "img/sword.png",
		"img/map/B6.png","img/map/C5.png","img/map/C6.png","img/map/C7.png","img/map/D6.png","img/map/E6.png","img/map/B5.png",
		"img/map/house1.png",
		"img/map/M/B6.png","img/map/M/C5.png","img/map/M/C6.png","img/map/M/C7.png","img/map/M/D6.png","img/map/M/E6.png","img/map/M/B5.png",
		"img/instructions.png","img/instructions1.png","img/instructions2.png","img/instructions3.png",
		"img/enemies/antifairy.png","img/enemies/chuchu.png","img/enemies/cloudpiranha.png","img/enemies/keaton.png",
		"img/enemies/keese.png","img/enemies/leever.png","img/enemies/armos.png","img/enemies/octorock.png",
		"img/enemies/puffstool.png","img/enemies/rope.png","img/enemies/spearmoblin.png","img/enemies/spikedbeetle.png",
		"img/enemies/tektike.png","img/enemies/wisp.png",
		"img/heart.png", "img/items.png", "img/message.png", "img/red.png"
		];
var bank = new ImgBank();