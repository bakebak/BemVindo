$(document).ready(function(){
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
	$("video").fadeOut();
	$(".content").hide();
	$(".content").slideUp();
<<<<<<< 9c4093889bb0675d0b43b53becd0db41a3d4f403
<<<<<<< 182d4d47f863b976d4a6be35bcaabf7d979231c3
<<<<<<< 447dbe9a02cd8cd1790aa92a64164cc67d9cc708
<<<<<<< f7fc348215c9bc1e21845418f0a8428a9b7a5a4d
<<<<<<< f56023b243ff363b8b9435a639dc43f65fb1f2af
<<<<<<< 17293cd98d977d99c2532caa9402b82f93e0a259
=======
=======
=======
=======
<<<<<<< 02eeaad02688f25b3047bfe077efef040ab0c085
>>>>>>> ajuste videos
<<<<<<< 41a43b6e5243fa32269157b53ee4a6500149ae25
>>>>>>> pull
<<<<<<< c228c476b3280e43e2cbe534cef6fbdf98445857
>>>>>>> botoes play
<<<<<<< 97cf5bf39550d41552f179a3f6d5c10037de03c7
<<<<<<< 182d4d47f863b976d4a6be35bcaabf7d979231c3
>>>>>>> ajuste videos
=======
=======
<<<<<<< 32de96967b9fe3db6b0baa38859c4424a5352d39
>>>>>>> pull
<<<<<<< 9c4093889bb0675d0b43b53becd0db41a3d4f403
>>>>>>> pull
=======
=======
>>>>>>> ajuste videos
>>>>>>> ajuste videos
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
<<<<<<< 15ea8ce934e1bb78b823e5fae6181f87266d9f49
	$("#showBorder").hide();
	$("#showDivinity").hide();
<<<<<<< 03b3ebae205893be2b4a84863d9d69956ea5264a
<<<<<<< 02eeaad02688f25b3047bfe077efef040ab0c085
=======
>>>>>>> ajuste videos
<<<<<<< 182d4d47f863b976d4a6be35bcaabf7d979231c3
<<<<<<< 447dbe9a02cd8cd1790aa92a64164cc67d9cc708
<<<<<<< f7fc348215c9bc1e21845418f0a8428a9b7a5a4d
=======
<<<<<<< 41a43b6e5243fa32269157b53ee4a6500149ae25
>>>>>>> pull
=======
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
<<<<<<< f34f76672c63e21cf5ad8366911538a0514967fe
<<<<<<< 2976652da3f2a7977fede7a3f2d3cfebe8fc813d
>>>>>>> botoes play
=======
	$("#showBorder").hide();
	$("#showDivinity").hide();
>>>>>>> botao video e audio
=======
>>>>>>> ajuste videos
=======
=======
	$("#pauseSoja").hide();
	$("#pauseManeva").hide();
>>>>>>> botoes play
=======
<<<<<<< 5f4b5e7dc3274e61ab707152404cd72e096cc79a
>>>>>>> botao video e audio
>>>>>>> botoes play
=======
	$("#showBorder").hide();
	$("#showDivinity").hide();
>>>>>>> botao video e audio
=======
>>>>>>> pull
=======
>>>>>>> ajuste videos
=======
=======
>>>>>>> botoes play
>>>>>>> botoes play
	$("#personal").click(function(){
		$("#personalTitle>.content").stop().slideToggle("slow");
	});
	$("#professional").click(function(){
		$("#professionalTitle>.content").stop().slideToggle("slow");
	});
	$("#hobby").click(function(){
		$("#hobbyTitle>.content").stop().slideToggle("slow");
	});
	$("#contact").click(function(){
		$("#contactTitle>.content").stop().slideToggle("slow");
	});
	$("#playSoja").click(function(){
		videoSoja.play();
		$("#playSoja").hide();
		$("#pauseSoja").show();
	});
	$("#pauseSoja").click(function(){
		videoSoja.pause();
		$("#pauseSoja").hide();
		$("#playSoja").show();
	});
	$("#replaySoja").click(function(){
		videoSoja.load();
		$("#pauseSoja").hide();
		$("#playSoja").show();
<<<<<<< 8443819509602a5b1ce2a7ebb06534bb5c37dcd5
<<<<<<< 447dbe9a02cd8cd1790aa92a64164cc67d9cc708
<<<<<<< f56023b243ff363b8b9435a639dc43f65fb1f2af
	});
	$("#playManeva").click(function(){
		videoManeva.play();
		$("#playManeva").hide();
		$("#pauseManeva").show();
	});
	$("#pauseManeva").click(function(){
		videoManeva.pause();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#replayManeva").click(function(){
		videoManeva.load();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#hideBorder").click(function(){
		$("#border").fadeIn();
		$("#hideBorder").hide();
		$("#showBorder").show();
	});
	$("#showBorder").click(function(){
		$("#border").fadeOut();
		$("#hideBorder").show();
		$("#showBorder").hide();
	});
	$("#hideDivinity").click(function(){
		$("#divinit").fadeIn();
		$("#hideDivinity").hide();
		$("#showDivinity").show();
	});
	$("#showDivinity").click(function(){
		$("#divinit").fadeOut();
		$("#hideDivinity").show();
		$("#showDivinity").hide();
	});
=======
=======
=======
<<<<<<< 03b3ebae205893be2b4a84863d9d69956ea5264a
>>>>>>> botoes play
<<<<<<< c228c476b3280e43e2cbe534cef6fbdf98445857
>>>>>>> botoes play
	});
	$("#playManeva").click(function(){
		videoManeva.play();
		$("#playManeva").hide();
		$("#pauseManeva").show();
	});
	$("#pauseManeva").click(function(){
		videoManeva.pause();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#replayManeva").click(function(){
		videoManeva.load();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#hideBorder").click(function(){
		$("#border").fadeIn();
		$("#hideBorder").hide();
		$("#showBorder").show();
	});
	$("#showBorder").click(function(){
		$("#border").fadeOut();
		$("#hideBorder").show();
		$("#showBorder").hide();
	});
	$("#hideDivinity").click(function(){
		$("#divinit").fadeIn();
		$("#hideDivinity").hide();
		$("#showDivinity").show();
	});
	$("#showDivinity").click(function(){
		$("#divinit").fadeOut();
		$("#hideDivinity").show();
		$("#showDivinity").hide();
	});
<<<<<<< 447dbe9a02cd8cd1790aa92a64164cc67d9cc708
<<<<<<< 2976652da3f2a7977fede7a3f2d3cfebe8fc813d
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
>>>>>>> botoes play
=======
>>>>>>> botao video e audio
=======
=======
=======
<<<<<<< 15ea8ce934e1bb78b823e5fae6181f87266d9f49
>>>>>>> botoes play
	});
	$("#playManeva").click(function(){
		videoManeva.play();
		$("#playManeva").hide();
		$("#pauseManeva").show();
	});
	$("#pauseManeva").click(function(){
		videoManeva.pause();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#replayManeva").click(function(){
		videoManeva.load();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#hideBorder").click(function(){
		$("#border").fadeIn();
		$("#hideBorder").hide();
		$("#showBorder").show();
	});
	$("#showBorder").click(function(){
		$("#border").fadeOut();
		$("#hideBorder").show();
		$("#showBorder").hide();
	});
	$("#hideDivinity").click(function(){
		$("#divinit").fadeIn();
		$("#hideDivinity").hide();
		$("#showDivinity").show();
	});
	$("#showDivinity").click(function(){
		$("#divinit").fadeOut();
		$("#hideDivinity").show();
		$("#showDivinity").hide();
	});
<<<<<<< 03b3ebae205893be2b4a84863d9d69956ea5264a
<<<<<<< 5f4b5e7dc3274e61ab707152404cd72e096cc79a
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
>>>>>>> botoes play
<<<<<<< f34f76672c63e21cf5ad8366911538a0514967fe
>>>>>>> botoes play
=======
=======
>>>>>>> botao video e audio
>>>>>>> botao video e audio
=======
=======
	});
	$("#playManeva").click(function(){
		videoManeva.play();
		$("#playManeva").hide();
		$("#pauseManeva").show();
	});
	$("#pauseManeva").click(function(){
		videoManeva.pause();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#replayManeva").click(function(){
		videoManeva.load();
		$("#pauseManeva").hide();
		$("#playManeva").show();
	});
	$("#clickBorder").click(function(){
		$("#border").fadeToggle();
		
	});
	$("#clickDivinit").click(function(){
		$("#divinit").fadeToggle();
		
	});
	var videoSoja=document.getElementById("soja");
	var videoManeva=document.getElementById("maneva");
>>>>>>> botoes play
>>>>>>> botoes play
});