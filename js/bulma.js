// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

    const links = menu.querySelectorAll(".navbar-item");
    links.forEach(link => {
        link.addEventListener("click", function () {
            burger.classList.remove("is-active");
            menu.classList.remove("is-active");
        });
    });

})();
