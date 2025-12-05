import React from 'react'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export default function BlogPost() {
  return (
    <div className="bg-white px-6 py-32 mt-32 lg:px-8">
    <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <p className="text-base font-semibold leading-7 text-cezeri-light">Cezeri İHA 101</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">İHA ve SİHA: Gökyüzünün Gözetmenleri ve Koruyucuları</h1>
      <p className="mt-6 text-xl leading-8">
      Günümüzde, insansız hava araçları (İHA) ve silahlı insansız hava araçları (SIHA), askeri operasyonlarda ve sivil alanlarda çeşitli amaçlar için yaygın olarak kullanılmaktadır. Bu iki tür aracın özelliklerini anlamak, kullanım alanlarındaki görevlerini anlamak açısından oldukça önemlidir. Blogumuzun bu yazısında bu iki araç tipinin belli konularını inceleyeceğiz.

      </p>
      <div className="mt-10 max-w-2xl">
        <p>
        İnsansız Hava Aracı (İHA), insansız olarak uçabilen ve genellikle keşif, gözetleme, izleme ve haritalama gibi görevler için kullanılan bir hava aracı iken Silahlı İnsansız Hava Aracı (SİHA), İHA'lardan farklı olarak  silah taşıma yeteneğine sahip olan ve genellikle doğrudan saldırı ve hava savunma operasyonlarında kullanılan bir hava aracı türüdür. Bu iki araç türünün temel amaçlarını anladıktan sonra şimdi de farklı kategorilerde bunları inceleyip örnekler vererek devam edelim.
        </p>
        <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
          <li className="flex gap-x-3">
            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-cezeri-light" aria-hidden="true" />
            <span>
              <strong className="font-semibold text-gray-900">İHA  </strong> <br />Genellikle keşif ve gözetleme amaçlı kullanılan İHA'lar hafif ve manevra kabiliyeti yüksek tasarımlara sahiptir. Dünya genelinde sınıflandırılması için çeşitli kurumlar çalışmalar yürütmekte ve ölçütler önermektedir. Avrupa İHA Birliği (EUROUVS) yakıt tipi, motor, kanat, uçuş süresi ve kontrol mesafesi gibi parametreler önermiştir. İHA'ların alan ayırt edilmeden sınıflandırılması boyut, taktiksel, stratejik ve göreve özel olmak üzere dört kategoride yapılmaktadır.Sivil Havacılık Genel Müdürlüğü (SGHM) tarafından yapılan sınıflandırmada ise azami kalkış ağırlıkları referans alınarak İHA0, İHA1, İHA2 ve İHA3 olmak üzere 4 kategoride incelenmektedir.
              <br/>
              <br />
              <strong>GÖREVLER VE KULLANIM ALANLARI </strong>
              <br />
              <p>Doğal afetlerin ardından zarar tespiti yapmak, sınır güvenliğinin kontrolü, tarım alanlarının izlenmesi ve haritalama gibi görevler İHA'ların günümüzde gelecekte önem arz edeceği alanlar olan sıralanmaktadır.</p>
            </span>
          </li>
          <li className="flex gap-x-3">
            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-cezeri-light" aria-hidden="true" />
            <span>
              <strong className="font-semibold text-gray-900">SİHA  </strong> <br />İHA'ların barış zamanlarında kullanılmasının ve silah taşımama özelliğinin yanında SİHA'lar aktif askeri görevlerde yer alır. Yarı veya tam otonom olarak görevlerini yerine getiren SİHA'lar üretim amaçlarına göre doğrudan saldırı görevleri için ve keşif görevleri için üretilen iki farklı grupta incelenebilir.
              <br />
              <br />
              <strong>GÖREVLER VE KULLANIM ALANLARI  </strong>
              <br />
              <p>Aktif askeri operasyonlarda hedef belirleme, keşif , gözetleme ve doğrudan saldırı gibi kritik görevlerde kullanılan SİHA'lar günümüzde neredeyse her ülkenin filolarında bulunmaktadır.</p>
            </span>
          </li>
        </ul>
        <br />
        <br />
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">MALİYET</h2>
        <p className="mt-6">
        Üretim,işletme ve satın alma maliyetleri ve özel gereksinimler düşünüldüğünde SİHA'ların daha karmaşık yapısı ve silah taşıma kapasitesi nedeniyle İHA'larla karşılaştırıldığında daha maliyetli olduğu sonucuna varılır. Bu genel bir yargı olup her iki aracın kendi grubunda amaçlarına göre tasarlanmış modellerinin fiyatı değişmekte olup aynı zamanda belirli amaçlar için üretilmiş İHA'lar bazI SİHA'lardan daha maliyetli olabiliyor.
        2019 yılında Army Technology sitesi tarafından yapılan en önemli 10 İHA listesi şu şekildedir :</p> <br /> <br />
        <ul>
    <li> <strong> Predator C Avenger </strong> <br />
    ABD ordusu için General Atomics Aeronautical Systems, Inc. (GA-ASI) tarafından geliştirilen araç, kanatlarında ileri teknolojiye sahip sensörler bulundururken iç cephaneliğinde çeşitli askeri mühimmatlar bulundurabilmektedir.</li> <br />
    
    <li> <strong> MQ-9B SkyGuardian </strong> <br />
    General Atomics Aeronautical Systems, Inc. (GA-ASI) tarafından, İngiliz Kraliyet Hava Kuvvetleri'nde kullanılmaktadır.
    </li> <br />
    
    <li> <strong> Heron TP </strong> <br />
    İsrail Havacılık Endüstrisi tarafından, İsrail ordusunda kullanılmaktadır.
    </li> <br />
    
    <li> <strong> TAI Anka </strong> <br />
    Türk Havacılık ve Uzay Sanayii (TUSAŞ) tarafından yapılmıştır, Türk Hava Kuvvetleri'nde kullanılmaktadır.
    </li> <br />
    
    <li> <strong> Predator B (MQ-9 Reaper) </strong> <br />
    General Atomics Aeronautical Systems, Inc. (GA-ASI) tarafından, ABD, Fransa, İspanya, İngiltere hava kuvvetleri ve NASA'da kullanılmaktadır.
    </li> <br />
    
    <li> <strong> CH-5 </strong> <br />
    Çin Havacılık Sanayii Kurumu tarafından yapılmıştır.
    </li> <br />
    
    <li> <strong> Yabhon United 40 </strong> <br />
    ADCOM ve Birleşik Arap Emirlikleri tarafından yapılmıştır, Cezayir ordusunda kullanılmaktadır.
    </li> <br />
    
    <li> <strong> MQ-1C Gray Eagle </strong> <br />
    General Atomics Aeronautical Systems, Inc. (GA-ASI) tarafından yapılmıştır, Amerikan ordusunda kullanılmaktadır.
    </li> <br />
    
    <li> <strong> CAIG Wing Loong II </strong> <br />
    Çin Havacılık Sanayii Kurumu tarafından yapılmıştır. Çin Halk Kurtuluş Ordusu Hava Kuvvetleri'nde kullanılmaktadır.
    </li> <br />
    
    <li> <strong> MQ-5B Hunter </strong> <br />
    Northrop Grumman tarafından tasarlanmıştır, ABD ordusunda kullanılmaktadır.
    </li> <br />
</ul>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">FARKLAR VE ÖZET </h2>
        <p className="mt-6">
        İHA'lar genellikle barış zamanında veri toplama, keşif, gözlem gibi amaçlarla kullanılırken, SİHA'lar silah taşıma özellikleri nedeniyle doğrudan askeri operasyonlarda ve hava savunmalarında kullanılırlar. Her iki araç da otonom olarak kontrol edilebilmenin yanında otomatik pilot sistemleri bulunan modeller de bulunmaktadır. Menzillerine göre sınıflandırılan İHA'ların yanında, SİHA'lar faaliyet gösterdikleri operasyonlara ve taşıdıkları silah çeşitlerine göre sınıflandırılır.
        </p>
        <figure className="mt-10 border-l border-cezeri-light pl-9">
          <blockquote className="font-semibold text-gray-900">
            <p>
              “İnsansız Hava Araçları, silahlı kuvvetlerin operasyonlarını daha etkin ve güvenli bir şekilde gerçekleştirmesini sağlayan bir teknolojidir.”
            </p>
          </blockquote>
          <figcaption className="mt-6 flex gap-x-4">
            <div className="text-sm leading-6">
              <strong className="font-semibold text-gray-900">Dr.Heather Roff</strong> – Uluslararası İHA araştırmacısı
            </div>
          </figcaption>
        </figure>
        <p className="mt-10">
        Günümüzde ve gelecekte insan hayatına yerleşmeye başlayan İHA'ların, tarım alanında sağlayacağı verimlilik ile önemli bir noktada bulunacağı öngörülmektedir. SİHA filolarının ise mevcut durumda kullanılan savaş uçaklarına destek olacağı ve bu noktada mali yükü azaltacağı düşünülmektedir.
        </p>
      </div>
      <figure className="mt-16">
        <img
          className="aspect-video rounded-xl bg-gray-50 object-cover w-1600 h-1200"
          src="/drone4321.jpeg"
          alt=""
        />
        <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
          <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
          Cezeri VTOL 2023 İHA
        </figcaption>
      </figure>
      <div className="mt-16 max-w-2xl">
        <p className="mt-6">
        Bu yazımızda havacılık alanında önemli araçlardan olan İHA ve SİHA'ların tanımından , görevlerinden,çeşitli başlıklarda sınıflandırılmasından  bahsettik. Okuduğunuz için teşekkür ederiz
        </p>
      </div>
    </div>
  </div>
  )
}
