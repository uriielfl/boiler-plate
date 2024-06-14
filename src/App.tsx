
import { RouterProvider } from 'react-router-dom';

import { router } from './routers';

import './App.scss';

function App() {
  return (
    <>
        <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
