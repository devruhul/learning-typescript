// use union data type
let union_data_type: string | number;
union_data_type = "Hello";
union_data_type = 100;
console.log(union_data_type);

function union(num: number | string) {
  console.log(num);
}

union(10);
union("Hello");
