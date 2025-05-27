// "use client";

// import Stripe from "stripe";
// import { Card, CardContent, CardTitle } from "./card";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// interface Props{
//     products: Stripe.Product[]
// }

// export const Carousel = ({products}: Props) => {
//     const [current, setCurrent] = useState<number>(0)
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrent((prev) => (prev + 1)%products.length)
//         }, 3000)

//         return () => clearInterval(interval);
//     }, [products.length]);

//     const currentProduct = products[current];

//     const price = currentProduct.default_price as Stripe.Price;

//     return (
//     <Card 
//     className="relative overflow-hidden rounded-lg shadow-md border-gray-300">
//         {currentProduct.images && currentProduct.images[0] && (
//             <div className="relative h-80 w-full">
//                 <Image alt={currentProduct.name}
//                 src={currentProduct.images[0]}
//                 layout="fill"
//                 objectFit="cover"
//                 className="transition-opacity duration-500 ease-in-out"/>
//             </div>
//         )}
//         <CardContent
//         className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
//             <CardTitle
//             className="text-3xl font-bold text-white mb-2">
//                 {currentProduct.name}
//                 {price && price.unit_amount && 
//                     <p
//                     className="text-xl text-white">
//                         ${price.unit_amount / 100}
//                     </p>}
//             </CardTitle>
//         </CardContent>
//     </Card>
//     );
// };
// "use client";

// import Stripe from "stripe";
// import { Card, CardContent, CardTitle } from "./card";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// interface Props {
//   products: Stripe.Product[];
// }

// export const Carousel = ({ products }: Props) => {
//   const [current, setCurrent] = useState<number>(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % products.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [products.length]);

//   const currentProduct = products[current];
//   const price = currentProduct.default_price as Stripe.Price;

//   return (
//     <Card className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 transition-all duration-500">
//       {currentProduct.images?.[0] && (
//         <div className="relative h-80 w-full">
//           <Image
//             alt={currentProduct.name}
//             src={currentProduct.images[0]}
//             height={350}
//             width={500}
//             className="rounded-t-2xl transition-opacity duration-500"
//           />
//         </div>
//       )}
//       <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-6">
//         <CardTitle className="text-3xl font-bold text-gray-700 text-center mb-2 drop-shadow">
//           {currentProduct.name}
//         </CardTitle>
//         {price?.unit_amount && (
//           <p className="text-xl text-gray-700 font-semibold drop-shadow">
//             ${price.unit_amount / 100}
//           </p>
//         )}
//       </CardContent>
//     </Card>
//   );
// };
"use client";

import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];
  const price = currentProduct.default_price as Stripe.Price;

  return (
    <Card className="overflow-hidden rounded-2xl shadow-xl border border-gray-200 p-6 flex flex-col items-center space-y-4">
      {/* Image Section */}
      {currentProduct.images?.[0] && (
        <div className="relative w-64 h-64">
          <Image
            alt={currentProduct.name}
            src={currentProduct.images[0]}
            layout="fill"
            objectFit="contain"
            className="rounded"
          />
        </div>
      )}

      {/* Product Info Section */}
      <CardContent className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">
          {currentProduct.name}
        </CardTitle>
        {price?.unit_amount && (
          <p className="text-lg text-gray-700 mt-2">
            ${price.unit_amount / 100}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
