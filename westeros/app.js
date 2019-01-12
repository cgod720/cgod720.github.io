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

            if($id == 378){
              $('body').css('background', 'url("http://fc05.deviantart.net/fs71/f/2012/350/a/1/targaryen_wallpaper_by_jimiyo-d5o7ymg.jpg")');
              $('nav').css('background-color', 'darkred');
              $('.lord-of').css('color', 'gold');
            } else if($id == 169){
                $('body').css('background', 'url("http://i.imgur.com/hlhh3.jpg")')
                $('.lord-of').css('color', 'blue').css('font-weight', '900');
            } else if($id == 362){
                $('body').css('background', 'url("http://www.wallpapermaiden.com/wallpaper/15857/download/1366x768/game-of-thrones-the-north-remembers.jpg")')
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

  // $('.member').on('click', () => {
  //   const $div = $('<div>').html("hey")
  //   $modal.append($div);
  //
  // })


})
