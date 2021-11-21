const menuIcon = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");
menuIcon.addEventListener("click", function () {
  console.log(123);
  navigation.classList.toggle("show");
});

document.addEventListener("click", function (event) {
  if (!navigation.contains(event.target)) {
    navigation.classList.remove(".show");
  }
});
