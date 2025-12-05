interface Props {
  className?: string
}

export default function Partners({ className } : Props) {
    return (
      <div className={`${className && className}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
            Partnerler
          </h2>
          <div className="mx-auto mt-10 grid max-w-sm grid-cols-5 items-center gap-x-8 sm:max-w-xl sm:gap-x-10">
            <img
              className="col-span-1 max-h-12 w-full object-contain"
              src="/metyx.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
             <img
              className="col-span-1 max-h-16 w-full object-contain"
              src="/deltoron.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-1 max-h-16 w-full object-contain"
              src="/tesa.svg"
              alt="Transistor"
              width={170}
              height={65}
            />
            <img
              className="col-span-1 max-h-16 w-full object-contain"
              src="/Unknown-11.svg"
              alt="Transistor"
              width={158}
              height={54}
            />
             <img
              className="col-span-1 max-h-16 w-full object-contain"
              src="/gsb.png"
              alt="Transistor"
              width={158}
              height={54}
            />
          </div>
        </div>
      </div>
    )
  }
  