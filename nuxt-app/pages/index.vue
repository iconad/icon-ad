<template>
  <div>
    <section id="coverSection">
        <AdvertisingFrontCover />
    </section>
    <!-- cover section -->

    <section id="secondSection" class="bg-black text-white">
      <div class="flex items-center theme-container h-screen-70 justify-center text-center">
        <div class="space-y-5">
          <h2 class="text-3xl lg:text-4xl uppercase font-semibold">
            <span class="block-span">Building brands for</span>
            <span class="block-span">more than 15 years</span>
          </h2>
          <p class="w-full lg:w-[60%] mx-auto text-lg lg:text-xl font-light">We are a creative user (consumers, human beings) experience agency with 360 marketing services, providing high-end data-driven advertising campaigns, strategies, and storytelling that impact today’s consumers and different target audiences in a great level of understanding across the globe and MENA region.</p>
        </div>
      </div>
    </section>
    <!-- second section -->

    <section id="projectsSection" class="mt-20">

      <div class="front-projects theme-container">
          <AdvertisingProjectProjects from="0" to="3" />
      </div>
      <!-- front projects -->

      <div class="get-front-project my-24">
          <AdvertisingProjectGetProject />
      </div>
      <!-- front projects -->

      <div class="front-projects theme-container">
          <AdvertisingProjectProjects from="3" to="6" />
      </div>
      <!-- front projects -->

    </section>
    <!-- projects section -->

  </div>
</template>

