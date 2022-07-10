import logo from '../../static/image/svg/logo.svg';
import style from "../../module/scss/global.module.scss"
import { css } from "./css"
const Home = () => {
  return (
    <div className={style.App}>
      <header className={`${style.App_header}`}>
        <img src={logo} className={style.App_logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          style={css.app}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default Home