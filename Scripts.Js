// 스크롤 이벤트 리스너를 추가하여 페이지가 스크롤될 때마다 실행되는 함수 정의
window.addEventListener('scroll', () => {
  const pageTop = window.scrollY;
  const pageHeight = window.innerHeight / 2;
  const frames = document.querySelectorAll('.scrollAnim');

  frames.forEach(frame => {
    const frameTop = frame.offsetTop;
    const frameHeight = frame.offsetHeight;

    if (pageTop >= frameTop - pageHeight && pageTop < frameTop + frameHeight / 2) {
      frame.classList.add('anim');
    } else {
      frame.classList.remove('anim');
    }
  });
});

// 눈알 애니메이션
const balls = document.getElementsByClassName('ball');
document.addEventListener('mousemove', (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  Array.from(balls).forEach(ball => {
    ball.style.left = x;
    ball.style.top = y;
    ball.style.transform = `translate(-${x}, -${y})`;
  });
});

// 썸네일 창 뜨기
let rectangleCount = 0;
const imageUrls = [
  'img/home img1.jpeg', 'img/home img2.jpg', 'img/home img3.jpg',
  'img/home img4.jpg', 'img/home img5.jpg', 'img/home img6.png',
  'img/home img7.jpg', 'img/home img8.png', 'img/home img9.jpg',
  'img/home img10.jpg', 'img/home img11.jpg', 'img/home img12.jpg',
  'img/home img13.jpg', 'img/home img14.jpg', 'img/home img15.jpg',
  'img/home img16.jpg', 'img/home img17.jpg', 'img/home img18.jpg',
  'img/home img19.jpg', 'img/home img20.png', 'img/home img21.jpg',
  'img/home img22.jpg', 'img/home img23.jpg', 'img/home img24.jpg',
  'img/home img25.jpg', 'img/home img26.jpg', 'img/home img27.jpg',
  'img/home img28.jpg', 'img/home img29.jpg', 'img/home img30.jpg',
  'img/home img31.jpeg', 'img/home img32.png', 'img/home img33.jpeg',
  'img/home img34.jpg', 'img/home img35.jpg', 'img/home img36.jpg',
  'img/home img37.jpg', 'img/home img38.jpg', 'img/home img39.jpg',
  'img/home img41.jpg', 'img/home img42.jpg', 'img/home img43.png',
  'img/home img44.jpg', 'img/home img45.jpg', 'img/home img46.jpg',
  'img/home img47.jpg', 'img/home img49.png', 'img/home img50.jpeg',
  'img/home img51.jpg'
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

function createRectangle(event) {
  if (rectangleCount >= 100) return;

  const rectangle = document.createElement('div');
  rectangle.classList.add('rectangle');

  const img = document.createElement('img');
  img.setAttribute('src', getRandomImage());
  rectangle.appendChild(img);

  document.body.appendChild(rectangle);
  rectangle.style.left = `${event.clientX - 75}px`;
  rectangle.style.top = `${event.clientY - 50}px`;

  setTimeout(() => {
    rectangle.classList.add('active');
  }, 10);

  rectangleCount++;
}

// 휠 스크롤 이벤트 리스너 추가
let scrollTimeout;
window.addEventListener('wheel', (event) => {
  event.preventDefault();
  if (scrollTimeout) return;

  const direction = event.deltaY > 0 ? 1 : -1;
  const sectionHeight = window.innerHeight;
  const currentSection = Math.round(window.pageYOffset / sectionHeight);
  const newPosition = (currentSection + direction) * sectionHeight;

  window.scrollTo({
    top: newPosition,
    behavior: 'smooth'
  });

  scrollTimeout = setTimeout(() => {
    scrollTimeout = null;
  }, 1000);
}, { passive: false });


document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate");
          } else {
              entry.target.classList.remove("animate"); // 요소가 화면에서 벗어나면 클래스 제거
          }
      });
  }, observerOptions);

  const icons = document.querySelectorAll(".icon-one, .icon-two, .icon-three, .icon-four");
  icons.forEach(icon => observer.observe(icon));
});

// 스크롤 시 애니메이션 시작을 위한 IntersectionObserver 설정, 깨진 유리창 부분 애니메이션임
document.addEventListener("DOMContentLoaded", function () {
  const options = { threshold: 0.5 };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("anim");
      } else {
        entry.target.classList.remove("anim");
      }
    });
  }, options);

  const postIts = document.querySelectorAll(".post-it-wrapper");
  postIts.forEach(postIt => observer.observe(postIt));
});


// 여기서부터 최종 추가