$(function () {

	/* 이미지 슬라이드 */
	$("#btnArrowPrev").click(function () {
		$("#shuttleFrame").css({"margin-left" : "-310px"});
		$("#shuttleFrame table:last-child").insertBefore("#shuttleFrame table:first-child");
		$("#shuttleFrame").animate({
			"margin-left": "0",
			},
			300
		);
	});

	$("#btnArrowNext").click(function () {
		$("#shuttleFrame").animate({
			"margin-left": "-310px"
			},
			300,
			function(){
				$("#shuttleFrame table:first-child").insertAfter("#shuttleFrame table:last-child");
				$("#shuttleFrame").css({"margin-left" : "0"});
		});
	});
	/* 이미지 슬라이드 */

	/* 공지사항 멀티탭 */
    $("button").click(function () {

	});

	/* 공지사항 멀티탭 */

	/* 알림판 이미지 슬라이드 */

		/* 자동 슬라이드 구현 */
	var slideGo = setInterval(fnSlide, 3000);

	function fnSlide() {
		$("#bannerFrame").animate({
			"margin-left": "-370px"
			},
			800,
			function(){
				$("#bannerFrame>span:first").insertAfter("#bannerFrame>span:last");
				$("#bannerFrame").css({"margin-left": "0"});
			}
		);
	}
		/* 자동 슬라이드 구현 */

		/* 일시정지&시작 버튼 전환 */
	$("#btnArea").mouseover(function(){
		var srcValue = "images/control_play.png";	// 문자열 데이터
		$("#pauseBtn").attr("src", srcValue);
		clearInterval(slideGo);		// 자동 슬라이드 멈춤
	});

	$("#btnArea").mouseout(function(){
		var srcValue = "images/control_pause.png";
		$("#pauseBtn").attr("src", srcValue);

		slideGo = setInterval(fnSlide, 3000);
	});
		/* 일시정지&시작 버튼 전환 */

	/* 알림판 이미지 슬라이드 */

});



