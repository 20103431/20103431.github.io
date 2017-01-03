$(document).ready(function(){
	var me = $(this);
	var aLi = $(this).find('.tsss_ct li');
	var mzLi = $(this).find('.yyts_r li');
	var hjLi = $(this).find('.yyhj_hd_r li');
	var nsLi = $(this).find('.news_hd li');
	var ysdyLi = $(this).find('.ys_ques_lb li');
	var aGtbx = $(this).find('.gtbx li');
	var aYyts_r = $(this).find('.yyts_r li');
	aLi.hover(function(){
		$(this).addClass('hot').siblings().removeClass('hot');
	})
	mzLi.hover(function(){
		$(this).addClass('hot').siblings().removeClass('hot');
	});
	hjLi.hover(function(){
		$(this).addClass('hot').siblings().removeClass('hot');
	});
	ysdyLi.hover(function(){
		$(this).addClass('hot').siblings().removeClass('hot');
	});

	nsLi.hover(function(){
		var index1 = $(this).index();
		$(this).addClass('hot').siblings().removeClass('hot');
		me.find('.news_ct>ul>li').eq(index1).show().siblings().hide();
	});

	aYyts_r.hover(function(){
		var _index = $(this).index();
		aGtbx.eq(_index).show().siblings().hide();
		aGtbx.eq(_index).animate({opacity:'1'},500).siblings().css('opacity',0);
	});
});