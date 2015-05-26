var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var link_width = 36;
var link_height = 46;
var link_left = _left+300;
var link_top = _top+400;
///////////////////////
var bool_link_left = false;
var bool_link_right = false;
var bool_link_top = false;
var bool_link_bottom = false;
////////////////////////
var bool_link_left2 = false;
var bool_link_right2 = false;
var bool_link_top2 = false;
var bool_link_bottom2 = true;
////////////////////////
var block_link_left = false;
var block_link_right = false;
var block_link_top = false;
var block_link_bottom = false;

var link_life = 12;

var A_link = new Anim(1, 1, 18, 23);
var A_chuchu = new Anim(1, 1, 19, 19);
var A_octorock_B = new Anim(1, 1, 19, 16); var A_octorock_T = new Anim(1, 1, 19, 16); var A_octorock_L = new Anim(1, 1, 19, 16); var A_octorock_R = new Anim(1, 1, 19, 16);
var A_antifairy = new Anim(1, 1, 16, 18);
var A_spearmoblin_B = new Anim(1, 1, 100, 100); var A_spearmoblin_T = new Anim(1, 1, 100, 100); var A_spearmoblin_L = new Anim(1, 1, 100, 100); var A_spearmoblin_R = new Anim(1, 1, 100, 100);

var map = "img/map/E6.png";
var link = "img/link.png";
var instructions = "img/instructions.png"; var P_instructions = new Picture(1100, 10, 356, 642, true);
var mapworld = "img/map/M/E6.png"; var P_mapworld = new Picture(_left, _top , _width, _height, false);
var heart = "img/heart.png";
var info = "img/message.png";

var speed_link = 4;
var bool_sword = false;

var i;
var pause = false;

var bool_message = new Array(100);

var lvl = new Array(100);
var batU = new Array(100);
var batD = new Array(100);
var batL = new Array(100);
var batR = new Array(100);
var house = new Array(100);
var bat_house = new Array(100);

var bat_tornado = false;

var useSword = false;

var rand_sword;
var rand_tornado;
var rand_hurt;

var bool_music = true;
var bool_song = true;
var volume_music = 0.3;
var volume_song = 0.5;

var CC1 = document.querySelector('#CC1'); CC1.volume = volume_music;
var sanctuary = document.querySelector('#sanctuary'); sanctuary.volume = volume_music;
var excalibur = document.querySelector('#excalibur'); excalibur.volume = volume_music;
var house = document.querySelector('#house'); house.volume = volume_music;
var M_boss1 = document.querySelector('#boss1'); M_boss1.volume = volume_music;

var sword1 = document.querySelector('#S_sword1'); sword1.volume = volume_song;
var sword2 = document.querySelector('#S_sword2'); sword2.volume = volume_song;
var sword3 = document.querySelector('#S_sword3'); sword3.volume = volume_song;
var sword4 = document.querySelector('#S_sword4'); sword4.volume = volume_song;
var tornado1 = document.querySelector('#S_tornado1'); tornado1.volume = volume_song;
var tornado2 = document.querySelector('#S_tornado2'); tornado2.volume = volume_song;
var swordCharging = document.querySelector('#S_swordCharging'); swordCharging.volume = volume_song;
var enemyHit = document.querySelector('#S_enemyHit'); enemyHit.volume = volume_song;
var hurt1 = document.querySelector('#S_hurt1'); hurt1.volume = volume_song;
var hurt2 = document.querySelector('#S_hurt2'); hurt2.volume = volume_song;
var hurt3 = document.querySelector('#S_hurt3'); hurt3.volume = volume_song;
var newItem = document.querySelector('#S_newItem'); newItem.volume = volume_song;
var door_close = document.querySelector('#S_door_close'); door_close.volume = volume_song;
var door_open = document.querySelector('#S_door_open'); door_open.volume = volume_song;
var secret = document.querySelector('#S_secret'); secret.volume = volume_song;
var die = document.querySelector('#S_die'); secret.volume = volume_song;
var S_switch = document.querySelector('#S_switch'); S_switch.volume = volume_song;
var S_switch2 = document.querySelector('#S_switch2'); S_switch2.volume = volume_song;
var miniBossHit = document.querySelector('#S_miniBossHit'); miniBossHit.volume = volume_song;
var miniBossDie = document.querySelector('#S_miniBossDie'); miniBossDie.volume = volume_song;
var bling = document.querySelector('#S_bling'); bling.volume = volume_song;

var bool_loading = true;
var loading_link = document.getElementById('loading_link');
loading_link.innerHTML = "<img src=\"img/loading_link.gif\"></img>";
loading_link.style.position = "absolute";
loading_link.style.top = (_top+(_height/2)) + "px";
loading_link.style.left = (_left+(_width/2)) + "px";
var loading_label = document.getElementById('loading_label');
loading_label.innerHTML = "<img src=\"img/loading_label.gif\"></img>";
loading_label.style.position = "absolute";
loading_label.style.top = (_top+(_height/2)-50) + "px";
loading_label.style.left = (_left+(_width/2)-150) + "px";

window.onload = function() {
/*	getSword = true;
	getKey1 = true;
	getKeyBoss1 = true;*/
	message(10, P_message10);
	
	CC1.play();
	
	var a;for(a = 0; a < bool_message.length; a++){ bool_message[a] = false; }
	var a2;for(a2 = 0; a2 < bool_music.length; a2++){ bool_music[a2] = false; }
	
	context.lineWidth = "1";
	context.strokeStyle = "rgba(0, 0, 0, 1)";
	context.strokeRect(_left, _top, _width, _height);

	lvls();
	lvl[1] = true;
	
	draw();
}

window.requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame    ||
           window.oRequestAnimationFrame      ||
           window.msRequestAnimationFrame     ||
           function(callback){
               window.setTimeout(callback, 1000 / 60);
           };
})();

function link_die(){
	link_left = _left+300;
	link_top = _top+400;
	link_life = 12;
	if(lvl[6]){ if(!getBoss1){ M_boss1.pause(); M_boss1.currentTime = 0; CC1.play(); } }
	lvls();
	lvl[1] = true;
	T_chrono.enabled = false; T_chrono.tick = 0;
	block_boss1 = true;
	E_chuchu1.left = _left+150; E_chuchu1.top = _top+150; E_chuchu1.width = 38; E_chuchu1.height = 38; E_chuchu1.visible = true; 
	E_chuchu2.left = _left+450; E_chuchu2.top = _top+150; E_chuchu2.width = 38; E_chuchu2.height = 38; E_chuchu2.visible = true;
	square_count = 0; vertical_count = 0; horizontal_count = 0;
	map = "img/map/E6.png";
	mapworld = 'img/map/M/E6.png';
	bool_message[7] = false;
	bool_link_left = false; bool_link_right = false; bool_link_top = false; bool_link_bottom = false;
	bool_link_left2 = false; bool_link_right2 = false; bool_link_top2 = false; bool_link_bottom2 = true;
}

function life(){
	if(link_life < 0) link_life = 0;
	if(link_life > 12) link_life = 12;
	switch(link_life){
		case 1 : context.drawImage(bank.pic[heart], 29, 1, 26, 24, _left+20, _top+20, 26, 24); break;
		case 2 : context.drawImage(bank.pic[heart], 57, 1, 26, 24, _left+20, _top+20, 26, 24); break;
		case 3 : context.drawImage(bank.pic[heart], 85, 1, 26, 24, _left+20, _top+20, 26, 24); break;
		case 4 : context.drawImage(bank.pic[heart], 113, 1, 26, 24, _left+20, _top+20, 26, 24); break;
		default : if(link_life <= 0) context.drawImage(bank.pic[heart], 1, 1, 26, 24, _left+20, _top+20, 26, 24); break;
	}
	if(link_life >= 4){
		context.drawImage(bank.pic[heart], 113, 1, 26, 24, _left+20, _top+20, 26, 24);
	}
	switch(link_life){
		case 5 : context.drawImage(bank.pic[heart], 29, 1, 26, 24, _left+51, _top+20, 26, 24); break;
		case 6 : context.drawImage(bank.pic[heart], 57, 1, 26, 24, _left+51, _top+20, 26, 24); break;
		case 7 : context.drawImage(bank.pic[heart], 85, 1, 26, 24, _left+51, _top+20, 26, 24); break;
		case 8 : context.drawImage(bank.pic[heart], 113, 1, 26, 24, _left+51, _top+20, 26, 24); break;
		default : if(link_life <= 4) context.drawImage(bank.pic[heart], 1, 1, 26, 24, _left+51, _top+20, 26, 24); break;
	}
	if(link_life >= 8){
		context.drawImage(bank.pic[heart], 113, 1, 26, 24, _left+51, _top+20, 26, 24);
	}
	switch(link_life){
		case 9 : context.drawImage(bank.pic[heart], 29, 1, 26, 24, _left+82, _top+20, 26, 24); break;
		case 10 : context.drawImage(bank.pic[heart], 57, 1, 26, 24, _left+82, _top+20, 26, 24); break;
		case 11 : context.drawImage(bank.pic[heart], 85, 1, 26, 24, _left+82, _top+20, 26, 24); break;
		case 12 : context.drawImage(bank.pic[heart], 113, 1, 26, 24, _left+82, _top+20, 26, 24); break;
		default : if(link_life <= 8) context.drawImage(bank.pic[heart], 1, 1, 26, 24, _left+82, _top+20, 26, 24); break;
	}
	if(link_life >= 12){
		context.drawImage(bank.pic[heart], 113, 1, 26, 24, _left+82, _top+20, 26, 24);
	}
	if(link_life == 0){
		if(!bool_message[7]){ if(bool_song){ die.play(); } }
		message(7, P_message7);
		if(!P_message7.visible){
			link_die();
		}
	}
}

function draw(){
	context.save();
	context.clearRect(0, 0, 1500, 750);
	
	context.drawImage(bank.pic[map], _left, _top, _width, _height);
	item();
	draw_enemies();
	context.drawImage(bank.pic[instructions], P_instructions.left, P_instructions.top, P_instructions.width, P_instructions.height);
	context.drawImage(bank.pic[link], A_link.left, A_link.top, A_link.width, A_link.height, link_left, link_top, link_width, link_height);
	life();
	if(P_mapworld.visible){
		context.drawImage(bank.pic[mapworld], P_mapworld.left, P_mapworld.top, P_mapworld.width, P_mapworld.height);
	}
	
	if(bool_loading){
		loading_label.innerHTML = "";
		loading_link.innerHTML = "";
	}
	
	context.restore();
	
	mapping();
	music();
	messages();
	link_walk();
	sword();
	tornado();
	boss();
	decor();
	timer();
	
	window.requestAnimFrame(function() { draw() });
}

bank.preload(list,draw);

function link_walk(){
	if(!pause){
		if(bool_link_left){
			link_width = 46; link_height = 46;
			link_left -= speed_link;
			switch(T_walk.tick){
				case 1: link = "img/link.png"; A_link.left = 1; A_link.top = 50; A_link.width = 23; A_link.height = 22; break;
				case 2: link = "img/link.png"; A_link.left = 25; A_link.top = 50; A_link.width = 23; A_link.height = 22; break;
				case 3: link = "img/link.png"; A_link.left = 49; A_link.top = 50; A_link.width = 23; A_link.height = 22; break;
				case 4: link = "img/link.png"; A_link.left = 73; A_link.top = 50; A_link.width = 23; A_link.height = 22; break;
				case 5: link = "img/link.png"; A_link.left = 97; A_link.top = 50; A_link.width = 23; A_link.height = 22; break;
				case 6: link = "img/link.png"; A_link.left = 121; A_link.top = 50; A_link.width = 23; A_link.height = 22; break;
				case 7: link = "img/link.png"; A_link.left = 145; A_link.top = 50; A_link.width = 23; A_link.height = 22; break;
				case 8: link = "img/link.png"; A_link.left = 169; A_link.top = 50; A_link.width = 23; A_link.height = 22; break;
				case 9: link = "img/link.png"; A_link.left = 193; A_link.top = 50; A_link.width = 23; A_link.height = 22; break;
				case 10: link = "img/link.png"; A_link.left = 217; A_link.top = 50; A_link.width = 23; A_link.height = 22; break;
			}
			if(T_walk.tick > 10){
				T_walk.tick = 0;
			}
		}
		if(bool_link_right){
			link_width = 46; link_height = 48;
			link_left += speed_link;
			switch(T_walk.tick){
				case 1: link = "img/link.png"; A_link.left = 1; A_link.top = 73; A_link.width = 23; A_link.height = 22; break;
				case 2: link = "img/link.png"; A_link.left = 25; A_link.top = 73; A_link.width = 23; A_link.height = 22; break;
				case 3: link = "img/link.png"; A_link.left = 49; A_link.top = 73; A_link.width = 23; A_link.height = 22; break;
				case 4: link = "img/link.png"; A_link.left = 73; A_link.top = 73; A_link.width = 23; A_link.height = 22; break;
				case 5: link = "img/link.png"; A_link.left = 97; A_link.top = 73; A_link.width = 23; A_link.height = 22; break;
				case 6: link = "img/link.png"; A_link.left = 121; A_link.top = 73; A_link.width = 23; A_link.height = 22; break;
				case 7: link = "img/link.png"; A_link.left = 145; A_link.top = 73; A_link.width = 23; A_link.height = 22; break;
				case 8: link = "img/link.png"; A_link.left = 169; A_link.top = 73; A_link.width = 23; A_link.height = 22; break;
				case 9: link = "img/link.png"; A_link.left = 193; A_link.top = 73; A_link.width = 23; A_link.height = 22; break;
				case 10: link = "img/link.png"; A_link.left = 217; A_link.top = 73; A_link.width = 23; A_link.height = 22; break;
			}
			if(T_walk.tick > 10){
				T_walk.tick = 0;
			}
		}
		if(bool_link_top){
			link_width = 36; link_height = 52; 
			link_top -= speed_link;
			switch(T_walk.tick){
				case 1: link = "img/link.png"; A_link.left = 1; A_link.top = 96; A_link.width = 18; A_link.height = 24; break;
				case 2: link = "img/link.png"; A_link.left = 20; A_link.top = 96; A_link.width = 18; A_link.height = 24; break;
				case 3: link = "img/link.png"; A_link.left = 39; A_link.top = 96; A_link.width = 18; A_link.height = 24; break;
				case 4: link = "img/link.png"; A_link.left = 58; A_link.top = 96; A_link.width = 18; A_link.height = 24; break;
				case 5: link = "img/link.png"; A_link.left = 77; A_link.top = 96; A_link.width = 18; A_link.height = 24; break;
				case 6: link = "img/link.png"; A_link.left = 96; A_link.top = 96; A_link.width = 18; A_link.height = 24; break;
				case 7: link = "img/link.png"; A_link.left = 115; A_link.top = 96; A_link.width = 18; A_link.height = 24; break;
				case 8: link = "img/link.png"; A_link.left = 134; A_link.top = 96; A_link.width = 18; A_link.height = 24; break;
				case 9: link = "img/link.png"; A_link.left = 153; A_link.top = 96; A_link.width = 18; A_link.height = 24; break;
				case 10: link = "img/link.png"; A_link.left = 172; A_link.top = 96; A_link.width = 18; A_link.height = 24; break;
			}
			if(T_walk.tick > 10){
				T_walk.tick = 0;
			}
		}
		if(bool_link_bottom){
			link_width = 36; link_height = 48;
			link_top += speed_link;
			switch(T_walk.tick){
				case 1: link = "img/link.png"; A_link.left = 1; A_link.top = 25; A_link.width = 18; A_link.height = 24; break;
				case 2: link = "img/link.png"; A_link.left = 20; A_link.top = 25; A_link.width = 18; A_link.height = 24; break;
				case 3: link = "img/link.png"; A_link.left = 39; A_link.top = 25; A_link.width = 18; A_link.height = 24; break;
				case 4: link = "img/link.png"; A_link.left = 58; A_link.top = 25; A_link.width = 18; A_link.height = 24; break;
				case 5: link = "img/link.png"; A_link.left = 77; A_link.top = 25; A_link.width = 18; A_link.height = 24; break;
				case 6: link = "img/link.png"; A_link.left = 96; A_link.top = 25; A_link.width = 18; A_link.height = 24; break;
				case 7: link = "img/link.png"; A_link.left = 115; A_link.top = 25; A_link.width = 18; A_link.height = 24; break;
				case 8: link = "img/link.png"; A_link.left = 134; A_link.top = 25; A_link.width = 18; A_link.height = 24; break;
				case 9: link = "img/link.png"; A_link.left = 153; A_link.top = 25; A_link.width = 18; A_link.height = 24; break;
				case 10: link = "img/link.png"; A_link.left = 172; A_link.top = 25; A_link.width = 18; A_link.height = 24; break;
			}
			if(T_walk.tick > 10){
				T_walk.tick = 0;
			}
		}
	}
}

function sword(){
	if(T_sword.enabled){
		if(bool_link_bottom2){
			switch(T_sword.tick){
				case 1: link_width = 90; link_height = 74; link = "img/sword.png"; A_link.left = 1; A_link.top = 1; A_link.width = 45; A_link.height = 37; useSword = true; break;
				case 2: link_width = 90; link_height = 74; link = "img/sword.png"; A_link.left = 47; A_link.top = 1; A_link.width = 45; A_link.height = 37; break;
				case 3: link_width = 90; link_height = 74; link = "img/sword.png"; A_link.left = 93; A_link.top = 1; A_link.width = 45; A_link.height = 37; break;
				case 4: link_width = 90; link_height = 74; link = "img/sword.png"; A_link.left = 139; A_link.top = 1; A_link.width = 45; A_link.height = 37; break;
				case 5: link_width = 90; link_height = 74; link = "img/sword.png"; A_link.left = 185; A_link.top = 1; A_link.width = 45; A_link.height = 37; break;
				case 6: link_width = 90; link_height = 74; link = "img/sword.png"; A_link.left = 231; A_link.top = 1; A_link.width = 45; A_link.height = 37; break;
				case 7: link_width = 90; link_height = 74; link = "img/sword.png"; A_link.left = 277; A_link.top = 1; A_link.width = 45; A_link.height = 37; break;
				case 8: link_width = 90; link_height = 74; link = "img/sword.png"; A_link.left = 323; A_link.top = 1; A_link.width = 45; A_link.height = 37; useSword = false; break;
			}
			if(!bool_sword){
				if(T_sword.tick > 8 && T_sword.tick < 30){
					T_sword.enabled = false;
					T_sword.tick = 0;
					link_width = 36; link_height = 48;
					link = "img/link.png"; A_link.left = 1; A_link.top = 1; A_link.width = 18; A_link.height = 23;
				}
				else if(T_sword.tick >= 30){
					swordCharging.pause();
					swordCharging.currentTime = 0;
					T_sword.enabled = false;
					T_sword.tick = 0;
					T_tornado.enabled = true;
				}
			}
			else{
				if(T_sword.tick == 30){
					speed_link = 1;
					if(bool_song){
						swordCharging.play();
					}
				}
			}
		}
		if(bool_link_top2){
			switch(T_sword.tick){
				case 1: link_width = 92; link_height = 70; link = "img/sword.png"; A_link.left = 1; A_link.top = 39; A_link.width = 46; A_link.height = 35; useSword = true; break;
				case 2: link_width = 92; link_height = 70; link = "img/sword.png"; A_link.left = 48; A_link.top = 39; A_link.width = 46; A_link.height = 35; break;
				case 3: link_width = 92; link_height = 70; link = "img/sword.png"; A_link.left = 95; A_link.top = 39; A_link.width = 46; A_link.height = 35; break;
				case 4: link_width = 92; link_height = 70; link = "img/sword.png"; A_link.left = 142; A_link.top = 39; A_link.width = 46; A_link.height = 35; break;
				case 5: link_width = 92; link_height = 70; link = "img/sword.png"; A_link.left = 189; A_link.top = 39; A_link.width = 46; A_link.height = 35; break;
				case 6: link_width = 92; link_height = 70; link = "img/sword.png"; A_link.left = 236; A_link.top = 39; A_link.width = 46; A_link.height = 35; break;
				case 7: link_width = 92; link_height = 70; link = "img/sword.png"; A_link.left = 283; A_link.top = 39; A_link.width = 46; A_link.height = 35; break;
				case 8: link_width = 92; link_height = 70; link = "img/sword.png"; A_link.left = 330; A_link.top = 39; A_link.width = 46; A_link.height = 35; useSword = false; break;
			}
			if(!bool_sword){
				if(T_sword.tick > 8 && T_sword.tick < 30){
					T_sword.enabled = false;
					T_sword.tick = 0;
					link_width = 36; link_height = 48;
					link = "img/link.png"; A_link.left = 58; A_link.top = 1; A_link.width = 18; A_link.height = 23;
				}
				else if(T_sword.tick >= 30){
					swordCharging.pause();
					swordCharging.currentTime = 0;
					T_sword.enabled = false;
					T_sword.tick = 0;
					T_tornado.enabled = true;
				}
			}
			else{
				if(T_sword.tick == 30){
					speed_link = 1;
					if(bool_song){
						swordCharging.play();
					}
				}
			}
		}
		if(bool_link_left2){
			switch(T_sword.tick){
				case 1: link_width = 70; link_height = 88; link = "img/sword.png"; A_link.left = 1; A_link.top = 75; A_link.width = 35; A_link.height = 44; useSword = true; break;
				case 2: link_width = 70; link_height = 88; link = "img/sword.png"; A_link.left = 37; A_link.top = 75; A_link.width = 35; A_link.height = 44; break;
				case 3: link_width = 70; link_height = 88; link = "img/sword.png"; A_link.left = 73; A_link.top = 75; A_link.width = 35; A_link.height = 44; break;
				case 4: link_width = 70; link_height = 88; link = "img/sword.png"; A_link.left = 109; A_link.top = 75; A_link.width = 35; A_link.height = 44; break;
				case 5: link_width = 70; link_height = 88; link = "img/sword.png"; A_link.left = 145; A_link.top = 75; A_link.width = 35; A_link.height = 44; break;
				case 6: link_width = 70; link_height = 88; link = "img/sword.png"; A_link.left = 181; A_link.top = 75; A_link.width = 35; A_link.height = 44; break;
				case 7: link_width = 70; link_height = 88; link = "img/sword.png"; A_link.left = 217; A_link.top = 75; A_link.width = 35; A_link.height = 44; break;
				case 8: link_width = 70; link_height = 88; link = "img/sword.png"; A_link.left = 253; A_link.top = 75; A_link.width = 35; A_link.height = 44; useSword = false; break;
			}
			if(!bool_sword){
				if(T_sword.tick > 8 && T_sword.tick < 30){
					T_sword.enabled = false;
					T_sword.tick = 0;
					link_width = 36; link_height = 48;
					link = "img/link.png"; A_link.left = 20; A_link.top = 1; A_link.width = 18; A_link.height = 23;
				}
				else if(T_sword.tick >= 30){
					swordCharging.pause();
					swordCharging.currentTime = 0;
					T_sword.enabled = false;
					T_sword.tick = 0;
					T_tornado.enabled = true;
				}
			}
			else{
				if(T_sword.tick == 30){
					speed_link = 1;
					if(bool_song){
						swordCharging.play();
					}
				}
			}
		}
		if(bool_link_right2){
			switch(T_sword.tick){
				case 1: link_width = 72; link_height = 88; link = "img/sword.png"; A_link.left = 1; A_link.top = 120; A_link.width = 36; A_link.height = 44; useSword = true; break;
				case 2: link_width = 72; link_height = 88; link = "img/sword.png"; A_link.left = 38; A_link.top = 120; A_link.width = 36; A_link.height = 44; break;
				case 3: link_width = 72; link_height = 88; link = "img/sword.png"; A_link.left = 75; A_link.top = 120; A_link.width = 36; A_link.height = 44; break;
				case 4: link_width = 72; link_height = 88; link = "img/sword.png"; A_link.left = 112; A_link.top = 120; A_link.width = 36; A_link.height = 44; break;
				case 5: link_width = 72; link_height = 88; link = "img/sword.png"; A_link.left = 149; A_link.top = 120; A_link.width = 36; A_link.height = 44; break;
				case 6: link_width = 72; link_height = 88; link = "img/sword.png"; A_link.left = 186; A_link.top = 120; A_link.width = 36; A_link.height = 44; break;
				case 7: link_width = 72; link_height = 88; link = "img/sword.png"; A_link.left = 223; A_link.top = 120; A_link.width = 36; A_link.height = 44; break;
				case 8: link_width = 72; link_height = 88; link = "img/sword.png"; A_link.left = 260; A_link.top = 120; A_link.width = 36; A_link.height = 44; useSword = false; break;
			}
			if(!bool_sword){
				if(T_sword.tick > 8 && T_sword.tick < 30){
					T_sword.enabled = false;
					T_sword.tick = 0;
					link_width = 36; link_height = 48;
					link = "img/link.png"; A_link.left = 39; A_link.top = 1; A_link.width = 18; A_link.height = 23;
				}
				else if(T_sword.tick >= 30){
					swordCharging.pause();
					swordCharging.currentTime = 0;
					T_sword.enabled = false;
					T_sword.tick = 0;
					T_tornado.enabled = true;
				}
			}
			else{
				if(T_sword.tick == 30){
					speed_link = 1;
					if(bool_song){
						swordCharging.play();
					}
				}
			}
		}
	}
}

function tornado(){
	if(T_tornado.enabled){
		if(bool_song){
			if(!bat_tornado){
				rand_tornado = Math.floor(Math.random()*2+1);
				switch(rand_tornado){
					case 1 : tornado1.play(); break;
					case 2 : tornado2.play(); break;
				}
				bat_tornado = true;
			}
		}
		switch(T_tornado.tick){
			case 1: link_width = 86; link_height = 102; link = "img/sword.png"; A_link.left = 1; A_link.top = 165; A_link.width = 43; A_link.height = 52; useSword = true; break;
			case 2: link_width = 86; link_height = 102; link = "img/sword.png"; A_link.left = 45; A_link.top = 165; A_link.width = 43; A_link.height = 52; break;
			case 3: link_width = 86; link_height = 102; link = "img/sword.png"; A_link.left = 89; A_link.top = 165; A_link.width = 43; A_link.height = 52; break;
			case 4: link_width = 86; link_height = 102; link = "img/sword.png"; A_link.left = 133; A_link.top = 165; A_link.width = 43; A_link.height = 52; break;
			case 5: link_width = 86; link_height = 102; link = "img/sword.png"; A_link.left = 177; A_link.top = 165; A_link.width = 43; A_link.height = 52; break;
			case 6: link_width = 86; link_height = 102; link = "img/sword.png"; A_link.left = 221; A_link.top = 165; A_link.width = 43; A_link.height = 52; break;
			case 7: link_width = 86; link_height = 102; link = "img/sword.png"; A_link.left = 1; A_link.top = 218; A_link.width = 43; A_link.height = 52; break;
			case 8: link_width = 86; link_height = 102; link = "img/sword.png"; A_link.left = 45; A_link.top = 218; A_link.width = 43; A_link.height = 52; break;
			case 9: link_width = 86; link_height = 102; link = "img/sword.png"; A_link.left = 89; A_link.top = 218; A_link.width = 43; A_link.height = 52; break;
			case 10: link_width = 86; link_height = 102; link = "img/sword.png"; A_link.left = 133; A_link.top = 218; A_link.width = 43; A_link.height = 52; break;
			case 11: link_width = 86; link_height = 102; link = "img/sword.png"; A_link.left = 177; A_link.top = 218; A_link.width = 43; A_link.height = 52; break;
			case 12: link_width = 86; link_height = 102; link = "img/sword.png"; A_link.left = 221; A_link.top = 218; A_link.width = 43; A_link.height = 52; break;
			case 13: link_width = 86; link_height = 102; link = "img/sword.png"; A_link.left = 265; A_link.top = 218; A_link.width = 43; A_link.height = 52; useSword = false; break;
		}
		if(T_tornado.tick > 13){
			link_width = 36; link_height = 48;
			if(bool_link_bottom2){
				link = "img/link.png"; A_link.left = 1; A_link.top = 1; A_link.width = 18; A_link.height = 23;
			}
			if(bool_link_top2){
				link = "img/link.png"; A_link.left = 58; A_link.top = 1; A_link.width = 18; A_link.height = 23;
			}
			if(bool_link_left2){
				link = "img/link.png"; A_link.left = 20; A_link.top = 1; A_link.width = 18; A_link.height = 23;
			}
			if(bool_link_right2){
				link = "img/link.png"; A_link.left = 39; A_link.top = 1; A_link.width = 18; A_link.height = 23;
			}
			T_tornado.enabled = false;
			T_tornado.tick = 0;
			bat_tornado = false;
		}
	}
}

window.onkeydown = function(event){
	if(!pause){
		if(event.keyCode == 37){ // gauche
			block_link_right = false; block_link_top = false; block_link_bottom = false;
			if(!block_link_left){
				bool_link_left = true; bool_link_right = false; bool_link_top = false; bool_link_bottom = false;
				bool_link_left2 = true; bool_link_right2 = false; bool_link_top2 = false; bool_link_bottom2 = false;
			}
		}
		if(event.keyCode == 39){ // droite
			block_link_left = false; block_link_top = false; block_link_bottom = false
			if(!block_link_right){
				bool_link_right = true; bool_link_left = false; bool_link_top = false; bool_link_bottom = false;
				bool_link_left2 = false; bool_link_right2 = true; bool_link_top2 = false; bool_link_bottom2 = false;
			}
		}
		if(event.keyCode == 38){ // haut
			block_link_right = false; block_link_left = false; block_link_bottom = false
			if(!block_link_top){
				bool_link_top = true; bool_link_right = false; bool_link_left = false; bool_link_bottom = false;
				bool_link_left2 = false; bool_link_right2 = false; bool_link_top2 = true; bool_link_bottom2 = false;
			}
		}
		if(event.keyCode == 40){ // bas
			block_link_right = false; block_link_top = false; block_link_left = false
			if(!block_link_bottom){
				bool_link_bottom = true; bool_link_right = false; bool_link_top = false; bool_link_left = false;
				bool_link_left2 = false; bool_link_right2 = false; bool_link_top2 = false; bool_link_bottom2 = true;
			}
		}
		
		if(event.keyCode == 77){ // M
			if(P_mapworld.visible){
				P_mapworld.visible = false;
			}
			else if(!P_mapworld.visible){
				P_mapworld.visible = true;
			}
		}
		
		if(event.keyCode == 65){ // A
			if(getSword){
				bool_sword = true;
				if(bool_song){
					if(!T_sword.enabled){
						rand_sword = Math.floor(Math.random()*4+1);
						switch(rand_sword){
							case 1 : sword1.play(); break;
							case 2 : sword2.play(); break;
							case 3 : sword3.play(); break;
							case 4 : sword4.play(); break;
						}
					}
				}
				T_sword.enabled = true;
			}
		}
		
	/*	if(event.keyCode == 78){ // N
			speed_link = 4;
		}
		if(event.keyCode == 66){ // B
			speed_link = 8;
		}
		if(event.keyCode == 86){ // V
			speed_link = 16;
		}*/
		
		if(event.keyCode == 76){ // L
			if(bool_music){
				music_pause();
				if(bool_song) instructions = "img/instructions1.png";
				else instructions = "img/instructions3.png";
				bool_music = false;
			}
			else if(!bool_music){
				music_restart();
				if(bool_song) instructions = "img/instructions.png";
				else instructions = "img/instructions2.png";
				bool_music = true;
			}
		}
		if(event.keyCode == 79){ // O
			if(bool_song){
				if(bool_music) instructions = "img/instructions2.png";
				else instructions = "img/instructions3.png";
				bool_song = false;
			}
			else if(!bool_song){
				if(bool_music) instructions = "img/instructions.png";
				else instructions = "img/instructions1.png";
				bool_song = true;
			}
		}
	
	}
	
	
	/*if(event.keyCode == 90){ // Z
		if(!block_boss1){
			block_boss1 = true;
		}
		else{
			block_boss1 = false;
		}
	}*/
/*	if(event.keyCode == 69){ // E
		link_life--;
	}*/
}

window.onkeyup = function(event){
	if(!pause){
		if(event.keyCode == 37){ // gauche
			T_walk.tick = 0;
			link = "img/link.png"; A_link.left = 20; A_link.top = 1; A_link.width = 18; A_link.height = 23;
			link_width = 36; link_height = 46;
			bool_link_left = false;
		}
		if(event.keyCode == 39){ // droite
			T_walk.tick = 0;
			link = "img/link.png"; A_link.left = 39; A_link.top = 1; A_link.width = 18; A_link.height = 23;
			link_width = 36; link_height = 46;
			bool_link_right = false;
		}
		if(event.keyCode == 38){ // haut
			T_walk.tick = 0;
			link = "img/link.png"; A_link.left = 58; A_link.top = 1; A_link.width = 18; A_link.height = 23;
			link_width = 36; link_height = 46;
			bool_link_top = false;
		}
		if(event.keyCode == 40){ // bas
			T_walk.tick = 0;
			link = "img/link.png"; A_link.left = 1; A_link.top = 1; A_link.width = 18; A_link.height = 23;
			link_width = 36; link_height = 46;	
			bool_link_bottom = false;
		}
		
		if(event.keyCode == 65){ // A
			bool_sword = false;
			speed_link = 4;
			if(!getSword){ bool_message[4] = false; message(4, P_message4); }
		}
	}
	
	if(event.keyCode == 80){ // P
		if(!pause){
			pause = true;
			bool_message[5] = false; message(5, P_message5);
		}
		else{
			pause = false;
			P_message5.visible = false;
		}
	}
	if(event.keyCode == 13){ // ENTER
		pause = false;
		P_message5.visible = false;
		clear_messages();
	}
}

function link_stop(){
	bool_link_left = false;
	bool_link_right = false;
	bool_link_top = false;
	bool_link_bottom = false;
}

function clear_messages(){
	P_message1.visible = false;
	P_message2.visible = false;
	P_message3.visible = false;
	P_message4.visible = false;
	P_message6.visible = false;
	P_message7.visible = false;
	P_message8.visible = false;
	P_message9.visible = false;
	P_message10.visible = false;
}

window.onclick = function(){
	if(!pause){
		bool_message[5] = false; message(5, P_message5);
		pause = true;
	}
	else{
		pause = false;
		P_message5.visible = false;
	}
	clear_messages();
}