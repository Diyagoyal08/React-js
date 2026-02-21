import React from 'react';

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src=" data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
