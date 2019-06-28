$.ajax ({
  method: "GET",
  url: "https://api.github.com/users/agusmar"
}).done(data => {
  $("#name").html(data.name);
  $("#bio").html(data.bio);
  $("#avatar").append(`<img src="${data.avatar_url}" />`)
  console.log(data)
  if (data.hireable) {
    $("#jobstatus").append("I´m looking for an awesome company to hire me")
  }
  else {
    $("#jobstatus").append("I´m currently working but I would be pleased to know from you")
  }
})
