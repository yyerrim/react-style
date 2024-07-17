import './App.css';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Block from './Block';
import Blocks from './Blocks';

// 자동완성이 되지 않는 아쉬움
// const Header = styled.h1`
//   color: red;
//   text-decoration: underline;
//   &:hover {
//     color: yellow;
//   }
// `;

// function App() {
//   return (
//     <div className="App">
//       <Header>Hello</Header>
//     </div>
//   );
// }

const Header = styled.h1`
  color: ${props => props.color};
  text-decoration: underline;
  font-size: 1rem;
  transition: 3s;
  &:hover {
    color: yellow;
    font-size: 2rem;
  }
`;

const Button = styled.button`
color: ${props => props.black ? 'white' : 'black'};
background: ${props => props.black ? 'black' : 'white'};
border: 1px solid black;
`;

const Button2 = styled.button`
color; grey;
border 2px solid palevioletred;
`;
const RoundedButton = styled(Button2)`
border-radius: 16px;
`;

// function App() {
//   return (
//     <div className="App">
//       <Header color={'blue'}>Hello</Header>
//       <Button>White</Button>
//       <Button black>Black</Button>
//       <Button2>Normal</Button2>
//       <RoundedButton>Round</RoundedButton>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Block padding='20px' bg='yellow'>내용</Block>
      </Wrapper>
      <br />
      <Blocks />
    </div>
  );
}

export default App;
