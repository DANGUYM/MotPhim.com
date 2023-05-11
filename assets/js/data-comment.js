let cmt1 = {
    id: 1,
    id_user: 1,
    id_film: 1,
    content: 'Phim hay quá nhưng mà sao ít người xem vậy?',
    date: new Date(2022, 7, 15, 10, 30, 0)
}

let dscmt = [cmt1]

localStorage.setItem("dscmt", JSON.stringify(dscmt))