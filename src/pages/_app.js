import '../styles/globals.css';
import Link from 'next/link';
import navbarStyles from '../styles/navbar.module.css';
import heroStyles from '../styles/hero.module.css';
import footerStyles from '../styles/footer.module.css';
import { useRouter } from 'next/router';
import Modal from '../components/modal';


export default function App({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname);

  function getPathName(path) {
    if(router.pathname === path){
      return navbarStyles.linkActive;
    } else{
      return navbarStyles.linkInactive;
    }
  }

  const homeClass = getPathName('/');
  const aboutClass = getPathName('/about');
  const productsClass= getPathName('/products')
  return (
  <>
  <nav className={navbarStyles.navbar}>
    <ul>
      <li>
        <a href="/" className={homeClass}>Home</a>
      </li>
      <li>
        <Link href="/about" className={aboutClass}>About</Link>
      </li>
      <li>
        <Link href="/products" className={productsClass}>Products</Link>
      </li>
    </ul>
    <span>The Soap Factory</span>
    </nav>
  <header className={heroStyles.hero}></header>
  <Component {...pageProps} />
  <footer className={footerStyles.footer}>
    <span>©The Soap Factory</span>
    <span>
      <Modal trigger='Terms and Conditions'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </Modal>
      </span>
  </footer>
  </>
  )
}
