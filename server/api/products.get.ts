
// export default defineEventHandler(async () => {
//   return new Promise<any>((resolve, reject) => {
//     setTimeout(() => resolve(data), 2000);
//   }).catch((e) => console.log(e));
// });

// let productCount = 0;

// export default async () => {
//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve((productCount += 1));
//     }, 2000);
//     return { productCount };
//   });
// };

let productCount = 0;

// setInterval(() => {
//   productCount += 1;
// }, 1000);

export default defineEventHandler(() => {
  return {
    productCount,
  };
});
