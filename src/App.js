import './App.css';
import styled from 'styled-components';

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

function App() {
  return (
    <div className="App">
      <Header color={'blue'}>Hello</Header>
    </div>
  );
}

export default App;
