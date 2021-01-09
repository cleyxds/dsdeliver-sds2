import './styles.css';
import {ReactComponent as LinkedinLogo} from './linkedin.svg';
import {ReactComponent as GithubLogo} from './github.svg';

function Footer() {
	return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://github.com/cleyxds" target="_new">
          <GithubLogo width={23} height={23}/>
        </a>
        <a href="https://www.linkedin.com/in/cleyson-barbosa-7b4245162/" target="_new">
          <LinkedinLogo />
        </a>
      </div>
    </footer>
	)
}

export default Footer;