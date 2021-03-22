import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: '',
        }
    }

    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState({ active: !this.state.active }, () => {
            // set the class in state for the navbar accordingly
            const navBarActiveClass = this.state.active ? 'is-active' : ''
            this.setState({ navBarActiveClass })
        })
    }

    render() {
        return (
            <nav
                className="flex justify-center navbar is-transparent"
                role="navigation"
                aria-label="main-navigation"
            >
                <div className="flex container">
                    <div className="navbar-brand">
                        {/* <Link to="/" className="navbar-item" title="Logo">
                            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
                        </Link> */}
                        {/* Hamburger menu */}
                        <div
                            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                            data-target="navMenu"
                            role="button"
                            tabIndex="0"
                            onKeyPress={() => this.toggleHamburger()}
                            onClick={() => this.toggleHamburger()}
                        >
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div
                        id="navMenu"
                        className={"flex container flex-row items-center justify-between min-h-full"}
                        // className={`flex flex-row justify-between ${this.state.navBarActiveClass}`}
                    >
                        <div className="navbar-end has-text-centered">
                            <a
                                className="navbar-item"
                                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon">
                                    <img src={github} className="w-4 m-0" alt="Github" />
                                </span>
                            </a>
                        </div>
                        <div className="flex space-x-2 navbar-start has-text-centered">
                            <Link className="navbar-item" to="/about">
                                About
                            </Link>
                            <Link className="navbar-item" to="/services">
                                Services
                            </Link>
                            <Link className="navbar-item" to="/blog">
                                Blog
                            </Link>
                            <Link className="navbar-item" to="/contact">
                                Contact
                            </Link>
                            <Link className="navbar-item" to="/contact/examples">
                                Form Examples
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
