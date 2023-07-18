const exams = [
  '"Hello, World!"를 콘솔에 출력 하는 코드를 작성하세요 변수를 선언하고, 그 번수에 숫자 10을 할당하는 코드를 작성하세요.\r',
  '문자열 "Hello, "와 "Javascript!"를 결합하여 "Hello, Javascript"를 출력하는 코드를 작성하세요\r',
  '두 수를 더하는 함수를 작성하고, 이를 사용하여 5와 10의 합을 계산하세요\r',
  'for 반복문을 사용하여 1부터 10까지의 수를 출력하는 코드를 작성하세요.\r',
  'i문을 사용하여 어떤 변수가짝수인지 홀수인지 판별하는 코드 프로그래밍 공통를 작성하세요\r',
  'JavaScript에서 null과undefined의 차이점을 설명하세요.\r',
  '자바스크립트에서 식별자로 사용될 수 있는 예를 3가지 제시하세요.\r',
  'const, let, var의 차이점을 설명하세요.\r',
  '자바스크립트에서 주석을어떻게작성하는지 예시를 들어보세요.\r',
  '자바스크립트에서 사용할 수 있는 특수 문자(escapecharacter)를 3가지 예시와 함께제시하세요\r',
  '"use strict"는 무엇이고, 어떻게사용하는지 설명하세요\r',
  '세미콜론()은 언제 사용되는지설명하고, 세미콜론을 사용해아하는 상황의 예를 제시하세요\r',
  '자바스크립트에서 대소문자를구분하는 예를 들어 보세요\r',
  '자바스크립트에서 사용하는 데이터 타입들을 나열해보세요\r',
  '자바스크립트에서 번수를 어떻게 선언하는지 예를 들어 설명해 프로그래밍 공통보세요.\r',
  'nll과 undefined의 차이점은무엇인가요?\r',
  "자바스크립트에서 'truthy'와falsy 값은 무엇인가요? 각각 2\r",
  '개의 예를 들어보세요typeof 연산자를 사용해 변수의타입을 확인하는 예제 코드를 작성해보세요.\r',
  '자바스크립트에서 ==와 ===의차이점을 설명해보세요\r',
  '변수 x에 값 10을 할당하고, x의값이 10인지 확인하는 코드를작성해보세요.\r',
  't,-,*, / 연산자를 사용해 간단한 산술 연산을 하는 코드를 작성해보세요.\r',
  '10을 3으로 나눈 나머지를 구하는 코드를 작성해보세요.\r',
  'x가 y보다 큰지 확인하는 조건식을 작성해보세요,\r',
  'x가 y와 같은지, 그리고 2가 0이아닌지 확인하는 복합 조건식을 프로그래밍 공통작성해보세요.\r',
  'x를 y로 나눈 묶을 구하는 코드 프로그래밍 공통를 작성해보세요\r',
  '두 변수 x, y의 값을 서로 교환하는 코드를 작성해보세요\r',
  "==\"'와 '===\"'의 차이점을 설명하고, 각각의 사용 예제를 들어보세요.\r",
  'if 문을 사용해 어떤 수가 짝수인지 홀수인지 판별하는 코드를 작 프로그래밍 공통성해보세요\r',
  'for 문을 사용해 1부터 10까지의수를 출력하는 코드를 작성해보프로그래밍 공통세요.\r',
  'while 문을 사용해 1부터 10까지의 수를 출력하는 코드를 작성 프로그래밍 공통해보세요.\r',
  'switch 문을 사용해 변수가 어떤값인지 분기하는 코드를 작성해 프로그래밍 공통보세요\r',
  'try/catch 문을 사용해 예외를 처프로그래밍 공통리하는 코드를 작성해보세요\r',
  'continue 문을 사용해 짝수만 출 프로그래밍 공통력하는 코드를 작성해보세요\r',
  'break 문을 사용해 반복문을 중 프로그래밍 공톤단하는 코드를 작성해보세요\r',
  '비어있는 객체를 선언하는 코드 프로그래밍 공통를 작성해보세요\r',
  "속성 'name'이 'John'이고프로그래밍 공통'age'가 30인 객체를 생성하는코드를 작성해보세요.\r",
  '객체의 속성에 접근하는 두 가지 프로그래밍 공통방법을 코드로 작성해보세요\r',
  '객체에 새로운 속성을 추가하는 프로그래밍 공통코드를 작성해보세요,\r',
  '객체의 속성을 삭제하는 코드를 프로그래밍 공통작성해보세요.\r',
  '객체의 모든 속성을 순회하며 출 프로그래밍 공통력하는 코드를 작성해보세요\r',
  '‘this’ 키워드에 대해 설명하고 사 프로그래밍 공통용 예를 들어 보세요\r',
  '비어있는 배열을 선언하는 코드 프로그래밍 공통를 작성해보세요\r',
  '1부터 5까지의 숫자를 원소로갖는 배열을 선언하는 코드를 작 프로그래밍 공동성해보세요.\r',
  '배열에 새로운 원소를 추가하는코드를 작성해보세요\r',
  '배열에서 특정 원소를 제거하는코드를 작성해보세요\r',
  '배열의 길이를 학인하는 코드를 프로그래밍 공통작성해보세요.\r',
  '배열의 모든 원소를 순회하며 출 프로그래밍 공통력하는 코드를 작성해보세요\r',
  '배열의 특정 원소의 인덱스를 찾 프로그래밍 공통는 코드를 작성해보세요\r',
  "인자 없이 'Hello, world!'를 출력하는 함수를 선언하는 코드를 프로그래밍 공통작성해보세요.\r",
  '두 수를 더하는 함수를 선언하는 코드를 작성해보세요.\r',
  '함수 표현식과 함수 선언식의 차이점을 설명해보세요.\r',
  '화살표 함수를 사용해 두 수를 곱하는 함수를 선언하는 코드를 작성해보세요.\r',
  '콜백 함수를 사용하는 코드를 작성해보세요.\r',
  '클로저에 대해 설명하고 예를 들어보세요.\r',
  '함수에 기본값을 설정하는 코드를 작성해보세요.\r',
  '비어있는 클래스를 선언하는 코드를 작성해보세요.\r',
  '생성자를 가진 클래스를 선언하는 코드를 작성해보세요.\r',
  '메서드를 가진 클래스를 선언하는 코드를 작성해보세요.\r',
  '클래스를 상속받는 서브 클래스를 선언하는 코드를 작성해보세요.\r',
  "'static' 키워드가 무엇인지 설명하고 예를 들어보세요.\r",
  'get과 set 접근자에 대해 설명하고 사용 예를 들어보세요.\r',
  '클래스의 인스턴스를 생성하는 코드를 작성해보세요.\r',
  '모듈을 만들고 그것을 내보내는 코드를 작성해보세요.\r',
  '모듈에서 함수를 하나 내보내는 코드를 작성해보세요.\r',
  '다른 모듈을 임포트하는 코드를 작성해보세요.\r',
  '코드에서 여러 개의 항목을 내보내는 코드를 작성해보세요.\r',
  '특정 모듈에서 필요한 항목만 임포트하는 코드를 작성해보세요.\r',
  'default로 내보낸 모듈을 임포트하는 코드를 작성해보세요.\r',
  '모듈의 기본 사용 목적과 장점을 설명해보세요.\r',
  'Math 객체를 사용해 원주율 값을 출력하는 코드를 작성해보세요.\r',
  'Date 객체를 사용해 현재 시간을 출력하는 코드를 작성해보세요.\r',
  'JSON 객체를 사용해 JavaScript 객체를 JSON 문자열로 변환하는 코드를 작성해보세요.\r',
  'JSON 객체를 사용해 JSON 문자열을 JavaScript 객체로 변환하는 코드를 작성해보세요.\r',
  'Set 객체를 사용해 중복을 허용하지 않는 컬렉션을 생성하는 코드를 작성해보세요.\r',
  'Map 객체를 사용해 키-값 쌍의 컬렉션을 생성하는 코드를 작성해보세요.\r',
  'Array 객체의 메서드를 사용해 배열을 조작하는 코드를 작성해보세요.\r',
  '배열에 대한 이터레이터를 생성하고 사용하는 코드를 작성해보세요.\r',
  '이터레이터 인터페이스를 가진 객체를 생성하는 코드를 작성해보세요.\r',
  '이터러블과 이터레이터의 차이점을 설명해보세요.\r',
  '제네레이터 함수를 선언하고 그것을 사용하는 코드를 작성해보세요.\r',
  '제네레이터 함수와 일반 함수의 차이점을 설명해보세요.\r',
  "'yield' 키워드가 하는 일을 설명하고 예를 들어보세요.\r",
  '제네레이터를 사용해 피보나치 수열을 생성하는 코드를 작성해보세요.\r',
  "setTimeout을 사용해 1초 후에 'Hello, World!'를 출력하는 코드를 작성해보세요.\r",
  'Promise를 선언하고 사용하는 코드를 작성해보세요.\r',
  'Promise가 해결되거나 거부된 후에 실행할 코드를 추가하는 방법을 설명해보세요.\r',
  'async/await를 사용해 비동기 코드를 작성하는 방법을 설명해보세요.\r',
  'async/await와 Promise의 차이점을 설명해보세요.\r',
  'Promise.all을 사용해 여러 Promise를 동시에 실행하는 코드를 작성해보세요.\r',
  '비동기 함수에서 예외를 처리하는 방법을 설명하고 예를 들어보세요.\r',
  'Proxy 객체를 생성하는 코드를 작성해보세요.\r',
  'Proxy를 사용해 객체의 속성에 대한 접근을 제어하는 코드를 작성해보세요.\r',
  'Reflect API를 사용해 객체의 속성을 조작하는 코드를 작성해보세요.\r',
  'Symbol 타입에 대해 설명하고 예를 들어보세요.\r',
  'well-known Symbol인 Symbol.iterator에 대해 설명하고 예를 들어보세요.\r',
  '객체에 메타데이터를 추가하는 방법을 설명하고 예를 들어보세요.\r',
  'DOM 요소를 선택하는 코드를 작성해보세요.\r',
  '선택한 DOM 요소의 텍스트를 변경하는 코드를 작성해보세요.\r',
  'DOM 요소에 이벤트 리스너를 추가하는 코드를 작성해보세요.\r',
  '웹브라우저의 콘솔에 로그를 출력하는 코드를 작성해보세요.\r',
  '비동기 HTTP 요청을 보내는 코드를 작성해보세요.\r',
  'Local Storage에 데이터를 저장하고 검색하는 코드를 작성해보세요.\r',
  '세션 Storage에 데이터를 저장하고 검색하는 코드를 작성해보세요.\r',
  'Node.js에서 파일을 읽는 코드를 작성해보세요.\r',
  'Node.js에서 HTTP 서버를 생성하는 코드를 작성해보세요.\r',
  'Node.js에서 모듈을 임포트하는 코드를 작성해보세요.\r',
  'Node.js에서 이벤트를 발생시키고 그것을 처리하는 코드를 작성해보세요.\r',
  'Express.js를 사용해 HTTP서버를 생성하는 코드를 작성해보세요.\r',
  'Express.js에서 라우팅을 처리하는 코드를 작성해보세요.\r',
  'Node.js에서 환경 변수를 사용하는 방법을 설명하고 예를 들어보세요.\r',
  'Babel을 사용해 최신 자바스크립트 코드를 이전 버전으로 변환하는 방법을 설명해보세요.\r',
  'Webpack을 사용해 자바스크립트 파일을 번들링하는 방법을 설명해보세요.\r',
  'ESLint를 사용해 자바스크립트 코드의 문제를 찾는 방법을 설명해보세요.\r',
  'TypeScript가 무엇인지 설명하고 그 장점을 서술해보세요.\r',
  'Typescript에서 타입을 선언하는 코드를 작성해보세요.\r',
  'Typescript에서 인터페이스를 선언하는 코드를 작성해보세요.\r',
  'Typescript에서 클래스를 선언하는 코드를 작성해보세요.',
];

const root = document.getElementById('root');
console.log(root);
function CE(tag) {
  const element = document.createElement(tag);
  return element;
}

const table = CE('table');
const thead = CE('thead');
const tbody = CE('tbody');
const tr = CE('tr');

table.appendChild(thead);
table.appendChild(tbody);

root.appendChild(table);

const th1 = CE('th');
const th2 = CE('th');

tr.appendChild(th1);
tr.appendChild(th2);

thead.appendChild(tr);

for (let i = 1; i <= 117; i++) {
  const th1 = CE('th');
  const th2 = CE('th');
  const tr2 = CE('tr');
  th1.textContent = i;
  th2.textContent = exams[i - 1];
  tr2.appendChild(th1);
  tr2.appendChild(th2);
  tbody.appendChild(tr2);
}
