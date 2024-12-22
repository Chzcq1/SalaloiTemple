document.addEventListener('DOMContentLoaded', function() {
  const navUl = document.querySelector('nav ul');

  function adjustNavLayout() {
    // ตรวจสอบขนาดหน้าจอและเปลี่ยนค่า display
    if (window.innerWidth <= 600) {
      // สำหรับหน้าจอขนาดเล็ก (มือถือ), จัดไอคอนในแนวนอน
      navUl.style.display = 'flex';
      navUl.style.flexDirection = 'row'; // กำหนดให้ไอคอนเรียงในแนวนอน
    } else {
      // สำหรับหน้าจอขนาดใหญ่, ใช้การตั้งค่าเดิม
      navUl.style.display = 'flex';
      navUl.style.flexDirection = 'row'; // หรือสามารถปรับให้เหมาะสมตามขนาด
    }
  }

  // เรียกใช้ฟังก์ชันเพื่อปรับการแสดงผลในขนาดหน้าจอที่เปลี่ยนไป
  adjustNavLayout();

  // ฟังการเปลี่ยนแปลงขนาดหน้าจอ
  window.addEventListener('resize', adjustNavLayout);
});
