
/* 현재 화면에 보이는지 안보이는지를 확인한다.  */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        /* 화면에 보이면 opacity를 1 */
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
        } else {
            entry.target.style.opacity = 0;
        }
    });
});

const div = document.querySelectorAll('div');
div.forEach(div => {
    observer.observe(div);
});