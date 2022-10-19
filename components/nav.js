import Link from "next/link";
import { useState } from "react";

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="navbar mb-5">
            <div className="navbar-brand">
                <Link href='/'>
                    <a className="navbar-item">
                        <span className="is-family-code is-size-4 has-text-black">JRUDESILL </span>
                        <span className="is-family-sans-serif is-italic is-size-4 has-text-danger">.dev</span>
                    </a>
                </Link>

              <a role="button" className={`navbar-burger ${showMenu ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setShowMenu(!showMenu)}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div className={`navbar-menu ${showMenu ? 'is-active' : ''}`}>
                <div className="navbar-end">
                    <a className="navbar-item" href="https://github.com/joshrudesill" rel="noreferrer" target='_blank'>
                        <span className="is-family-code">github </span>
                    </a>
                    <a className="navbar-item" href="https://jrudesill.dev" rel="noreferrer" target='_blank'>
                        <span className="is-family-code">resume </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Nav;