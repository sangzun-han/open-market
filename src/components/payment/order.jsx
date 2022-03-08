import React from "react";
import styles from "./order.module.css";
import OrderHeader from "./orderHeader";

const Order = () => {
  return (
    <>
      <OrderHeader />

      <section className={styles.section}>
        <h1>주문자 정보</h1>

        <div className={styles.name}>
          <label htmlFor="name" className={styles.label_name}>
            이름
          </label>
          <input type="text" className={styles.input_name} />
        </div>

        <div className={styles.phone}>
          <label htmlFor="name" className={styles.label_phone}>
            휴대폰
          </label>
          <input type="text" className={styles.input_phone1} /> <span>-</span>
          <input type="text" className={styles.input_phone2} /> <span>-</span>
          <input type="text" className={styles.input_phone3} />
        </div>

        <div className={styles.email}>
          <label htmlFor="name" className={styles.label_email}>
            이메일
          </label>
          <input type="text" className={styles.input_email} />
        </div>
        <div className={styles.address_section}>
          <h2 className={styles.address}>배송지 정보</h2>

          <div className={styles.name}>
            <label
              htmlFor="name"
              className={`${styles.label_name} ${styles.label_receiver}`}
            >
              수령인
            </label>
            <input type="text" className={styles.input_name} />
          </div>

          <div className={styles.phone}>
            <label htmlFor="name" className={styles.label_phone}>
              휴대폰
            </label>
            <input type="text" className={styles.input_phone1} /> <span>-</span>
            <input type="text" className={styles.input_phone2} /> <span>-</span>
            <input type="text" className={styles.input_phone3} />
          </div>

          <div className={styles.product_address}>
            <label htmlFor="address" className={styles.label_address}>
              배송주소
            </label>
            <input type="text" className={styles.address_number} />
            <button type="button" className={styles.address_search}>
              우편번호 조회
            </button>
          </div>
          <div className={styles.address_detail}>
            <input type="text" />
            <input type="text" />
          </div>

          <div className={styles.msg}>
            <label htmlFor="msg" className={styles.label_msg}>
              배송 메시지
            </label>
            <input type="text" className={styles.input_msg} />
          </div>
        </div>

        <div className={styles.payment_wrap}>
          <div className={styles.payment_method}>
            <h2>결제 수단</h2>

            <div className={styles.payment}>
              <input type="radio" value="CARD" name="method" />
              <label htmlFor="CARD" id="CARD">
                신용/체크카드
              </label>

              <input type="radio" value="DEPOSIT" name="method" />
              <label htmlFor="DEPOSIT">무통장입금</label>

              <input type="radio" value="PHONE_PAYMENT" name="method" />
              <label htmlFor="PHONE_PAYMENT">휴대폰 결제</label>

              <input type="radio" value="NAVERPAY" name="method" />
              <label htmlFor="NAVERPAY">네이버페이</label>

              <input type="radio" value="KAKAOPAY" name="method" />
              <label htmlFor="KAKAOPAY">카카오페이</label>
            </div>
          </div>

          <div className={styles.total_payment}>
            <h2>최종결제 정보</h2>

            <div className={styles.total}>
              <div className={styles.total_price_wrapper}>
                <p className={styles.total_price}>- 상품금액</p>
                <p className={styles.price}>
                  46,500<span>원</span>
                </p>
              </div>

              <div className={styles.total_price_wrapper}>
                <p className={styles.total_price}>- 할인금액</p>
                <p className={styles.price}>
                  0<span>원</span>
                </p>
              </div>

              <div className={styles.total_price_wrapper}>
                <p className={styles.total_price}>- 배송비</p>
                <p className={styles.price}>
                  0<span>원</span>
                </p>
              </div>

              <div className={styles.line}></div>

              <div className={styles.total_price_wrapper}>
                <p className={styles.total_price}> 결제금액</p>
                <p className={styles.last_price}>
                  46,500<span>원</span>
                </p>
              </div>

              <div className={styles.terms}>
                <input type="checkbox" />
                <p>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</p>
              </div>
              <div className={styles.btn_pay}>
                <button className={styles.pay}>결제하기</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
