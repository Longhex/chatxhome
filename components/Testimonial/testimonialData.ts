import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Nguyễn Tuấn Anh",
    designation: "Founder @Greentech Solutions",
    image: image1,
    content:
      "ChatX giúp đội ngũ của tôi tạo chatbot AI mà không cần lập trình viên. Giao diện kéo thả rất dễ dùng và tiết kiệm hàng trăm giờ làm việc mỗi tháng!",
  },
  {
    id: 2,
    name: "Trần Minh Khoa",
    designation: "COO @RetailBoost",
    image: image2,
    content:
      "Chúng tôi triển khai Trợ lý AI của ChatX cho fanpage chỉ trong 1 buổi chiều. Từ đó, phản hồi khách hàng nhanh hơn 3 lần và tiết kiệm hơn 70% chi phí CSKH.",
  },
  {
    id: 3,
    name: "Lê Hoàng Anh",
    designation: "Head of Digital @NaviMart",
    image: image1,
    content:
      "Tôi ấn tượng với khả năng tích hợp đa nền tảng của ChatX. Chỉ cần vài bước đơn giản, chatbot đã có mặt trên cả website, Zalo và Facebook",
  },
  {
    id: 4,
    name: "Phạm Quỳnh Trang",
    designation: "Marketing Manager @EcomPro",
    image: image2,
    content:
      "Nhờ ChatX, chúng tôi dễ dàng huấn luyện Trợ lý AI bằng dữ liệu nội bộ. Nhân viên sales giờ đây có thể tập trung vào khách hàng tiềm năng thay vì trả lời các câu hỏi lặp lại.",
  },
];
