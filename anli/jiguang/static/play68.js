function play68_init() {
	updateShare(0);
}

function goHome() {
	window.location.href = "www.58player.com/wxgame/";
}

function play68_submitScore(score) {
	updateShareScore(score);
	setTimeout( function() { show_share(); }, 1000 );
}

function updateShare(bestScore) {
	imgUrl = 'www.58player.com/wxgame/jg/ds/icon.png';
	lineLink = 'www.58player.com/wxgame/jg/';
	descContent = "来比比看谁的手指更厉害！";
	updateShareScore(bestScore);
	appid = '';
}

function updateShareScore(bestScore) {
	if(bestScore > 0) {
		shareTitle = "微创客游戏《激光防线》我得了" + bestScore + "分，你的手指有我的快吗？";
	}
	else{
		shareTitle = "微创客游戏《激光防线》让你用手指画出激光线！";
	}
}