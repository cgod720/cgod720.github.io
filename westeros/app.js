$(() => {
  // const $getHouse = (event) => {
  //   const $house = $(event.currentTarget).attr('id');
  // }

  $('button').on('click', (event) => {
    // console.log("here");
    event.preventDefault();
    const $id = $(event.currentTarget).attr('id');
    $.ajax(
      {
        url: "https://anapioficeandfire.com/api/houses/" + $id,
        type: "GET",
        // data: {
        //   "$limit" : $number
        // }

    }).then(
      (data) => {
          console.log(data);
          for(i = 0; i < 10; i++){
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
