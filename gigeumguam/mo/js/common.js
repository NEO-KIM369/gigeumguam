$(document).ready(function () {

  const swiper01 = new Swiper('.section01 > .swiper', {
    loop: true, // 무한인지
    slidesPerView: 1, // 보일갯수
    spaceBetween: 0, //  슬라이드 사이에 간격
    centeredSlides: true, //센터모드
    loopAdditionalSlides: 2, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    speed: 600, // 넘어가는 속도
    pagination: {
      el: '.section01 .swiper-pagination',
    },
    autoplay: {
      delay: 3000, // 넘어가고 난 후에 딜레이 
      disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
    },
  });

  const swiper02 = new Swiper('.section05 > .swiper', {
    loop: true, // 무한인지
    slidesPerView: 1, // 보일갯수
    spaceBetween: 0, //  슬라이드 사이에 간격
    centeredSlides: true, //센터모드
    loopAdditionalSlides: 2, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    speed: 600, // 넘어가는 속도
    pagination: {
      el: '.section05 .swiper-pagination',
    },
    autoplay: {
      delay: 2000, // 넘어가고 난 후에 딜레이 
      disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
    },
  });

  const getSlideDataIndex = (swipe) => {
    let activeIndex = swipe.activeIndex;
    let slidesLen = swipe.slides.length;
    if (swipe.params.loop) {
      switch (swipe.activeIndex) {
        case 0:
          activeIndex = slidesLen - 3;
          break;
        case slidesLen - 1:
          activeIndex = 0;
          break;
        default:
          --activeIndex;
      }
    }
    return activeIndex;
  };

  //스와이퍼 activeIndex로  text에 넣는 함수 
  const updatePageNumbers = (swiper) => {
    const realActiveIndex = swiper.realIndex;
    const totalSlides = swiper.slides.length;

    const activePageElement = document.querySelector('.active_page');
    activePageElement.textContent = realActiveIndex + 1;

    const totalPageElement = document.querySelector('.total_page');
    totalPageElement.textContent = totalSlides;
  };

  const swiper03 = new Swiper('.product_slide > .swiper', {
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

  //상세보기 아코디언
  $('.detail_rule_wrap').click(function () {
    const detailcontent = $(this).find('.detail_rule_txt_content');
    const detail_rule = $(this).find('.detail_rule');
    // 상세내용.slideToggle();
    if (detailcontent.is(":visible")) {
      // 상세내용이 보이는 상태인 경우, 슬라이드 업
      detailcontent.slideUp();
      detail_rule.removeClass("open");
    } else {
      // 상세내용이 숨겨져 있는 경우, 슬라이드 다운
      detailcontent.slideDown();
      detail_rule.addClass("open");
    }
  });





  $(".gnb_item").on('click', function () {
    let itemIndex = $(this).index();
    const $gnbItem = $(".gnb_item");
    const $lnbList = $(".lnb_list");

    $gnbItem.removeClass('on');
    $gnbItem.eq(itemIndex).addClass('on');
    $lnbList.removeClass('on');
    $lnbList.eq(itemIndex).addClass('on');
  });

  $(".menu_btn").on('click', function () {
    $(".side_menu").addClass('on')
  });

  $(".bottom_menu_btn").on('click', function () {
    $(".side_menu").addClass('on')
  });

  $(".close_btn").on('click', function () {
    $(".side_menu").removeClass('on')
  });

  $(".search_btn").click(function () {
    $(".search_section").css({
      "display": "block"
    });
  });

  $(".search_close_btn").click(function () {
    $(".search_section").css({
      "display": "none"
    });
  });

  $(".main_list").on('click', function () {
    let subList = $(this).find(".sub_list");

    if (subList.hasClass('on')) {
      subList.removeClass('on').slideUp();
    } else {
      $(".sub_list").removeClass('on').slideUp();
      subList.addClass('on').slideDown();
    }
  });

  $(".top_btn").on("click", function () {
    $('html, body').animate({
      scrollTop: 0
    }, 300)
    return false;
  });

  $(".btn1").click(function () {
    $(".btn1").css({
      "background-color": "#2885c0",
      "color": "#ffffff"
    });
    $(".btn2").css({
      "background-color": "#ffffff",
      "color": "#2da0cf"
    });
    $(".btn3").css({
      "background-color": "#ffffff",
      "color": "#32a6b9"
    });
    $(".btn4").css({
      "background-color": "#ffffff",
      "color": "#3eb388"
    });
  });

  $(".btn2").click(function () {
    $(".btn1").css({
      "background-color": "#ffffff",
      "color": "#2885c0"
    });
    $(".btn2").css({
      "background-color": "#2da0cf",
      "color": "#ffffff"
    });
    $(".btn3").css({
      "background-color": "#ffffff",
      "color": "#32a6b9"
    });
    $(".btn4").css({
      "background-color": "#ffffff",
      "color": "#3eb388"
    });
  });

  $(".btn3").click(function () {
    $(".btn1").css({
      "background-color": "#ffffff",
      "color": "#2885c0"
    });
    $(".btn2").css({
      "background-color": "#ffffff",
      "color": "#2da0cf"
    });
    $(".btn3").css({
      "background-color": "#32a6b9",
      "color": "#ffffff"
    });
    $(".btn4").css({
      "background-color": "#ffffff",
      "color": "#3eb388"
    });
  });

  $(".btn4").click(function () {
    $(".btn1").css({
      "background-color": "#ffffff",
      "color": "#2885c0"
    });
    $(".btn2").css({
      "background-color": "#ffffff",
      "color": "#2da0cf"
    });
    $(".btn3").css({
      "background-color": "#ffffff",
      "color": "#32a6b9"
    });
    $(".btn4").css({
      "background-color": "#3eb388",
      "color": "#ffffff"
    });
  });





  $(".join_agree_section").on("click", "#check_all", function () {
    var checked = $(this).is(":checked");

    if (checked) {
      $(this).parents(".join_agree_section").find('input').prop("checked", true);
    } else {
      $(this).parents(".join_agree_section").find('input').prop("checked", false);
    }
  });

  $(".join_agree_section").on("click", ".normal", function () {
    var checked = $(this).is(":checked");

    if (!checked) {
      $("#check_all").prop("checked", false);
    }
  });

  $(".join_agree_section").on("click", ".normal", function () {
    var is_checked = true;

    $(".join_agree_section .normal").each(function () {
      is_checked = is_checked && $(this).is(":checked");
    });

    $("#check_all").prop("checked", is_checked);
  });


  // $(".product_reservation_btn").click(function(){
  //    $(".product_reservation_wrap").css({"display":"block"});
  // });

  
  $(".product_reservation_close").click(function(){
    $(".product_reservation_wrap").css({"display":"none"});
 });


  $(".btn_plus").click(function () {
    const $cartListWrap = $(this).closest(".cart_list_wrap");
    const $ticketAccount = $cartListWrap.find(".account");
    let ticketValue = parseInt($ticketAccount.text());

    ticketValue++;
    $ticketAccount.text(ticketValue);
  });

  $(".btn_minus").click(function () {
    const $cartListWrap = $(this).closest(".cart_list_wrap");
    const $ticketAccount = $cartListWrap.find(".account");
    let ticketValue = parseInt($ticketAccount.text());

    if (ticketValue > 1) {
      ticketValue--;
      $ticketAccount.text(ticketValue);
    }
  });


  //추가된 js
  let selectedDate = '';
  let selectedProduct = '';
  let selectValue = '';
  let $rsvtBtn = $('.product_reservation_btn');
  
  // selected item
  $("input[type='radio'].rsvt_inp").change(function() {
    if ($(this).is(":checked")) {
      selectValue = $(this).val();
      $(".product_list_item").removeClass("active");
      let productWrap = $(this).closest('.product_list_item');
      productWrap.addClass('active');

    if (selectedDate !== '' && selectValue !== '') {
      $rsvtBtn.addClass('active');
    }
    }
  });


  //캘린더
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

  $rsvtBtn.on('click', function() {
    if(!$(this).hasClass('active')){
      $(".product_reservation_wrap").css({"display":"block"});
    } else {
      window.location='reservation_final.html'
    }
  });

});











