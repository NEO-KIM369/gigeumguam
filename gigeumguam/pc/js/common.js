$(document).ready(function () {
  const mainSwiper = new Swiper('.main_swiper', {
    loop: true,
    centeredSlides: true,
    speed: 800,
    effect: "fade",//그냥 넘기기 할꺼면 지우면 됨
    autoplay:{
		  delay: 2500, // 시간 설정
      disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    pagination: {
      el: ".main_swiper .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".main_swiper .swiper-button-next",
      prevEl: ".main_swiper .swiper-button-prev",
	  },
  });

  const sect5Swiper = new Swiper('.sect5_swiper', {
    loop: true,
    centeredSlides: true,
    speed: 800,
    autoplay:{
		  delay: 2500, // 시간 설정
      disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    navigation: {
      nextEl: ".sect5_swiper .swiper-button-next",
      prevEl: ".sect5_swiper .swiper-button-prev",
	  },
  });
  // 재생/멈춤 기능
  const playPauseButton = $(".swiper-button-item");
    let isPaused = false;

    playPauseButton.on("click", function () {
      if (isPaused) {
        mainSwiper.autoplay.start();
        playPauseButton.removeClass("pause");
      } else {
        mainSwiper.autoplay.stop();
        playPauseButton.addClass("pause");
      }
      isPaused = !isPaused;
    });
  
    // gnb Animation
    $(".all_menu").click(function () {
      $(".menu_detail").slideToggle();
    });
    $(".main_close").click(function () {
      $(".menu_detail").slideUp();
    });


  var n = 0;
  var pos;

  $(".btn .sc4_prev button").click(function (e) {
    e.preventDefault();
    if (n > 0) {
      n--;
      console.log(n);
      pos = n * (-450) + "px";
      $(".sc4_slideviewer ul").animate({
        left: pos
      }, 500);
      console.log(n);
      console.log(pos);
    }
  });
  $(".btn .sc4_next button").click(function (e) {
    e.preventDefault();
    if (n < 8) {
      n++;
      console.log(n);
      pos = n * (-450) + "px";
      $(".sc4_slideviewer ul").animate({
        left: pos
      }, 500);
      console.log(n);
      console.log(pos);
    }
  });

  $(".fix_btn_4").click(function () {
    var htmloffset = $('html').offset();

    $('html, body').animate({ scrollTop: htmloffset.top }, 400);
});



const updatePageNumbers = (swiper) => {
  const realActiveIndex = swiper.realIndex;
  const totalSlides = swiper.slides.length;

  const activePageElement = document.querySelector('.active_page');
  activePageElement.textContent = realActiveIndex + 1;

  const totalPageElement = document.querySelector('.total_page');
  totalPageElement.textContent = totalSlides;
};

const swiper03 = new Swiper('.product_detail_slide > .swiper', {
  loop: true, // 무한인지
  slidesPerView: 1, // 보일갯수
  spaceBetween: 0, //  슬라이드 사이에 간격
  loopAdditionalSlides: 2, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
  speed: 600, // 넘어가는 속도
  autoplay: {
    delay: 2000, // 넘어가고 난 후에 딜레이 
    disableOnInteraction: false // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
  },
  on: {
    init: function () {
      updatePageNumbers(this);
    },
    slideChange: function () {
      updatePageNumbers(this);
    },
  },
});

	
$('ul.tabs li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.tabs li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
})


const $calendarBody = $('#calendarBody');
const $monthYear = $('#monthYear');
const $selectedDate = $('#selectedDate');

let currentDate = new Date();

function generateCalendar(year, month) {
  $calendarBody.empty();
  $monthYear.text(`${year}.${month + 1}`);

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  let date = new Date(firstDay);
  date.setDate(1 - firstDay.getDay());

  while (date <= lastDay) {
    let row = $('<tr>');
    for (let i = 0; i < 7; i++) {
      let cell = $('<td>').text(date.getDate());
      cell.click(function() {
          $selectedDate.val(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

      });

      if (date.getMonth() !== month) {
          cell.addClass('disabled');
      }

      if (date.toDateString() === currentDate.toDateString()) {
          cell.addClass('today');
      }

      row.append(cell);
      date.setDate(date.getDate() + 1);
    }
    $calendarBody.append(row);
  }
}

generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
  attachClickHandlersToCalendar(); // 초기 이벤트 핸들러 등록

  $('#prevMonth').click(function() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    attachClickHandlersToCalendar();
  });

  $('#nextMonth').click(function() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    attachClickHandlersToCalendar();
  });


  function attachClickHandlersToCalendar() {
    $('#calendarBody td').on('click', function () {
      const clickedDate = `${$monthYear[0].innerHTML}.${$(this).text()}`;

      if (clickedDate === selectedDate) {
        $(this).removeClass('active');
        selectedDate = '';
      } else {
        $('#calendarBody td').removeClass('active');
        $(this).addClass('active');
        selectedDate = clickedDate;
      }

      if (selectedDate !== '' && selectValue !== '') {
        $rsvtBtn.addClass('active');
        $rsvtBtn.disabled = false;
      } else {
        $rsvtBtn.removeClass('active'); // 선택 해제할 경우 클래스 제거
        $rsvtBtn.disabled = true;
      }
    });
  }

  $(".productreservation_btn").click(function () {
    $(".product_daylist").css({"left":"0"});
  });

  $(".daylist_close").click(function () {
    $(".product_daylist").css({"left":"100%"});
  });

  $(".fix_btn_3").click(function(){
    $(".fixchat_wrap").css({"display":"block"})
  });
  $(".chat_close_btn").click(function(){
    $(".fixchat_wrap").css({"display":"none"})
  });

});
