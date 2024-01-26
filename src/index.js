console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  function fetchDogs() {
    fetch(imgUrl)
      .then((resp) => resp.json())
      .then((data) => {
        const images = data.message;

        const container = document.getElementById("dog-image-container");

        images.forEach((imageUrl) => {
          const imgElement = document.createElement("img");
          imgElement.src = imageUrl;

          container.appendChild(imgElement);
        });
      })
      .catch((error) => console.error("Error fetching images:", error));
  }

  function fetchAllDogs() {
    fetch(breedUrl)
      .then((resp) => resp.json())
      .then((data) => {
        const breeds = Object.keys(data.message);
        const list = document.getElementById("dog-breeds");

        breeds.forEach((breed) => {
          const listItem = document.createElement("li");
          listItem.textContent = breed;

          listItem.addEventListener("click", function () {
            listItem.style.color = "red";
          });
          list.appendChild(listItem);
        });
      })
      .catch((error) => console.error("Error fetching breeds:", error));
  }

  fetchDogs();
  fetchAllDogs();
});
