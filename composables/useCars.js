import cars from "@/data/cars.json";

export const useCars = () => {
  return { cars, }
}

// can i compost it hez jó lesz. a components/carcards.vue ben van használva
// export const useCars = () => {
//   const getCars = () => {
//     return cars;
//   };

//   const getCar = (id) => {
//     return cars.find((car) => car.id === id);
//   };

//   return { getCars, getCar };
// }