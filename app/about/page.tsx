"use client";

import Partners from "../components/Partners";

const stats = [
  { label: "Ekip sayısı", value: "4" },
  { label: "Çalışmalarımız", value: "5" },
];
const values = [
  {
    name: "En iyisi olmak",
    description:
      "Projelerimizi geliştirirken en önem verdiğimiz hususlardan birisi alanın ve sektörün öncülerinden olmaktır. Bu doğrultuda hareket ederek en iyisi olma fikriyle çalışmalarımızı sürdürüyoruz.",
  },
  {
    name: "Takım ruhu",
    description:
      "Başarılarımızda da başarısızlıklarımızda da ekip ruhuyla hareket ediyor ve dayanışmayı ön planda tutuyoruz, aynı zamanda 2023 Teknofest Karma Sürü Robotlar yarışmasında EN İYİ TAKIM RUHU ödülünü aldık.",
  },
  {
    name: "Disiplinlerarası çalışma",
    description:
      "Farklı bölümlerden ve alanlardan arkadaşlarımızla projelerimizi geliştirmekte ve üretmekteyiz bu doğrultuda birbirimizle bilgilerimizi paylaşıyor ve sürekli gelişen bir yapı oluşturmaya çalışıyoruz.",
  },
  {
    name: "Yenilikçi olmak",
    description:
      "Projelerimizi günümüz dünyasının değişen teknolojilerini takip ederek hep daha fazla neler yapabiliriz düşüncesiyle geliştirmekteyiz.",
  },
];

const team = [
  {
    name: "Fatih Yılmaz",
    role: "Yazılım Mühendisi",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  // More people...
];

export default function About() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Content section */}
        <div className="mx-auto mt-40 max-w-7xl px-6 sm:mt-60 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hakkımızda
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div>
                <p className="mt-10">
                Cezeri Takımı olarak, adını Sibernetiğin kurucusu olan El-Cezeri'den alarak 2019 yılının ekim ayında bir grup hazırlık sınıfı öğrencisi tarafından kurulan bir proje takımıyız. Başlangıçta 10 kişilik bir takımken 2024 itibariyle 30 üyeye ulaştık.
                </p>
                <p className="mt-10">
                Yazılım, mekanik, elektronik ve iş geliştirme ekiplerinden oluşan takımımız farklı disiplinlerden gelen üyelerden oluşuyor. Takım ruhu, dayanışma ve saygı gibi değerleri ön planda tutan takımımız, havacılık alanında üniversite ve ülke çapında başarılı projeler ortaya çıkarmak için azimle çalışmalarını sürdürüyor. Bu yolda bize destek olan herkese teşekkür ederiz ve gelecekteki başarılarımızı heyecanla paylaşmaya devam edeceğiz.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Content section */}
        <div className="mx-auto mt-40 max-w-7xl px-6 sm:mt-60 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Vizyonumuz
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:flex-auto">
                <p className="mt-10">
                İstanbul Teknik Üniversitesi Cezeri Takımı olarak, idealist ve azimli mühendislik öğrencileri olarak yolumuza
                başladık. Vizyonumuz, insansız teknolojiler alanında ülkemizi bir öncü haline getirmek ve "İTÜ Cezeri" ismini
                bu alanda bir marka yapmaktır.

                </p>

                <div className="mt-10 text-base leading-7">
                  <p className= "mt-10">
                  Bu yolda, insansız hava araçları, robotlar, otonom sistemler ve diğer ileri teknoloji alanlarında projeler
                  geliştirerek çalışmalarımıza devam ediyoruz. Hedefimiz, sadece teknolojiyi geliştirmek değil, aynı zamanda 
                  bu teknolojilerin toplumumuza ve ülkemize fayda sağlayacak şekillerde kullanılmasını teşvik etmektir.
                  </p>
                </div>
              </div>
              {/* <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base leading-7 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div> */}
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Değerlerimiz
            </h2>
            
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Logo cloud */}
        <div className="relative isolate -z-10 mt-32 sm:mt-48">
         
          <Partners className="px-6 lg:px-8 mb-20" />
        </div>

        {/* Team section */}
        {/* <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus
              eos totam in dolorum. Nemo vel facere repellendus ut eos dolores
              similique.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img
                  className="mx-auto h-24 w-24 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div> */}
      </main>
    </div>
  );
}
