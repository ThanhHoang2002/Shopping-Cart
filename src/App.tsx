import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoute } from './routes'
import { useAppSelector } from './hooks/reduxHooks'
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout'
function App() {
  const isDarkTheme = useAppSelector((state) => state.themeState.isDark)
  return (
    <BrowserRouter>
      <div className={`App ${isDarkTheme ? 'dark' : ''} `}>
        <Routes>
          {publicRoute.map((route, index) => {
            const Layout = DefaultLayout
            const Page = route.component
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
