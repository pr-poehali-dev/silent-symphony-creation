export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/e14b1bcf-d8c3-4a4a-9b62-7b31515526b7/files/b0881b1b-5881-43a6-a6fe-859e4bbe7247.jpg"
          alt="Команда АкваГид"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">40 лет в деле</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Отзывчивый коллектив профессионалов, который знает о водоснабжении и стройматериалах всё.
          Мы не просто продаём — мы помогаем найти правильное решение для вашего объекта.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Наши услуги
        </button>
      </div>
    </div>
  );
}
