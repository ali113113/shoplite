class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <header class="flex flex-wrap justify-between items-center px-[clamp(2rem,10vw,12.5rem)] py-8 text-[20px] font-extralight bg-soft">
      <div class="headerlogo text-center">
        <a href="index.html"
          ><img src="public/assets/icons/main-logo.png" alt=""
        /></a>
      </div>
      <nav class="">
        <ul class="gap-5 w-full flex justify-evenly items-center">
          <li><a class="font-body p-3  hover:text-primary transition duration-300 ease-in-out" href="index.html">HOME</a></li>
          <li><a class="font-body p-3  hover:text-primary transition duration-300 ease-in-out" href="about.html">ABOUT</a></li>
          <li><a class="font-body p-3  hover:text-primary transition duration-300 ease-in-out" href="shop.html">SHOP</a></li>
          <li><a class="font-body p-3  hover:text-primary transition duration-300 ease-in-out" href="blogs.html">BLOGS</a></li>
          <li><a class="font-body p-3  hover:text-primary transition duration-300 ease-in-out" href="cantact.html">CONTACT</a></li>
        </ul>
      </nav>
      <div class="headerIcons">
        <ul class="flex gap-5 justify-evenly items-center w-full">
          <li>
           <button type="button" id="searchBtnIcone">
           <svg class="search h-8 w-8">
             <use xlink:href="#search"></use>
           </svg>
          </button>
          </li>
          <li>
          <button type="button" id="userBtn">
           <svg class="user h-8 w-8">
              <use xlink:href="#user"></use>
            </svg>
          </button>
           
          </li>
          <li class="relative">
           <button type="button" id="wishlistBtn">
           <svg class="wishlist h-8 w-8">
             <use xlink:href="#heart"></use>
           </svg>
          </button>
          <!--//////////////  wishlits modol  /////////////-->
          
<div id="wishlitsTab" class="z-50 absolute top-full right-0 mt-3 w-96 border border-line rounded-lg bg-soft p-4 hidden flex-col justify-center items-center gap-3">     
 <div class="w-full flex justify-between items-center">
        <p class="uppercas text-primary text-2xl">YOUR WISHLIST</p>
        <span class="px-3 text-[1.1rem] py-0.5 rounded-2xl font-bold bg-primary text-on-primary">2</span>
      </div>
      <div class=" border border-line rounded-lg flex flex-col w-full">
        <div class="border-b px-3 py-2 border-line flex justify-between">
          <div class="flex flex-col justify-center items-start gap-1">
            <p class="">Iphone 15 pro max</p>
            <p class="text-[0.9rem]">Special discounted price.</p>
            <a href="#" class="font-normal text-[1.1rem]">Add To Cart</a>
          </div>
          <div class="flex flex-col justify-start items-center">
            <p class="text-primary text-[1.2rem]">$2000</p>
          </div>
        </div>
          <div class="border-b px-3 py-2 border-line flex justify-between">
          <div class="flex flex-col justify-center items-start gap-1">
            <p class="">Iphone 15 pro max</p>
            <p class="text-[0.9rem]">Special discounted price.</p>
            <a href="#" class="font-normal text-[1.1rem]">Add To Cart</a>
          </div>
          <div class="flex flex-col justify-start items-center">
            <p class="text-primary text-[1.2rem]">$2000</p>
          </div>
        </div>
        
                <div class="flex justify-between items-center p-2 text-[1.2rem]">
                
                    <p>TOTAL (USD)</p>
                    <p>$1470</p>
                </div>
                

      </div>
      <div class="w-full flex flex-col justify-evenly items-center gap-1">
                  <button class="text-surface bg-ink w-full rounded-full py-4 text-[1.3rem] font-extralight">ADD ALL TO CART</button>
                  <button class="text-on-primary bg-primary w-full rounded-full py-4 text-[1.3rem] font-extralight">VIEW CART</button>
                </div>
    </div>
    
          </li>
          <li class="relative">
           <button type="button" id="cartBtn">
           <svg class="cart h-8 w-8 flex">
             <use xlink:href="#cart" class="inline-block"></use>
           </svg>
          </button>
          <!-- /////////////  cart modol  /////////////  -->

<div id ="cartTab"  class="z-50 absolute top-full right-0 mt-3 w-96 border border-line rounded-lg bg-soft p-4 hidden flex-col justify-center items-center gap-3">     
 <div class="w-full flex justify-between items-center">
        <p class="uppercas text-primary text-2xl">YOUR CART</p>
        <span class="px-3 text-[1.1rem] py-0.5 rounded-2xl font-bold bg-primary text-on-primary">2</span>
      </div>
      <div class=" border border-line rounded-lg flex flex-col w-full">
        <div class="border-b px-3 py-2 border-line flex justify-between">
          <div class="flex flex-col justify-center items-start gap-1">
            <p class="">Iphone 15 pro max</p>
            <p class="text-[0.9rem]">Special discounted price.</p>
            <a href="#" class="font-normal text-[1.1rem]">Add To Cart</a>
          </div>
          <div class="flex flex-col justify-start items-center">
            <p class="text-primary text-[1.2rem]">$2000</p>
          </div>
        </div>
          <div class="border-b px-3 py-2 border-line flex justify-between">
          <div class="flex flex-col justify-center items-start gap-1">
            <p class="">Iphone 15 pro max</p>
            <p class="text-[0.9rem]">Special discounted price.</p>
            <a href="#" class="font-normal text-[1.1rem]">Add To Cart</a>
          </div>
          <div class="flex flex-col justify-start items-center">
            <p class="text-primary text-[1.2rem]">$2000</p>
          </div>
        </div>
        
                <div class="flex justify-between items-center p-2 text-[1.2rem]">
                
                    <p>TOTAL (USD)</p>
                    <p>$1470</p>
                </div>
                

      </div>
      <div class="w-full flex flex-col justify-evenly items-center gap-1">
                  <button class="text-on-primary w-full  bg-primary rounded-full py-4 text-[1.3rem] font-extralight">ADD ALL TO CART</button>
                  <button class="text-surface bg-ink w-full rounded-full py-4 text-[1.3rem] font-extralight">GO TO CHECKOUT</button>
                </div>
    </div>
          </li>
        </ul>
      </div>
    </header>
    <!--/////////////////  search modol ////////////////////-->

    <div id="searchTab" class=" fixed inset-0 z-50  w-full h-screen hidden flex-col items-center justify-center gap-7 bg-surface">

  <div class="w-2/3 bg-soft rounded-full p-4 relative flex justify-center items-center">

    <input
      type="text"
      id="search"
      placeholder="Type and press enter"
      class="w-full h-full ps-5 rounded-full font-normal text-2xl outline-none border-none focus:placeholder-transparent"
    >

    <button type="button" id="searchBtn" class="absolute right-6 top-1/2 -translate-y-1/2">

      <svg class="search h-8 w-8">
        <use xlink:href="#search"></use>
      </svg>

    </button>

  </div>

  <span class="text-sm font-normal">BROWSE CATEGORIES</span>
<div class=" w-2/3 flex flex-wrap items-center justify-center gap-x-4 gap-y-5">

  <a class="text-5xl" href="">Mobile Phones</a>
  <span>/</span>

  <a class="text-5xl" href="">Smart Watches</a>
  <span>/</span>

  <a class="text-5xl" href="">Headphones</a>
  <span>/</span>

  <a class="text-5xl" href="">Accessories</a>
  <span>/</span>

  <a class="text-5xl" href="">Monitors</a>
  <span>/</span>

  <a class="text-5xl" href="">Speakers</a>
  <span>/</span>

  <a class="text-5xl" href="">Memory Cards</a>

</div>
 
</div>

   <!-- // ////////////////// modol log ///////////////-->

<div id="userModal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/50"> 
   <div class="sign w-5/12 h-auto mx-auto bg-surface px-3 py-7 border border-line rounded-xl flex flex-col justify-center gap-5">
          <div class="exix w-full flex justify-end">
<button type="button" id="closeBtn" aria-label="Close">      
        <svg class="w-6 h-6"><use href="#close"></use></svg>
            </button>
          </div>
          
      <div class="signInRegister w-full border-b border-line flex justify-center gap-8">
       <button type="button" id="signUpTab">SIGN UP</button>
<button type="button" id="loginTab">LOGIN</button>
      </div>
      <form id="signUpForm"  action="#" class=" w-full flex flex-col gap-5 ">
        <div class="flex flex-col justify-center items-start w-full gap-3">
          <label for="username1">Username</label>
          <input type="text" id="username1" placeholder="Your Username " class="border border-line py-3 px-4 rounded-lg w-full"/>
        </div>
        <div class="flex flex-col justify-center items-start w-full gap-3">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Your Email adders" class="border border-line py-3 px-4 rounded-lg w-full"/>
        </div>
          <div class="flex flex-col justify-center items-start w-full gap-3">
          <label for="password1">password</label>
          <input type="password" id="password1" placeholder="Password " class="border border-line py-3 px-4 rounded-lg w-full"/>
        </div>
          <div class="flex flex-col justify-center items-start w-full gap-3">
          <label for="password2">Confirm password</label>
          <input type="password" id="password2" placeholder="Confirm password " class="border border-line py-3 px-4 rounded-lg w-full"/>
        </div>
        <div class="flex items-center w-full gap-2">
          <input type="checkbox" name="" id="remember">
          <label for="remember">Remember me later</label>
        </div>
        
        <input type="submit" value="SIGN UP" class="bg-ink w-full rounded-full text-surface p-3">
      </form>
       <form id="loginForm" action="#" class="hidden w-full flex-col gap-5">
        <div class="flex flex-col justify-center items-start w-full gap-3">
          <label for="username">Username or email address</label>
          <input type="text" id="username" placeholder="Your Username " class="border border-line py-3 px-4 rounded-lg w-full"/>
        </div>
          <div class="flex flex-col justify-center items-start w-full gap-3">
          <label for="password">password</label>
          <input type="password" id="password" placeholder="Password " class="border border-line py-3 px-4 rounded-lg w-full"/>
        </div>
        
        <a href="#" class="underline font-light color-line">Forgot my password</a>
        <input type="submit" value="LOG IN" class="bg-ink w-full rounded-full text-surface p-3">
      </form>
    </div>
</div>
    `;
    const userBtn = this.querySelector("#userBtn");
    const userModal = this.querySelector("#userModal");
    const closeBtn = this.querySelector("#closeBtn");
    const signUpTab = this.querySelector("#signUpTab");
    const loginTab = this.querySelector("#loginTab");
    const signUpForm = this.querySelector("#signUpForm");
    const loginForm = this.querySelector("#loginForm");
    const wishlitsTab = this.querySelector("#wishlitsTab");
    const wishlistBtn = this.querySelector("#wishlistBtn");
    const cartBtn = this.querySelector("#cartBtn");
    const cartTab = this.querySelector("#cartTab");
    const searchBtnIcone = this.querySelector("#searchBtnIcone");
    const searchTab = this.querySelector("#searchTab");
    // open/close user modol func  ................................
    function openModol(modol) {
      modol.classList.add("flex");
      modol.classList.remove("hidden");
    }
    function closeModol(modol) {
      modol.classList.remove("flex");
      modol.classList.add("hidden");
    }

    //  ------------------------ wishlist modol
    wishlistBtn.addEventListener("click", (e) => {
      openModol(wishlitsTab);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModol(wishlitsTab);
      }
    });
    document.addEventListener("click", (e) => {
      if (!wishlitsTab.contains(e.target) && !wishlistBtn.contains(e.target)) {
        closeModol(wishlitsTab);
      }
    });

    //  ----------------  cart modol
    cartBtn.addEventListener("click", (e) => {
      openModol(cartTab);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModol(cartTab);
      }
    });
    document.addEventListener("click", (e) => {
      if (!cartTab.contains(e.target) && !cartBtn.contains(e.target)) {
        closeModol(cartTab);
      }
    });

    // ---------------------user modol
    userBtn.addEventListener("click", () => {
      openModol(userModal);
      active(signUpForm, signUpTab);
    });
    closeBtn.addEventListener("click", () => {
      closeModol(userModal);
      deactive(loginForm, loginTab);
      deactive(signUpForm, signUpTab);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModol(userModal);
        deactive(loginForm, loginTab);
        deactive(signUpForm, signUpTab);
      }
    });
    userModal.addEventListener("click", (e) => {
      if (userModal === e.target) {
        closeModol(userModal);
        deactive(loginForm, loginTab);
        deactive(signUpForm, signUpTab);
      }
    });

    // ------------------- search modol
    searchBtnIcone.addEventListener("click", () => {
      openModol(searchTab);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModol(searchTab);
      }
    });

    searchTab.addEventListener("click", (e) => {
      if (searchTab === e.target) {
        closeModol(searchTab);
      }
    });
    // sgin up / log in func ...........................
    function active(tab, btn) {
      tab.classList.add("flex");
      tab.classList.remove("hidden");
      btn.classList.add("underline", "text-primary");
    }
    function deactive(tab, btn) {
      tab.classList.remove("flex");
      tab.classList.add("hidden");
      btn.classList.remove("underline", "text-primary");
    }
    // -------------------------  sgin / log activesion
    signUpTab.addEventListener("click", () => {
      active(signUpForm, signUpTab);
      deactive(loginForm, loginTab);
    });
    loginTab.addEventListener("click", () => {
      active(loginForm, loginTab);
      deactive(signUpForm, signUpTab);
    });
  }
}
customElements.define("site-header", SiteHeader);
