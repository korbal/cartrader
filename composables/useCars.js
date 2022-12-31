import cars from "@/data/cars.json";
import makes from "@/data/makes.json";

export const useCars = () => {
  return { cars, makes };
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