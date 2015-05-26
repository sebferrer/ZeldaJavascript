var chuchu = "img/enemies/chuchu.png";
var E_chuchu1 = new Enemy(_left+150, _top+150, 38, 38, true, false, false, false, false, 0);
var E_chuchu2 = new Enemy(_left+450, _top+150, 38, 38, true, false, false, false, false, 0);
var tab_chuchu = [E_chuchu1,E_chuchu2];

var octorock = "img/enemies/octorock.png";
var E_octorock1 = new Enemy(0, 0, 0, 0, false, false, false, false, false, 0);
var E_octorock2 = new Enemy(0, 0, 0, 0, false, false, false, false, false, 0);
var E_octorock3 = new Enemy(0, 0, 0, 0, false, false, false, false, false, 0);
var E_octorock4 = new Enemy(0, 0, 0, 0, false, false, false, false, false, 0);
var E_octorock5 = new Enemy(0, 0, 0, 0, false, false, false, false, false, 0);
var E_octorock6 = new Enemy(0, 0, 0, 0, false, false, false, false, false, 0);
var tab_octorock = [E_octorock1,E_octorock2,E_octorock3,E_octorock4,E_octorock5,E_octorock6];

var antifairy = "img/enemies/antifairy.png";
var E_antifairy1 = new Enemy(0, 0,0, 0, false, false, false, false, false, 0);
var E_antifairy2 = new Enemy(_left+50, _top+50, 32, 36, false, false, false, false, false, 0);
var E_antifairy3 = new Enemy(_left+550, _top+50, 32, 36, false, false, false, false, false, 0);
var E_antifairy4 = new Enemy(_left+50, _top+500, 32, 36, false, false, false, false, false, 0);
var E_antifairy5 = new Enemy(_left+550, _top+500, 32, 36, false, false, false, false, false, 0);
var tab_antifairy = [E_antifairy1,E_antifairy2,E_antifairy3,E_antifairy4,E_antifairy5];

var spearmoblin = "img/enemies/spearmoblin.png";
var E_spearmoblin = new Enemy(_left+520, _top+280, 0, 0, false, false, false, false, false, 0);
var boss1_life = 15;
var block_boss1 = true;
var getBoss1 = false;

var tab_lvl1 = [E_chuchu1,E_chuchu2];
var tab_lvl2 = [E_octorock1,E_octorock2,E_octorock3,E_octorock4,E_octorock5,E_octorock6];
var tab_lvl5 = [E_antifairy1];
var tab_lvl6 = [E_antifairy2,E_antifairy3,E_antifairy4,E_antifairy5];

var traj_square = [E_chuchu1,E_chuchu2]; var square_size = 100; var square_count = 0;
var traj_vertical = [E_octorock1,E_octorock2,E_octorock3]; var vertical_size = 150; var vertical_count = 0;
var traj_horizontal = [E_octorock4,E_octorock5,E_octorock6]; var horizontal_size = 150; var horizontal_count = 0;
var traj_follow = [E_antifairy1,E_antifairy2,E_antifairy3,E_antifairy4,E_antifairy5];

var i2;

function enemies_moving(){
	if(!pause){
		var i_enemies;
		// TRAJECTOIRE CARREE
		for(i_enemies = 0; i_enemies < traj_square.length; i_enemies++){
			if(square_count < square_size*traj_square.length){
				traj_square[i_enemies].bool_left=traj_square[i_enemies].bool_top=traj_square[i_enemies].bool_bottom=false; traj_square[i_enemies].bool_right = true;
				traj_square[i_enemies].left += 1;
			}
			else if(square_count >= square_size*traj_square.length && square_count < (square_size*2)*traj_square.length){
				traj_square[i_enemies].bool_left=traj_square[i_enemies].bool_top=traj_square[i_enemies].bool_right=false; traj_square[i_enemies].bool_bottom = true;
				traj_square[i_enemies].top += 1;
			}
			else if(square_count >= (square_size*2)*traj_square.length && square_count < (square_size*3)*traj_square.length){
				traj_square[i_enemies].bool_rigth=traj_square[i_enemies].bool_top=traj_square[i_enemies].bool_bottom=false; traj_square[i_enemies].bool_left = true;
				traj_square[i_enemies].left -= 1;
			}
			else if(square_count >= (square_size*3)*traj_square.length){
				traj_square[i_enemies].bool_left=traj_square[i_enemies].bool_right=traj_square[i_enemies].bool_bottom=false; traj_square[i_enemies].bool_top = true;
				traj_square[i_enemies].top -= 1;
			}
			if(square_count >= (square_size*4)*traj_square.length){
				square_count = 0;
			}
			square_count++;
		}
		// TRAJECTOIRE VERTICALE
		for(i_enemies = 0; i_enemies < traj_vertical.length; i_enemies++){
			if(vertical_count < vertical_size*traj_vertical.length){
				traj_vertical[i_enemies].bool_left=traj_vertical[i_enemies].bool_top=traj_vertical[i_enemies].bool_right=false; traj_vertical[i_enemies].bool_bottom = true;
				traj_vertical[i_enemies].top += 1;
			}
			if(vertical_count > vertical_size*traj_vertical.length && vertical_count < (vertical_size*2)*traj_vertical.length){
				traj_vertical[i_enemies].bool_left=traj_vertical[i_enemies].bool_bottom=traj_vertical[i_enemies].bool_right=false; traj_vertical[i_enemies].bool_top = true;
				traj_vertical[i_enemies].top -= 1;
			}
			if(vertical_count > (vertical_size*2)*traj_vertical.length){
				vertical_count = 0;
			}
			vertical_count++;
		}
		// TRAJECTOIRE HORIZONTALE
		for(i_enemies = 0; i_enemies < traj_horizontal.length; i_enemies++){
			if(horizontal_count < horizontal_size*traj_horizontal.length){
				traj_horizontal[i_enemies].bool_left=traj_horizontal[i_enemies].bool_top=traj_horizontal[i_enemies].bool_bottom=false; traj_horizontal[i_enemies].bool_right = true;
				traj_horizontal[i_enemies].left += 1;
			}
			if(horizontal_count > horizontal_size*traj_horizontal.length && horizontal_count < (horizontal_size*2)*traj_horizontal.length){
				traj_horizontal[i_enemies].bool_right=traj_horizontal[i_enemies].bool_top=traj_horizontal[i_enemies].bool_bottom=false; traj_horizontal[i_enemies].bool_left = true;
				traj_horizontal[i_enemies].left -= 1;
			}
			if(horizontal_count > (horizontal_size*2)*traj_horizontal.length){
				horizontal_count = 0;
			}
			horizontal_count++;
		}
		// TRAJECTOIRE SUIVIE
		for(i_enemies = 0; i_enemies < traj_follow.length; i_enemies++){
			if(traj_follow[i_enemies].visible){
				if(traj_follow[i_enemies].top > link_top){ traj_follow[i_enemies].top--;
					traj_follow[i_enemies].bool_left=traj_follow[i_enemies].bool_right=traj_follow[i_enemies].bool_bottom=false; traj_follow[i_enemies].bool_top = true;}
				if(traj_follow[i_enemies].top < link_top){ traj_follow[i_enemies].top++;
					traj_follow[i_enemies].bool_left=traj_follow[i_enemies].bool_top=traj_follow[i_enemies].bool_right=false; traj_follow[i_enemies].bool_bottom = true;}
				if(traj_follow[i_enemies].left > link_left){ traj_follow[i_enemies].left--;
					traj_follow[i_enemies].bool_right=traj_follow[i_enemies].bool_top=traj_follow[i_enemies].bool_bottom=false; traj_follow[i_enemies].bool_left = true;}
				if(traj_follow[i_enemies].left < link_left){ traj_follow[i_enemies].left++; 
					traj_follow[i_enemies].bool_left=traj_follow[i_enemies].bool_top=traj_follow[i_enemies].bool_bottom=false; traj_follow[i_enemies].bool_right = true;}
			}
		}
	}
}

function boss1_moving(){
	if(!pause){
		if(!block_boss1){
			if(E_spearmoblin.top > link_top){ E_spearmoblin.top--;
				E_spearmoblin.bool_left=E_spearmoblin.bool_right=E_spearmoblin.bool_bottom=false; E_spearmoblin.bool_top = true;}
			if(E_spearmoblin.top < link_top){ E_spearmoblin.top++;
				E_spearmoblin.bool_left=E_spearmoblin.bool_top=E_spearmoblin.bool_right=false; E_spearmoblin.bool_bottom = true;}
			if(E_spearmoblin.left > link_left){ E_spearmoblin.left--;
				E_spearmoblin.bool_right=E_spearmoblin.bool_top=E_spearmoblin.bool_bottom=false; E_spearmoblin.bool_left = true;}
			if(E_spearmoblin.left < link_left){ E_spearmoblin.left++; 
				E_spearmoblin.bool_left=E_spearmoblin.bool_top=E_spearmoblin.bool_bottom=false; E_spearmoblin.bool_right = true;}
		}
	}
}

function collision(x){
	var retour = false;
	if(x.visible){
		if(link_top < x.top + x.height && link_top + link_height > x.top && link_left + link_width >= x.left && link_left <= x.left + x.width){
			retour = true;
		}
	}
	return retour;
}

function reset_lvl(num){
	square_count = 0; vertical_count = 0; horizontal_count = 0;
	if(num == 1){
		E_chuchu1.left = _left+150; E_chuchu1.top = _top+150; E_chuchu1.width = 38; E_chuchu1.height = 38; E_chuchu1.visible = true; 
		E_chuchu2.left = _left+450; E_chuchu2.top = _top+150; E_chuchu2.width = 38; E_chuchu2.height = 38; E_chuchu2.visible = true;
	}
	if(num == 2){
		E_octorock1.left = _left+150; E_octorock1.top = _top+200; E_octorock1.width = 38; E_octorock1.height = 32; E_octorock1.visible = true; 
		E_octorock2.left = _left+450; E_octorock2.top = _top+180; E_octorock2.width = 38; E_octorock2.height = 32; E_octorock2.visible = true;
		E_octorock3.left = _left+400; E_octorock3.top = _top+400; E_octorock3.width = 38; E_octorock3.height = 32; E_octorock3.visible = true;
		E_octorock4.left = _left+250; E_octorock4.top = _top+250; E_octorock4.width = 38; E_octorock4.height = 32; E_octorock4.visible = true;
		E_octorock5.left = _left+420; E_octorock5.top = _top+100; E_octorock5.width = 38; E_octorock5.height = 32; E_octorock5.visible = true;
		E_octorock6.left = _left+60; E_octorock6.top = _top+540; E_octorock6.width = 38; E_octorock6.height = 32; E_octorock6.visible = true;
	}
	if(num == 5){
		E_antifairy1.left = _left+85; E_antifairy1.top = _top+85; E_antifairy1.width = 32; E_antifairy1.height = 36; E_antifairy1.visible = true; 
	}
}

function link_hurt(enemy){
	if(!pause){
		if(!T_hurt.enabled){
			link_life--;
			if(bool_song){
				if(link_life != 0){
					rand_hurt = Math.floor(Math.random()*3+1);
					switch(rand_hurt){
						case 1 : hurt1.play(); break;
						case 2 : hurt2.play(); break;
						case 3 : hurt3.play(); break;
					}
				}
			}
		}
		T_hurt.enabled = true;
		if(T_hurt.tick >= 10){
			T_hurt.enabled = false;
			T_hurt.tick = 0;
		}
	}
}

function collisions(){
	var i_enemies;
	if(lvl[1]){
		for(i_enemies = 0; i_enemies < tab_lvl1.length; i_enemies++){
			if(collision(tab_lvl1[i_enemies])){
				if(useSword){
					if(bool_song){
						enemyHit.play();
					}
					tab_lvl1[i_enemies].visible = false;
				}
				else{
					link_hurt(tab_lvl1[i_enemies]);
				}
			}
		}
	}
	if(lvl[2]){
		for(i_enemies = 0; i_enemies < tab_lvl2.length; i_enemies++){
			if (collision(tab_lvl2[i_enemies])){
				if(useSword){
					if(bool_song){
						enemyHit.play();
					}
					tab_lvl2[i_enemies].visible = false;
				}
				else{
					link_hurt(tab_lvl2[i_enemies]);
				}
			}
		}
	}
	if(lvl[5]){
		for(i_enemies = 0; i_enemies < tab_lvl5.length; i_enemies++){
			if (collision(tab_lvl5[i_enemies])){
				if(useSword){
					if(bool_song){
						enemyHit.play();
					}
					tab_lvl5[i_enemies].visible = false;
				}
				else{
					link_hurt(tab_lvl5[i_enemies]);
				}
			}
		}
	}
	if(lvl[6]){
		for(i_enemies = 0; i_enemies < tab_lvl6.length; i_enemies++){
			if (collision(tab_lvl6[i_enemies])){
				if(useSword){
					if(bool_song){
						enemyHit.play();
					}
					tab_lvl6[i_enemies].visible = false;
				}
				else{
					link_hurt(tab_lvl6[i_enemies]);
				}
			}
		}
	}
}

function enemies_animations(){
	// CHUCHU
	switch(T_chuchu.tick){
			case 1: A_chuchu.left = 1; A_chuchu.top = 1; A_chuchu.width = 19; A_chuchu.height = 19; break;
			case 2: A_chuchu.left = 23; A_chuchu.top = 1; A_chuchu.width = 19; A_chuchu.height = 19; break;
			case 3: A_chuchu.left = 45; A_chuchu.top = 1; A_chuchu.width = 19; A_chuchu.height = 19; break;
			case 4: A_chuchu.left = 67; A_chuchu.top = 1; A_chuchu.width = 19; A_chuchu.height = 19; break;
			case 5: A_chuchu.left = 89; A_chuchu.top = 1; A_chuchu.width = 19; A_chuchu.height = 19; break;
			case 6: A_chuchu.left = 111; A_chuchu.top = 1; A_chuchu.width = 19; A_chuchu.height = 19; break;
			case 7: A_chuchu.left = 133; A_chuchu.top = 1; A_chuchu.width = 19; A_chuchu.height = 19; break;
			case 8: A_chuchu.left = 155; A_chuchu.top = 1; A_chuchu.width = 19; A_chuchu.height = 19; break;
			case 9: A_chuchu.left = 1; A_chuchu.top = 23; A_chuchu.width = 19; A_chuchu.height = 19; break;
			case 10: A_chuchu.left = 23; A_chuchu.top = 23; A_chuchu.width = 19; A_chuchu.height = 19; break;
			case 11: A_chuchu.left = 45; A_chuchu.top = 23; A_chuchu.width = 19; A_chuchu.height = 19; break;
			case 12: A_chuchu.left = 67; A_chuchu.top = 23; A_chuchu.width = 19; A_chuchu.height = 19; break;
			case 13: A_chuchu.left = 89; A_chuchu.top = 23; A_chuchu.width = 19; A_chuchu.height = 19; break;
			case 14: A_chuchu.left = 111; A_chuchu.top = 23; A_chuchu.width = 19; A_chuchu.height = 19; break;
			case 15: A_chuchu.left = 133; A_chuchu.top = 23; A_chuchu.width = 19; A_chuchu.height = 19; break;
			case 16: A_chuchu.left = 155; A_chuchu.top = 23; A_chuchu.width = 19; A_chuchu.height = 19; break;
	}
	if(T_chuchu.tick > 16){
		T_chuchu.tick = 0;
	}
	// OCTOROCK
	switch(T_octorock.tick){
		case 1:
			A_octorock_B.left = 1; A_octorock_B.top = 1; A_octorock_B.width = 19; A_octorock_B.height = 16;
			A_octorock_T.left = 1; A_octorock_T.top = 58; A_octorock_T.width = 19; A_octorock_T.height = 16;
			A_octorock_L.left = 1; A_octorock_L.top = 20; A_octorock_L.width = 19; A_octorock_L.height = 16;
			A_octorock_R.left = 1; A_octorock_R.top = 39; A_octorock_R.width = 19; A_octorock_R.height = 16;
		break;
		case 2:
			A_octorock_B.left = 23; A_octorock_B.top = 1; A_octorock_B.width = 19; A_octorock_B.height = 16;
			A_octorock_T.left = 23; A_octorock_T.top = 58; A_octorock_T.width = 19; A_octorock_T.height = 16;
			A_octorock_L.left = 23; A_octorock_L.top = 20; A_octorock_L.width = 19; A_octorock_L.height = 16;
			A_octorock_R.left = 23; A_octorock_R.top = 39; A_octorock_R.width = 19; A_octorock_R.height = 16;
		break;
	}
	if(T_octorock.tick > 2){
		T_octorock.tick = 0;
	}
	// ANTIFAIRY
	switch(T_antifairy.tick){
		case 1: A_antifairy.left = 1; A_antifairy.top = 1; A_antifairy.width = 16; A_antifairy.height = 18; break;
		case 2: A_antifairy.left = 20; A_antifairy.top = 1; A_antifairy.width = 16; A_antifairy.height = 18; break;
		case 3: A_antifairy.left = 39; A_antifairy.top = 1; A_antifairy.width = 16; A_antifairy.height = 18; break;
		case 4: A_antifairy.left = 58; A_antifairy.top = 1; A_antifairy.width = 16; A_antifairy.height = 18; break;
		case 5: A_antifairy.left = 77; A_antifairy.top = 1; A_antifairy.width = 16; A_antifairy.height = 18; break;
		case 6: A_antifairy.left = 96; A_antifairy.top = 1; A_antifairy.width = 16; A_antifairy.height = 18; break;
	}
	if(T_antifairy.tick > 6){
		T_antifairy.tick = 0;
	}
	// SPEARMOBLIN
	if(!block_boss1){
		switch(T_spearmoblin.tick){
			case 1:
				A_spearmoblin_B.left = 38; A_spearmoblin_B.top = 108; A_spearmoblin_B.width = 28; A_spearmoblin_B.height = 37;
				A_spearmoblin_T.left = 38; A_spearmoblin_T.top = 1; A_spearmoblin_T.width = 29; A_spearmoblin_T.height = 36;
				A_spearmoblin_L.left = 1; A_spearmoblin_L.top = 40; A_spearmoblin_L.width = 44; A_spearmoblin_L.height = 31;
				A_spearmoblin_R.left = 1; A_spearmoblin_R.top = 74; A_spearmoblin_R.width = 44; A_spearmoblin_R.height = 31;
			break;
			case 2:
				A_spearmoblin_B.left = 69; A_spearmoblin_B.top = 108; A_spearmoblin_B.width = 28; A_spearmoblin_B.height = 37;
				A_spearmoblin_T.left = 70; A_spearmoblin_T.top = 1; A_spearmoblin_T.width = 29; A_spearmoblin_T.height = 36;
				A_spearmoblin_L.left = 48; A_spearmoblin_L.top = 40; A_spearmoblin_L.width = 44; A_spearmoblin_L.height = 31;
				A_spearmoblin_R.left = 48; A_spearmoblin_R.top = 74; A_spearmoblin_R.width = 44; A_spearmoblin_R.height = 31;
			break;
			case 3:
				A_spearmoblin_B.left = 100; A_spearmoblin_B.top = 108; A_spearmoblin_B.width = 28; A_spearmoblin_B.height = 37;
				A_spearmoblin_T.left = 102; A_spearmoblin_T.top = 1; A_spearmoblin_T.width = 29; A_spearmoblin_T.height = 36;
				A_spearmoblin_L.left = 95; A_spearmoblin_L.top = 40; A_spearmoblin_L.width = 44; A_spearmoblin_L.height = 31;
				A_spearmoblin_R.left = 95; A_spearmoblin_R.top = 74; A_spearmoblin_R.width = 44; A_spearmoblin_R.height = 31;
			break;
			case 4:
				A_spearmoblin_B.left = 131; A_spearmoblin_B.top = 108; A_spearmoblin_B.width = 28; A_spearmoblin_B.height = 37;
				A_spearmoblin_T.left = 134; A_spearmoblin_T.top = 1; A_spearmoblin_T.width = 29; A_spearmoblin_T.height = 36;
				A_spearmoblin_L.left = 142; A_spearmoblin_L.top = 40; A_spearmoblin_L.width = 44; A_spearmoblin_L.height = 31;
				A_spearmoblin_R.left = 142; A_spearmoblin_R.top = 74; A_spearmoblin_R.width = 44; A_spearmoblin_R.height = 31;
			break;
		}
		if(T_spearmoblin.tick > 6){
			T_spearmoblin.tick = 0;
		}
	}
}

function draw_enemies(){
	
	if(lvl[1]){
		for (i2 = 0; i2 < tab_chuchu.length; i2++){
			if(tab_chuchu[i2].visible){
				context.drawImage(bank.pic[chuchu], A_chuchu.left, A_chuchu.top, A_chuchu.width, A_chuchu.height, tab_chuchu[i2].left, tab_chuchu[i2].top, tab_chuchu[i2].width, tab_chuchu[i2].height);
			}
		}
	}
	if(lvl[2]){
		for (i2 = 0; i2 < tab_octorock.length; i2++){
			if(tab_octorock[i2].visible){
				if(tab_octorock[i2].bool_bottom){
					context.drawImage(bank.pic[octorock], A_octorock_B.left, A_octorock_B.top, A_octorock_B.width, A_octorock_B.height, tab_octorock[i2].left, tab_octorock[i2].top, tab_octorock[i2].width, tab_octorock[i2].height);
				}
				else if(tab_octorock[i2].bool_top){
					context.drawImage(bank.pic[octorock], A_octorock_T.left, A_octorock_T.top, A_octorock_T.width, A_octorock_T.height, tab_octorock[i2].left, tab_octorock[i2].top, tab_octorock[i2].width, tab_octorock[i2].height);
				}
				else if(tab_octorock[i2].bool_left){
					context.drawImage(bank.pic[octorock], A_octorock_L.left, A_octorock_L.top, A_octorock_L.width, A_octorock_L.height, tab_octorock[i2].left, tab_octorock[i2].top, tab_octorock[i2].width, tab_octorock[i2].height);
				}
				else if(tab_octorock[i2].bool_right){
					context.drawImage(bank.pic[octorock], A_octorock_R.left, A_octorock_R.top, A_octorock_R.width, A_octorock_R.height, tab_octorock[i2].left, tab_octorock[i2].top, tab_octorock[i2].width, tab_octorock[i2].height);
				}
			}
		}
	}
	if(lvl[5]){
		for (i2 = 0; i2 < tab_antifairy.length; i2++){
			if(tab_antifairy[i2].visible){
				context.drawImage(bank.pic[antifairy], A_antifairy.left, A_antifairy.top, A_antifairy.width, A_antifairy.height, tab_antifairy[i2].left, tab_antifairy[i2].top, tab_antifairy[i2].width, tab_antifairy[i2].height);
			}
		}
	}
	if(lvl[6]){
		if(E_spearmoblin.visible){
			if(E_spearmoblin.bool_bottom){
				E_spearmoblin.width = 56; E_spearmoblin.height = 74;
				context.drawImage(bank.pic[spearmoblin], A_spearmoblin_B.left, A_spearmoblin_B.top, A_spearmoblin_B.width, A_spearmoblin_B.height, E_spearmoblin.left, E_spearmoblin.top, E_spearmoblin.width, E_spearmoblin.height);
			}
			else if(E_spearmoblin.bool_top){ 
				E_spearmoblin.width = 58; E_spearmoblin.height = 72;
				context.drawImage(bank.pic[spearmoblin], A_spearmoblin_T.left, A_spearmoblin_T.top, A_spearmoblin_T.width, A_spearmoblin_T.height, E_spearmoblin.left, E_spearmoblin.top, E_spearmoblin.width, E_spearmoblin.height);
			}
			else if(E_spearmoblin.bool_left){ 
				E_spearmoblin.width = 88; E_spearmoblin.height = 62;
				context.drawImage(bank.pic[spearmoblin], A_spearmoblin_L.left, A_spearmoblin_L.top, A_spearmoblin_L.width, A_spearmoblin_L.height, E_spearmoblin.left, E_spearmoblin.top, E_spearmoblin.width, E_spearmoblin.height);
			}
			else if(E_spearmoblin.bool_right){ 
				E_spearmoblin.width = 88; E_spearmoblin.height = 62;
				context.drawImage(bank.pic[spearmoblin], A_spearmoblin_R.left, A_spearmoblin_R.top, A_spearmoblin_R.width, A_spearmoblin_R.height, E_spearmoblin.left, E_spearmoblin.top, E_spearmoblin.width, E_spearmoblin.height);
			}
		}
		for (i2 = 1; i2 < tab_antifairy.length; i2++){
			if(tab_antifairy[i2].visible){
				context.drawImage(bank.pic[antifairy], A_antifairy.left, A_antifairy.top, A_antifairy.width, A_antifairy.height, tab_antifairy[i2].left, tab_antifairy[i2].top, tab_antifairy[i2].width, tab_antifairy[i2].height);
			}
		}
	}
	
	enemies_animations();
	collisions();
	enemies_moving(); boss1_moving();
}