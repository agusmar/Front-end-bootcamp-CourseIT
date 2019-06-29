
function getCatByCategory(id) {
  let url = `https://api.thecatapi.com/v1/images/search`;

  if (id != 0){
    url= `${url}?category_ids=${id}`
  }

    $.ajax ({
      method: "GET",
      url: url
    }).done(data => {
      $("#randomCat").html(`<img src="${data[0].url}" />`)
    })
  }

