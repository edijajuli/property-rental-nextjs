"use client";
const PropertyPage = ({ params }) => {
  return <div>PropertyPage {params.id}</div>;
};

export default PropertyPage;

// "use client";
// import {
//   useRouter,
//   useParams,
//   useSearchParams,
//   usePathname,
// } from "next/navigation";

// const PropertyPage = () => {
//   const router = useRouter();
//   const { id } = useParams();
//   const searchParams = useSearchParams();
//   const name = searchParams.get("name");
//   const pathname = usePathname();
//   console.log("hello");
//   return (
//     <div>
//       <button onClick={() => router.push("/")} className="bg-blue-500 p-5">
//         Go home {pathname}
//       </button>
//     </div>
//   );
// };

// export default PropertyPage;
