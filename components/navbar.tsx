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
import { IoClose } from "react-icons/io5";
import Link from 'next/link'
import Image from 'next/image'
import Rating from '@mui/material/Rating';
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


export default function Navbar({ bgColor }: { bgColor: boolean }) {

    const sidMenuRef = useRef<HTMLDivElement>(null)
    const [showSideMenu, setShowSideMenu] = useState<boolean>(false)

    useOnClickOutside(sidMenuRef, () => {
        setShowSideMenu(false)
    })

    return (
        <nav className={cx('nav')} style={{ backgroundColor: bgColor ? 'white' : 'transparent' }}>
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
                    <div className={cx('exit-button-wrapper')}>
                        <button onClick={() => { setShowSideMenu(false) }}><IoClose /></button>
                    </div>
                    <div className={cx('navigation-wrapper')}>
                        <Link href='' className={cx('navigation')}>Home</Link>
                        <Link href='' className={cx('navigation')}>Tours</Link>
                        <Link href='' className={cx('navigation')}>Booking</Link>
                        <Link href='' className={cx('navigation')}>Destination</Link>
                        <Link href='' className={cx('navigation')}>Page</Link>
                        <Link href='' className={cx('navigation')}>Blog</Link>
                        <Link href='' className={cx('navigation')}>ShortCode</Link>
                        <Link href='' className={cx('navigation')}>Shop</Link>
                    </div>
                    <div className={cx('suggest-trip-wrapper')}>
                        <SuggestTripItem
                            imgSrc='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-131729-700x466.jpeg'
                            currentPrice={3900}
                            isSale={false}
                            rating={4}
                            description=''
                            title='Swiss Alpha Trip'
                            lastingTime={5}
                            reviews={0}

                        />
                        <SuggestTripItem
                            imgSrc='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-131729-700x466.jpeg'
                            currentPrice={3900}
                            isSale={false}
                            rating={4}
                            description=''
                            title='Swiss Alpha Trip'
                            lastingTime={5}
                            reviews={0}

                        />
                    </div>
                </div>
            }

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

const SuggestTripItem = ({ title, imgSrc, isSale, oldPrice, currentPrice, rating }: { title: string, description: string, imgSrc: string, isSale: boolean, oldPrice?: number, currentPrice: number, rating: number, reviews: number, lastingTime: number }) => {
    return (
        <div className={cx('suggest-trip-item')}>
            <Image
                src={imgSrc}
                fill
                alt=''
            />
            <div className={cx('price-tag')}>
                {oldPrice && <p className={cx('old-price')}>{oldPrice}$</p>}
                <p className={cx('current-price')}>{currentPrice}$</p>
            </div>
            <div className={cx('atributte')}>
                <p className={cx('title')}>{title}</p>
                <Rating name="read-only" value={rating} readOnly size='small' color='rgb(0,255,255)' />
            </div>
        </div>
    )
}