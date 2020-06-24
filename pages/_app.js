import '../styles/global.css'
import { Provider } from 'next-auth/client'

export default ({ Component, pageProps }) => {
  const { session } = pageProps
  return (
    <Provider options={{ site: 'http://localhost:3000' }} session={session} >
      <Component {...pageProps} />
    </Provider>
  )
}