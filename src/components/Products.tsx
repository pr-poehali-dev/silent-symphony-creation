const products = [
  {
    id: 1,
    name: "Трубы ПВХ",
    description: "Водопроводные трубы из ПВХ, диаметр 20–110 мм. Для холодного и горячего водоснабжения.",
    price: "от 85 ₽/м",
    image: "https://cdn.poehali.dev/projects/e14b1bcf-d8c3-4a4a-9b62-7b31515526b7/files/f0be2796-b0fb-4b87-bcf9-b3be1e4dd172.jpg",
    category: "Водоснабжение",
  },
  {
    id: 2,
    name: "Краны и вентили",
    description: "Шаровые краны, вентили и клапаны. Нержавеющая сталь и латунь, давление до 16 бар.",
    price: "от 320 ₽/шт",
    image: "https://cdn.poehali.dev/projects/e14b1bcf-d8c3-4a4a-9b62-7b31515526b7/files/27610681-9e95-47d4-88de-f87e82d6869f.jpg",
    category: "Арматура",
  },
  {
    id: 3,
    name: "Цемент и смеси",
    description: "Цемент М400, М500, сухие строительные смеси. Оптом и в розницу с доставкой.",
    price: "от 420 ₽/мешок",
    image: "https://cdn.poehali.dev/projects/e14b1bcf-d8c3-4a4a-9b62-7b31515526b7/files/1a2b3c81-48ef-4618-8c47-b2f180b12254.jpg",
    category: "Стройматериалы",
  },
  {
    id: 4,
    name: "Фитинги и соединения",
    description: "Муфты, уголки, тройники, переходники. Совместимы со всеми популярными системами.",
    price: "от 25 ₽/шт",
    image: "https://cdn.poehali.dev/projects/e14b1bcf-d8c3-4a4a-9b62-7b31515526b7/files/f0be2796-b0fb-4b87-bcf9-b3be1e4dd172.jpg",
    category: "Водоснабжение",
  },
  {
    id: 5,
    name: "Насосы и насосные станции",
    description: "Погружные и поверхностные насосы для скважин, колодцев и систем полива.",
    price: "от 4 200 ₽/шт",
    image: "https://cdn.poehali.dev/projects/e14b1bcf-d8c3-4a4a-9b62-7b31515526b7/files/27610681-9e95-47d4-88de-f87e82d6869f.jpg",
    category: "Оборудование",
  },
  {
    id: 6,
    name: "Гидроизоляция",
    description: "Рулонная и обмазочная гидроизоляция для фундаментов, подвалов, кровли.",
    price: "от 680 ₽/рул",
    image: "https://cdn.poehali.dev/projects/e14b1bcf-d8c3-4a4a-9b62-7b31515526b7/files/1a2b3c81-48ef-4618-8c47-b2f180b12254.jpg",
    category: "Стройматериалы",
  },
];

export default function Products() {
  return (
    <section className="bg-neutral-50 py-20 px-6" id="catalog">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Ассортимент</p>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12">
          Наши товары
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white group cursor-pointer overflow-hidden border border-neutral-200 hover:border-neutral-400 transition-all duration-300"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-xs uppercase tracking-wide text-neutral-400 mb-2 block">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{product.name}</h3>
                <p className="text-sm text-neutral-500 mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-neutral-900">{product.price}</span>
                  <button className="bg-black text-white px-4 py-2 text-xs uppercase tracking-wide hover:bg-neutral-700 transition-colors duration-300">
                    Запросить цену
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
