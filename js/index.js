
const data = [
    { title: '패턴', postNumber: 1 },
    { title: '마음가짐', postNumber: 2 },
    { title: 'HTML 기초', postNumber: 3 },
    { title: 'css 기초', postNumber: 4 },
    { title: 'CSSflex', postNumber: 5 },
    { title: 'Mac 계산기 클론하기', postNumber: 6 },
    { title: 'CSS grid', postNumber: 7 },
    { title: 'slice? splice', postNumber: 8 },
    { title: '함수를 정의하는 방법', postNumber: 9 },
    { title: '순열(Permutation) 구현하기', postNumber: 10 },
    { title: '문자열에서 특정 위치의 문자를 변경하고 싶은 경우', postNumber: 11 },
    { title: 'letIt const', postNumber: 12 },
    { title: 'nvm', postNumber: 13 },
    { title: '요소 노드의 텍스트 조작하기(nodeValue, textContent, innerHTML)', postNumber: 14 },
    { title: '자바스크립트의 배열은 배열이 아니다!', postNumber: 15 },
    { title: 'JSON 다루기(JSON.parse), JSON.stringify())', postNumber: 16 },
    { title: '원시 자료형과 참조 자료형', postNumber: 17 },
    { title: '[]===[]는 왜 false인가', postNumber: 18 },
    { title: 'this (동적 바인딩)', postNumber: 19 },
    { title: '유효성 검사를 포함한 간단한 회원가입 폼 페이지 만들기', postNumber: 20 },
    { title: '#fff와 #ffffff', postNumber: 21 },
    { title: '안다고 생각했지만, 헷갈렸던 문법들', postNumber: 22 },
    { title: 'DOM이 뭔가요?', postNumber: 23 },
    { title: '영화 좌석 예약 페이지 만들기 ', postNumber: 24 },
    { title: '테두리가 두 줄처럼 보이는 경우 (border)', postNumber: 25 },
    {
      title: 'IS0 형식의 날짜(yyyy-mm-ddThh:mm:ssz)를 현재 위치 시간대로 변경하기 # ',
      postNumber: 26,
    },
    { title: '페이지네이션', postNumber: 27 },
  ];


  const COUNT_PER_PAGE = 5; // 페이지 당 보여줄 게시물 수
  const numberButtonWrapper = document.querySelector('.number-button-wrapper'); // 페이지네이션 버튼 wrapper
  const ul = document.querySelector('ul'); // 게시물을 담을 unordered list
  const prevButton = document.querySelector('.prev-button'); // 이전 페이지 버튼
  const nextButton = document.querySelector('.next-button'); // 이후 페이지 버튼
  let pageNumberButtons; // 페이지 버튼들
  
  let currentPage = 1; // 초기 페이지 번호
  
  /**
   * 필요한 페이지 번호 개수 구하기
   * @returns {number} - 필요한 페이지 번호 개수
   */
  const getTotalPageCount = () => {
    return Math.ceil(data.length / COUNT_PER_PAGE);
  };
  
  /**
   * 필요한 페이지 번호 수에 맞게 페이지 버튼 구성하기
   */
  const setPageButtons = () => {
    numberButtonWrapper.innerHTML = '';
  
    for (let i = 1; i <= getTotalPageCount(); i++) {
      numberButtonWrapper.innerHTML += `<span class="number-button"> ${i} </span`;
    }
  
    numberButtonWrapper.firstChild.classList.add('selected');
    pageNumberButtons = document.querySelectorAll('.number-button');
  };
  
  /**
   * 페이지에 해당하는 게시물 ul에 넣어주기
   * @param {number} pageNumber - 이동할 페이지 번호
   */
  const setPageOf = (pageNumber) => {
    ul.innerHTML = '';
  
    for (
      let i = COUNT_PER_PAGE * (pageNumber - 1) + 1;
      i <= COUNT_PER_PAGE * (pageNumber - 1) + 5 && i <= data.length;
      i++
    ) {
      const li = document.createElement('li');
  
      // 컨테이너
      const postContainer = document.createElement('div');
      postContainer.className = 'post-container';
  
      // 글 번호
      const postNumbers = document.createElement('p');
      postNumbers.className = 'post-number';
  
      // 글 제목
      const postTitle = document.createElement('p');
      postTitle.className = 'post-title';
  
      postNumbers.textContent = data[i - 1].postNumber;
      postTitle.textContent = data[i - 1].title;
  
      postContainer.append(postNumbers, postTitle);
      li.append(postContainer);
      ul.append(li);
    }
  };
  
  /**
   * 페이지 이동에 따른 css 클래스 적용
   */
  const moveSelectedPageHighlight = () => {
    const pageNumberButtons = document.querySelectorAll('.number-button'); // 페이지 버튼들
  
    pageNumberButtons.forEach((numberButton) => {
      if (numberButton.classList.contains('selected')) {
        numberButton.classList.remove('selected');
      }
    });
  
    pageNumberButtons[currentPage - 1].classList.add('selected');
  };
  
  setPageButtons();
  setPageOf(currentPage);
  
  /**
   * 페이지 번호 버튼 클릭 리스너
   */
  pageNumberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', (e) => {
      currentPage = +e.target.innerHTML;
      console.log(currentPage);
      setPageOf(currentPage);
      moveSelectedPageHighlight();
    });
  });
  
  /**
   * 이전 버튼 클릭 리스너
   */
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage -= 1;
      setPageOf(currentPage);
      moveSelectedPageHighlight();
    }
  });
  
  /**
   * 이후 버튼 클릭 리스너
   */
  nextButton.addEventListener('click', () => {
    if (currentPage < getTotalPageCount()) {
      currentPage += 1;
      setPageOf(currentPage);
      moveSelectedPageHighlight();
    }
  });

// const COUNT_PER_PAGE = 5;

// const getTotalPageCount = () => {
//     return Math.ceil(data.length / COUNT_PER_PAGE);
// }

// const numberButtonCover = document.querySelector('.numBtnCover');

// // setPageButtons 호출시 버튼이 1에서 5까지 생긴다
// const setPageButtons = () => {
//     numberButtonCover.innerHTML = '';

//     for(let i = 1; i <= getTotalPageCount(); i++) {
//         numberButtonCover.innerHTML += `<span class="numBtn"> ${i} </span>`;
//     }

//     numberButtonCover.firstChild.classList.add('selected');
//     // pageNumberBtns = document.querySelectorAll('.numBtn')
// }
    
// const ul = document.querySelector('ul');
// let currentPage = 1;

// const setPageOf = (pageNumber) => {
//     ul.innerHTML = ''

//     for(
//         let i = COUNT_PER_PAGE * (pageNumber - 1) + 1;
//         i <= COUNT_PER_PAGE * (pageNumber - 1) + 6 && i <= data.length;
//         i++
//     ) {
//         const li = document.createElement('li');

//         const postContainer = document.createElement('div');
//         postContainer.className = 'container';

//         const postNumber = document.createElement('p');
//         postNumber.className = 'num';

//         const postTitle = document.createElement('p');
//         postTitle.className = 'title';

//         postNumber.textContent = data[i - 1].postNumber;
//         postTitle.textContent = data[i - 1].postTitle;

//         postContainer.append(postNumber,postTitle);
//         li.append(postContainer);
//         ul.append(li);
//     }
// }

// const pageNumberBtns = document.querySelectorAll('.numBtn');

// pageNumberBtns.forEach((numBtn) => {
//     numBtn.addEventListener('click',(e)=>{
//         setPageOf(+e.target.innerHTML);
//         moveSelectedPage()
//     })
// })

// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// prevBtn.addEventListener('click',()=>{
//     if(currentPage > 1) {
//         currentPage -= 1;
//         setPageOf(currentPage)
//         moveSelectedPage()
//     }
// })

// nextBtn.addEventListener('click',()=>{
//     if(currentPage < getTotalPageCount()) {
//         currentPage += 1;
//         setPageOf(currentPage);
//         moveSelectedPage()
//     } 
// })

// const moveSelectedPage = () => {
//     pageNumberBtns.forEach((numBtn) => {
//         if(numBtn.classList.contains('selected')) {
//             numBtn.classList.remove('selected')
//         }
//     })
//     pageNumberBtns[currentPage - 1].classList.add('selected')
// }

// setPageButtons();
// setPageOf(currentPage)