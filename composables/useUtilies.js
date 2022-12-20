// This is a custom hook that can be used in any component. filename: useUtilities.js
export const useUtilities = () => {
  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  }

  function toUpperCase(str) {
    return str.toUpperCase();
  }
  return { toTitleCase, toUpperCase };
}

// then where I want to use it, invoke const useUtils = useUtilities() and then use it like useUtils.toTitleCase('hello world'), or I can destructure it like const { toTitleCase, toUpperCase } = useUtilities() and then use it like toTitleCase('hello world')