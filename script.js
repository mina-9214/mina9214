document.addEventListener('DOMContentLoaded', () => {
    const welcomeContainer = document.getElementById('welcome-container');
    const aboutContainer = document.getElementById('about-container');
    const enterBtn = document.getElementById('enter-btn');
    const backBtn = document.getElementById('back-btn');
    const submitBtn = document.getElementById('submit-btn');
    const messageInput = document.getElementById('message-input');
    let lastVisitedContent = null;

    welcomeContainer.style.display = 'flex';
    document.body.style.opacity = 1;

    enterBtn.addEventListener('click', () => {
        document.body.style.opacity = 0;
        setTimeout(() => {
            welcomeContainer.style.display = 'none';
            aboutContainer.style.display = 'block';
            document.body.style.opacity = 1;
            document.getElementById('intro').classList.add('active'); // 預設顯示基本介紹
        }, 1000);
    });

    document.querySelectorAll('.nav-btn, .sub-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            if (targetId) {
                if (lastVisitedContent) {
                    lastVisitedContent.classList.remove('active');
                    lastVisitedContent.style.opacity = 0;
                }
                setTimeout(() => {
                    if (targetId !== 'intro') {
                        document.getElementById('intro').classList.remove('active');
                    }
                    document.getElementById(targetId).classList.add('active');
                    document.getElementById(targetId).style.opacity = 1;
                    lastVisitedContent = document.getElementById(targetId);
                }, 500); // 延迟以便过渡效果
            }
        });
    });
    submitBtn.addEventListener('click', () => {
        const message = messageInput.value;
        if (message) {
            alert(`你的訊息: ${message}`);
            messageInput.value = '';
        } else {
            alert('請輸入訊息');
        }
    });
});