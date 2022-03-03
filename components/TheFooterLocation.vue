<template>
    <div class="p-7 md:p-12 xl:p-16 2xl:p-22 bg-primary-light md:bg-[#69615f] font-avenir">
        <div class="text-[#322e2d] font-bold text-xs tracking-wider">OUR LOCATIONS</div>
        <div class="mt-4 block relative md:hidden ">
            <span class="absolute inset-y-0 right-0  ml-1 border-t-8 border-t-secondary border-l-8 border-l-transparent border-r-8 border-r-transparent m-4 "></span>
            <select name="location" id="" class="w-full p-3 bg-[#69615f] text-white text-xs font-bold  caret-secondary appearance-none uppercase">
                <option value="" selected="false">SELECT LOCATION</option>
                <option value="">Atlanta</option>
                <option value="">Bali</option>
                <option value="">Bangkok</option>
                <option value="">Beijing</option>
                <option value="">clark</option>
                <option value="">dubai</option>
                <option value="">guangzhou</option>
            </select>
        </div>
        <div class="hidden md:block">
            <ul class="flex text-white flex-wrap font-avenir-roman text-sm xl:text-base space-y-6 xl:space-y-7 mt-5">
                <li class="w-28 xl:w-36  mt-6 xl:mt-7">Atlanta </li>
                <li class="w-28 xl:w-36 ">Bali </li>
                <li class="w-28 xl:w-36 ">Bangkok </li>
                <li class="w-28 xl:w-36 ">Beijing </li>
                <li class="w-28 xl:w-36 ">Clark </li>
                <li class="w-28 xl:w-36 ">Dubai </li>
                <li class="w-28 xl:w-36 ">Guangzhou </li>
                <li class="w-28 xl:w-36 ">Hong Kong </li>
                <li class="w-28 xl:w-36 ">Istanbul </li>
                <li class="w-28 xl:w-36 ">Jakarta </li>
                <li class="w-28 xl:w-36 ">London </li>
                <li class="w-28 xl:w-36 ">Los Angeles </li>
                <li class="w-28 xl:w-36 ">Manila </li>
                <li class="w-28 xl:w-36 ">Miami </li>
                <li class="w-28 xl:w-36 ">Mumbai </li>
                <li class="w-28 xl:w-36 ">New Delhi </li>
                <li class="w-28 xl:w-36 ">Riyadh </li>
                <li class="w-28 xl:w-36 ">San Francisco </li>
                <li class="w-28 xl:w-36 ">Seoul </li>
                <li class="w-28 xl:w-36 ">Shanghai </li>
                <li class="w-28 xl:w-36 ">Shenzhen </li>
                <li class="w-28 xl:w-36 ">Singapore </li>
                <li class="w-28 xl:w-36 ">Tokyo </li>
            </ul>
        </div>
    </div>
</template>