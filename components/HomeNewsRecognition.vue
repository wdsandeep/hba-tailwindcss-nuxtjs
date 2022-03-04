<template>
    <div class="p-7 md:p-10 xl:p-16 2xl:p-22 3xl:p-28 relative bg-black md:bg-[url('/images/HBA-Home-News-Background-Image.jpg')] bg-cover lg:flex 2xl:py-40 3xl:py-56 ">
        <div class="lg:w-5/12 2xl:w-6/12  lg:mt-32">
            <h2 class="text-primary-light my-12 text-2xs sm:text-2xs md:text-xs tracking-wide uppercase  font-extrabold font-avenir-roman">News & Recognition</h2>
            <h3 class="text-secondary text-2xl sm:text-xl md:text-2xl my-3">World-renowned as the </h3>
            <h1 class="text-white text-4xl sm:text-3xl md:text-5xl xl:w-8/12 mb-24 md:mb-0 font-bauerbodonistd">Number 1 Hospitality Design Firm</h1>
            <div class="news_link group hidden md:block py-2 px-8 text-xs font-avenir font-semibold mt-10 2xl:mt-20 mb-24 w-fit border-secondary border-b-1.5 text-white uppercase">
                <a href="#" class="relative group-hover:-top-1">
                    View News & Recognition
                </a>
            </div>
        </div>
        <div class="relative lg:w-7/12 2xl:w-6/12  lg:mt-10">
            <div class="desktop_news_slider hidden md:block ">
                <div class="top_slides relative w-2/3">
                    <div class="top_slide ">
                        <div class="image w-8/12 lg:w-11/12 3xl:w-10/12"><img src="/images/9481c-news-industry.jpg" class="opacity-60" /></div>
                        <div class="news_source_date flex absolute -top-8 ">
                            <div class="new_source text-secondary text-lg sm:text-base font-bauerbodonistd capitalize">interior Design</div>
                            <div class="date flex font-bauerbodonibt text-3xl text-white ml-4 relative -top-2">
                                <span class="-mt-2">May</span>
                                <img src="/images/icons/line.png" />
                                <span class="mt-5 ">2020</span>
                            </div>
                        </div>

                        <div class="description group absolute top-1/2  left-3/4 lg:left-[95%] 3xl:left-[85%] w-36 lg:w-48 translate -translate-x-1/2 -translate-y-1/2  border-b  py-2 uppercase   font-bold font-avenir text-xs border-secondary text-white leading-normal">
                            <a href="#" class=" relative group-hover:-top-1 ">STRIVING FOR A MORE SUSTAINABLE FUTURE IN HOTEL DESIGN, INDUSTRY INSIGHT BY ERICA PRITCHARD</a>
                        </div>
                    </div>

                </div>

                <div class="bottom_slides relative mt-16 ml-[30%] w-2/3 ">
                    <div class="bottom_slide ">
                        <div class="image w-8/12 lg:w-11/12 3xl:w-10/12 "><img src="/images/80eeb-2020-premiere-hospitality.jpg" class="opacity-60" /></div>
                        <div class="news_source_date flex absolute -top-8 ">
                            <div class="new_source text-secondary text-lg sm:text-base font-bauerbodonistd capitalize">Hospitality Design</div>
                            <div class="date flex font-bauerbodonibt text-3xl text-white ml-4 relative -top-2">
                                <span class="-mt-2">March</span>
                                <img src="/images/icons/line.png" />
                                <span class="mt-5 ">2020</span>
                            </div>
                        </div>
                        <div class="description group absolute top-1/2  left-3/4 lg:left-[95%] 3xl:left-[85%] w-36 lg:w-48 translate -translate-x-1/2 -translate-y-1/2  border-b  py-2 uppercase   font-bold font-avenir text-xs border-secondary text-white leading-normal">
                            <a href="#" class=" relative group-hover:-top-1 ">The Sound Hotel Belltown</a>
                        </div>

                    </div>

                </div>
                <div class="icons absolute top-[47%] xl:top-[42%] right-0 lg:-right-8 xl:-right-0 translate -translate-x-1/2 -translate-y-1/2">
                    <span class="p-3.5 cursor-pointer border-r-2 border-b-2 border-secondary inline-block rotate-[135deg] hover:border-secondary/40"></span>
                    <span class="p-3.5 ml-3 cursor-pointer border-r-2 border-b-2 border-secondary inline-block -rotate-45 hover:border-secondary/40"></span>
                </div>


            </div>
            <div class="mobile_news_slider  md:hidden ">
                <div class="mobile_slides">
                    <div class="image w-8/12 sm:w-3/5"><img src="/images/9481c-news-industry.jpg" class="opacity-60" /></div>
                    <div class="news_source_date flex absolute -top-8 ">
                        <div class="new_source text-secondary  font-bauerbodonistd capitalize">interior Design</div>
                        <div class="date flex font-bauerbodonibt text-2xl text-white ml-4 relative -top-2">
                            <span class="-mt-2">May</span>
                            <img src="/images/icons/line.png" />
                            <span class="mt-5 ">2020</span>
                        </div>

                    </div>
                    <div class="description border-b-2 w-10/12 sm:w-8/12 p-2 my-6 ml-6 float-left font-bold font-avenir text-xs sm:text-2xs border-secondary text-white">
                        STRIVING FOR A MORE SUSTAINABLE FUTURE IN HOTEL DESIGN, INDUSTRY INSIGHT BY ERICA PRITCHARD
                    </div>

                </div>
                <div class="icons absolute -top-16 right-0">
                    <span class="p-2.5 sm:p-2 cursor-pointer border-r border-b border-secondary inline-block rotate-[135deg]"></span>
                    <span class="p-2.5 sm:p-2 ml-3 cursor-pointer border-r border-b border-secondary inline-block -rotate-45"></span>
                </div>

            </div>            
        </div>
        <div class="clear-both mb-4 lg:hidden"></div>
    </div>
</template>