import React from 'react';
import ImageComponent from './ImageComponent';

function App() {
  return (
    <div>
      {/* 이미지 컴포넌트를 사용하면서 text props를 전달하여 이미지 정보를 넘겨줍니다. */}
      <ImageComponent text="This is an example of an image: <img src=1>" />
      <ImageComponent text="Another image: <img src=2>" />
    </div>
  );
}

export default App;
