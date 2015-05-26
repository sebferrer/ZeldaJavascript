function collision_decor(P_left, P_top, P_width, P_height){
	P_left += _left;
	P_top += _top;
	//context.drawImage(bank.pic["img/red.png"], P_left, P_top, P_width, P_height);
	P_left += 10;
	P_top += 5;
	P_width -= 10;
	P_height -= 10;
	if(link_top <= P_top + P_height && link_top + link_height >= P_top && link_left + link_width >= P_left && link_left < P_left + P_width){
		if(bool_link_right){
				link_left -= 5;
				block_link_right = true;
				bool_link_right = false;
				link = "img/link.png"; A_link.left = 39; A_link.top = 1; A_link.width = 18; A_link.height = 23;
				link_width = 36; link_height = 46;
		}
		else if(bool_link_left){
				link_left += 5;
				block_link_left = true;
				bool_link_left = false;
				link = "img/link.png"; A_link.left = 20; A_link.top = 1; A_link.width = 18; A_link.height = 23;
				link_width = 36; link_height = 46;
		}
		else if(bool_link_top){
				link_top += 5;
				block_link_top = true;
				bool_link_top = false;
				link = "img/link.png"; A_link.left = 58; A_link.top = 1; A_link.width = 18; A_link.height = 23;
				link_width = 36; link_height = 46
		}
		else if(bool_link_bottom){
				link_top -= 5;
				block_link_bottom = true;
				bool_link_bottom = false;
				link = "img/link.png"; A_link.left = 1; A_link.top = 1; A_link.width = 18; A_link.height = 23;
				link_width = 36; link_height = 46;	
		}
	}
}

function decor(){
	collision_decor(0, 0, 245, 25);
	collision_decor(395, 0, 245, 25);
	collision_decor(0, 0, 25, 245);
	collision_decor(0, 395, 25, 245);
	collision_decor(615, 395, 25, 245);
	collision_decor(615, 0, 25, 245);
	if(!house[1]){
		collision_decor(0, 615, 245, 25);
		collision_decor(395, 615, 245, 25);
	}
	if(lvl[1]){
		collision_decor(0, 245, 25, 150); // OUEST
		collision_decor(615, 245, 25, 150); // EST
		collision_decor(245, 615, 150, 25); // SUD
	}
	
	if(lvl[2]){
		collision_decor(0, 245, 25, 150); // OUEST
		collision_decor(615, 245, 25, 150); // EST
		collision_decor(70, 75, 115, 110); // FLAQUE 1
		collision_decor(460, 360, 105, 108); // FLAQUE 2
	}
	if(lvl[3]){
		collision_decor(72, 64, 16, 30); // PILIER 1
		collision_decor(552, 64, 16, 30); // PILIER 2
		collision_decor(72, 448, 16, 30); // PILIER 3
		collision_decor(552, 448, 16, 30); // PILIER 4
		collision_decor(134, 384, 116, 30); // BARRIERE
		collision_decor(134, 128, 17, 286); // BARRIERE
		collision_decor(134, 128, 372, 31); // BARRIERE
		collision_decor(488, 128, 18, 286); // BARRIERE
		collision_decor(390, 384, 116, 30); // BARRIERE
		if(!getKey1){ collision_decor(0, 237, 50, 175); } // PORTE 1
		if(!getKeyBoss1){ collision_decor(590, 238, 50, 175); } // PORTE BOSS 1
	}
	if(lvl[4]){
		collision_decor(0, 245, 25, 150); // OUEST
		collision_decor(245, 0, 150, 25); // NORD
		collision_decor(615, 245, 25, 150); // EST
		collision_decor(93, 128, 60, 96); // MAISON
		collision_decor(154, 128, 47, 64); // MAISON
		collision_decor(200, 128, 56, 92); // MAISON
		collision_decor(485, 64, 116, 30); // BARRIERE
		collision_decor(584, 93, 17, 162); // BARRIERE
	}
	if(lvl[5]){
		collision_decor(0, 245, 25, 150); // OUEST
		collision_decor(40, 32, 146, 30); // BARRIERE
		collision_decor(40, 32, 16, 158); // BARRIERE
		collision_decor(23, 295, 144, 49); // RIVIERE
		collision_decor(166, 299, 29, 46); // RIVIERE
		collision_decor(175, 344, 20, 23); // RIVIERE
		collision_decor(194, 316, 22, 60); // RIVIERE
		collision_decor(204, 375, 12, 14); // RIVIERE
		collision_decor(215, 336, 21, 66); // RIVIERE
		collision_decor(235, 356, 19, 67); // RIVIERE
		collision_decor(253, 373, 22, 21); // RIVIERE
		collision_decor(253, 393, 102, 49); // RIVIERE
		collision_decor(338, 441, 17, 22); // RIVIERE
		collision_decor(354, 412, 22, 62); // RIVIERE
		collision_decor(375, 431, 17, 69); // RIVIERE
		collision_decor(391, 451, 27, 24); // RIVIERE
		collision_decor(391, 474, 51, 74); // RIVIERE
		collision_decor(405, 520, 179, 47); // RIVIERE
		collision_decor(559, 566, 17, 22); // RIVIERE
		collision_decor(583, 539, 14, 16); // RIVIERE
		collision_decor(575, 554, 42, 46); // RIVIERE
	}
	if(lvl[6]){
		collision_decor(245, 0, 150, 25); // NORD
		collision_decor(615, 245, 25, 150); // EST
		collision_decor(245, 615, 150, 25); // SUD
		if(P_door2.visible){ collision_decor(0, 238, 50, 175); } // PORTE 2
	}
	if(lvl[7]){
		collision_decor(0, 245, 25, 150); // OUEST
		collision_decor(615, 245, 25, 150); // EST
		collision_decor(245, 0, 150, 25); // NORD
	}
	if(house[1]){
		collision_decor(0, 245, 25, 150); // OUEST
		collision_decor(615, 245, 25, 150); // EST
		collision_decor(245, 0, 150, 25); // NORD
	}
}