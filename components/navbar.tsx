'use client'
import styles from '@/styles/navbar.module.scss'
import classNames from 'classnames/bind'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useState, useRef } from 'react'
import { useIsClient, useOnClickOutside } from 'usehooks-ts'
import MenuButton from '@/components/menubutton'
import { FaChevronDown } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
const cx = classNames.bind(styles)

const options = [
    {
        id: 0,
        name: 'abc',
        href: '/abc',
    },
    {
        id: 1,
        name: 'abc',
        href: '/abc',
    },
    {
        id: 2,
        name: 'with child',
        href: '/with-child',
        children: [
            {
                name: 'child1',
                href: '/child1'
            },
            {
                name: 'child2',
                href: '/child2'
            },
            {
                name: 'child3',
                href: '/child3'
            },
            {
                name: 'child3',
                href: '/child3'
            }
        ]
    },
    {
        id: 3,
        name: 'with child',
        href: '/with-child',
        children: [
            {
                name: 'child4',
                href: '/child1'
            },
            {
                name: 'child5',
                href: '/child2'
            },
            {
                name: 'child6',
                href: '/child3'
            },
            {
                name: 'child7',
                href: '/child3'
            }
        ]
    }
]


export default function Navbar() {

    const sidMenuRef = useRef<HTMLDivElement>(null)
    const [showSideMenu, setShowSideMenu] = useState<boolean>(false)

    useOnClickOutside(sidMenuRef, () => {
        setShowSideMenu(false)
    })


    return (
        <nav className={cx('nav')}>
            <div className={cx('logo-container')}>
                <p>G</p>
                <p style={{ fontWeight: 600 }}>Tour</p>
            </div>
            <div className={cx('list-menu')}>
                <MenuButton options={options}>
                    <div className={cx('menu-dropdown-trigger')}>
                        <p>nav menu 1</p>
                        <FaChevronDown />
                    </div>
                </MenuButton>
                <MenuButton options={options}>
                    <div className={cx('menu-dropdown-trigger')}>
                        <p>nav menu 2</p>
                        <FaChevronDown />
                    </div></MenuButton>
                <MenuButton options={options}>
                    <div className={cx('menu-dropdown-trigger')}>
                        <p>nav menu 3</p>
                        <FaChevronDown />
                    </div>
                </MenuButton>
                <div onClick={() => {
                    setShowSideMenu(prev => { return !prev })
                }}><TfiMenu /></div>
                <div className={cx('cart-box')}>
                    <FiShoppingCart />
                    <div className={cx('cart-count')}>4</div>
                </div>

            </div>
            {showSideMenu &&
                <div className={cx('side-menu')} ref={sidMenuRef}>

                </div>}

            <div className={cx('right-hand-menu-bar')} style={{ right: 0 }}>
                <div className={cx('menu-item')}>
                    <IoSettingsOutline />
                </div>
                <div className={cx('menu-item')}>
                    <FaRegHeart />
                </div>
                <div className={cx('menu-item')}>
                    <IoMdBook />
                </div>
                <div className={cx('menu-item')}>
                    <FiShoppingCart />
                </div>
            </div>
        </nav>
    )
}