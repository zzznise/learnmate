document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const messageList = document.getElementById("messageList");

  searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();
    const items = messageList.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
      let text = items[i].textContent.toLowerCase();
      items[i].style.display = text.includes(filter) ? "" : "none";
    }
  });
});

function clearSearch() {
  document.getElementById("search").value = "";
  const items = document
    .getElementById("messageList")
    .getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "";
  }
}