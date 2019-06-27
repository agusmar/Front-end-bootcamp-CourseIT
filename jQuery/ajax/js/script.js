$.ajax ({
  method: "GET",
  url: "https://api.github.com/users/agusmar"
}).done(data => {
  $("#name").html(data.name);
  $("#bio").html(data.bio);
  $("#avatar").append(`<img src="${data.avatar_url}" />`)
  console.log(data)
  if (data.hireable) {
    $("#jobstatus").append("Busco trabajo, pues macrisis")
  }
  else {
    $("#jobstatus").append("Estoy trabajando y cobro en dolares")
  }
})
