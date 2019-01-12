$(() => {

  //Function takes url as a parameter
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

  $('.house').on('click', (event) => {

    //Clears any members currently listed in between clicks
    $('#swornMembers').empty();

    const $id = $(event.currentTarget).attr('id');

    $.ajax(
      {
        url: "https://anapioficeandfire.com/api/houses/"+ $id,
        type: "GET",

      }).then(
          (data) => {

            //Targaryen theme
            if($id == 378){
              $('body').css('background', 'url("http://fc05.deviantart.net/fs71/f/2012/350/a/1/targaryen_wallpaper_by_jimiyo-d5o7ymg.jpg")');
              $('h1').css('color', 'gold');
              $('nav').css('background-color', 'darkred');
              $('.lord-of').css('color', 'gold').css('background-color', '').css('width', '679px').css('margin', '0 auto');
            //Baratheon theme
            } else if($id == 16){
              $('body').css('background', 'url("http://www.jakpost.travel/imgfiles/full/57/571973/house-baratheon-wallpaper.jpg")')
              $('h1').css('color', 'black');
              $('.lord-of').css('color', 'darkgold').css('background-color', 'rgba(0, 0, 0, 0.8)').css('width', '679px').css('margin', '0 auto');
            //Lannister theme
            } else if($id == 229){

            //Stark theme
            } else if($id == 362){
                $('body').css('background', 'url("https://www.wallpaperup.com/uploads/wallpapers/2014/03/06/288654/cbaa7cea48e7992dbf670d6e0a09ac48-700.jpg")')
            //Greyjoy theme
            } else if($id == 169){
                $('body').css('background', 'url("https://www.wallpaperup.com/uploads/wallpapers/2014/03/06/288654/cbaa7cea48e7992dbf670d6e0a09ac48-700.jpg")')
                $('.lord-of').css('color', 'black').css('font-weight', '900').css('background-color', 'rgba(255, 255, 255, 0.8)').css('width', '480px').css('margin', '0 auto');
                $('h1').css('color', 'black');
                $('a').css('color', 'black');
            }



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

  $('.pictures').on('click', () => {
      $('.modal').show();
  })
  $('.close').on('click', () => {
      $('.modal').hide();
  })

})
