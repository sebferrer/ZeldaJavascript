var P_message1 = new Picture(_left+130, _top+200, 397, 187, false); // Vous obtenez une petite clé !
var P_message2 = new Picture(_left+130, _top+200, 397, 187, false); // Vous obtenez l'épée de légende !
var P_message3 = new Picture(_left+130, _top+200, 392, 187, false); // Appuyez une A pour utiliser l'épée, restez appuyé 3 secondes pour lancer l'attaque tornade
var P_message4 = new Picture(_left+130, _top+200, 397, 187, false); // Vous n'avez pas encore d'épée !
var P_message5 = new Picture(_left+130, _top+200, 397, 187, false); // Jeu en pause
var P_message6 = new Picture(_left+130, _top+200, 397, 187, false); // Vous obtenez la clé du boss !
var P_message7 = new Picture(_left+130, _top+200, 397, 187, false); // Vous êtes mort ! (Cliquez pour rejouer)
var P_message8 = new Picture(_left+130, _top+200, 397, 187, false); // Jeu terminé
var P_message9 = new Picture(_left+130, _top+200, 397, 187, false); // Suite prochainement
var P_message10 = new Picture(_left+130, _top+200, 397, 187, false); // Bienvenue

function message(num, P_message){
	if(!bool_message[num]){
		link_stop();
		pause = true;
		P_message.visible = true;
		bool_message[num] = true;
	}
}

function messages(){
	
	if(getKey1){
		message(1, P_message1);
	}
	if(getSword){
		message(2, P_message2);
	}
	if(getSword){
		if(!P_message2.visible){ message(3, P_message3); }
	}
	if(getKeyBoss1){
		message(6, P_message6);
	}
	if(getBoss1){
		message(8, P_message8);
	}
	if(getBoss1){
		if(!P_message8.visible){ message(9, P_message9); bool_fin = false;}
	}
	
	if(P_message1.visible){ context.drawImage(bank.pic[info], 0, 0, P_message1.width, P_message1.height, P_message1.left, P_message1.top, P_message1.width, P_message1.height); }
	if(P_message2.visible){ context.drawImage(bank.pic[info], 1202, 0, P_message2.width, P_message2.height, P_message2.left, P_message2.top, P_message2.width, P_message2.height); }
	if(P_message3.visible){ context.drawImage(bank.pic[info], 1602, 0, P_message3.width, P_message3.height, P_message3.left, P_message3.top, P_message3.width, P_message3.height); }
	if(P_message4.visible){ context.drawImage(bank.pic[info], 0, 386, P_message4.width, P_message4.height, P_message4.left, P_message4.top, P_message4.width, P_message4.height); }
	if(P_message5.visible){ context.drawImage(bank.pic[info], 399, 386, P_message5.width, P_message5.height, P_message5.left, P_message5.top, P_message5.width, P_message5.height); }
	if(P_message6.visible){ context.drawImage(bank.pic[info], 803, 0, P_message6.width, P_message6.height, P_message6.left, P_message6.top, P_message6.width, P_message6.height); }
	if(P_message7.visible){ context.drawImage(bank.pic[info], 400, 0, P_message7.width, P_message7.height, P_message7.left, P_message7.top, P_message7.width, P_message7.height); }
	if(P_message8.visible){ context.drawImage(bank.pic[info], 802, 386, P_message8.width, P_message8.height, P_message8.left, P_message8.top, P_message8.width, P_message8.height); }
	if(P_message9.visible){ context.drawImage(bank.pic[info], 1201, 386, P_message9.width, P_message9.height, P_message9.left, P_message9.top, P_message9.width, P_message9.height); }
	if(P_message10.visible){ context.drawImage(bank.pic[info], 1595, 386, P_message10.width, P_message10.height, P_message10.left, P_message10.top, P_message10.width, P_message10.height); }
}