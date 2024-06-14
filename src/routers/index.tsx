import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { RouterGuard } from './RouterGuard';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RouterGuard type="public" />}>
        <Route
          path="/"
          element={
            <>
              <h1>Welcome, home</h1>
            </>
          }
        />
      </Route>
    </>,
  ),
);
