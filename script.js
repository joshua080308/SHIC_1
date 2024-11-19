const posters = document.querySelectorAll('.poster');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeButton = document.querySelector('.close');

const experiences = {
    1: '여기에는 경험 1의 상세 내용이 표시됩니다.',
    2: '여기에는 경험 2의 상세 내용이 표시됩니다.',
    3: '여기에는 경험 3의 상세 내용이 표시됩니다.'
};

posters.forEach((poster, index) => {
    poster.addEventListener('click', () => {
        const experienceId = index + 1;
        modal.style.display = 'flex';
        modalBody.innerHTML = experiences[experienceId];
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
