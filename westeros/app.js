$(() => {

  $('.targ').on('click', (event) => {
    console.log("here");
    event.preventDefault();
    const $number = $('#input').val();

    $.ajax(
      {
        url: "https://anapioficeandfire.com/api/houses/378",
        type: "GET",
        // data: {
        //   "$limit" : $number
        // }

    }).then(
      (data) => {
          console.log(data);
          for(i = 0; i < 20; i++){
            const $div = $('<div>').html(data.swornMembers[i])
            $('#swornMembers').append($div)
          }
      },
      () => {
        console.log("bad data");
      }
    );

  })

})
