const form = document.querySelector("#movieForm");
const div = document.querySelector("#imgHolder");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log("Form submit", e);
  let input = document.querySelector("#movieInput").value;
  const config = { params: { q: input } };
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${input}`,
    config
  );
  makeImages(res.data);
  document.querySelector("#movieInput").value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      div.append(img);
    }
  }
};
