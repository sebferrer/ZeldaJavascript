var items = "img/items.png";
var P_key1 = new Picture(_left+320, _top+200, 16, 28, false); var getKey1 = false;
var P_door1 = new Picture(_left+0, _top+225, 50, 200, false); var getDoor1 = false;
var P_sword = new Picture(_left+300, _top+150, 28, 46, false); var getSword = false; var swordX = 304; var swordY = 3;
var P_keyBoss1 = new Picture(_left+100, _top+100, 32, 32, false); var appearKeyBoss1 = false; var getKeyBoss1 = false;
var P_doorBoss1 = new Picture(_left+590, _top+225, 50, 200, false); var getDoorBoss1 = false;
var P_door2 = new Picture(_left+0, _top+225, 50, 200, false); var getDoor2 = false;
var P_tower1 = new Picture(_left+50, _top+50, 32, 64, false); var getTower1 = false; var tower1X = 138; var tower1Y = 77;
var P_tower2 = new Picture(_left+550, _top+50, 32, 64, false); var getTower2 = false; var tower2X = 138; var tower2Y = 77;
var P_tower3 = new Picture(_left+50, _top+500, 32, 64, false); var getTower3 = false; var tower3X = 138; var tower3Y = 77;
var P_tower4 = new Picture(_left+550, _top+500, 32, 64, false); var getTower4 = false; var tower4X = 138; var tower4Y = 77;

function item(){
	if(house[1]){
		if(!getKey1){
			P_key1.visible = true;
			if(collision(P_key1)){
				if(bool_song){
					newItem.play();
				}
				getKey1 = true;
				P_key1.left = 50; P_key1.top = 50;
			}
		}
	}
	else{
		if(!getKey1){
			P_key1.visible = false;
		}
	}
	
	if(!getDoor1){
		if(lvl[3]){
			P_door1.visible = true;
			if(getKey1){
				if(collision(P_door1)){
					getDoor1 = true
					if(bool_song){ door_open.play(); }
					P_door1.visible = false;
					P_key1 = false;
				}
			}
		}
		else{ P_door1.visible = false; }
	}
	
	if(lvl[7]){
		P_sword.visible = true;
		if(collision(P_sword)){
			if(swordY == 3){
				if(bool_song){
					excalibur.play();
				}
				swordY = 59;
			}
			getSword = true;
		}
	}
	else{ P_sword.visible = false; }
	
	if(lvl[5]){
		if(!appearKeyBoss1){
			if(!E_antifairy1.visible){
				if(bool_song){ secret.play(); }
				appearKeyBoss1 = true;
			}
		}
		else{ if(!getKeyBoss1){ P_keyBoss1.visible = true; } }
		if(collision(P_keyBoss1)){
			P_keyBoss1.left = 50; P_keyBoss1.top = 100;
			getKeyBoss1 = true;
			if(bool_song){ newItem.play(); }
		}
	}
	else{ if(!getKeyBoss1){ P_keyBoss1.visible = false; } }
	
	if(!getDoorBoss1){
		if(lvl[3]){
			P_doorBoss1.visible = true;
			if(getKeyBoss1){
				if(collision(P_doorBoss1)){
					getDoorBoss1 = true
					if(bool_song){ door_open.play(); }
					P_doorBoss1.visible = false;
					P_keyBoss1 = false;
				}
			}
		}
		else{ P_doorBoss1.visible = false; }
	}
	
	if(lvl[6]){
		P_tower1.visible = true;
		P_tower2.visible = true;
		P_tower3.visible = true;
		P_tower4.visible = true;
	}
	else{
		P_door2.visible = false;
		P_tower1.visible = false;
		P_tower2.visible = false;
		P_tower3.visible = false;
		P_tower4.visible = false;
	}
	
	if(P_key1.visible){ context.drawImage(bank.pic[items], 151, 29, 8, 14, P_key1.left, P_key1.top, P_key1.width, P_key1.height); }
	if(P_door1.visible){ context.drawImage(bank.pic[items], 261, 10, 31, 48, P_door1.left, P_door1.top, P_door1.width, P_door1.height); }
	if(P_sword.visible){ context.drawImage(bank.pic[items], swordX, swordY, P_sword.width, P_sword.height, P_sword.left, P_sword.top, P_sword.width, P_sword.height); }
	if(P_keyBoss1.visible){ context.drawImage(bank.pic[items], 147, 3, 16, 16, P_keyBoss1.left, P_keyBoss1.top, P_keyBoss1.width, P_keyBoss1.height); }
	if(P_doorBoss1.visible){ context.drawImage(bank.pic[items], 63, 1, 32, 54, P_doorBoss1.left, P_doorBoss1.top, P_doorBoss1.width, P_doorBoss1.height); }
	if(P_door2.visible){ context.drawImage(bank.pic[items], 101, 1, 32, 54, P_door2.left, P_door2.top, P_door2.width, P_door2.height); }
	if(P_tower1.visible){ context.drawImage(bank.pic[items], tower1X, tower1Y, 16, 32, P_tower1.left, P_tower1.top, P_tower1.width, P_tower1.height); }
	if(P_tower2.visible){ context.drawImage(bank.pic[items], tower2X, tower2Y, 16, 32, P_tower2.left, P_tower2.top, P_tower2.width, P_tower2.height); }
	if(P_tower3.visible){ context.drawImage(bank.pic[items], tower3X, tower3Y, 16, 32, P_tower3.left, P_tower3.top, P_tower3.width, P_tower3.height); }
	if(P_tower4.visible){ context.drawImage(bank.pic[items], tower4X, tower4Y, 16, 32, P_tower4.left, P_tower4.top, P_tower4.width, P_tower4.height); }
}