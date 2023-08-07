import Layout from '@/components/Layout'
import SessionProvider from 'next-auth/react'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from '@/redux/store'

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </SessionProvider>
    </>
  )
}
