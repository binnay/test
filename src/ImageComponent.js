import React from 'react';
import parse from 'html-react-parser'; // html-react-parser 모듈 사용

const jsonData = [
  {
    "id": 1,
    "text": "This is an example of an image: <img src=777> 입니다. ",
    "description": "An example image"
  },
  {
    "id": 2,
    "text": "Another image: <img src=778>",
    "description":  "Another example image"
  }
];

const ImageComponent = () => {
  // 이미지 소스 값을 추출하는 함수
  const getImageSrc = (text) => {
    const regex = /<img src=(\d+)>/g;
    const match = regex.exec(text);
    if (match) {
      return match[1];
    }
    return null;
  };

  return (
    <div>
      {/* JSON 데이터를 반복하여 이미지를 표시 */}
      {jsonData.map((item) => (
        <div key={item.id}>
          {/* HTML 문자열을 React 요소로 변환하여 렌더링 */}
          {parse(item.text.replace(/<img src=(\d+)>/, `<img src="/image/${getImageSrc(item.text)}.png" alt="${item.description}" />`))}
        </div>
      ))}
    </div>
  );
};

export default ImageComponent;
