export default function Projects() {
  const posts = [
    {
      id: 1,
      title: "2020 - Robocross",
      href: "/post",
      description:
        "Zorlu arazi şartlarında hareket etmesi amaçlanan rocker bogie mekanizmasına sahip bir arazi robotu üzerinde çalışma yaptık.",
      imageUrl: "/robocros.jpeg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Tech" },
      author: {
        name: "Fatih Yılmaz",
        role: "Yazılım Mühendisi",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      title: "2021 - Savaşan İHA",
      href: "/post",
      description:
        "Takımımız 2021 Teknofest Savaşan İHA Yarışması’na katılmak üzere döner kanatlı Savaşan İHA tasarlamıştır. Savaşan İHA Yarışması’nda amaç; İHA’lara günümüzde sahip olmadıkları, savaş jetlerinin yaptığı it dalaşı (dogfight) yapabilme kabiliyetini kazandırmaktır. Yarışmacılar 15 dakikalık müsabaka sürecinde, geliştirdikleri muharebe algoritması ile birbirlerine kilitlenmeye çalışırlar.",
      imageUrl: "/savaşan.jpeg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Tech" },
 
    },
    {
      id: 3,
      title: "2022 - Araç Takip Dronu",
      href: "/post",
      description:
        "Tasarladığımız döner kanat İHA'nın temel görevi araç takip etmektir. Görüntü işleme yeteneği sayesinde kara araçlarını plakaları üzerinden tanıyan ve hedef aracı takip eden bu projemizle emniyet güçlerine yardımcı olmayı hedefledik. Tasarladığımız İHA, kalabalık şehirler başta olmak üzere birçok yerleşim yerinde suç oranını önemli ölçüde azaltacağını öngördüğümüz bu görevleri yerine getirerek halkın güvenliğini sağlayacak ve insanlığın faydası için yükselecektir.",
      imageUrl: "/araçtakipdrone-min.png",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Tech" },
      author: {
        name: "Fatih Yılmaz",
        role: "Yazılım Mühendisi",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "Dikey İHA",
      href: "/post",
      description:
        "Afet durumlarında insanlara temel yardım malzemeleri götürmek üzere tasarladığımız dikey iniş kalkışlı İHA projemize 2022 yılında Airpreneurs programı ile başladık, ODTU VTOL Yarışmasına katıldık ve aracımızı geliştirmeye devam ederek çalışmalarımızı sürdürüyoruz.",
      imageUrl: "/vtol.jpeg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Tech" },
      author: {
        name: "Fatih Yılmaz",
        role: "Yazılım Mühendisi",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
   
     //More posts...
  ];

  return (
    <div className="bg-white my-40 sm:mt-60 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Projelerimiz
        </h2>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col"
          >
            <div className="relative w-full">
              <img
                src={post.imageUrl}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              {/* <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.category.title}
                </span>
              </div> */}
              <div className="group relative mt-8">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span>
                    <span className="absolute inset-0" />
                    {post.title}
                  </span>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
