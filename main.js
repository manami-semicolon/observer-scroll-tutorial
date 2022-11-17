let imagesItems = [...document.querySelectorAll(".img-wrap")];

console.log(imagesItems);

let titles = [...document.querySelectorAll("h2")];
let titleMassage = document.querySelector(".title");


// 監視対象になった瞬間activeを負荷する
let setItemActive = (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
};

let options = {
    rootMargin: "0px",
    threshold: 0.5,
};

// どこにいるのか監視する
let observer = new IntersectionObserver(setItemActive, options);


// img-wrapは偶数と奇数で出現する場所が違う
imagesItems.map((item, index) => {
    console.log(item, index);
    item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`;
    // 偶数であれば　= 偶数(true):奇数(false)// 参考演算子
    index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item);
});

titles.map((title, index) => {
    index % 2 == 0 ? (title.style.left = "45%") : (title.style.left = "15%");
    observer.observe(title);
});

observer.observe(titleMassage);