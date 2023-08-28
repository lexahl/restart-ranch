import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Restart Ranch</title>
        <meta
          name="description"
          content="Relaxing Cozy Cabins in Bragg Creek, Alberta. Healing, gathering and celebration space."
        />
        <meta property="og:title" content="Restart Ranch" />
        <meta
          property="og:description"
          content="Relaxing Cozy Cabins in Bragg Creek, Alberta. Healing, gathering and celebration space."
        />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav className="home-links">
              <button className="home-button button">
                <a
                  href="https://www.instagram.com/restart_ranch/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  INSTAGRAM
                </a>
              </button>
              <button className="home-button1 button">
                <a
                  href="https://www.airbnb.ca/rooms/822743480789610082"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link01"
                >
                  BOOK NOW
                </a>
              </button>
            </nav>
          </div>
          <div className="home-branding">
            <img
              alt="image"
              src="/rr-23-0001%20restart%20ranch%20logo%20bc%20rev%20final.svg"
              className="home-image"
            />
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu1"
          >
            <nav className="home-links1">
              <button className="home-button2 button">
                <a
                  href="https://www.instagram.com/restart_ranch/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link02"
                >
                  INSTAGRAM
                </a>
              </button>
              <button className="home-button3 button">
                <a
                  href="https://www.airbnb.ca/rooms/822743480789610082"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link03"
                >
                  BOOK NOW
                </a>
              </button>
              <button className="home-button4 button">
                <a
                  href="mailto:hello@restart-ranch.com?subject=Restart Ranch Booking Inquiry"
                  className="home-link04"
                >
                  CONTACT US
                </a>
              </button>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <img
              alt="image"
              src="/group%202084%5B1%5D.svg"
              className="home-hamburger"
            />
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-top">
              <div className="home-branding1">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M128 128h768v768h-768z"></path>
                </svg>
                <img
                  alt="image"
                  src="/logo_ig-200w.png"
                  className="home-image01"
                />
              </div>
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links2">
              <a
                href="https://www.airbnb.ca/rooms/822743480789610082"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link05 button"
              >
                <span>Book on AirBnB</span>
              </a>
              <button className="home-button5 button">
                <span>Contact Us</span>
              </button>
            </nav>
            <div className="home-social-bar">
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon4">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <header className="home-hero">
        <div className="home-image02">
          <img alt="image" src="/rainbow-1400w.jpg" className="home-image03" />
        </div>
      </header>
      <section className="home-mission"></section>
      <header className="home-hero1">
        <div className="home-content">
          <h1 className="home-title">
            Relaxing cabins, healing, gathering &amp; celebration space
          </h1>
          <a
            href="https://www.airbnb.ca/rooms/822743480789610082"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link06 button"
          >
            <span className="home-text02">
              <span>BOOK NOW ON AIRBNB</span>
              <br></br>
            </span>
          </a>
          <a
            href="mailto:hello@restart-ranch.com?subject=Restart Ranch Booking Inquiry"
            className="home-link07 button"
          >
            <span className="home-text05">
              <span>BOOK CELEBRATION SPACE</span>
              <br></br>
            </span>
          </a>
        </div>
      </header>
      <section className="home-mission1"></section>
      <section className="home-galleries">
        <div className="home-gallery-desktop">
          <div className="home-column">
            <img
              alt="image"
              src="https://a0.muscache.com/im/pictures/eebe4471-b319-4095-a286-cd76cc88d3f3.jpg?im_w=1200"
              className="home-image04"
            />
          </div>
          <div className="home-column1">
            <div className="home-row">
              <img
                alt="image"
                src="https://a0.muscache.com/im/pictures/270fb123-a6a6-4fd8-8814-0fc51b174b25.jpg?im_w=1200"
                className="home-image05"
              />
              <img
                alt="image"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-822743480789610082/original/f47c206e-7b0a-408b-975b-246b4ff94645.jpeg?im_w=1200"
                className="home-image06"
              />
            </div>
            <div className="home-row1">
              <img
                alt="image"
                src="https://a0.muscache.com/im/pictures/80f0ebeb-ae94-4075-9b6f-0ef6a3604c6e.jpg?im_w=1200"
                className="home-image07"
              />
              <img
                alt="image"
                src="https://a0.muscache.com/im/pictures/d23c609f-96ab-46f4-888a-d2f4ebe3a3ad.jpg?im_w=1200"
                className="home-image08"
              />
            </div>
          </div>
        </div>
        <div className="home-gallery-mobile">
          <div className="home-column2">
            <img
              alt="image"
              src="https://a0.muscache.com/im/pictures/73fe326d-ed52-4964-8400-b998daa67f1c.jpg?im_w=1200"
              className="home-image09"
            />
            <img
              alt="image"
              src="https://a0.muscache.com/im/pictures/80f0ebeb-ae94-4075-9b6f-0ef6a3604c6e.jpg?im_w=1200"
              className="home-image10"
            />
          </div>
          <div className="home-column3">
            <img
              alt="image"
              src="https://a0.muscache.com/im/pictures/270fb123-a6a6-4fd8-8814-0fc51b174b25.jpg?im_w=1200"
              className="home-image11"
            />
            <div className="home-row2">
              <img
                alt="image"
                src="https://a0.muscache.com/im/pictures/ee88f3dd-e015-4e63-900a-96af7e3fcd72.jpg?im_w=1200"
                className="home-image12"
              />
            </div>
            <img
              alt="image"
              src="https://a0.muscache.com/im/pictures/eebe4471-b319-4095-a286-cd76cc88d3f3.jpg?im_w=1200"
              className="home-image13"
            />
          </div>
        </div>
      </section>
      <section className="home-mission2"></section>
      <section className="home-improve">
        <div className="home-tabs">
          <div className="home-content1">
            <div className="home-details">
              <div className="home-header">
                <h2 className="home-text08">The Longhorn Cabin</h2>
                <div className="home-description">
                  <p className="home-text09">
                    This studio-style cabin offers everything you need for your
                    getaway to Bragg! The space is great for couples/friends (1
                    queen bed) and small families (2 couches that turn into
                    single beds) on vacation. The kitchen is equipped with
                    everything you need, including a fridge, toaster oven,
                    French press (with ample coffee), kettle, and hot plate.
                  </p>
                  <p className="home-text10">
                    A full washroom with a stand-up shower is provided, along
                    with all towels, shampoo/conditioner, and body wash. The
                    bathroom does not have a door, only a curtain. Please ensure
                    you are comfortable with this prior to booking. An
                    assortment of games and puzzles is available for guests, and
                    there&apos;s a book swap program in the cabin. Feel free to
                    take one book and leave one behind for others to enjoy.
                  </p>
                </div>
              </div>
            </div>
            <div className="home-image14">
              <img
                alt="image"
                src="https://a0.muscache.com/im/pictures/e67d9323-5d09-47d2-ab8f-87dd680a58f2.jpg?im_w=960"
                className="home-image15"
              />
            </div>
          </div>
          <a
            href="https://www.airbnb.ca/rooms/822743480789610082"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link08 button"
          >
            <span className="home-text11">
              <span>BOOK NOW ON AIRBNB</span>
              <br></br>
            </span>
          </a>
        </div>
      </section>
      <section className="home-galleries1">
        <div className="home-gallery-desktop1">
          <div className="home-column4">
            <div className="home-row3">
              <img
                alt="image"
                src="https://a0.muscache.com/im/pictures/73fe326d-ed52-4964-8400-b998daa67f1c.jpg?im_w=1200"
                className="home-image16"
              />
              <img
                alt="image"
                src="https://a0.muscache.com/im/pictures/2501ba67-c09a-4af8-8724-e08741edb98a.jpg?im_w=1200"
                className="home-image17"
              />
            </div>
            <div className="home-row4">
              <img
                alt="image"
                src="https://a0.muscache.com/im/pictures/a75934ad-38f7-46a8-8619-5c340fb087ee.jpg?im_w=1200"
                className="home-image18"
              />
              <img
                alt="image"
                src="https://a0.muscache.com/im/pictures/85e52f8c-2af7-4584-958a-b85600b34f6a.jpg?im_w=1200"
                className="home-image19"
              />
            </div>
          </div>
          <div className="home-column5">
            <img
              alt="image"
              src="https://a0.muscache.com/im/pictures/3b84a792-d9b3-4606-a537-45c9f3310250.jpg?im_w=1200"
              className="home-image20"
            />
          </div>
        </div>
        <div className="home-gallery-mobile1">
          <div className="home-column6">
            <img
              alt="image"
              src="https://a0.muscache.com/im/pictures/d75b1768-e382-427c-ae6b-6b6769e5fc2b.jpg?im_w=1200"
              className="home-image21"
            />
            <img
              alt="image"
              src="https://a0.muscache.com/im/pictures/3b84a792-d9b3-4606-a537-45c9f3310250.jpg?im_w=1200"
              className="home-image22"
            />
          </div>
          <div className="home-column7">
            <img
              alt="image"
              src="https://a0.muscache.com/im/pictures/a75934ad-38f7-46a8-8619-5c340fb087ee.jpg?im_w=1200"
              className="home-image23"
            />
            <img
              alt="image"
              src="https://a0.muscache.com/im/pictures/85e52f8c-2af7-4584-958a-b85600b34f6a.jpg?im_w=1200"
              className="home-image24"
            />
          </div>
        </div>
      </section>
      <section className="home-mission3">
        <h2 className="home-text14">
          Established in April 2023, Restart Ranch is dedicated to providing a
          serene setting for various healing practices.
        </h2>
        <div className="home-description1">
          <p className="home-text15">
            Our space is open for practitioners who wish to host yoga,
            meditation, grief ceremonies, musical gatherings, tea ceremonies,
            and more. We provide the tranquil backdrop; you bring your expertise
            to serve your clients&apos; needs.
          </p>
          <p className="home-text16">
            Additionally, we offer a charming location for those seeking an
            intimate elopement. Love blossoms amidst the natural beauty of
            Restart Ranch – we provide the ideal setting; you bring the
            affection. If you require assistance in finding justice of the
            peace, photographers, or other services, we are happy to offer
            recommendations to make your special day unforgettable.
          </p>
        </div>
        <a
          href="mailto:info@restart-ranch.com?subject=Event Inquiry at Restart Ranch"
          className="home-link09 button"
        >
          <span className="home-text17">INQUIRE NOW</span>
        </a>
      </section>
      <section className="home-mission4"></section>
      <section className="home-banner">
        <div className="home-container1">
          <div className="home-header1">
            <h2 className="home-title1">
              Established in April 2023, Restart Ranch is dedicated to providing
              a serene setting for various healing practices.
            </h2>
            <p className="home-description2">
              Our space is open for practitioners who wish to host yoga,
              meditation, grief ceremonies, musical gatherings, tea ceremonies,
              and more. We provide the tranquil backdrop; you bring your
              expertise to serve your clients&apos; needs.
            </p>
            <p className="home-description3">
              Additionally, we offer a charming location for those seeking an
              intimate elopement. Love blossoms amidst the natural beauty of
              Restart Ranch – we provide the ideal setting; you bring the
              affection. If you require assistance in finding justice of the
              peace, photographers, or other services, we are happy to offer
              recommendations to make your special day unforgettable.
            </p>
            <a
              href="mailto:info@restart-ranch.com?subject=Restart Ranch Booking Inquiry"
              className="home-link10 button"
            >
              <span className="home-text18">INQUIRE NOW</span>
            </a>
          </div>
        </div>
      </section>
      <section className="home-mission5">
        <div className="home-content2">
          <cite className="home-quote">
            &quot;My husband and I got married here on June 9th, 2023. We had a
            small ceremony up on the deck they had on the property. Everyone was
            friendly, responsive, and helpful. They had the space set up with
            lights, a fountain, some candles- etc. We had the most beautiful
            ceremony here and loved how unique it was. It felt private, it was
            quiet, and we were surrounded by beauty. I could not recommend this
            place more if you are looking to have a small wedding ceremony, or
            even just a weekend away from the city. We are already planning our
            next stay here.&quot;
          </cite>
          <div className="home-author">
            <img
              alt="image"
              src="https://a0.muscache.com/im/pictures/user/User-167034444/original/cdeb01ac-9b29-4ecc-b61d-dd5f35bdb3ab.jpeg?im_w=240"
              className="home-avatar"
            />
            <div className="home-details1">
              <span className="home-name">Shaunna,</span>
              <span className="home-origin">2023</span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-galleries2">
        <div className="home-gallery-desktop2">
          <div className="home-column8"></div>
          <img alt="image" src="/deck-800h.jpg" className="home-image25" />
          <img alt="image" src="/photo3-800h.jpg" className="home-image26" />
          <img alt="image" src="/elopement-800h.jpg" className="home-image27" />
        </div>
        <div className="home-gallery-mobile2">
          <img alt="image" src="/deck-800h.jpg" className="home-image28" />
          <img alt="image" src="/photo3-800h.jpg" className="home-image29" />
          <img alt="image" src="/elopement-800h.jpg" className="home-image30" />
        </div>
      </section>
      <section className="home-newsletter">
        <div className="home-header2">
          <h2 className="home-text19">Subscribe to our newsletter</h2>
          <p className="home-text20">
            Sign up for our newsletter to get the latest updates!
          </p>
        </div>
        <div className="home-content3">
          <div className="home-email">
            <input
              type="text"
              placeholder="Enter your email"
              className="home-textinput input"
            />
            <a
              href="mailto:hello@restart-ranch.com?subject=Restart Ranch Newsletter Subscription"
              className="home-link11"
            >
              <div className="home-submit">
                <img alt="image" src="/frame.svg" className="home-image31" />
              </div>
            </a>
          </div>
          <div className="home-notice"></div>
        </div>
      </section>
      <Footer></Footer>
      <div>
        <Script
          html={`<style>
    .partner-container:hover .partner-image{
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(75deg) brightness(101%) contrast(102%);
    }
</style>`}
        ></Script>
      </div>
    </div>
  )
}

export default Home
