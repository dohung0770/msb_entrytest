import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './styles/common.css'
import { RecoilRoot } from 'recoil'
import { ConfigProvider } from 'antd'
import { AppLayout, NotFound } from './components'
import { SecuredRoute } from './routes/SecuredRoute'

const HomePage = lazy(() => import('@/pages/home'))
const Profile = lazy(() => import('@/pages/profile'))
const UserInfo = lazy(() => import('@/pages/profile/UserInfo'))
const ProductsInfo = lazy(() => import('@/pages/profile/ProductsInfo'))

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RecoilRoot>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#F4600C',
              borderRadius: 8
            }
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<AppLayout />}>
                <Route index path='' element={<HomePage />} />

                <Route path='profile' element={<SecuredRoute />}>
                  <Route path='' element={<Profile />}>
                    <Route path='' element={<Navigate to='/profile/info' />} />
                    <Route path='info' element={<UserInfo />} />
                    <Route path='products' element={<ProductsInfo />} />
                  </Route>
                </Route>
              </Route>

              <Route path='*' element={<NotFound />} />
              <Route path='/not-found' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </RecoilRoot>
    </Suspense>
  )
}

export default App
