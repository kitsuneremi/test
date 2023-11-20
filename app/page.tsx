'use client'
import Image from 'next/image'
import styles from '@/styles/page.module.scss'
import classNames from 'classnames/bind'
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useIsClient } from 'usehooks-ts';
import { IoIosSearch } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { FaChevronDown, FaChevronUp, FaChevronRight, FaFacebookF } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import { IoPhonePortraitOutline } from "react-icons/io5";
import Link from 'next/link'
import { FaXTwitter, FaInstagram, FaPinterest, FaRegClock, FaUpDown } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import Navbar from '@/components/navbar'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { loading: () => <div className={cx('video-background')}></div>, ssr: false })
const cx = classNames.bind(styles)

let prevscr: number = 0;
enum scroll {
	'hidden',
	'up',
	'top'
}


export default function Home() {
	const [show, setShow] = useState<scroll>(1);
	const testRef = useRef<HTMLDivElement>(null)
	const [showAdvanceSearch, setShowAdvanceSearch] = useState<boolean>(false)

	useEffect(() => {
		if (testRef && testRef.current) {
			testRef.current.addEventListener('scroll', () => handleScroll())
			return (
				testRef.current.removeEventListener('scroll', () => handleScroll())
			)
		}

	}, [testRef])

	const handleScroll = () => {
		console.log('scroll')
		let scr = testRef.current!.scrollTop;
		if (scr < 70) {

		} else if (prevscr > scr) {
			setShow(1)
		} else if (prevscr < scr) {
			setShow(0)
		}
		prevscr = scr;
	}

	return (
		<>
			{/* 0 hidden 1 background white 2 background transparent */}
			{show != 0 && <Navbar bgColor={show == 1} />}

			<main className={cx('main')} ref={testRef}>
				<div className={cx('header-box')}>
					<div className={`${cx('background-overlay')}`} id='bg'>
						{/* background video */}
						<ReactPlayer loop controls={false} playing={true}
							className={cx('video-background')}
							width={'100%'}
							height={'100%'}
							autoPlay={true}
							url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' />

						{/* title */}
						<p className={cx('text-title')}>Where do u want to go</p>
						<p className={cx('text-sub-title')}>Trips, experiences, and places. All in one service.</p>

						{/* input */}
						<div className={`${cx('input-wrapper')} ${cx('first')}`}>
							<div>
								<input type="text" placeholder="Search" style={{ color: 'black' }} />
								<IoIosSearch />
							</div>
							<div>
								<select>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</select>
								<CiCalendar />
							</div>
							<div>
								<select>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</select>
								<FaUpDown />
							</div>
							<button className={cx('search-button')}>Search</button>
						</div>
						{showAdvanceSearch && <div className={`${cx('input-wrapper')} ${cx('second')}`}>
							<div>
								<input type="text" placeholder="Search" style={{ color: 'black' }} />
								<IoIosSearch />
							</div>
							<div>
								<select>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</select>
								<CiCalendar />
							</div>
							<div>
								<select>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</select>
								<FaUpDown />
							</div>
							<div style={{ zIndex: -100 }}></div>
						</div>}

						{/* button handle show hide advance input */}
						<div className={cx('bottom-menu')}>
							<div className={cx('advance-search-opener')} onClick={() => { setShowAdvanceSearch(prev => { return !prev }) }}>
								{showAdvanceSearch ? <FaChevronUp /> : <FaChevronDown />}
								<p>Advance Search</p>
							</div>
						</div>
					</div>
					<div className={cx('over-box')}>
						{/* title */}
						<TextTitleRender tagline="World's best tourist destinations" title='Popular Destinations' />

						{/* tour view comp */}
						<div className={cx('tour-view-grid')}>
							<div className={cx('tour-view-item')}>
								<Image src={'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg'} className='' fill alt='' />
								<div className={cx('text-info-wrapper')}>
									<p className={cx('text-info')}>Tokyo</p>
								</div>
							</div>
							<div className={cx('tour-view-item')}>
								<Image src={'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg'} className='' fill alt='' />
								<div className={cx('text-info-wrapper')}>
									<p className={cx('text-info')}>Tokyo</p>
								</div>
							</div>
							<div className={cx('tour-view-item')}>
								<Image src={'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg'} className='' fill alt='' />
								<div className={cx('text-info-wrapper')}>
									<p className={cx('text-info')}>Tokyo</p>
								</div>
							</div>
							<div className={cx('tour-view-item')}>
								<Image src={'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg'} className='' fill alt='' />
								<div className={cx('text-info-wrapper')}>
									<p className={cx('text-info')}>Tokyo</p>
								</div>
							</div>
						</div>

						{/* title */}
						<TextTitleRender tagline='Best offers trips from us' title='Best Value Trips' />

						{/* trip tour components */}
						<div className={cx('trip-view-grid')}>
							<TripComponent
								title='French Autumn'
								description='City Tours, Urban'
								imgSrc='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg'
								isSale={false}
								currentPrice={3200}
								lastingTime={5}
								rating={5}
								reviews={200}

							/>
							<TripComponent
								title='French Autumn'
								description='City Tours, Urban'
								imgSrc='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg'
								isSale={true}
								oldPrice={2500}
								currentPrice={1500}
								lastingTime={5}
								rating={4}
								reviews={4}

							/>
							<TripComponent
								title='French Autumn'
								description='City Tours, Urban'
								imgSrc='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg'
								isSale={true}
								oldPrice={2500}
								currentPrice={1500}
								lastingTime={5}
								rating={4}
								reviews={4}

							/>

						</div>

						{/* title */}
						<TextTitleRender tagline='Here are reasons you should plan trip with us' title='Why Choose Us' />

						{/* promotion comp */}
						<div className={cx('standard-wrapper')}>
							<StandardComponent
								title='Why Choose Us'
								description='Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
								imgSrc='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png'
							/>
							<StandardComponent
								title='Handpicked Hotels'
								description='Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
								imgSrc='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png'
							/>
							<StandardComponent
								title='Best Price Guarantee'
								description='Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
								imgSrc='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png'
							/>
						</div>

						{/* thẻ div có hiệu ứng scroll :v */}
						<div className={cx('bg')} />


						<div className={cx('text-wrapper')}>
							<p className={cx('title')}>Articles & Tips</p>
							<p className={cx('tagline')}>Explore some of the best tips from around the world</p>
						</div>

						<div className={cx('blog-post-wrapper')}>
							<BlogPostComponent
								title='Memorial Day to Someone Told Me to Travel'
								description='Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...'
								date={new Date()}
								imgSrc='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg'
							/>
							<BlogPostComponent
								title='Memorial Day to Someone Told Me to Travel'
								description='Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...'
								date={new Date()}
								imgSrc='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg'
							/>
							<BlogPostComponent
								title='Memorial Day to Someone Told Me to Travel'
								description='Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...'
								date={new Date()}
								imgSrc='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg'
							/>

						</div>

						{/* footer component */}
						<Footer />

					</div>

				</div>
			</main>
		</>
	)
}

const TripComponent = ({ title, description, imgSrc, isSale, oldPrice, currentPrice, rating, reviews, lastingTime }: { title: string, description: string, imgSrc: string, isSale: boolean, oldPrice?: number, currentPrice: number, rating: number, reviews: number, lastingTime: number }) => {

	return (
		<div className={cx('trip-card')}>
			<div className={cx('trip-card-image-box')}>
				<Image
					src={imgSrc}
					className='' fill alt='' />
				{isSale && <div className={cx('sale-bubble')}>Sale</div>}
				<div className={cx('price-tag')}>
					{oldPrice && <p className={cx('old-price')}>{oldPrice}$</p>}
					<p className={cx('current-price')}>{currentPrice}$</p>
				</div>
			</div>
			<div className={cx('trip-info-wrapper')}>
				<p className={cx('text-info')}>{title}</p>
				<p className={cx('text-info-description')}>{description}</p>
			</div>
			<div className={cx('trip-atributte')}>
				<div className={cx('rating')}>
					<Rating name="read-only" value={rating} readOnly size='small' color='rgb(0,255,255)' />
					<p>{reviews} review</p>
				</div>
				<div className={cx('last-time')}>
					<FaRegClock />
					<p>{lastingTime} days</p>
				</div>
			</div>
		</div>
	)
}

const StandardComponent = ({ title, description, imgSrc }: { title: string, description: string, imgSrc: string }) => {
	return (
		<div>
			<div>
				<Image src={imgSrc} fill alt='' />
			</div>
			<p className={cx('title')}>{title}</p>
			<p className={cx('description')}>{description}</p>
		</div>
	)
}


const BlogPostComponent = ({ title, description, date, imgSrc }: { title: string, description: string, date: Date, imgSrc: string }) => {
	return (
		<div className={cx('blog-post-item')}>
			<div className={cx('blog-post-image-wrapper')}>
				<Image src={imgSrc}
					className=''
					fill
					sizes='3/2'
					alt='' />
			</div>
			<div className={cx('blog-post-below-content')}>
				<p className={cx('blog-post-date')}>{formatDate(date)}</p>
				<p className={cx('blog-post-title')}>{title}</p>
				<p className={cx('blog-post-description')}>{description}</p>
				<div className={cx('blog-post-readmore')}>
					<p>Read more</p>
					<FaChevronRight />
				</div>
			</div>
		</div>
	)
}

const formatDate = (dateString: Date) => {
	const formattedDate = new Date(dateString).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

	// Convert to uppercase and return
	return formattedDate.toUpperCase();
};

const TextTitleRender = ({ title, tagline }: { title: string, tagline: string }) => {
	return (
		<div className={cx('text-wrapper')}>
			<p className={cx('title')}>{title}</p>
			<p className={cx('tagline')}>{tagline}</p>
		</div>
	)
}


const Footer = () => {

	const RecentTripsItem = useCallback(({ href, imgSrc }: { imgSrc: string, href: string }) => {
		return (
			<Link href={href}>
				<div className={cx('footer-recent-trips-item')}>
					<Image src={imgSrc}
						fill
						sizes='1/1'
						alt=''
					/>
				</div>
			</Link>
		)
	}, [])

	return (
		<div className={cx('footer')}>
			<div className={cx('footer-award')}>
				<p className={cx('footer-award-title')}>Our Awards</p>
				<p>London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>
				<div className={cx('footer-reward-image-wrapper')}>
					<Image src={'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png'} fill alt='' sizes='21/10' />
				</div>
			</div>
			<div className={cx('footer-contact')}>
				<p className={cx('footer-contact-title')}>Contacts</p>
				<div className={cx('footer-contact-infomation')}>
					<IoPhonePortraitOutline />
					<p>1-567-124-44227</p>
				</div>
				<div className={cx('footer-contact-infomation')}>
					<IoPhonePortraitOutline />
					<p>184 Main Street East Perl Habour 8007</p>
				</div>
				<div className={cx('footer-contact-infomation')}>
					<IoPhonePortraitOutline />
					<p>Mon - Sat 8.00 - 18.00 Sunday</p>
				</div>
				<p>CLOSED</p>
				<div className={cx('footer-contact-social-wrapper')}>
					<Link href='/'>
						<div className={`${cx('footer-contact-social-icon')} ${cx('facebook')}`}>
							<FaFacebookF />
						</div>
					</Link>
					<Link href='/'>
						<div className={`${cx('footer-contact-social-icon')} ${cx('twitter')}`}>
							<FaXTwitter />
						</div>
					</Link>
					<Link href='/'>
						<div className={`${cx('footer-contact-social-icon')} ${cx('youtube')}`}>
							<TfiYoutube />
						</div>
					</Link>
					<Link href='/'>
						<div className={`${cx('footer-contact-social-icon')} ${cx('pinterest')}`}>
							<FaPinterest />
						</div>
					</Link>
					<Link href='/'>
						<div className={`${cx('footer-contact-social-icon')} ${cx('instagram')}`}>
							<FaInstagram />
						</div>
					</Link>
				</div>
			</div>
			<div className={cx('footer-recent-trips-wrapper')}>
				<RecentTripsItem
					href='/'
					imgSrc='https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg'
				/>
				<RecentTripsItem
					href='/'
					imgSrc='https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg'
				/>
				<RecentTripsItem
					href='/'
					imgSrc='https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg'
				/>
				<RecentTripsItem
					href='/'
					imgSrc='https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg'
				/>
				<RecentTripsItem
					href='/'
					imgSrc='https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg'
				/>
				<RecentTripsItem
					href='/'
					imgSrc='https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg'
				/>
			</div>
		</div>
	)
}