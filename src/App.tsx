import { Routes, Route, Navigate } from "react-router-dom";

import GistsList from "./views/GistsList";
import GistDetail from "./views/GistDetail";

import { appRoutes } from "./utils/Constants";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={appRoutes.GISTS_LIST} replace />}
      />
      <Route path={appRoutes.GISTS_LIST} element={<GistsList />} />
      <Route path={appRoutes.GIST_DETAIL} element={<GistDetail />} />
    </Routes>
  );
}

export default App;
