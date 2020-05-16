//jshint esversion: 6

let requestURL = "https://thejsway-server.herokuapp.com/api/articles";

//clear old photos and files

$.getJSON(requestURL, function(response) {
  console.log(response);
/*
  console.log(`Article ${response[0].id}
    Title: ${response[0].title}
    Content: ${response[0].comment}`);

    response.forEach(function(article, index) {
      let newDiv = document.createElement("div");
      document.querySelector(".articles").appendChild(newDiv);

      let header = document.createElement("h3");
      header.textContent = `Article ${article.id}`;
      newDiv.appendChild(header);

      let titlePar = document.createElement("p");
      titlePar.textContent = article.title;
      newDiv.appendChild(titlePar);

      let contentPar = document.createElement("p");
      contentPar.textContent = article.content;
      newDiv.appendChild(contentPar);

    };
    */
});
