// คำสั่งที่ใช้เพื่อให้ปุ่มทำงานเมื่อถูกคลิก
document.getElementById('clickMeButton').addEventListener('click', function() {
    // แสดงข้อความเมื่อคลิก
    document.getElementById('message').textContent = 'คุณคลิกปุ่มเรียบร้อยแล้ว!';
});
