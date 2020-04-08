import Head from 'next/head';
import Header from '../nextjs-material-kit-master/components/Header/Header'

const Layout = (props) => (
  <div>
    <Head>
      <title>Save</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
    </Head>
    <Header />
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;