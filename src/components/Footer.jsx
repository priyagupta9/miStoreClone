import React from "react";
import "../styles/preFooter.css";
import "../styles/Footer.css";

const repeatIcon = <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
  </svg>

const shieldIcon =<svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <rect fill="none" height="24" width="24" />
    <path d="M14.5,12.59l0.9,3.88L12,14.42l-3.4,2.05l0.9-3.87l-3-2.59l3.96-0.34L12,6.02l1.54,3.64L17.5,10L14.5,12.59z M12,3.19 l7,3.11V11c0,4.52-2.98,8.69-7,9.93C7.98,19.69,5,15.52,5,11V6.3L12,3.19 M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12 V5L12,1L12,1z" />
  </svg>


const mapIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKU 11.08l-3 1.01V6.86l3-1.16v11.84z" />
  </svg>
);




const youtubeIcon = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" y="0"/></g><g><g><polygon points="9.5,7.5 9.5,16.5 16.5,12"/><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18.01H4V5.99h16V18.01z"/></g></g></svg>

const twitterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 333333 333333"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
    image-rendering="optimizeQuality"
    fill-rule="evenodd"
    clip-rule="evenodd"
  >
    <path
      d="M333328 63295c-12254 5480-25456 9122-39241 10745 14123-8458 24924-21861 30080-37819-13200 7807-27871 13533-43416 16596-12499-13281-30252-21537-47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKU-140915-71467-6049 10435-9250 22300-9250 34367v8c0 23696 12031 47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKU-11787 2417-18023 2417-4417 0-8673-455-12905-1224 8742 27139 33975 46923 63857 47500-23430 18356-52858 29286-84939 29286-5537 0-10931-339-16318-984 30326 19458 66251 30727 104844 30727 125735 0 194551-104198 194551-194543 0-3002-67-5911-191-8852 13354-9553 24932-21609 34097-35333l31-31-6 4z"
      fill="#1da1f2"
    />
  </svg>
);

const facebookIcon = <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"/></svg>

const instagramIcon = (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
  >
    <path d="M12,9.52A2.47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKU32-2.32,6.53,6.53,0,0,0-2.26-.47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKU,0,0-.47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKU,3.89,0,0,0,1.47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKU89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKU0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKU0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKU-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKU.47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKU.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z" />
  </svg>
);



function Footer({footer}){
    return (
      <>
        <div className="pre-footer">
          <div>
            {repeatIcon}
            <p>
              <b>Hassle-free replacement</b> <br /> 10-day easy replacement
              policy on mi.com
            </p>
          </div>
          <div>
            {shieldIcon}
            <p>
              <b>100% secure payments</b> <br /> We support Cards, Wallets, EMI
              and COD
            </p>
          </div>
          <div>
            {mapIcon}
            <p>
              <b>Vast service network</b> <br /> 1000 Mi service-centers across
              600 cities
            </p>
          </div>
        </div>
        <div className="pre-footer2">
          <div className="wrap">
            <p>LET'S STAY IN TOUCH </p>
            <span> Get updates on sales specials and more</span>
          </div>
          <div className="wrap">
            <div className="input-box">
              <input type="email" placeholder="Enter Email Address" />
              <button>></button>
            </div>
            <span>Thanks. You're on our email list for special offers.</span>
          </div>
          <div className="wrap">
            <p>FOLLOW MI</p>
            <span> We want to hear from you!</span>
          </div>
          <div className="footer-icons">
            {facebookIcon}
            {youtubeIcon}
            {instagramIcon}
            {twitterIcon}
          </div>
        </div>

        <div className="footer">
          <div>
            <p>SUPPORT</p>
            {footer.support.map((item, index) => (
              <a key={item.url} href={item.url}>
                {item.name}
              </a>
            ))}
          </div>
          <div>
            <p>SHOP AND LEARN</p>
            {footer.shopAndLearn.map((item, index) => (
              <a key={item.url} href={item.url}>
                {item.name}
              </a>
            ))}
          </div>
          <div>
            <p>RETAIL STORTE</p>
            {footer.retailStore.map((item, index) => (
              <a key={item.url} href={item.url}>
                {item.name}
              </a>
            ))}
          </div>
          <div>
            <p>ABOUT</p>
            {footer.aboutUS.map((item, index) => (
              <a key={item.url} href={item.url}>
                {item.name}
              </a>
            ))}
          </div>
          <div>
            <p>CONTACT US</p>
            {footer.contactUS.map((item, index) => (
              <a key={item.url} href={item.url}>
                {item.name}
              </a>
            ))}
          </div>
          <div>
            <div>Chat with our Virtual AI Bot (24/7 Live Agent Support)</div>
            <button>CHAT NOW</button>
          </div>
        </div>

        <div className="footer-border">
          <div>Copyright © 2022 - 2031 Xiaomi. All Rights Reserved</div>
        </div>

      </>
    );
};

export default Footer;