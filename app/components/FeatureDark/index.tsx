import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function FeatureDark() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl items-center grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-cezeri-light">
                Güncel Proje
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Dik İHA
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                VTOL (Dikey İniş ve Kalkış Yetenekli) İHA'lar, diğer hava
                araçlarından farklı olarak dikey olarak kalkabilen ve iniş
                yapabilen insansız hava araçlarıdır. Bu özellikleri sayesinde
                dar alanlarda kolayca manevra yapabilirler. VTOL İHA'lar,
                askeri, kargo taşıma, keşif, tarım ve acil durum müdahaleleri
                gibi birçok alanda kullanılırlar. Esneklikleri ve hızlı tepki
                süreleri sayesinde önemli bir teknoloji olarak öne çıkarlar.
                Gelecekteki gelişmelerle birlikte, VTOL İHA'ların kullanım alanı
                ve işlevselliği daha da genişleyebilir. Biz de bu projemizde
                afet durumunda insanlara temel yardım malzemesi götürmek üzere
                tasarladığımız dikey iniş kalkışlı İHA projemizi, bu sene
                geliştirmeye devam ederek çalışmalarımızı sürdürüyoruz.
              </p>
            </div>
          </div>
          <img
            src="/iha2.jpeg"
            alt="Drone"
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-white/10 md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
