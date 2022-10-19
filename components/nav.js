import Link from "next/link";


const Nav = () => {
    return (
        <div className="navbar mb-5">
            <div className="navbar-brand">
                <Link href='/'>
                    <a className="navbar-item">
                        <span className="is-family-code is-size-4 has-text-black">JRUDESILL </span>
                        <span className="is-family-sans-serif is-italic is-size-4 has-text-danger">.dev</span>
                    </a>
                </Link>

              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div className="navbar-menu">
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