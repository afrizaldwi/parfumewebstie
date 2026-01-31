import React from "react";
import { FaStar } from "react-icons/fa";

const SocialProof = () => {
  const reviews = [
    {
      text: "Wangi yang beda banget dari pasaran. Pas meeting sama klien, mereka notice wangi saya elegan.",
      name: "Andrian",
      role: "Architect",
    },
    {
      text: "Tahan lama parah. Semprot pagi, sampe malam nongkrong masih kecium wanginya. Recommended!",
      name: "Dimas",
      role: "Software Engineer",
    },
    {
      text: "Pacar saya suka banget wanginya. Katanya maskulin tapi gak nyegrak di hidung.",
      name: "Reza",
      role: "Entrepreneur",
    },
  ];

  return (
    <section className="proof-section">
      <div className="container">
        <h2>Kata Mereka yang Telah Mencoba</h2>
        <div className="testimonial-grid">
          {reviews.map((review, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p>"{review.text}"</p>
              <strong>
                - {review.name}, {review.role}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
