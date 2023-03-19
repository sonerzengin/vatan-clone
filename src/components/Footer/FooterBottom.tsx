import React from "react";

const FooterBottom = () => {
  return (
    <div className="w-[60%] mx-auto flex flex-col lg:flex-row justify-between [&>*]:mb-5 lg:[&>*]:mt-0">
      <div className="basis-2/5 text-gray-400">
        <div className="font-bold text-xs mb-2 uppercase">Kurumsal</div>
        <div className="text-[11px] flex gap-x-8">
          <ul className="[&>*]:mt-3">
            <li>Hakkımızda</li>
            <li>Müşteri Hizmetleri</li>
            <li>Sipariş Aşamaları</li>
            <li>Sıkça Sorulan Sorular</li>
            <li>İnsan Kaynakları</li>
            <li>Gizlilik Politikamız</li>
          </ul>
          <ul className="[&>*]:mt-3">
            <li>İletişim</li>
            <li>Vatan Card</li>
            <li>Servis Takip Formu</li>
            <li>Mağazalar</li>
            <li>İşlem Rehberi</li>
          </ul>
        </div>
      </div>
      <div className="basis-2/5 text-gray-400">
        <div className="font-bold text-xs mb-2 uppercase">Kategoriler</div>
        <div className="text-[11px] flex gap-x-8">
          <ul className="[&>*]:mt-3">
            <li>Hakkımızda</li>
            <li>Müşteri Hizmetleri</li>
            <li>Sipariş Aşamaları</li>
            <li>Sıkça Sorulan Sorular</li>
            <li>İnsan Kaynakları</li>
            <li>Gizlilik Politikamız</li>
          </ul>
          <ul className="[&>*]:mt-3">
            <li>İletişim</li>
            <li>Vatan Card</li>
            <li>Servis Takip Formu</li>
            <li>Mağazalar</li>
            <li>İşlem Rehberi</li>
            <li>Servis Takip Formu</li>
          </ul>
        </div>
      </div>
      <div className="basis-1/5 text-gray-400">
        <div className="font-bold text-xs mb-2 uppercase">ÖZEL ürünler</div>
        <div className="text-[11px] flex gap-x-8">
          <ul className="[&>*]:mt-3">
            <li>İPhone 6</li>
            <li>İPhone 6S</li>
            <li>İPhone 6S PLUS</li>
            <li>İPhone 7</li>
            <li>General Mobile 5 Plus</li>
            <li>İPhone 6S</li>
            <li>İPhone 6S PLUS</li>
            <li>İPhone 7</li>
            <li>İPhone 7S</li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
