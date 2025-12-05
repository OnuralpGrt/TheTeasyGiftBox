import Feature from "./components/Feature";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import FeatureDark from "./components/FeatureDark";
import Partners from "./components/Partners";
import Image from "next/image";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "/post",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl: "/drone.jpeg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Tech" },
      author: {
        name: "Fatih Yılmaz",
        role: "Yazılım Mühendisi",
        href: "#",
        imageUrl:
          "/person.avif",
      },
    },
    {
      id: 2,
      title: "Boost your conversion rate",
      href: "/post",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl: "/drone.jpeg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Tech" },
      author: {
        name: "Fatih Yılmaz",
        role: "Yazılım Mühendisi",
        href: "#",
        imageUrl:
          "/person.avif",
      },
    },
    {
      id: 3,
      title: "Boost your conversion rate",
      href: "/post",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl: "/drone.jpeg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Tech" },
      author: {
        name: "Fatih Yılmaz",
        role: "Yazılım Mühendisi",
        href: "#",
        imageUrl:
          "/person.avif",
      },
    },
    // More posts...
  ];

  return (
    <>
      <Hero />
      <Partners className="bg-white py-24 sm:py-32"/>
      <FeatureDark />
      <Feature />
      {/* <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Son Gelişmeler
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Takımımızla ilgili son gelişmeleri blog sayfamızdan takip edebilirsiniz.
            </p>
          </div>
          <div className="mx-auto my-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <Image
                    src={post.imageUrl}
                    alt="Cover Image"
                    width={384}
                    height={256}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {post.category.title}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  
                </div>
              </article>
            ))}
          </div>
        </div>
      </div> */}
      <Contact />
    </>
  );
}
