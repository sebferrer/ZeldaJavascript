var hurt_boss1 = false;

function boss(){
	if(lvl[6]){
		if(!getBoss1){
			if(T_chrono.tick == 0){
				E_spearmoblin.visible = true; E_spearmoblin.bool_left = true;
				A_spearmoblin_L.left = 1; A_spearmoblin_L.top = 40; A_spearmoblin_L.width = 44; A_spearmoblin_L.height = 31;
				E_spearmoblin.left = _left+520; E_spearmoblin.top = _top+280;
			}
			T_chrono.enabled = true;
			if(T_chrono.tick == 5){
				P_door2.visible = true;
				door_close.play();
				pause = true;
			}
			if(T_chrono.tick == 30){
				E_antifairy2.left = _left+50; E_antifairy2.top = _top+50; E_antifairy2.visible = true;
				E_antifairy3.left = _left+550; E_antifairy3.top = _top+50; E_antifairy3.visible = true;
				E_antifairy4.left = _left+50; E_antifairy4.top = _top+500; E_antifairy4.visible = true;
				E_antifairy5.left = _left+550; E_antifairy5.top = _top+500; E_antifairy5.visible = true;
				block_boss1 = false;
				if(bool_music){ M_boss1.play(); }
				pause = false;
			}
			if(collision(E_spearmoblin)){
				if(useSword){
					if(block_boss1){
						if(hurt_boss1){
							if(boss1_life > 1){ if(bool_song){ miniBossHit.play(); } }
							boss1_life--;
							hurt_boss1 = false;
						}
					}
					else{
						if(bool_song){ bling.play(); }
					}
				}
				else{
					if(!block_boss1){
						link_hurt(E_spearmoblin);
					}
				}
			}
			if(boss1_life == 0){
				if(bool_song){ miniBossDie.play(); }
				M_boss1.pause();
				M_boss1.currentTime = 0;
				CC1.play();
				T_boss1.enabled = false; T_boss1.tick = 0; T_boss1.enabled = true;
				getBoss1 = true;
				E_spearmoblin.visible = false;
				boss1_life = -1;
			}
			if(block_boss1){
				if(!getBoss1){ collision_decor(E_spearmoblin.left-_left, E_spearmoblin.top-_top, E_spearmoblin.width, E_spearmoblin.height); }
			}
		}
		else{
			if(!getDoor2){
				if(T_boss1.tick == 10){
					message(8, P_message8);
				}
				if(T_boss1.tick == 30){
					getDoor2 = true;
					if(bool_song){ door_open.play(); }
					P_door2.visible = false;
					T_boss1.enabled = false;
					T_boss1.tick = 0;
				}
			}
		}
		if(useSword){
				if(collision(P_tower1)){
					if(bool_song){ S_switch.play(); }
					tower1X = 165;
				}
				if(collision(P_tower2)){
					if(bool_song){ S_switch.play(); }
					tower2X = 165;
				}
				if(collision(P_tower3)){
					if(bool_song){ S_switch.play(); }
					tower3X = 165;
				}
				if(collision(P_tower4)){
					if(bool_song){ S_switch.play(); }
					tower4X = 165;
				}
			}
			else{
				hurt_boss1 = true;
			}
			if(tower1X == 165 && tower2X == 165 && tower3X == 165 && tower4X == 165){
				T_boss1.enabled = true;
				block_boss1 = true;
			}
			if(T_boss1.enabled){
				if(T_boss1.tick >= 50){
					if(bool_song){ S_switch2.play(); }
					tower1X = 138; tower2X = 138; tower3X = 138; tower4X = 138;
					E_antifairy2.visible = true; E_antifairy3.visible = true; E_antifairy4.visible = true; E_antifairy5.visible = true;
					E_antifairy2.left = _left+50; E_antifairy3.left = _left+550; E_antifairy4.left = _left+50; E_antifairy5.left = _left+550;
					E_antifairy2.top = _top+50; E_antifairy3.top = _top+50; E_antifairy4.top = _top+500; E_antifairy5.top = _top+500;
					T_boss1.enabled = false;
					T_boss1.tick = 0;
					block_boss1 = false
				}
			}
		collision_decor(P_tower1.left-_left, P_tower1.top-_top, P_tower1.width, P_tower1.height);
		collision_decor(P_tower2.left-_left, P_tower2.top-_top, P_tower2.width, P_tower2.height);
		collision_decor(P_tower3.left-_left, P_tower3.top-_top, P_tower3.width, P_tower3.height);
		collision_decor(P_tower4.left-_left, P_tower4.top-_top, P_tower4.width, P_tower4.height);		
	}
	else{
		E_spearmoblin.visible = false;
		E_antifairy2.visible = false;
		E_antifairy3.visible = false;
		E_antifairy4.visible = false;
		E_antifairy5.visible = false;
	}
}



