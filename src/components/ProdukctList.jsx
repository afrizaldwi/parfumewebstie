import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { client } from "../lib/contentful";
import { formatPrice, generateWalink } from "../utils/helpers";
// 1. IMPORT LIBRARY INI
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await client.getEntries({
          content_type: "studiKasusDevHandal2026Parfumes",
        });
        setProducts(response.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contentful:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="product-list" className="product-section">
      <div className="container">
        <h2 className="section-title">Pilihan Karakter Anda</h2>

        {loading ? (
          <div className="loading">Sedang meracik koleksi terbaik...</div>
        ) : (
          <div className="product-grid">
            {products.map((item) => {
              const { name, description, price, category, image, featured } =
                item.fields;

              const imageUrl = image?.sys?.id
                ? `https:${image.fields.file.url}`
                : "https://via.placeholder.com/300";

              return (
                <div className="product-card" key={item.sys.id}>
                  <img src={imageUrl} alt={name} className="product-image" />
                  <div className="product-info">
                    <div
                      className="card-header-row"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="badge">{category}</span>
                      {featured && (
                        <span className="featured-badge">
                          <FaStar /> Featured
                        </span>
                      )}
                    </div>

                    <h3>{name}</h3>
                    <p className="price">{formatPrice(price)}</p>

                    {/* 2. UBAH BAGIAN INI */}
                    {/* Gunakan div (bukan p) untuk membungkus Rich Text agar tidak terjadi nesting paragraph */}
                    <div className="desc">
                      {documentToReactComponents(description)}
                    </div>

                    <a
                      href={generateWalink(name)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary full-width"
                    >
                      Beli Sekarang
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
