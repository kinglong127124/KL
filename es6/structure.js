let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, data: number,status } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]
