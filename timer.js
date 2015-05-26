var T_walk = new Timer(0, 0, 0, 40, true);
var T_sword = new Timer(0, 0, 0, 40, false);
var T_tornado = new Timer(0, 0, 0, 40, false);
var T_chuchu = new Timer(0, 0, 0, 80, true);
var T_octorock = new Timer(0, 0, 0, 80, true);
var T_antifairy = new Timer(0, 0, 0, 80, true);
var T_spearmoblin = new Timer(0, 0, 0, 80, true);

var T_chrono = new Timer(0, 0, 0, 100, false);
var T_hurt = new Timer(0, 0, 0, 100, false);
var T_boss1 = new Timer(0, 0, 0, 100, false);

function timer(){
	if(T_walk.enabled){
		T_walk.elapsed = new Date().getTime() - T_walk.start;
		if(T_walk.elapsed > T_walk.interval){
			T_walk.tick += 1;
			T_walk.start = new Date().getTime();
		}
	}
	if(T_sword.enabled){
		T_sword.elapsed = new Date().getTime() - T_sword.start;
		if(T_sword.elapsed > T_sword.interval){
			T_sword.tick += 1;
			T_sword.start = new Date().getTime();
		}
	}
	if(T_tornado.enabled){
		T_tornado.elapsed = new Date().getTime() - T_tornado.start;
		if(T_tornado.elapsed > T_tornado.interval){
			T_tornado.tick += 1;
			T_tornado.start = new Date().getTime();
		}
	}
	if(T_chuchu.enabled){
		T_chuchu.elapsed = new Date().getTime() - T_chuchu.start;
		if(T_chuchu.elapsed > T_chuchu.interval){
			T_chuchu.tick += 1;
			T_chuchu.start = new Date().getTime();
		}
	}
	if(T_octorock.enabled){
		T_octorock.elapsed = new Date().getTime() - T_octorock.start;
		if(T_octorock.elapsed > T_octorock.interval){
			T_octorock.tick += 1;
			T_octorock.start = new Date().getTime();
		}
	}
	if(T_antifairy.enabled){
		T_antifairy.elapsed = new Date().getTime() - T_antifairy.start;
		if(T_antifairy.elapsed > T_antifairy.interval){
			T_antifairy.tick += 1;
			T_antifairy.start = new Date().getTime();
		}
	}
	if(T_spearmoblin.enabled){
		T_spearmoblin.elapsed = new Date().getTime() - T_spearmoblin.start;
		if(T_spearmoblin.elapsed > T_spearmoblin.interval){
			T_spearmoblin.tick += 1;
			T_spearmoblin.start = new Date().getTime();
		}
	}
	
	if(T_chrono.enabled){
		T_chrono.elapsed = new Date().getTime() - T_chrono.start;
		if(T_chrono.elapsed > T_chrono.interval){
			T_chrono.tick += 1;
			T_chrono.start = new Date().getTime();
		}
	}
	if(T_hurt.enabled){
		T_hurt.elapsed = new Date().getTime() - T_hurt.start;
		if(T_hurt.elapsed > T_hurt.interval){
			T_hurt.tick += 1;
			T_hurt.start = new Date().getTime();
		}
	}
	if(T_boss1.enabled){
		T_boss1.elapsed = new Date().getTime() - T_boss1.start;
		if(T_boss1.elapsed > T_boss1.interval){
			T_boss1.tick += 1;
			T_boss1.start = new Date().getTime();
		}
	}
}