import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Navigation } from "swiper";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const swiperInfo = [
      {
          reviewerName: 'Grace Williams',
          videoUrl: '/videos/1_Grace.mp4',
          poster: '/1_post.png'
      },
      {
          reviewerName: 'Hollie White',
          videoUrl: '/videos/2_Hollie.mp4',
          poster: '/2_post.png'
      },
      {
          reviewerName: 'Kathryn Baker',
          videoUrl: '/videos/3_Kathryn.mp4',
          poster: '/3_post.png'
      },
      {
          reviewerName: 'Siobhan Thomas',
          videoUrl: '/videos/4_Siobhan.mp4',
          poster: '/4_post.png'
      },
      {
          reviewerName: 'Beatrice Turner',
          videoUrl: '/videos/5_Beatrice_Turner.mp4',
          poster: '/5_post.png'
      },
      {
          reviewerName: 'Kiya Ellen Rose',
          videoUrl: '/videos/6_Kiya-Ellen-Rose.mp4',
          poster: '/6_post.png'
      },
  ];

    return (
    <main
      className={`flex min-h-screen  flex-col items-center content-center   ${inter.className}`}
    >
        <div className={`lg:p-[0px] p-[15px] `}>
          <div className="z-10 max-w-5xl font-mono text-sm m-auto">
            <div className="content-center m-20 mt-10">
              <Image
                  className="m-auto"
                  src="/abf_logo.png"
                  alt="A Body Forever Logo"
                  width={139}
                  height={64}
                  priority
              />
            </div>
          </div>
          <h1 className="text-abf-gold text-[43px] tracking-wider leading-tight">A BODY FOREVER</h1>
          <h2 className="text-abf-black text-[43px] uppercase leading-tight">90 Day Elevated Programme</h2>

        </div>
      <div className="lg:p-[0px] p-[15px]  mt-[30px] max-w-[1124px]">
        <Image
            className=""
            src="/ABF_Font-Page-Image-02.png"
            alt="A Body Forever Logo"
            width={1124}
            height={748}
            priority
        />
          <p className={`m-0 text-abf-black mt-[88px] text-[27px] text-center mb-10`}>
              Are you a busy woman looking to feel happy, healthy, and more confident in both your body and mind? Look no further than A Body Forever - the online wellness platform designed for you! Our simple and effective program can be done anywhere, anytime without completely disrupting your life.
          </p>

          <p className={`grostek text-center text-[21px]`}>As a mum, business owner, wife, daughter, sister, friend, and boss, I understand how difficult it can be to find balance. That’s why I created A Body Forever - to offer a 360-degree approach to health that includes:</p>

      </div>
        <div className={`lg:p-[80px] p-[15px]  md:p-[119px]  mt-[71px] mb-[71px] z-10 w-full  font-mono text-sm lg:flex bg-abf-ligth-grey text-center justify-center`}>
         <p className={`max-w-[1124px] text-abf-gold text-[27px] leading-normal md:leading-loose`}>
          Bi weekly mentoring + coaching with me <br/>
          Physical workouts (Pilates, strength, HIIT and stretching) <br/>
          Meditations + mindfulness techniques <br/>
          A nutrition bible + meal plans
        </p>
      </div>

        <div className={`lg:p-[0px] p-[15px]  p-[15px] z-10 w-full   text-sm   text-center grostek max-w-[1124px] text-[21px]`}>
            <p className={`grostek mb-6 text-[21px] leading-8`}>
                Our 90-day program is designed to re-educate you on what true health means, give you the power and control to create lasting change, and help you feel fitter and stronger than ever before - setting you up for success now and forever.

            </p>
            <p className={`grostek mb-6 text-[21px] leading-8`}>
                This 90 day program has already transformed countless lives and I have been blown away with the results! Ready to learn more? Book a call with me through the link below and let’s connect. Change can be hard, but with our proven tools and easy-to-follow step-by-step process, results are 100% guaranteed. Don’t miss out - join A Body Forever today!</p>
            <p className={`grostek text-[21px] leading-8`}>
                With Love, <br/>
                Amy (Founder)
            </p>
            <a href="https://calendly.com/abodyforever/chat-with-amy-from-abf?month=2023-06" target={`_blank`}>
                <button className={`grostek bg-abf-green p-4 pl-6 pr-6 text-white mt-10 tracking-widest uppercase text-[17px]`}>book a call ON Calendly</button>
            </a>
        </div>

        <div className={`lg:p-[80px] p-[15px]  md:p-[119px] pt-10 mt-[71px] mb-[71px] z-10 w-full  font-mono text-sm lg:flex bg-abf-ligth-grey text-center justify-center`}>
            <div className={`max-w-[1124px] text-abf-black text-[27px] leading-loose`}>
                <h3 className={`mb-8`}>OUR TESTIMONIALS</h3>
                <div className={`swiper-parent`}>
                        <img id="js-prev1" src="/left.svg" alt="left arrow" className="swiper-button-prev"/>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}

                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {swiperInfo.map((info,index) => (

                            <SwiperSlide key={index}>
                                <video
                                    id="my-player"
                                    className="video-js "
                                    controls
                                    preload="auto"
                                    poster={info.poster}
                                    data-setup='{}'>
                                    <source src={info.videoUrl} type="video/mp4"></source>
                                    <p className="vjs-no-js">
                                        To view this video please enable JavaScript, and consider upgrading to a
                                        web browser that
                                        <a href="https://videojs.com/html5-video-support/" target="_blank">
                                            supports HTML5 video
                                        </a>
                                    </p>
                                </video>
                                <div className={`intervieweeName`}>{info.reviewerName}</div>
                                {/*</div>*/}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <img  id="js-next1" src="/right.svg" alt="right arrow" className="swiper-button-next"/>
                </div>
            </div>
        </div>
        <div className={`z-10 max-w-5xl font-mono text-sm lg:flex`}>
            <div className={`content-center mb-20`}>
                <Image
                    src="/abf_logo.png"
                    alt="A Body Forever Logo"
                    width={139}
                    height={64}
                    priority
                />
            </div>
        </div>
    </main>
  )
}
