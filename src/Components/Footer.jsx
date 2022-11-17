import React from "react";

import "../styles/footer.css";

function Footer() {
  return (
    <section className="footer">
      <hr className="footer-seperator" />

      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">Registrarse</section>
          <section className="footer-info__returns">
            Envios
            <br />
            Faq
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">info@gmail.com</section>
          <section className="footer-info__terms">
            Terminos y Condiciones
            <br />
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">223550448</section>
          <section className="footer-info__contact">
            <br />
            Contacto
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  );
}

export default Footer;
