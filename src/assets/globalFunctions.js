const duration = 75;
export function listTransition() {
    const listItems = document.querySelectorAll(".scores li");
    listItems.forEach((li, i) => {
        li.style.transform = "rotateX(90deg)";
        li.style.opacity = "0";
        li.style.transformProperty = "transform opacity";
        li.style.transition = "200ms ease";
        setTimeout(() => {
            li.style.transform = "rotateX(0deg)";
            li.style.opacity = "1";
        }, i * duration + duration);
    });
}
// export function listTransition() {
//     const listItems = document.querySelectorAll(".scores li");
//     listItems.forEach((li, i) => {
//         li.style.transform = "translateX(50px)";
//         li.style.opacity = "0";
//         li.style.transformProperty = "transform opacity";
//         li.style.transition = "200ms ease";
//         setTimeout(() => {
//             li.style.transform = "translateX(0)";
//             li.style.opacity = "1";
//         }, i * 75);
//     });
// }