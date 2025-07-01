import React from "react";

export const metadata: Metadata = {
  title: "Pricing Page - Solid SaaS Boilerplate",
  description: "This is the Pricing page for Solid Pro",
};

const PricingPage = () => {
  return (
    <div className="pb-20 pt-40 container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">Bảng Giá</h1>
      <h2 className="text-xl font-medium text-center mb-8">
        The best work solution, for the best price.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Gói Cá Nhân */}
        <div className="border rounded-[20px] p-6 shadow-lg flex flex-col h-full">
          <h2 className="text-xl font-bold mb-4">GÓI CÁ NHÂN</h2>
          <p className="text-gray-600 mb-4">
            Dành cho cá nhân, học sinh, sinh viên và những người mới quen làm việc với AI Agent
          </p>
          <p className="text-2xl font-bold text-black mb-4">200,000 đ/tháng</p>
          <ul className="text-gray-600 mb-4 space-y-2">
            <li>1.000.000 Token</li>
            <li>Hỗ trợ kỹ thuật qua Document</li>
            <li>Dữ liệu lưu trữ: 2GB</li>
            <li>Nhật ký lịch sử: 1 tháng</li>
            <li>Số lượng AI tạo ra: 3</li>
            <li>Số lượng page tích hợp: không hỗ trợ</li>
            <li>Số lượng phần mềm CRM tích hợp: Không hỗ trợ</li>
            <li>Chi phí khởi tạo: Miễn phí</li>
          </ul>
          <button className="bg-black text-white rounded-[20px] px-4 py-2 w-full mt-auto">
            Mua ngay
          </button>
        </div>

        {/* Gói Doanh Nghiệp */}
        <div className="border rounded-[20px] p-6 shadow-lg flex flex-col h-full">
          <h2 className="text-xl font-bold mb-4">GÓI DOANH NGHIỆP</h2>
          <p className="text-gray-600 mb-4">
            Dành cho doanh nghiệp vừa và nhỏ, cần AI agent chuyên nghiệp
          </p>
          <p className="text-2xl font-bold text-black mb-4">2,369,000 đ/tháng</p>
          <ul className="text-gray-600 mb-4 space-y-2">
            <li>Hỗ trợ support 1-1</li>
            <li>1.000.000.000 Token (1 tỷ)</li>
            <li>Hỗ trợ kỹ thuật qua Video, Document, AI Support</li>
            <li>Dữ liệu lưu trữ: 10GB</li>
            <li>Nhật ký lịch sử: Không giới hạn</li>
            <li>Số lượng AI tạo ra: Không giới hạn</li>
            <li>Số lượng page tích hợp: 10</li>
            <li>Số lượng phần mềm CRM tích hợp: 1</li>
            <li>Chi phí khởi tạo: Miễn phí</li>
          </ul>
          <button className="bg-black text-white rounded-[20px] px-4 py-2 w-full mt-auto">
            Mua ngay
          </button>
        </div>

        {/* Gói Tập Đoàn Lớn */}
        <div className="border rounded-[20px] p-6 shadow-lg flex flex-col h-full">
          <h2 className="text-xl font-bold mb-4">GÓI TẬP ĐOÀN LỚN</h2>
          <p className="text-gray-600 mb-4">
            Giải pháp tùy chỉnh cho doanh nghiệp lớn với nhu cầu AI phức tạp
          </p>
          <p className="text-2xl font-bold text-black mb-4">Liên hệ</p>
          <ul className="text-gray-600 mb-4 space-y-2">
            <li>Token: Không giới hạn</li>
            <li>Hỗ trợ kỹ thuật qua đội ngũ chuyên gia 24/7</li>
            <li>Dữ liệu lưu trữ: Tùy chỉnh theo nhu cầu</li>
            <li>Nhật ký lịch sử: Không giới hạn</li>
            <li>Số lượng AI tạo ra: Không giới hạn</li>
            <li>Số lượng page tích hợp: Không giới hạn</li>
            <li>Số lượng phần mềm CRM tích hợp: Tùy chỉnh theo yêu cầu</li>
            <li>Tích hợp thêm các hệ thống quản lý doanh nghiệp (ERP, HRM, v.v.)</li>
            <li>Chi phí khởi tạo: Thỏa thuận</li>
            <li>Quyền lợi đặc biệt: Giải pháp tùy chỉnh theo nhu cầu doanh nghiệp</li>
          </ul>
          <button className="bg-black text-white rounded-[20px] px-4 py-2 w-full mt-auto">
            Liên hệ ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;