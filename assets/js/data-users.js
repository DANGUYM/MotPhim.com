let user1 = {
    iduser: 1,
    username: 'khangdora',
    displayname: 'Võ Trường Khang',
    password: '123',
    coin: '10000',
    avatar: 'https://i.imgur.com/KbqwIdO.jpg',
    permission: 2 //0 thường - 1 vip - 2 admin
}

let user2 = {
    iduser: 2,
    username: 'danguym',
    displayname: 'Đa Nghiêm',
    password: '123',
    coin: '10000',
    avatar: 'https://i.imgur.com/mqooK8G.png',
    permission: 2
}

let user3 = {
    iduser: 3,
    username: 'normal',
    displayname: 'Khá Bảnh',
    password: '123',
    coin: 0,
    avatar: 'https://i.imgur.com/RluIHMV.jpg',
    permission: 0
}

let user4 = {
    iduser: 4,
    username: 'vip',
    displayname: 'Sơn Tùng',
    password: '123',
    coin: '5000',
    avatar: 'https://i.imgur.com/RluIHMV.jpg',
    permission: 1
}

let dsusers = [user1, user2, user3, user4]

localStorage.setItem("dsusers", JSON.stringify(dsusers))