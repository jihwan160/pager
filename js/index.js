
const data = [
        { "id": 1, "content": "페이지 1의 콘텐츠입니다." },
        { "id": 2, "content": "페이지 2의 콘텐츠입니다." },
        { "id": 3, "content": "페이지 3의 콘텐츠입니다." },
        { "id": 4, "content": "페이지 4의 콘텐츠입니다." },
        { "id": 5, "content": "페이지 5의 콘텐츠입니다." },
        { "id": 6, "content": "페이지 6의 콘텐츠입니다." },
        { "id": 7, "content": "페이지 7의 콘텐츠입니다." },
        { "id": 8, "content": "페이지 8의 콘텐츠입니다." },
        { "id": 9, "content": "페이지 9의 콘텐츠입니다." },
        { "id": 10, "content": "페이지 10의 콘텐츠입니다." },
        { "id": 11, "content": "페이지 11의 콘텐츠입니다." },
        { "id": 12, "content": "페이지 12의 콘텐츠입니다." },
        { "id": 13, "content": "페이지 13의 콘텐츠입니다." },
        { "id": 14, "content": "페이지 14의 콘텐츠입니다." },
        { "id": 15, "content": "페이지 15의 콘텐츠입니다." },
        { "id": 16, "content": "페이지 16의 콘텐츠입니다." },
        { "id": 17, "content": "페이지 17의 콘텐츠입니다." },
        { "id": 18, "content": "페이지 18의 콘텐츠입니다." },
        { "id": 19, "content": "페이지 19의 콘텐츠입니다." },
        { "id": 20, "content": "페이지 20의 콘텐츠입니다." }
    ];

const COUNT_PER_PAGE = 5;
const getTotalPageCount = () => {
    return Math.ceil(data.length / COUNT_PER_PAGE);
}

const numberButtonCover = document.querySelector('.numBtnCover');

// setPageButtons 호출시 버튼이 1에서 5까지 생긴다
const setPageButtons = () => {
    numberButtonCover.innerHTML = '';

    for(let i = 1; i <= getTotalPageCount(); i++) {
        numberButtonCover.innerHTML += `<span class="numBtn"> ${i} </span>`;
    }
}
