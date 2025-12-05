import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Teasy Gift Box Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <nav className="hidden lg:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-gray-600 font-semibold">Konsept Kutular</a>
              <a href="#" className="text-gray-900 hover:text-gray-600 font-semibold">Kendi Kutunu Yap</a>
              <a href="#" className="text-gray-900 hover:text-gray-600 font-semibold">Dükkan</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Teasy Gift Box
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Sevdiklerinize eşsiz ve yaratıcı hediye kutuları ile unutulmaz anlar yaşatın!
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/product1.jpg"
                  alt="Mutlu Yıllar"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Mutlu Yıllar</h3>
            </div>

            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/product2.jpg"
                  alt="Kendi Kutunu Yap"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Kendi Kutunu Yap</h3>
            </div>

            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/product3.jpg"
                  alt="Doğum Günü Kutusu"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Doğum Günü Kutusu</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f7f5f2]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            &copy; 2025 Teasy Gift Box. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </main>
  )
}

