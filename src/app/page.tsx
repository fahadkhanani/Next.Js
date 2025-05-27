// import Image from "next/image";
// import styles from "./page.module.css";
// import { stripe } from "@/lib/stripe";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Carousel } from "@/components/ui/carousel";

// export default async function Home(){
//   const products = await stripe.products.list({
//     expand:["data.default_price"],
//     limit:5,
     
//   });

//   console.log(products);
//   return(
//     <>
//     <div>
//       <section className="rounded bg-neutral-100 py-8 sm:py-12">
//         <div className="mx-auto max-w-6xl w-full grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
//           <div className="max-w-md space-y-4">
//             <h2 className="text-3xl font-bold tracking-light md:text-4xl">
//               Welcome to Next.Js E-commerce
//             </h2>
//             <p className="text-neutral-600">
//               Discover the latest products at the best prices
//             </p>
//             <Button
//               asChild
//               variant="default"
//               className="inline-flex justify-center items-center rounded-full px-6 py-3 bg-black text-white"
//             >
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center rounded-full px-6 py-3"
//               >
//                 Browse All Products
//               </Link>
//             </Button>
//           </div>
//           <Image
//             alt="Banner image"
//             width={450}
//             height={450}
//             className="rounded mx-auto"
//             src={products.data[0].images[0]}
//           />
//         </div>
//       </section>


//       <section>
//         <Carousel products={products.data}/ >
//       </section>
//     </div>
//     </>
//   );
// }
import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/ui/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div className="px-40">
      {/* Hero Section */}
      <section className="rounded bg-neutral-100 py-12">
        <div className="mx-auto max-w-6xl w-full grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">
              Welcome to Next.js E-commerce
            </h2>
            <p className="text-neutral-600">
              Discover the latest products at the best prices.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link href="/products">Browse All Products</Link>
            </Button>
          </div>
          <Image
            alt="Banner image"
            width={450}
            height={450}
            className="rounded shadow-lg"
            src={products.data[0].images[0]}
          />
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-6 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <Carousel products={products.data} />
        </div>
      </section>
    </div>
  );
}
