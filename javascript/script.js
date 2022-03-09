$(document).ready(function(){
  $('.main-slider').slick({
    dots: false,
    arrows:true,
    prevArrow:".left-arrow",
    nextArrow:".right-arrow",
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.main-slider2').slick({
    dots: true,
    arrows:true,
    prevArrow:".left",
    nextArrow:".right",
    infinite: true,
    speed: 800,
    autoplay:true,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // time Display clock-1 
  });
  $(document).ready(function(){
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      return {
          total,
          days,
          hours,
          minutes,
          seconds
          };
      }
        function initializeClock(id, endtime) 
        {
            const clock = document.getElementById(id);
            const daysSpan = clock.querySelector('.days');
            const hoursSpan = clock.querySelector('.hours');
            const minutesSpan = clock.querySelector('.minutes');
            const secondsSpan = clock.querySelector('.seconds');
            function updateClock() 
            {
                const t = getTimeRemaining(endtime);
                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
                if (t.total <= 0) 
                {
                clearInterval(timeinterval);
                }
            }
            updateClock();
            const timeinterval = setInterval(updateClock, 1000);
        }   
        const deadline = new Date(Date.parse(new Date()) + 60 * 24 * 60 * 60 * 1000);
        initializeClock('clockdiv-1', deadline);
        ('clockdiv-1', deadline);   
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
        total,
        days,
        hours,
        minutes,
        seconds
        };
    }
      function initializeClock(id, endtime) 
      {
          const clock = document.getElementById(id);
          const daysSpan = clock.querySelector('.days');
          const hoursSpan = clock.querySelector('.hours');
          const minutesSpan = clock.querySelector('.minutes');
          const secondsSpan = clock.querySelector('.seconds');
          function updateClock() 
          {
              const t = getTimeRemaining(endtime);
              daysSpan.innerHTML = t.days;
              hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
              minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
              secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
              if (t.total <= 0) 
              {
              clearInterval(timeinterval);
              }
          }
          updateClock();
          const timeinterval = setInterval(updateClock, 1000);
      }   
      const deadline = new Date(Date.parse(new Date()) + 60 * 24 * 60 * 60 * 1000);
      initializeClock('clockdiv-2', deadline);
      ('clockdiv-2', deadline);

      $(document).ready(function(){
        function getTimeRemaining(endtime) {
          const total = Date.parse(endtime) - Date.parse(new Date());
          const seconds = Math.floor((total / 1000) % 60);
          const minutes = Math.floor((total / 1000 / 60) % 60);
          const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
          const days = Math.floor(total / (1000 * 60 * 60 * 24));
          return {
              total,
              days,
              hours,
              minutes,
              seconds
              };
          }
            function initializeClock(id, endtime) 
            {
                const clock = document.getElementById(id);
                const daysSpan = clock.querySelector('.days');
                const hoursSpan = clock.querySelector('.hours');
                const minutesSpan = clock.querySelector('.minutes');
                const secondsSpan = clock.querySelector('.seconds');
                function updateClock() 
                {
                    const t = getTimeRemaining(endtime);
                    daysSpan.innerHTML = t.days;
                    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
                    if (t.total <= 0) 
                    {
                    clearInterval(timeinterval);
                    }
                }
                updateClock();
                const timeinterval = setInterval(updateClock, 1000);
            }   
            const deadline = new Date(Date.parse(new Date()) + 60 * 24 * 60 * 60 * 1000);
            initializeClock('clockdiv-3', deadline);
            ('clockdiv-3', deadline);
      });

      $(document).ready(function(){
        function getTimeRemaining(endtime) {
          const total = Date.parse(endtime) - Date.parse(new Date());
          const seconds = Math.floor((total / 1000) % 60);
          const minutes = Math.floor((total / 1000 / 60) % 60);
          const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
          const days = Math.floor(total / (1000 * 60 * 60 * 24));
          return {
              total,
              days,
              hours,
              minutes,
              seconds
              };
          }
            function initializeClock(id, endtime) 
            {
                const clock = document.getElementById(id);
                const daysSpan = clock.querySelector('.days');
                const hoursSpan = clock.querySelector('.hours');
                const minutesSpan = clock.querySelector('.minutes');
                const secondsSpan = clock.querySelector('.seconds');
                function updateClock() 
                {
                    const t = getTimeRemaining(endtime);
                    daysSpan.innerHTML = t.days;
                    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
                    if (t.total <= 0) 
                    {
                    clearInterval(timeinterval);
                    }
                }
                updateClock();
                const timeinterval = setInterval(updateClock, 1000);
            }   
            const deadline = new Date(Date.parse(new Date()) + 60 * 24 * 60 * 60 * 1000);
            initializeClock('clockdiv-4', deadline);
            ('clockdiv-4', deadline);
      });
      $(document).ready(function(){        
      $('.slider-slide').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      dots:false,
      arrows:true,
      nextArrow:".rigt",
      prevArrow:".let",
    });
  });
  $(document).ready(function(){        
    $('.slider-slide_2').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    dots:false,
    arrows:true,
    nextArrow:".rigt_last",
    prevArrow:".let_last",
  });
});