import React from 'react';
import { styled } from '@linaria/react';
import PeopleSvg from '../assets/people.svg';

const S = {}; // all Styled stuff here

function ChatIcon() {
  return (
    <S.Div>
      <img src={PeopleSvg} alt="Your SVG" />
    </S.Div>
  );
}

S.Div = styled.div`
  width: 48px;
  height: 48px;
  margin: 8px;
  padding: 0;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ccc;
`;

export default ChatIcon;
