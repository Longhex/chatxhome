"use client";

const featuresList = [
  {
    title: "Đào tạo dễ dàng",
    description: "Đào tạo kiến thức cho AI từ dữ liệu doanh nghiệp, CRM, ERP",
  },
  {
    title: "AI thông minh",
    description:
      "Sử dụng hơn 20 Model AI như OpenAI, Grok, Gemini, Deepseek...",
  },
  {
    title: "Tích hợp đa nền tảng",
    description:
      "Đễ dàng tích hợp vào Facebook, Zalo, Tikok, Website..",
  },
];

const HeroPage = () => {
  
  return (
    <section
        className="overflow-hidden"
        style={{
          backgroundImage: "url('/images/shape/shape-dotted-light.svg')",
        }}
      >
      <div className="px-8 pt-32 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
        <div className="max-w-2xl text-center mx-auto lg:text-balance mb-10">
          <p className="text-sm leading-normal font-bold uppercase text-accent-600">
            AI Agent No code
          </p>
          <h2 className="text-xl/snug leading-tight tracking-tight sm:text-2xl/snug md:text-3xl/snug capitalize lg:text-4xl/snug mt-4 text-black font-bold">
            Nền tảng tạo AI Agent - Bắt đầu dễ sử dụng chỉ với 3 phút!
          </h2>
          <p className="text-base leading-normal text-gray-500 lg:text-lg font-medium">
            Nền tảng tạo ra các nhân sự AI (AI Agent) mà không cần viết code sẵn
            sàng tích hợp vào các nền tảng và CRM để sẵn sàng sử dụng cực kỳ đơn
            giản!
          </p>
          <div className="flex flex-wrap items-center gap-2 justify-center mx-auto mt-12">
            <a
              href="https://app.chatx.vn/install"
            className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
            >
              Dùng thử miễn phí
            </a>
            <a
              href="https://getastrothemes.com/"
              className="inline-flex items-center gap-2.5 rounded-full bg-black/20 px-6 py-3 font-medium text-black hover:opacity-90 dark:bg-white dark:text-black"
            >
              Liên hệ tư vấn
            </a>
          </div>
        </div>
        <dl className="lg:gap-x-8 lg:grid-cols-3 max-w-4xl mt-8 mx-auto sm:gap-x-6 sm:gap-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 space-y-6 text-center text-sm items-start">
          {featuresList.map(({ title, description }) => (
            <div key={title} className="text-base-500 lg:text-balance">
              <strong className="">{title}</strong> ━ {description}
            </div>
          ))}
        </dl>
        <div className="relative w-full mx-auto max-w-7xl items-center py-12 pb-12">
        
          <img
            alt="Dashboard"
            className="relative w-full ring-4 ring-base-50 border border-base-200 lg:rounded-2xl object-cover rounded"
            src="/images/hero/hero-light.svg"
          />
         
        </div>
      </div>
    </section>
  );
};

export default HeroPage;