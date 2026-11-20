class Services extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <section class="p-20 flex justify-evenly items-start w-full">
    <div class="flex justify-center items-start  w-[20%] ">
      <div class="pt-1 mx-3">
         <svg class=" h-8 w-8 ">
             <use xlink:href="#cart-outline" class="fill-primary"></use>
           </svg>
          </div>
      <div>
        <h3 class="text-2xl">

          Free delivery

        </h3>
        <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p></div>
    </div>
     <div class="flex justify-center items-start w-[20%] ">
      <div class="pt-1 mx-3">
         <svg class=" h-8 w-8 ">
             <use xlink:href="#quality" class="fill-primary"></use>
           </svg>
      </div>
      <div>
         <h3 class="text-2xl">

Free Quality guarantee
        </h3>
        <p>
Dolor sit amet orem ipsu mcons ectetur adipi elit.        </p>
        </div>
    </div>
    <div class="flex justify-center items-start  w-[20%]">
      <div class="pt-1 mx-3">
         <svg class=" h-8 w-8 ">
             <use xlink:href="#price-tag" class="fill-primary"></use>
           </svg>
      </div>
      <div>
     <h3 class="text-2xl">

Free Daily offers
        </h3>
        <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p></div>
    </div>
      <div class="flex justify-center items-start  w-[20%]">
      <div class="pt-1 mx-3">
         <svg class=" h-8 w-8 ">
             <use xlink:href="#shield-plus" class="fill-primary"></use>
           </svg>
      </div>
      <div>
    <h3 class="text-2xl">

100% secure payment        </h3>
        <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p></div>
    </div>
  </section>
    `;
    }
}
customElements.define("site-services", Services);
