/*
  intersection observer
  현재 뷰포트에 보이거나 사라지는 요소들의 변화를 자동 감지해 다양한 정보값을 반환
*/

const boxs = document.querySelectorAll('div');

const observer = new IntersectionObserver((entries) => {
  //등록 요소들을 배열로 전달받음
  //요소가 한개라도 배열로 전달받음
  entries.forEach(entry => {
    console.log(entry);
    /*
    boundingClientRect : 감시하고 있는 요소의 가로, 세로, 위치, 넓이,높이값
    intersectionRatio : 현재 화면에 교차해서 보이는 요소의 영역 비율
    intersectionRect : 현재 화면에 교차된 부분의 정보
    isIntersecting: 뷰포트안에 threshold비율만큼 겹치고 있는지의 유무를 true, false로 반환
    rootBounds: 교차감시를 하고 있는 부모요소의 프레임 정보
    target: 교차되고 있는 대상
    */
  })
}, { threshold: 0.5 }) //화면안쪽에 요소가 겹치는 비율을 지정

//화면에 감시할 요소를 반복을 돌며 oberserver인스턴스의 observe메서드로 등록
boxs.forEach((box) => {
  observer.observe(box)
})