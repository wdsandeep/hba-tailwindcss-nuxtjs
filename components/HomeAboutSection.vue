<template>
    <div id="about_section_group" class="m-7 md:m-10 xl:m-16 2xl:mx-22 3xl:mx-28 2xl:mb-0 relative">
        <h2 class="text-primary-light uppercase font-avenir-roman text-sm sm:text-xs xl:text-sm font-semibold ">About us</h2>
        <div class="text-primary-light text-xl xl:text-2xl  font-avenir mt-3 md:mt-6">Leading the hotel design industry since 1965</div>
        <div class="grid">
            <div class=" mt-1 leading-10 ws-2 2xl:ws-1 text-4xl sm:text-3xl md:text-4.5xl 2xl:text-6xl md:leading-none xl:leading-snug w-11/12 sm:w-full md:w-10/12 z-10 ">
                <span class="font-bauerbodonistd text-white ">HBA is</span>
                <span class="font-bauerbodonibt text-secondary  ml-2">the birthplace of hospitality design</span>
                <span class="font-bauerbodonistd text-white  z-20">and determines the future of hotels globally</span>
            </div>
            <div class=" relative bottom-8 w-full md:w-11/12 lg:w-8/12 xl:w-7/12 2xl:w-9/12 3xl:w-7/12 lg:mr-20 xl:mr-0  md:justify-self-end xl:justify-self-center " id="myVideo">
                <video id="video" class="video cursor-pointer " poster="images/HBA-Home-Video-Thumbnail.jpg" muted="">
                    <source src="https://www.hba.com/images/HBA Movie Ian_V6_07-04-2015.mp4" type="video/mp4">
                    
                </video>
                <div class="video_play_icon absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ">
                        <img class="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16 bg-center" src="images/icons/HBA-Video-Play.svg" alt="Play/Pause">
                </div>
                <p class="group  invisible md:visible md:absolute md:right-4 xl:-right-16 xl:mx-0 md:top-[47%]    px-0 xl:px-3 2xl:px-4 block pb-1 border-b-1.5 border-b-secondary cursor-pointer ">
                    <a href="#" class=" relative  text-white font-avenir  font-bold text-xs group-hover:-top-1  ">LEARN MORE ABOUT HBA</a>
                </p>

            </div>
            <p class="text-primary-light sm:text-[15px] md:text-lg  md:w-10/12 xl:w-8/12 2xl:w-9/12 3xl:w-7/12 md:justify-self-end xl:justify-self-center  mt-2 mb-10  leading-8 sm:leading-7 2xl:leading-9 font-avenir-roman">HBA creates inspired, brand-strengthening design experiences that evoke a distinct sense of place, while delighting the world's most discriminating travelers. Around the globe, HBA consistently sets new standards for luxury, comfort and innovation in hospitality interior design.
            </p>

            <p class="group w-fit  inline-block  pb-1 border-b-1.5 border-b-secondary">
                <a href="#" class="relative mt-5 mb-2 md:hidden  text-white font-avenir  font-bold text-xs sm:text-2xs group-hover:-top-1">LEARN MORE ABOUT HBA</a>
            </p>
        
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        let videoParent = document.getElementById("myVideo");
        const videoSelector = document.querySelector('video');
        const video_play_icon = document.querySelector('.video_play_icon');
        if(videoParent){

            videoParent.addEventListener('click', function () {
                videoSelector.paused ? videoSelector.play() : videoSelector.pause()
                video_play_icon.classList.toggle('hidden')
                
            });
        }
    }
}
</script>
