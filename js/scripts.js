// 确保DOM完全加载后再执行脚本
document.addEventListener('DOMContentLoaded', (event) => {
    // 选择所有具有 'start_button' 类的元素，并为它们添加点击事件监听器
    document.querySelectorAll('.start_button').forEach(button => {
        button.addEventListener('click', function() {
            // 当按钮被点击时，将页面重定向到 login.html
            window.location.href = 'login.html';
        });
    });

    // 选择所有具有 'start_button' 类的元素，并为它们添加点击事件监听器
    document.querySelectorAll('.login_button').forEach(button => {
        button.addEventListener('click', function() {
            // 当按钮被点击时，将页面重定向到 login.html
            window.location.href = 'wish.html';
        });
    });
});