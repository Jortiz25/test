import './header.style.css'

import BACK_IMAGE from '@/assets/back-icon.png'

function Header() {
  return (
    <header>
      <section className="header">
        <img src={BACK_IMAGE} alt="Back icon" className="header__back-icon" />
      </section>
    </header>
  )
}

export default Header
