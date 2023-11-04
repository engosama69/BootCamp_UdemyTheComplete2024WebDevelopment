// 방법 1 : $
$("h1").css("color", "white");

// 방법 2 :jQuery()
jQuery("h1").css("background-color", "blue");

// 모든 항목을 선택한다.
$("button").css("background-color", "gold");

// 클래스 삽입
$("h2").addClass("big_title");

// 클래스 제거
$("h2").removeClass("big_title");

// 텍스트 수정
$("h1").text("Changed");

// html 넣기
$("button").html("<em>Hey</em>")

// 속성 변경
$("a").attr("href", "https://www.google.com");

// 함수
$("button").click(function() {
    $("h1").css("color", "purple");
})

/*
for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "purple";
    })
}
*/

$("input").keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key)
})

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
})

$("h1").on("mouseout", function() {
    $("h1").css("color", "white");
})

// <h2> 태그 안에 추가
$("h2").prepend("<button>prepend</button>");
$("h2").append("<button>append</button>");

// <h2> 태그 밖에 추가
$("h2").before("<button>before</button>");
$("h2").after("<button>after</button>");

// 클릭하면 해당 요소 숨기기
$("h1").on("click", function() {
    $("h1").hide();
})

$(".button1").on("click", function() {
    $("h2").fadeToggle();
})

$(".button2").on("click", function() {
    $("h2").slideToggle(); 
})

$(".button3").on("click", function() {
    $("h2").animate({ opacity: 0.5 }); 
})

// 3개의 메서드를 한꺼번에 실행
$(".button4").on("click", function() {
    $("h2").slideUp().slideDown().animate({ opacity: 0.5 }); 
})

// 해당 스타일의 값을 확인할 수 있다.
console.log(("h1").css("background-color"));

// 모든 클래스 표시
console.log(("h2").attr("class"));