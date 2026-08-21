"use client";

import React, { useState } from "react";
import { Product } from "@/types/product";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [addedNotification, setAddedNotification] = useState(false);

  const handleAddToCart = () => {
    setAddedNotification(true);
    setTimeout(() => {
      setAddedNotification(false);
    }, 2500);
  };

  return (
    <div className="w-full flex flex-col p-6 sm:p-8 md:p-10 lg:p-14 bg-white">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-950">
        {product.name}
      </h1>

      {/* Price Row */}
      <div className="mt-4 flex items-center gap-4 text-base sm:text-lg">
        {product.originalPrice && (
          <span className="text-red-400 line-through">
            {product.originalPrice}
          </span>
        )}
        <span className="text-neutral-950 font-normal">{product.price}</span>
      </div>

      {/* Size Selection */}
      <div className="mt-8">
        <label className="text-xs text-neutral-600 block mb-2.5">Size :</label>
        <div className="flex items-center gap-2.5">
          {product.sizes.map((size) => {
            const isSelected = selectedSize === size;
            return (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`w-8 h-8 rounded-full text-xs font-normal flex items-center justify-center transition-all cursor-pointer ${
                  isSelected
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Top Add To Cart Button */}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleAddToCart}
          className="w-full py-3 border border-black rounded-full text-xs sm:text-sm font-normal text-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
        >
          {addedNotification ? "✓ Ditambahkan ke Cart" : "Add to Cart"}
        </button>
      </div>

      {/* Product Details, Specs, Sizing, Terms */}
      <div className="mt-10 pt-8 border-t border-neutral-200 flex flex-col space-y-6 text-xs sm:text-sm text-neutral-800 leading-relaxed">
        {/* Sizing Section */}
        <div>
          <p className="font-medium text-neutral-950 mb-1">
            Sizing : Potong Series Boxy
          </p>
          <p className="text-neutral-500 mb-1.5">(Lebar x Panjang)</p>
          {product.sizingChart ? (
            <div className="space-y-0.5">
              {product.sizingChart.map((chart, idx) => (
                <p key={idx}>
                  {chart.size} : {chart.dimensions}
                </p>
              ))}
            </div>
          ) : (
            <div className="space-y-0.5">
              <p>Medium : 54cm x 66cm</p>
              <p>Large : 56cm x 68cm</p>
              <p>Extra Large : 60cm x 71cm</p>
              <p>Double Extra Large : 63cm x 73cm</p>
            </div>
          )}
          <p className="text-neutral-400 mt-1 text-[11px]">
            {product.tolerance || "[Toleransi 1-2 cm]"}
          </p>
        </div>

        {/* Material */}
        <div>
          <p className="font-medium text-neutral-950 mb-1">Material :</p>
          {product.material ? (
            product.material.map((mat, idx) => <p key={idx}>{mat}</p>)
          ) : (
            <>
              <p>cotton combed 24s</p>
              <p>Sablon dtf Plastisol</p>
            </>
          )}
        </div>

        {/* Notice Header */}
        <div className="pt-2">
          <p className="font-medium text-neutral-950">
            Wajib Dibaca Sebelum Membeli = Setuju
          </p>
        </div>

        {/* Dynamic Detail Sections */}
        {product.sections ? (
          product.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-1">
              <p className="font-medium text-neutral-950">{section.title}</p>
              {section.items?.map((item, iIdx) => (
                <p key={iIdx} className="text-neutral-600">
                  - {item}
                </p>
              ))}
            </div>
          ))
        ) : (
          <>
            <div className="space-y-1">
              <p className="font-medium text-neutral-950">Ketentuan Umum</p>
              <p className="text-neutral-600">
                - Dengan membeli, pembeli dianggap setuju dengan semua ketentuan
              </p>
              <p className="text-neutral-600">
                - Wajib menyertakan video unboxing dan foto sebagai bukti
              </p>
              <p className="text-neutral-600">
                - Tanpa bukti, komplain/retur tidak dapat diproses
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-medium text-neutral-950">Cara Order</p>
              <p className="text-neutral-600">
                - Barang dikirim sesuai rincian di sistem (bukan catatan/chat)
              </p>
              <p className="text-neutral-600">
                - Pastikan alamat dan nomor HP sudah benar
              </p>
              <p className="text-neutral-600">
                - Produk pre-order diproses 1-20 hari setelah pemesanan
              </p>
              <p className="text-neutral-600">
                - Produk ready stock dikirim di hari yang sama (sesuai jadwal
                pengiriman)
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-medium text-neutral-950">Pembatalan Pesanan</p>
              <p className="text-neutral-600">
                - Tidak menerima pembatalan dengan alasan apapun
              </p>
              <p className="text-neutral-600">
                - Mohon pastikan pesanan sudah benar sebelum checkout
              </p>
              <p className="text-neutral-600">
                - Disarankan untuk bertanya ke CS terlebih dahulu sebelum
                membeli
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-medium text-neutral-950">Ketersediaan Barang</p>
              <p className="text-neutral-600">
                - Jika varian bisa dipilih, berarti barang ready
              </p>
              <p className="text-neutral-600">
                - Jika stok kosong akan diinformasikan secepatnya
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-medium text-neutral-950">Jadwal Pengiriman</p>
              <p className="text-neutral-600">- Pengiriman setiap hari</p>
              <p className="text-neutral-600">
                - Senin-Sabtu: pesanan sebelum 14.00 WIB dikirim hari yang sama
              </p>
              <p className="text-neutral-600">
                - Minggu: pesanan sebelum 11.00 WIB dikirim hari yang sama
              </p>
              <p className="text-neutral-600">
                - Hari libur nasional: tidak ada pengiriman - Estimasi tiba
                tergantung ekspedisi
              </p>
            </div>
          </>
        )}
      </div>

      {/* Bottom Add To Cart Button */}
      <div className="mt-10 pt-4">
        <button
          type="button"
          onClick={handleAddToCart}
          className="w-full py-3 border border-black rounded-full text-xs sm:text-sm font-normal text-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
        >
          {addedNotification ? "✓ Ditambahkan ke Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
