var bookmarksRed = document.querySelectorAll(".add-bookmarks"), index, bookmark;
var basketsRed = document.querySelectorAll(".buy"), index, basket1;
var bookmarks = document.querySelector(".bookmarks");
var baskets = document.querySelector(".basket");
for (index = 0; index < bookmarksRed.length; index++) {
    bookmark = bookmarksRed[index];
    bookmark.addEventListener('click', function (evt) {
      evt.preventDefault(); 
      bookmarks.classList.add("red-fill");}) 
    }
    for (index = 0; index < basketsRed.length; index++) {
    basket1 = basketsRed[index];
    basket1.addEventListener('click', function (evt) {
    evt.preventDefault(); 
    baskets.classList.add("red-fill");}) 
    }