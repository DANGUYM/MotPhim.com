// Sử dụng Express.js để tạo một ứng dụng web
const express = require('express');
const app = express();

// Sử dụng session middleware
const session = require('express-session');
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Định nghĩa một API để lưu trữ thông tin session
app.get('/setSession', function(req, res) {
  req.session.name = 'John';
  res.send('Session set successfully');
});

// Khởi động server
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});



// Tạo một yêu cầu Ajax để gửi thông tin session đến client-side
var xhr = new XMLHttpRequest();
xhr.open("GET", "/session", true);

// Xử lý kết quả trả về từ yêu cầu Ajax
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Lấy thông tin session từ dữ liệu trả về
    var sessionData = JSON.parse(xhr.responseText);

    // Truy cập thông tin session
    var sessionId = sessionData.sessionId;
    var userName = sessionData.name;
    console.log("Session ID: " + sessionId);
    console.log("User name: " + userName);
  }
};

// Gửi yêu cầu Ajax để lấy thông tin session
xhr.send();