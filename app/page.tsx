'use client'
import Image from 'next/image'
import styles from '@/styles/page.module.scss'
import classNames from 'classnames/bind'
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { useIsClient } from 'usehooks-ts';
// import VideoWorker from 'video-worker';
// import 'video-worker/dist/video-worker'
import { IoIosSearch } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { FaUpDown } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { jarallax } from 'jarallax';
import Rating from '@mui/material/Rating';
import { FaRegClock } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

// const videoObject = new VideoWorker('https://www.youtube.com/watch?v=Nou94xDU5_M&ab_channel=HonkaiImpact3rd', {
//   autoplay: true,
//   loop: true,
//   volume: 100
// })

const cx = classNames.bind(styles)

export default function Home() {

	const testRef = useRef<HTMLDivElement>(null)
	const bgRef = useRef<HTMLIFrameElement>(null)
	const isBrowser = useIsClient()

	const [showAdvanceSearch, setShowAdvanceSearch] = useState<boolean>(false)

	useEffect(() => {

		const bg = document.getElementById('bg')
		if (bg) {
			// // retrieve iframe/video dom element.
			// videoObject.getVideo((video) => {
			//   const $parent = video.parentNode;

			//   // insert video in the body.
			//   bg.appendChild(video);

			//   // remove temporary parent video element (created by VideoWorker).
			//   $parent.parentNode.removeChild($parent);
			// });
			jarallax(bg, {
				videoSrc: 'https://www.youtube.com/watch?v=Nou94xDU5_M&ab_channel=HonkaiImpact3rd',
				videoStartTime: 0,
				videoLoop: true,
				onVideoInsert: () => {
					console.log('video inserted')
				}
			})
		}

	}, [])


	return (
		<main className={cx('main')}>
			<div className={cx('header-box')}>
				<div className={`${cx('background')}`} ref={testRef} id='bg'>
					<p className={cx('text-title')}>Where do u want to go</p>
					<p className={cx('text-sub-title')}>Trips, experiences, and places. All in one service.</p>
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
					</div>}
					<div className={cx('bottom-menu')}>
						<div className={cx('advance-search-opener')} onClick={() => { setShowAdvanceSearch(prev => { return !prev }) }}>
							{showAdvanceSearch ? <FaChevronUp /> : <FaChevronDown />}
							<p>Advance Search</p>
						</div>
					</div>
				</div>
				<div className={cx('over-box')}>
					<div className={cx('text-wrapper')}>
						<p className={cx('title')}>Popular Destinations</p>
						<p className={cx('tagline')}>World's best tourist destinations</p>
					</div>
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

					<div className={cx('text-wrapper')}>
						<p className={cx('title')}>Best Value Trips</p>
						<p className={cx('tagline')}>Best offers trips from us</p>
					</div>

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

					<div className={cx('text-wrapper')}>
						<p className={cx('title')}>Why Choose Us</p>
						<p className={cx('tagline')}>Here are reasons you should plan trip with us</p>
					</div>
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
				</div>
			</div>
		</main>
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