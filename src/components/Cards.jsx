import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 h-96 bg-base-100 shadow-xl hover:scale-110 duration-200 dark:bg-slate-900 dark:text-white dark:border flex flex-col">
          <figure>
            <img src={item.image} alt="Image" />
          </figure>
          <div className="card-body max-h-full">
            <h2 className="card-title h-1 contents">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
