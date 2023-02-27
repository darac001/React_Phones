export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
  }).format(number / 100);
  // price in products data is written in cents, need to dvide by 100
};

export const getUniqueValues = (data, type) => {
  // console.log(data);
  let unique = data.map((item) => item[type]);
  // console.log(unique);
  if (type === "colors") {
    unique = unique.flat();
  }

  // see Menu project, how to get all filter
  return ["all", ...new Set(unique)];
};
