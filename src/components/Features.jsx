import React from "react";
import { FaCrown, FaFlask, FaLeaf } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaCrown className="icon" />,
      title: "Karakter Tegas",
      desc: "Racikan notes yang bold dan maskulin, dirancang khusus untuk menonjolkan aura kepemimpinan.",
    },
    {
      icon: <FaFlask className="icon" />,
      title: "Long Lasting",
      desc: "Konsentrasi Extrait de Parfum menjamin ketahanan aroma hingga 12 jam aktivitas penuh.",
    },
    {
      icon: <FaLeaf className="icon" />,
      title: "Bahan Premium",
      desc: "Menggunakan essential oil impor kualitas terbaik yang aman di kulit dan tidak meninggalkan noda.",
    },
  ];

  return (
    <section className="why-section">
      <div className="container">
        <h2>Mengapa Men Parfume?</h2>
        <p>Kami tidak menjual parfum, kami menjual kepercayaan diri.</p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
