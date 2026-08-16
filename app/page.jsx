import Image from "next/image";
import products from "../data/product_data";

export default function Home() {
  return (
    <div className=" ">
      <div className="grid grid-cols-3 w-full">
        {products.map((product) => (
          <div
            className="flex rounded-2xl shadow-xl bg-white p-10 m-5 hover:shadow-2xl"
            key={product.id}
          >
            <Image
              className="object-cover w-1/3 h-full"
              src={product.thumbnailImage}
              width={100}
              height={100}
              alt={product.productId}
            ></Image>
            <div className="flex flex-col">
              <p className="text-xl font-semibold mb-1">
                {product.productName}
              </p>
              <div className="flex gap-x-2 items-center ">
                <p className="text-sm font-medium px-2 py-2 bg-blue-300 text-black  text-center rounded-2xl">
                  {product.category}
                </p>
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
                <p className="text-sm ">{product.subCategory}</p>
              </div>
              <div className="flex gap-x-2 items-center content-center m-1">
                <p className="text-sm font-semibold line-through ">
                  ₹ {product.sellingPrice}.00
                </p>
                <p className="text-md font-semibold text-red-500">
                  ₹ {product.offerPrice}.00
                </p>
              </div>
              <p className="text-sm font-light ">{product.productDesc}</p>
              <div className="flex gap-x-2">
                <button className="bg-blue-500 rounded-2xl px-3 py-2 text-md font-semibold mt-2 text-white hover:font-bold">
                  Buy Now
                </button>
                <button className="bg-emerald-400 rounded-2xl px-3 py-2 text-md font-semibold mt-2 text-white hover:font-bold">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
