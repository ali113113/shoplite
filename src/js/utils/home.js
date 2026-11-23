const bestRatingItems = document.querySelector("#bestRatingItems");
const categories = document.querySelector("#categories");
const getData = async () => {
  const urls = [
    "https://dummyjson.com/products/category/mobile-accessories",
    "https://dummyjson.com/products/category/laptops",
    "https://dummyjson.com/products/category/smartphones",
    "https://dummyjson.com/products/category/tablets",
  ]; // همان قبلی

  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const invalidResponse = responses.find((res) => !res.ok);
  if (invalidResponse) {
    throw new Error(`Response status: ${invalidResponse.status}`);
  }
  const result = await Promise.all(responses.map((res) => res.json()));
  return result; 
};
const init = async () => {
  try {
    const result = await getData(); 
    const items = result.flatMap((elem) => elem.products);
    const category = result.map((elem) => elem.products[0]);
    const bestTenItems = [...items]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 10);

    renderCategories(category, categories);
    renderBestRating(bestTenItems, bestRatingItems);
  } catch (err) {
    console.log(err);
  }
};

init();
const renderCategories = (arr, con) => {
  con.innerHTML = "";
  arr.forEach((e) => {
    con.innerHTML += `
      <div class="flex flex-col justify-center items-center w-1/5 gap-6 p-1 sm:p-2 lg:p-4 xl:p-6 border border-line rounded-md">
        <img src="${e.thumbnail}" alt="${e.title}" />
        <p>${e.title}</p>
      </div>
    `;
  });
};
const renderBestRating = (arr, con) => {
  con.innerHTML = "";
  arr.forEach((e) => {
    con.innerHTML += `
         <div class="swiper-slide" id="${e.id}">
              <div
          class="flex flex-col justify-center items-center p-2 sm:p-6 lg:p-8 xl:p-12 gap-6 border border-line rounded-md"
              >
            <img src="${e.thumbnail}" alt="${e.title}" />
        <p>${e.title}</p>
        <span class="text-primary">$${e.price}</span>
              </div>
            </div>
    `;
  });
};

getData();
