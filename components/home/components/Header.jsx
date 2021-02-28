import React from 'react'
import { StyledHeader } from '../styles/Header.style'
import Logo from '../../../public/assets/icons/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import Menu from '../../../public/assets/icons/menu.svg'
import Arrow from '../../../public/assets/icons/arrow.svg'
import User from '../../../public/assets/icons/user.svg'

export const Header = ({ isMenuOpen, handleOpenMenu, decodedData }) => {
    const { action, twitter } = decodedData
    return (
        <StyledHeader
            isMenuOpen={isMenuOpen}
            action={action}
        >
            <Logo />
            <nav className="nav-mobile">
                <button className="hamburger-container" onClick={handleOpenMenu}>
                    <Menu className="hamburger" />
                </button>
                <ul className="navigation-links">
                    <li>
                        <Link href="/">
                            <a>{action}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>FAQ</a>
                        </Link>
                    </li>
                    <li>
                        <a> {twitter[0]}</a>
                    </li>
                </ul>
            </nav>
            <nav className="nav-desktop">
                <ul className="navigation-links__desktop">
                    <li>
                        <Link href="/">
                            <a>{action}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>FAQ</a>
                        </Link>
                    </li>
                    <li className="user-details">
                        <User className="user-avatar" />
                        <a>{twitter[0]}</a>
                        <span className="user-more-details"><Arrow /></span>
                    </li>
                </ul>
            </nav>

        </StyledHeader>

    )
}
