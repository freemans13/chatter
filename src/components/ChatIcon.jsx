import PeopleSvg from "../assets/people.svg";
import styled from "styled-components";

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
  padding: 0 0 0 0px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ccc;
`;

export default ChatIcon;
