<template>
  <section
    class="text-gray-800 text-center lg:text-left h-screen overflow-y-hidden"
  >
    <div class="px-6 md:px-12">
      <div class="grid lg:grid-cols-2 lg:gap-x-12 items-center">
        <div class="mb-5 lg:mb-0 md:px-8 lg:px-8">
          <h2
            class="
              my-8
              text-5xl text-blue-600
              font-bold
              tracking-tight
              leading-tight
            "
          >
            Ninna <br />
            <span class="text-blue-600">Olumeinda</span>
            <br />
          </h2>
          <span
            class="
              inline-block
              px-7
              py-3
              bg-blue-600
              text-white
              font-medium
              text-sm
              leading-snug
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-green-800 active:shadow-lg
              transition
              duration-150
              ease-in-out
              mb-2
              md:mr-2
            "
            role="button"
            @click="redirect"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            >Login</span
          >
        </div>

        <div class="mb-12 lg:mb-0">
          <img
            src="./../assets/trust_logo.png"
            class="w-full rounded-lg sshadow-lg"
            alt="Logo of Ninna Olumeinda Trust"
          />
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="py-16 flex flex-col justify-center items-center">
      <p
        class="
          mt-6
          text-xs
          lg:text-sm
          leading-none
          text-gray-900
          dark:text-gray-50
        "
      >
        © 2022 Ninna Olumeinda Pratisthanam. All Rights Reserved.
      </p>
    </div>
  </section>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: "Home",
  setup() {
    const router = useRouter();
    const redirect = () => {
      router.push("/login");
    }
    return { redirect }
  }
};
</script>
