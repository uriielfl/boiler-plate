
import { Navigate, Outlet } from 'react-router-dom';


export interface IRouterGuard {
  type?: 'public' | 'strictly-public' | 'private';
}

export const RouterGuard = ({ type = 'public' }: IRouterGuard) => {

  if (({} as any).loading) return (

    <p>Carregando...</p>
);
  switch (true) {
    case type === 'public':
      return (
          <Outlet />
      );
    case type === 'private':
      return <Navigate to="/signin" />;
    default:
      return (
          <Outlet />
      );
  }
};
