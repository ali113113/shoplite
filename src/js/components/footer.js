class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section
      class="px-48 py-10 flex flex-col justify-center gap-10 overflow-hidden"
    >
      <div class="flex gap-5 overflow-hidden items-center">
        <h2 class="text-ink font-extralight text-3xl uppercase">
          Customers reviews
        </h2>
        <div
          class="flex-1 h-4 min-w-0"
          style="
            background: repeating-linear-gradient(
              110deg,
              transparent 0 5px,
              #999 5px 7px,
              transparent 7px 12px
            );
          "
        ></div>
      </div>
      <div class="overflow-hidden">
        <div class="swiper customersReviews overflow-hidden h-full w-full">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="border border-line rounded-lg p-12">
                <blockquote class="text-ink">
                  “I stumbled upon this tech store while searching for a new
                  laptop, and I couldn't be happier with my experience! The
                  staff was incredibly knowledgeable and guided me through the
                  process of choosing the perfect device for my needs. Highly
                  recommended!”
                </blockquote>
                <div
                  class="rating text-primary flex justify-start items-center gap-1 mt-5"
                >
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                </div>
                <h5 class="mt-1 font-normal text-ink">Emma Chamberlin</h5>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="border border-line rounded-lg p-12">
                <blockquote class="text-ink">
                  “I stumbled upon this tech store while searching for a new
                  laptop, and I couldn't be happier with my experience! The
                  staff was incredibly knowledgeable and guided me through the
                  process of choosing the perfect device for my needs. Highly
                  recommended!”
                </blockquote>
                <div
                  class="rating text-primary flex justify-start items-center gap-1 mt-5"
                >
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                </div>
                <h5 class="mt-1 font-normal text-ink">Emma Chamberlin</h5>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="border border-line rounded-lg p-12">
                <blockquote class="text-ink">
                  “I stumbled upon this tech store while searching for a new
                  laptop, and I couldn't be happier with my experience! The
                  staff was incredibly knowledgeable and guided me through the
                  process of choosing the perfect device for my needs. Highly
                  recommended!”
                </blockquote>
                <div
                  class="rating text-primary flex justify-start items-center gap-1 mt-5"
                >
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                </div>
                <h5 class="mt-1 font-normal text-ink">Emma Chamberlin</h5>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="border border-line rounded-lg p-12">
                <blockquote class="text-ink">
                  “I stumbled upon this tech store while searching for a new
                  laptop, and I couldn't be happier with my experience! The
                  staff was incredibly knowledgeable and guided me through the
                  process of choosing the perfect device for my needs. Highly
                  recommended!”
                </blockquote>
                <div
                  class="rating text-primary flex justify-start items-center gap-1 mt-5"
                >
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                </div>
                <h5 class="mt-1 font-normal text-ink">Emma Chamberlin</h5>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="border border-line rounded-lg p-12">
                <blockquote class="text-ink">
                  “I stumbled upon this tech store while searching for a new
                  laptop, and I couldn't be happier with my experience! The
                  staff was incredibly knowledgeable and guided me through the
                  process of choosing the perfect device for my needs. Highly
                  recommended!”
                </blockquote>
                <div
                  class="rating text-primary flex justify-start items-center gap-1 mt-5"
                >
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="star star-fill w-3.75 h-3.75">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                </div>
                <h5 class="mt-1 font-normal text-ink">Emma Chamberlin</h5>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div>
              <button
                id="customersReviewsPrev"
                class="z-10 absolute left-0 top-1/2 -translate-y-1/2 p-3 border border-line rounded-lg disabled:opacity-30 disabled:cursor-not-allowed disabled:border-line disabled:text-line"
                type="button"
              >
                <svg class="search h-8 w-8">
                  <use xlink:href="#alt-arrow-left-outline"></use>
                </svg>
              </button>
            </div>
            <div>
              <button
                id="customersReviewsNext"
                class="z-10 absolute right-0 top-1/2 -translate-y-1/2 p-3 border border-line rounded-lg disabled:opacity-30 disabled:cursor-not-allowed disabled:border-line disabled:text-line"
                type="button"
              >
                <svg class="search h-8 w-8">
                  <use xlink:href="#alt-arrow-right-outline"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
       <section
      class="border-b border-line px-48 py-28 flex flex-col justify-center gap-25 overflow-hidden"
    >
      <div class="flex gap-5 overflow-hidden items-center">
        <h2 class="text-ink font-extralight text-3xl uppercase">
          Latest posts
        </h2>
        <div
          class="flex-1 h-4 min-w-0"
          style="
            background: repeating-linear-gradient(
              110deg,
              transparent 0 5px,
              #999 5px 7px,
              transparent 7px 12px
            );
          "
        ></div>
      </div>
      <div class="w-full flex justify-between items-center gap-5">
        <div class="relative flex flex-col gap-3 justify-center items-start">
          <span
            class="text-surface font-extralight bg-primary p-1 px-2 text-[1rem] absolute top-[-7.5%] left-0"
            >GADGETS</span
          >
          <img
            class="w-full h-50 object-cover"
            src="./public/assets/images/products/post-item1.jpg"
            alt=""
          />
          <h3 class="uppercase">5 Must-Have Gadgets for the Modern Home</h3>
          <p>
            Dive into the world of cutting-edge technology with our latest blog
            post, where we highlight five essential gadg
          </p>
          <a href="" class="underline hover:text-primary transition duration-300 ease-in-out">Read More</a>
        </div>
        <div class="flex flex-col gap-3 justify-center items-start relative">
          <span
            class="text-surface font-extralight bg-primary p-1 px-2 text-[1rem] absolute top-[-7.5%] left-0"
            >GADGETS</span
          >

          <img
            class="w-full h-50 object-cover"
            src="./public/assets/images/products/post-item1.jpg"
            alt=""
          />
          <h3 class="uppercase">5 Must-Have Gadgets for the Modern Home</h3>
          <p>
            Dive into the world of cutting-edge technology with our latest blog
            post, where we highlight five essential gadg
          </p>
          <a href="" class="underline hover:text-primary transition duration-300 ease-in-out">Read More</a>
        </div>
        <div class="flex flex-col gap-3 justify-center items-start relative">
          <span
            class="text-surface font-extralight bg-primary p-1 px-2 text-[1rem] absolute top-[-7.5%] left-0"
            >GADGETS</span
          >

          <img
            class="w-full h-50 object-cover"
            src="./public/assets/images/products/post-item1.jpg"
            alt=""
          />
          <h3 class="uppercase">5 Must-Have Gadgets for the Modern Home</h3>
          <p>
            Dive into the world of cutting-edge technology with our latest blog
            post, where we highlight five essential gadg
          </p>
          <a href="" class="underline hover:text-primary transition duration-300 ease-in-out">Read More</a>
        </div>
        <div class="flex flex-col gap-3 justify-center items-start relative">
          <span
            class="text-surface font-extralight bg-primary p-1 px-2 text-[1rem] absolute top-[-7.5%] left-0"
            >GADGETS</span
          >

          <img
            class="w-full h-50 object-cover"
            src="./public/assets/images/products/post-item1.jpg"
            alt=""
          />
          <h3 class="uppercase">5 Must-Have Gadgets for the Modern Home</h3>
          <p>
            Dive into the world of cutting-edge technology with our latest blog
            post, where we highlight five essential gadg
          </p>
          <a href="" class="underline hover:text-primary transition duration-300 ease-in-out">Read More</a>
        </div>
      </div>
    </section>
    <section
      class="border-y border-line w-full h-10 py-28 px-4 sm:px-8 lg:px-16 xl:px-48 flex justify-between items-center"
    >
      <div>
        <img
          src="./public/assets/images/banners/brand1.png"
          class="grayscale-100 hover:grayscale-0 transition duration-300 ease-in-out"
          alt=""
        />
      </div>
      <div>
        <img
          src="./public/assets/images/banners/brand2.png"
          class="grayscale-100 hover:grayscale-0 transition duration-300 ease-in-out"
          alt=""
        />
      </div>
      <div>
        <img
          src="./public/assets/images/banners/brand3.png"
          class="grayscale-100 hover:grayscale-0 transition duration-300 ease-in-out"
          alt=""
        />
      </div>
      <div>
        <img
          src="./public/assets/images/banners/brand4.png"
          class="grayscale-100 hover:grayscale-0 transition duration-300 ease-in-out"
          alt=""
        />
      </div>
      <div>
        <img
          src="./public/assets/images/banners/brand5.png"
          class="grayscale-100 hover:grayscale-0 transition duration-300 ease-in-out"
          alt=""
        />
      </div>
    </section>

    <section
      class="py-28 px-4 sm:px-8 lg:px-16 xl:px-48 flex flex-col gap-5 justify-center items-center"
    >
      <h2 class="uppercase text-4xl">Instagram #Shoplite</h2>
      <div class="w-full flex justify-center items-center gap-5">
        <div>
          <img
            class="rounded-lg"
            src="./public/assets/images/products/insta-item1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="rounded-lg"
            src="./public/assets/images/products/insta-item2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="rounded-lg"
            src="./public/assets/images/products/insta-item3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="rounded-lg"
            src="./public/assets/images/products/insta-item4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="rounded-lg"
            src="./public/assets/images/products/insta-item5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="rounded-lg"
            src="./public/assets/images/products/insta-item6.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
    <footer class="pt-28 flex flex-col">
      <div
        class="px-4 sm:px-8 lg:px-16 xl:px-48 flex justify-between items-center gap-5 border-b border-line py-14"
      >
        <div class="w-1/5">
          <img
            src="./public/assets/icons/main-logo.png"
            alt=""
          />
          <p>
            Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
            Gravida massa volutpat aenean odio erat nullam fringilla.
          </p>
          <div class="w-full flex justify-around gap-5 items-center">
            <div class="">
              <svg
                class="facebook w-[20px] h-[20px] hover:text-primary transition duration-300 ease-in-out"
              >
                <use xlink:href="#facebook" />
              </svg>
            </div>
            <div class="">
              <svg
                class="instagarm w-[20px] h-[20px] hover:text-primary transition duration-300 ease-in-out"
              >
                <use xlink:href="#instagram" />
              </svg>
            </div>
            <div class="">
              <svg
                class="facebook w-[20px] h-[20px] hover:text-primary transition duration-300 ease-in-out"
              >
                <use xlink:href="#twitter" />
              </svg>
            </div>
            <div class="">
              <svg
                class="linkedin w-[20px] h-[20px] hover:text-primary transition duration-300 ease-in-out"
              >
                <use xlink:href="#linkedin" />
              </svg>
            </div>
            <div class="">
              <svg
                class="youtube w-[20px] h-[20px] hover:text-primary transition duration-300 ease-in-out"
              >
                <use xlink:href="#youtube" />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-1/5">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a
                class="uppercase text-ink text-[1rem] hover:text-primary transition duration-300 ease-in-out"
                href="index.html"
                >home</a
              >
            </li>
            <li>
              <a
                class="uppercase text-ink text-[1rem] hover:text-primary transition duration-300 ease-in-out"
                href="about.html"
                >about</a
              >
            </li>
            <li>
              <a
                class="uppercase text-ink text-[1rem] hover:text-primary transition duration-300 ease-in-out"
                href="shop.html"
                >shop</a
              >
            </li>
            <li>
              <a
                class="uppercase text-ink text-[1rem] hover:text-primary transition duration-300 ease-in-out"
                href="blogs.html"
                >blogs</a
              >
            </li>
            <li>
              <a
                class="uppercase text-ink text-[1rem] hover:text-primary transition duration-300 ease-in-out"
                href="contact.html"
                >contact</a
              >
            </li>
          </ul>
        </div>
        <div class="w-1/5">
          <h4>Help & Info Help</h4>
          <ul>
            <li class="text-ink text-[1rem] uppercase">track your order</li>
            <li class="text-ink text-[1rem] uppercase">returns polices</li>
            <li class="text-ink text-[1rem] uppercase">shipping + delivery</li>
            <li class="text-ink text-[1rem] uppercase">contact us</li>
            <li class="text-ink text-[1rem] uppercase">faqs</li>
          </ul>
        </div>
        <div class="w-1/5">
          <h4>contact us</h4>
          <p>Do you have any queries or suggestions? yourinfo@gmail.com</p>
          If you need support? Just give us a call.
          <span class="hover:text-primary transition duration-300 ease-in-out"
            >+55 111 222 333 44</span
          >
        </div>
      </div>
      <div
        class="px-4 sm:px-8 lg:px-16 xl:px-48 flex justify-center items-center py-5"
      >
        <div class="w-1/2 flex justify-start gap-10 items-center">
          <div class="flex items-center justify-center gap-3">
            <span>We ship with:</span
            ><img
              src="./public/assets/icons/dhl.png"
              alt=""
            /><img
              src="./public/assets/images/banners/shippingcard.png"
              alt=""
            />
          </div>
          <div class="flex items-center justify-center gap-3">
            <span>Payment options:</span
            ><img
              src="./public/assets/images/banners/visa.jpg"
              alt=""
            /><img
              src="./public/assets/images/banners/mastercard.jpg"
              alt=""
            /><img
              src="./public/assets/images/banners/paypal.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="w-1/2 text-center">
          <p>© Copyright 2024 ShopLite. HTML Template by TemplatesJungle</p>
        </div>
      </div>
    </footer>

    `;
  }
}
customElements.define("site-footer", Footer);
