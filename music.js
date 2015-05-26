var tab_music = new Array(100);

function music_pause(){
	if(lvl[1] || lvl[2] || lvl[3] || lvl[4] || lvl[5]){
		CC1.pause();
	}
	if(lvl[6]){
		if(getBoss1){ CC1.pause(); }
		else{ M_boss1.pause(); }
	}
	if(lvl[7]){
		sanctuary.pause();
	}
	if(house[1]){
		house.pause();
	}
}

function music_restart(){
	if(lvl[1] || lvl[2] || lvl[3] || lvl[4] || lvl[5]){
		CC1.play();
	}
	if(lvl[6]){
		if(getBoss1){ CC1.play(); }
		else{ M_boss1.play(); }
	}
	if(lvl[7]){
		sanctuary.play();
	}
	if(house[1]){
		house.play();
	}
}

function music(){

	if(getSword){
		if(excalibur.currentTime < 9){
			sanctuary.volume = 0;
		}
		else{
			if(lvl[7]){
				if(!tab_music[1]){
					sanctuary.volume = volume_music;
					tab_music[1] = true;
				}
			}
		}
	}
	
}