import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.icon}>
      <div className={styles.icon_wrap}>
        <ul className={styles.icon_group}>
          <li>호두샵 소개</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>전자금융거래약관</li>
          <li>청소년보호정책</li>
          <li>제휴문의</li>
        </ul>

        <ul className={styles.icon_link}>
          <li>
            <img src="/images/icon-insta.svg" alt="insta" />
          </li>
          <li>
            <img src="/images/icon-fb.svg" alt="fb" />
          </li>
          <li>
            <img src="/images/icon-yt.svg" alt="yt" />
          </li>
        </ul>
      </div>
      <div className={styles.line}></div>
      <div className={styles.market_info}>
        <p>(주) HODU SHOP</p>
        <p>서울인천경기도 고다고 137 호두샵</p>
        <p>사업자 번호 : 000-0000-0000</p>
        <p>대표 : 우당탕</p>
      </div>
    </footer>
  );
};

export default Footer;
