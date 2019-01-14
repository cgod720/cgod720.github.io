$(() => {
  /////////////////////////////////
  ///        Variables          ///
  ////////////////////////////////

  //Current image index for modal
  let currentImgIndex = 0

  //Variable for multiple functions to get house id
  let $id;


/////////////////////////////////////////////
///               Functions              ///
////////////////////////////////////////////

  //Function takes url as a parameter, gets member info
  const getswornMembers = (url) => {
    $.ajax(
      {
        //passes url in
        url: url,
        type: "GET"
      }).then(
        (data) => {
        const $button = $('<button>').html(data.name).addClass("member")
        $('#swornMembers').append($button)
        console.log(data)
        },
        () => {
          console.log("bad member data");
        }
      )
  }

  //Gets lord name from url provided
  const getLord = (url) => {
      console.log(url)
      $.ajax(
        {
          url: url,
          type: "GET"
      }).then(
        (data) => {
          console.log(data.name)
          $('#lord').html("Current Lord: " + data.name);
        },
        () => {
          $('#lord').html("");
        }
      )
  }

  const getTheme = (id) => {
    //Targaryen theme
    if(id == 378){
      if($(window).width() >= 900){
        $('body').css('background', 'url("http://fc05.deviantart.net/fs71/f/2012/350/a/1/targaryen_wallpaper_by_jimiyo-d5o7ymg.jpg")');
        $('h1').css('color', 'gold');
        $('.lord-of').css('color', 'gold').css('background-color', '').css('width', '679px').css('margin', '0 auto');
        $('a').css('color', 'gold')
      } else {
        defaultTheme();
      }
    //Baratheon theme
    } else if(id == 16){
        if($(window).width() >= 900){
          $('body').css('background', 'url("http://www.jakpost.travel/imgfiles/full/57/571973/house-baratheon-wallpaper.jpg")')
          $('h1').css('color', 'black');
          $('.lord-of').css('color', 'gold').css('background-color', 'rgba(0, 0, 0, 0.8)').css('width', '679px').css('margin', '0 auto');
          $('a').css('color', 'black').css('font-weight', 'bold');
        } else {
            defaultTheme();
        }
    //Lannister theme
    } else if(id == 229){
        if($(window).width() >= 900){
          $('body').css('background', 'url("https://cdn.wallpapersafari.com/39/91/hODbH3.jpg")');
          $('h1').css('color', 'black');
          $('.lord-of').css('background-color', 'rgba(0, 0, 0, 0.8)').css('width', '579px').css('margin', '0 auto').css('color', 'gold');
          $('a').css('color', 'black');
        } else {
            defaultTheme();
        }
    //Stark theme
    } else if(id == 362){
        if($(window).width() >= 900){
          $('body').css('background', 'url("https://www.tomswallpapers.com/pic/201502/1366x768/tomswallpapers.com-3657.jpg")');
          $('h1').css('color', 'white');
          $('.lord-of').css('color', 'white').css('background-color', '');
          $('a').css('color', 'white');
        } else {
            defaultTheme();
        }
    //Tyrell theme
    } else if(id == 398) {
        if($(window).width() >= 900){
          $('body').css('background', 'url("https://wallpapercave.com/wp/fmamDrr.jpg")');
          $('h1').css('color', 'gold');
          $('.lord-of').css('background-color', 'rgba(0, 0, 0, 0.8)').css('width', '479px').css('margin', '0 auto').css('color', 'gold');
          $('a').css('color', 'gold');
        } else {
            defaultTheme();
        }
    //Greyjoy Theme
    } else if(id == 169){
        if($(window).width() >= 900){
          $('body').css('background', 'url("https://www.wallpaperup.com/uploads/wallpapers/2014/03/06/288654/cbaa7cea48e7992dbf670d6e0a09ac48-700.jpg")')
          $('.lord-of').css('color', 'black').css('font-weight', '900').css('background-color', 'rgba(255, 255, 255, 0.8)').css('width', '480px').css('margin', '0 auto');
          $('h1').css('color', 'black');
          $('a').css('color', 'black');
        } else {
            defaultTheme();
        }
    //Arryn theme
    } else if(id == 7){
        if($(window).width() >= 900){
          $('body').css('background', 'url("https://i.pinimg.com/originals/e6/85/3e/e6853efe758813773f946c7aab29a568.jpg")')
          $('.lord-of').css('color', 'black').css('font-weight', '900').css('background-color', 'rgba(255, 255, 255, 0.5)').css('width', '480px').css('margin', '0 auto');
          $('h1').css('color', 'black');
          $('a').css('color', 'black');
        } else {
            defaultTheme();
        }
    //Tully theme
    } else if(id == 395){
        if($(window).width() >= 900){
          $('body').css('background', 'url("https://wallpaperstock.net/wallpapers/thumbs1/30169.jpg")')
          $('.lord-of').css('color', 'blue').css('font-weight', '900').css('background-color', 'rgba(0, 0, 0, 0.8)').css('width', '480px').css('margin', '0 auto');
          $('h1').css('color', 'red');
          $('a').css('color', 'red');
        } else {
            defaultTheme()
        }
    //Bolton theme
    } else if(id == 34){
        if($(window).width() >= 900){
          $('body').css('background', 'url("https://www.desktop-background.com/download/1366x768/2015/09/07/1007536_house-bolton-wallpapers_1600x1200_h.jpg")')
          $('.lord-of').css('color', 'darkblue').css('font-weight', '900').css('background-color', 'rgba(255, 255, 255, 0.5)').css('width', '579px').css('margin', '0 auto');
          $('h1').css('color', 'red');
          $('a').css('color', 'red');
        } else {
            defaultTheme();
        }
    //Martell theme
    } else if(id == 285){
        if($(window).width() >= 900){
          $('body').css('background', 'url("https://img2.goodfon.com/wallpaper/nbig/a/18/the-montain-gregor-clegane-vs.jpg")')
          $('h1').css('color', 'black');
          $('.lord-of').css('color', 'black').css('background', '');
          $('a').css('color', 'black').css('font-weight', 'bold');
        } else {
            defaultTheme();
        }
    }
  }

  const defaultTheme = () => {
    $('body').css('background', 'black');
    $('h1').css('color', 'gold')
    $('.lord-of').css('color', 'gold').css('background', '');
    $('a').css('color', 'gold')
  }


  ///////////////////////////////////
  ///       Event Listeners       ///
  ///////////////////////////////////

  //Event listener for window resizing, theme response
  //Got help from STACKOVERFLOW
    $(window).resize(() => {
      if( $(window).width() <= 900){
        defaultTheme();
      } else {
          $('body').css('background', 'url("https://www.desktop-background.com/download/1366x768/2014/10/14/839980_game-of-thrones-wallpapers_1920x1080_h.jpg")')
          getTheme($id);
      }
    })


  //Event listener for House buttons
  $('.house').on('click', (event) => {

    //Clears any members currently listed in between clicks
    $('#swornMembers').empty();

    //Sets id of the button that was clicked to $id
    $id = $(event.currentTarget).attr('id');

    //Calls getTheme function and passes in $id as the parameter
    getTheme($id);

    $('footer').css('margin-top', '20px');

    $.ajax(
      {
        url: "https://anapioficeandfire.com/api/houses/"+ $id,
        type: "GET",

      }).then(
          (data) => {

            console.log(data);
            $('#of').html(data.name);
            getLord(data.currentLord);
            $('#words').html(data.words)
            console.log(data.currentLord);
            for(i = 0; i < data.swornMembers.length; i++){
              getswornMembers(data.swornMembers[i]);
            }
      },
        () => {
          console.log("bad data");
        }
    );
  })


  //Event listener for pictures button
  $('.pictures').on('click', () => {
      $('.modal').show();
  })

  //Event listener for close button on modal
  $('.close').on('click', () => {
      $('.modal').hide();
  })

  //Event listener for next button on modal
  $('#next').on('click', () => {
      $('#images').children().eq(currentImgIndex).hide();
      currentImgIndex++;
      if(currentImgIndex > 3){
        currentImgIndex = 0;
      }
      $('#images').children().eq(currentImgIndex).show();
  })

  //Event listener for previous button on modal
  $('#prev').on('click', () => {
      $('#images').children().eq(currentImgIndex).hide();
      currentImgIndex--;
      console.log(currentImgIndex);
      if(currentImgIndex < 0){
        currentImgIndex = 3;
      }
      $('#images').children().eq(currentImgIndex).show();
  })

})
