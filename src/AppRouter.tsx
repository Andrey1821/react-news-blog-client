import MainPage from './pages/main/MainPage.tsx';
import PostPage from './pages/post/PostPage.tsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTER } from './core/routing.ts';
import PostEditPage from './pages/post-edit/PostEditPage.tsx';

const privateRoutes = [
  { path: ROUTER.POST_EDIT.POST_EDIT_ID, element: <PostEditPage/> },
  { path: ROUTER.POST.POST_ID, element: <PostPage/> },
];

const publicRoutes = [
  { path: ROUTER.MAIN, element: <MainPage/> }
];

const AppRouter = () => {
  return (
    <Routes>
      {
        [...privateRoutes, ...publicRoutes].map(route =>
          <Route key={route.path} path={route.path} element={route.element} />
        )
      }
      <Route path={'*'} element={<Navigate to={ROUTER.MAIN}/>}/>
    </Routes>
  );
};

export default AppRouter;