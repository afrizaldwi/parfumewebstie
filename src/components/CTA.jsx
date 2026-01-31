import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { generateWalink } from "../utils/helpers";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Siap Mengubah Penampilan Anda?</h2>
        <p>
          Jangan biarkan orang melupakan kehadiran Anda. Amankan botol eksklusif
          Anda sekarang sebelum kehabisan.
        </p>
        <br />
        <a
          href={generateWalink()}
          target="_blank"
          rel="noreferrer"
          className="btn btn-light"
        >
          <FaWhatsapp style={{ marginRight: "8px", verticalAlign: "middle" }} />
          Hubungi Kami via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTA;
