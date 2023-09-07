
import Head from 'next/head'
import '@/styles/globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function App({ Component, pageProps }) {
  return (
      <> 
      <Head>
        <title>Finanse</title>
        <link rel='icon' type='iamge/x-icon' href='icons/union.svg'></link>
      </Head>
      <Header/>
      
      <Component {...pageProps} /> 
      <Footer/>
      </>)
}
