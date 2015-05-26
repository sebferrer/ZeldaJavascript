function lvls(){
	for(i = 0; i < 100; i++){
		lvl[i] = false;
		batU[i] = false;
		batD[i] = false;
		batL[i] = false;
		batR[i] = false;
		house[i] = false;
		bat_house[i] = false;
	}
}


function mapping(){



	///////////////////// VERS LE NORD /////////////////////////////

	if(link_top + link_height <= _top){
		if(lvl[1]){
			link_top = link_top + _height;
			lvls();
			if(!batU[1]){
				lvl[2] = true;
				reset_lvl(2);
				map = "img/map/D6.png";
				mapworld = 'img/map/M/D6.png';
				batU[1] = true;
			}
		}
	}
	
	if(link_top + link_height <= _top){
		if(lvl[2]){
			link_top = link_top + _height;
			lvls();
			if(!batU[2]){
				lvl[3] = true;
				reset_lvl(3);
				map = "img/map/C6.png";
				mapworld = 'img/map/M/C6.png';
				batU[2] = true;
			}
		}
	}
	
	if(link_top + link_height <= _top){
		if(lvl[3]){
			link_top = link_top + _height;
			lvls();
			if(!batU[3]){
				lvl[4] = true;
				reset_lvl(4);
				map = "img/map/B6.png";
				mapworld = 'img/map/M/B6.png';
				batU[3] = true;
			}
		}
	}
	
	if(link_top + link_height <= _top){
		if(lvl[5]){
			link_top = link_top + _height;
			lvls();
			if(!batU[5]){
				lvl[7] = true;
				reset_lvl(7);
				if(bool_music){ CC1.pause(); CC1.currentTime = 0; sanctuary.play(); }
				map = "img/map/B5.png";
				mapworld = 'img/map/M/B5.png';
				batU[5] = true;
			}
		}
	}
	
	////////////////////////////////////////////////////////////////
	
	//////////////////////// VERS LE SUD ////////////////////////////
	
	if(link_top >= _top + _height){
		if(lvl[2]){
			link_top = link_top - _height;
			lvls();
			if(!batD[2]){
				lvl[1] = true;
				reset_lvl(1);
				map = "img/map/E6.png";
				mapworld = 'img/map/M/E6.png';
				batD[2] = true;
			}
		}
	}
	
	if(link_top >= _top + _height){
		if(lvl[3]){
			link_top = link_top - _height;
			lvls();
			if(!batD[3]){
				lvl[2] = true;
				reset_lvl(2);
				map = "img/map/D6.png";
				mapworld = 'img/map/M/D6.png';
				batD[3] = true;
			}
		}
	}
	
	if(link_top >= _top + _height){
		if(lvl[4]){
			link_top = link_top - _height;
			lvls();
			if(!batD[4]){
				lvl[3] = true;
				reset_lvl(3);
				map = "img/map/C6.png";
				mapworld = 'img/map/M/C6.png';
				batD[4] = true;
			}
		}
	}
	
	if(link_top >= _top + _height){
		if(lvl[7]){
			link_top = link_top - _height;
			lvls();
			if(!batD[7]){
				lvl[5] = true;
				reset_lvl(5);
				if(bool_music){ sanctuary.pause(); sanctuary.currentTime = 0; CC1.play(); }
				map = "img/map/C5.png";
				mapworld = 'img/map/M/C5.png';
				batD[7] = true;
			}
		}
	}
	
	/////////////////////////////////////////////////////////////////
	
	//////////////////////// VERS L'OUEST ///////////////////////////
	
	if(getDoor1){
		if(link_left + link_width <= _left){
			if(lvl[3]){
				link_left = link_left + _width;
				lvls();
				if(!batL[3]){
					lvl[5] = true;
					reset_lvl(5);
					map = "img/map/C5.png";
					mapworld = 'img/map/M/C5.png';
					batL[3] = true;
				}
			}
		}
	}
	
	if(getDoor2){
		if(link_left + link_width <= _left){
			if(lvl[6]){
				link_left = link_left + _width;
				lvls();
				if(!batL[6]){
					lvl[3] = true;
					reset_lvl(3);
					map = "img/map/C6.png";
					mapworld = 'img/map/M/C6.png';
					batL[6] = true;
				}
			}
		}
	}
	
	/////////////////////////////////////////////////////////////////
	
	//////////////////////// VERS L'EST /////////////////////////////
		
	if(link_left >= _left + _width){
		if(lvl[5]){
			link_left = _left;
			lvls();
			if(!batR[5]){
				lvl[3] = true;
				reset_lvl(3);
				map = "img/map/C6.png";
				mapworld = 'img/map/M/C6.png';
				batR[5] = true;
			}
		}
	}
	
	if(getDoorBoss1){
		if(link_left >= _left + _width){
			if(lvl[3]){
				link_left = _left;
				lvls();
				if(!batR[3]){
					lvl[6] = true;
					reset_lvl(6);
					if(!getBoss1){ CC1.pause(); CC1.currentTime = 0; }
					if(!getDoor2){ link_left = _left+50; }
					map = "img/map/C7.png";
					mapworld = 'img/map/M/C7.png';
					batR[3] = true;
				}
			}
		}
	}
	
	/////////////////////////////////////////////////////////////////
	
	//////////////////////// MAISONS ////////////////////////////////
	
	if(lvl[4]){
		if(link_top <= (_top+200) && link_top >= (_top+125)){
			if(link_left >= (_left+133) && link_left <= (_left+173)){
				lvls();
				if(!bat_house[1]){
					house[1] = true;
					link_top = _top+_height-link_height;
					link_left = _left+(_width/2);
					if(bool_music){ CC1.pause(); CC1.currentTime = 0; house.play(); }
					map = "img/map/house1.png";
					bat_house[1] = true;
				}
			}
		}
	}
	if(house[1]){
		if(link_top >= _top + _height){
			link_top = _top+200;
			link_left = _left+158;
			lvls();
			if(!batD[5]){
				lvl[4] = true;
				if(bool_music){ house.pause(); house.currentTime = 0; CC1.play(); }
				map = "img/map/B6.png";
				batD[5] = true;
			}
		}
	}
	
	/////////////////////////////////////////////////////////////////
	
	
	
}