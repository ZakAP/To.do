import '../styles/header.scss'
import logoSvg from '../assets/logo.svg'

export function Header() {
  return (
    <header className="header">
      <div>
        <img src={logoSvg} alt="to.do"/>
      </div>
    </header>
  )
}