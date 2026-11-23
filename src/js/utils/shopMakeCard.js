let currentPage = 1;
let nextBtn = document.querySelector("#nextPage");
let prevBtn = document.querySelector("#prevPage");
let pageNumber = document.querySelector("#pageNumber");
let total = document.querySelector("#total");
let starts = document.querySelector("#start");
let ends = document.querySelector("#end");

// --------------------  فتچ
const USE_CACHE = true;
const CACHE_KEY = "shopLiteProducts";

const getData = async () => {
  // خواندن اطلاعات ذخیره‌شده
if (USE_CACHE) {
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) return JSON.parse(cachedData);
  } catch (err) {
    localStorage.removeItem(CACHE_KEY);
  }
}

  const urls = [
    "https://dummyjson.com/products/category/mobile-accessories",
    "https://dummyjson.com/products/category/laptops",
    "https://dummyjson.com/products/category/smartphones",
    "https://dummyjson.com/products/category/tablets",
  ];

  const responses = await Promise.all(urls.map((url) => fetch(url)));

  const invalidResponse = responses.find((res) => !res.ok);

  if (invalidResponse) {
    throw new Error(`Response status: ${invalidResponse.status}`);
  }

  const result = await Promise.all(responses.map((res) => res.json()));

  // ذخیره اطلاعات در Cache
  if (USE_CACHE) {
    localStorage.setItem(CACHE_KEY, JSON.stringify(result));
    console.log("Data saved to Cache");
  }

  return result;
};

let items = [];

const loadItems = async () => {
  try {
    const result = await getData();
    items = result.flatMap((elem) => elem.products);
    showPage();
  } catch (err) {
    console.log(err);
  }
};

const showPage = () => {
  const itemsPerPage = 12;

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const currentItems = items.slice(start, end);

  // تعداد کل محصولات
  total.textContent = items.length;

  // شماره اولین محصول در صفحه
  starts.textContent = items.length === 0 ? 0 : start + 1;

  // شماره آخرین محصول در صفحه
  ends.textContent = Math.min(end, items.length);

  render(currentItems);

  updateButtons();
};

const updateButtons = () => {
  const totalPages = Math.ceil(items.length / 12);
  pageNumber.querySelectorAll(".page-item").forEach((el) => el.remove());

  for (let i = 1; i <= totalPages; i++) {
    const newElement = document.createElement("div");

    newElement.className = "page-item";

    newElement.innerHTML = `
    <button class="${i === currentPage ? "text-primary" : "text-ink"} hover:text-primary transition duration-300 ease-in-out">
        ${i}
    </button>
`;

    const pageBtn = newElement.querySelector("button");

    pageBtn.addEventListener("click", () => {
      goToPage(currentPage[i])
      currentPage = i;
      showPage();
    });

    pageNumber.insertBefore(newElement, nextBtn);
  }

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
};
// -----------------رندر کارت
const render = (arr) => {
  document.querySelector("#shopMainContainer").innerHTML = "";
  arr.forEach((e) => {
    document.querySelector("#shopMainContainer").innerHTML += `
    <div class="flex flex-col justify-center items-center w-1/5 gap-6 p-1 sm:p-2 lg:p-4 xl:p-6 border border-line rounded-md">
    <img src="${e.thumbnail}" alt="${e.title}" />
    <p>${e.title}</p>
      <span class="text-primary">$${e.price}</span>
    </div>
    `;
  });
};
nextBtn.addEventListener("click", () => {
  goToPage(currentPage+1)
  currentPage++;
  showPage();
});

prevBtn.addEventListener("click", () => {
  goToPage(currentPage-1)
  currentPage--;
  showPage();
});
const goToPage = (n) => {
  currentPage = n;
  showPage();
  document
    .querySelector("#shopMainContainer")
    .scrollIntoView({ behavior: "smooth" });
};
loadItems();
