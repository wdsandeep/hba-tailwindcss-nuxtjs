<template>
  <div class="relative  overflow-hidden">
    <div class="relative h-[75vh] md:h-screen xl:h-screen 2xl:h-screen" id="home_landing_slider">
        <div class="home_landing_slider_first absolute inset-0 w-screen h-full  text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000  opacity-100 slide">
            <img class="  h-full  object-cover md:w-full ring-0 outline-none" src="/images/HBA-Home-Hero-Image-mock-6.jpg"  alt="ONE&ONLY PORTONOVI, MONTENEGRO"  />
            <div class="home_slide_title hidden md:block absolute text-sm 3xl:text-base font-bold xl:font-medium bottom-12 3xl:bottom-20 right-0 pr-16 py-1.5 xl:py-1  xl:pr-32 2xl:pr-40 3xl:pr-44 animate-fadeIn "><a href='https://www.hba.com/project/one-only-portonovi'>ONE&ONLY PORTONOVI, MONTENEGRO</a></div>
            
        </div>
        <div class="absolute inset-0 w-screen h-full  text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000  opacity-0 slide">
            <img class=" h-full object-cover md:w-full" src="/images/HBA-Home-Hero-Image-mock-1.jpg"  alt="PARK HYATT SUZHOU, CHINA" />
            <div class="home_slide_title hidden md:block absolute text-sm 3xl:text-base font-bold xl:font-medium bottom-12 3xl:bottom-20 right-0 pr-16 py-1.5 xl:py-1  xl:pr-32 2xl:pr-40 3xl:pr-44 animate-fadeIn "><a href='https://www.hba.com/project/park-hyatt-suzhou'>PARK HYATT SUZHOU, CHINA</a></div>
            
        </div>
    </div>
    <div class="absolute bottom-24 3xl:bottom-32 left-10 xl:left-16 2xl:left-22 3xl:left-28 font-bauerbodonistd text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-white w-4/5 sm:w-3/5 md:w-[55%] lg:w-5/6 xl:w-4/6 2xl:w-3/6 md:leading-tight 2xl:leading-snug "><h1>The World's Leading Hospitality Design Firm</h1></div>
    <div class="absolute bottom-12 3xl:bottom-20 left-0 w-full  pr-6 xl:pr-16 2xl:pr-22 3xl:pr-28 flex justify-between items-center">
      <div class=" flex justify-between items-center">
        <div class="h-[3px] w-10 xl:w-16 2xl:w-22 3xl:w-28 bg-white"></div>
        <div class="h-2 w-48 sm:w-64 md:w-72 xl:w-80  bg-secondary"></div>
      </div>
      <div id="home_landing_scroll_down"><a href="#recent_projects_group"><img src="/images/icons/scroll-down.png" class="" /></a></div>
    </div>
  </div>
</template>
<script>
export default {
  
mounted:(() => {

  var x = 0;
      let activeSlide = document.querySelector('.slide.opacity-100');
      // console.log(activeSlide)
  if(activeSlide) {
    var intervalID = setInterval(function(){
        activeSlide = document.querySelector('.slide.opacity-100');
        activeSlide.classList.remove('opacity-100');
        activeSlide.classList.add('opacity-0');
        activeSlide.getElementsByTagName('div')[0].classList.remove('animate-fadeIn');
        
        let nextSlide = activeSlide.nextElementSibling || document.querySelector('.home_landing_slider_first');
        // console.log(nextSlide);
        nextSlide.classList.remove('opacity-0');
        nextSlide.classList.add('opacity-100');
        nextSlide.getElementsByTagName('div')[0].classList.add('animate-fadeIn');
        if (++x === 5) {
          //window.clearInterval(intervalID);
      }
    }, 4000);
  }


})


}
</script>