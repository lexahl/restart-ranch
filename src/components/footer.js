import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-information">
        <div className="footer-content">
          <div className="footer-header">
            <img
              alt={props.image_alt2}
              src="/rr-23-0001%20restart%20ranch%20logo%20bc%20rev%20final.svg"
              className="footer-image"
            />
            <p className="footer-text">{props.text}</p>
          </div>
          <div className="footer-contact-list">
            <div className="footer-contact">
              <a
                href="mailto:hello@restart-ranch.com?subject=Restart Ranch Booking Inquiry"
                className="footer-link"
              >
                {props.text1}
              </a>
            </div>
            <div className="footer-contact1">
              <span className="footer-text1">{props.text2}</span>
            </div>
          </div>
        </div>
        <span className="footer-copyright">{props.Copyright}</span>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <a
            href="https://www.airbnb.ca/rooms/822743480789610082"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-text2 link"
          >
            {props.Text6}
          </a>
          <a
            href="mailto:hello@restart-ranch.com?subject=Restart Ranch Booking Inquiry"
            className="footer-text3 link"
          >
            {props.Text61}
          </a>
          <a
            href="https://www.instagram.com/restart_ranch/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-text4 link"
          >
            {props.Text7}
          </a>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  image_alt2: 'image',
  Copyright: '©2023 Restart Ranch',
  image_alt: 'image',
  text: 'Relaxing cabin getaway along the Elbow River in Bragg Creek, Alberta.',
  Text61: 'Contact Us',
  image_src: 'ae8d594a-01d8-40a5-9e86-6064e45142cb',
  text1: 'hello@restart-ranch.com',
  Text6: 'Book on AirBnB',
  text2: '+1 403 497 9818',
  image_alt1: 'image',
  image_src2: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_src1: '37cd3f26-39fa-4b74-a654-a069d42a5999',
  Text7: 'Follow us on Instagram',
}

Footer.propTypes = {
  image_alt2: PropTypes.string,
  Copyright: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  Text61: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
  Text6: PropTypes.string,
  text2: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_src1: PropTypes.string,
  Text7: PropTypes.string,
}

export default Footer
