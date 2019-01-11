$(() => {

  const getswornMembers = (url) => {
    $.ajax(
      {
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

    //Clears any members currently listed
    $('#swornMembers').empty();

    const $id = $(event.currentTarget).attr('id');

    $.ajax(
      {
        url: "https://anapioficeandfire.com/api/houses/"+ $id,
        type: "GET",

      }).then(
          (data) => {
            console.log(data);
            $('#of').html(data.name);
            getLord(data.currentLord);
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
