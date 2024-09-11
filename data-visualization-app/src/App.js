// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { CubeProvider } from '@cubejs-client/react';
import cubejs from '@cubejs-client/core';

const API_URL = 'http://localhost:4000';
const cubejsApi = cubejs('your-cube-js-token', { apiUrl: `${API_URL}/cubejs-api/v1` });

function App() {
  return (
    <CubeProvider cubejsApi={cubejsApi}>
      <YourComponents />
    </CubeProvider>
  );
}
