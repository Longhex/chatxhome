"use client";

import React, { useState } from "react";

const PACKAGES = [
  {
    id: "personal",
    name: "Gói Cá Nhân",
    price: 200000,
    description: "Dành cho cá nhân, học sinh, sinh viên và những người mới làm việc với AI Agent",
  },
  {
    id: "business",
    name: "Gói Doanh Nghiệp",
    price: 2369000,
    description: "Dành cho doanh nghiệp vừa và nhỏ, cần AI agent chuyên nghiệp",
  },
];

const DURATIONS = [
  { label: "3 tháng", value: 3, discount: 0 },
  { label: "6 tháng (giảm 5%)", value: 6, discount: 0.05 },
  { label: "12 tháng (giảm 10%)", value: 12, discount: 0.1 },
];

const QR_IMAGE_URL = "/images/payment/QR.jpg";
const BG_IMAGE_URL = "/images/payment/bg-payment.jpeg";

function formatCurrency(amount: number) {
  return amount.toLocaleString("vi-VN") + " đ";
}

const PaymentPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES[1]);
  const [selectedDuration, setSelectedDuration] = useState(DURATIONS[1]); // Mặc định 6 tháng

  const baseTotal = selectedPackage.price * selectedDuration.value;
  const discountAmount = baseTotal * selectedDuration.discount;
  const total = baseTotal - discountAmount;

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: `url(${BG_IMAGE_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center">
        <div className="container mx-auto px-4 py-16 pt-[200px] grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Chọn gói và thời gian */}
          <div>
            <h1 className="text-3xl font-bold mb-6 text-black">Thanh toán</h1>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Chọn gói</h2>
              <div className="flex gap-4">
                {PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    className={`border rounded-lg px-4 py-3 flex-1 text-left ${
                      selectedPackage.id === pkg.id
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 bg-white"
                    }`}
                    onClick={() => setSelectedPackage(pkg)}
                  >
                    <div className="font-bold">{pkg.name}</div>
                    <div className="text-gray-600 text-sm">{pkg.description}</div>
                    <div className="mt-1 text-black font-semibold">{formatCurrency(pkg.price)}/tháng</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Chọn thời gian</h2>
              <div className="flex gap-4">
                {DURATIONS.map((d) => (
                  <button
                    key={d.value}
                    className={`border rounded-lg px-4 py-3 flex-1 ${
                      selectedDuration.value === d.value
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 bg-white"
                    }`}
                    onClick={() => setSelectedDuration(d)}
                  >
                    <div className="font-bold">{d.label}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Tổng tiền</h2>
              <div className="text-2xl font-bold text-green-600">{formatCurrency(total)}</div>
              {selectedDuration.discount > 0 && (
                <div className="text-gray-500 text-sm mt-1">
                  Đã giảm {Math.round(selectedDuration.discount * 100)}% ({formatCurrency(discountAmount)})
                </div>
              )}
            </div>
            <div className="mt-8">
              <div className="text-gray-600">
                Sau khi chuyển khoản, vui lòng liên hệ admin Zalo(092 885 33 99) để được kích hoạt gói dịch vụ.
              </div>
            </div>
          </div>

          {/* Thông tin chuyển khoản */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Thông tin chuyển khoản</h2>
            <img
              src={QR_IMAGE_URL}
              alt="QR chuyển khoản"
              className="w-56 h-56 object-contain mb-6 border rounded-xl"
            />
            <div className="text-center">
              <div className="font-semibold text-lg">NGUYEN HAI LONG</div>
              <div className="text-black text-xl font-bold tracking-wider mb-1">2222233666666</div>
              <div className="text-gray-700 mb-2">MBBank</div>
              <div className="text-gray-600 text-sm">
                Nội dung chuyển khoản: <span className="font-semibold">[Số điện thoại]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;