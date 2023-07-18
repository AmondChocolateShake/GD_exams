const fs = require('fs');

function readExams() {
  const filePath = 'node.txt';
  try {
    // 동기 방식으로 파일 읽기
    const data = fs.readFileSync(filePath, 'utf8');
    const exams = data.split('\n');
    console.log(exams);
    return exams;
  } catch (err) {
    // 파일 읽기 중 오류 발생
    console.error(err);
  }
}

async function makeFile(arr) {
  let content = arr;
  const jsonData = await JSON.stringify(content);
  console.log(jsonData);

  fs.writeFile('example.json', jsonData, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('파일이 생성되었습니다.');
  });
}

const exams = readExams();
makeFile(exams);

module.exports = {
  readExams,
};
