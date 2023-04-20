import { Routes, Route } from "react-router-dom";
import { Fragment} from "react";

import DefaultLayout from "./Layouts/DefaultLayout";
import { publicRouters } from "./Router";
function App() {

  return (
    <>
      <Routes>
        {publicRouters.map((router, index) => {
          let Page = router.component;
          let Layout = DefaultLayout;
          if (router.layout) {
            Layout = router.layout;
          } else if (router.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              key={index}
              path={router.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
