// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
    new Product(1, "iPhone 15", 25000000, 10, "Electronics", true),
  new Product(2, "Samsung Z Fold 7", 22000000, 15, "Electronics", true),
  new Product(3, "MacBook Pro", 45000000, 5, "Electronics", false),
  new Product(4, "Áo thun nam", 250000, 50, "Fashion", true),
  new Product(5, "Quần jean nữ", 450000, 30, "Fashion", true),
  new Product(6, "Tai nghe AirPods", 5500000, 0, "Accessories", true),
  new Product(7, "Ốp lưng điện thoại", 50000, 100, "Accessories", true),
];

// Câu 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
const productNamePrice = products.map(product => ({
    name: product.name,
    price: product.price
}));
console.log(productNamePrice);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
const inStockProducts = products.filter(product => product.quantity > 0);
console.log(inStockProducts);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
const hasExpensiveProduct = products.some(product => product.price > 30000000);
console.log(hasExpensiveProduct);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
const allAccessoriesAvailable = products
  .filter(product => product.category === "Accessories")
  .every(product => product.isAvailable === true);
console.log(allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng (price × quantity)
const totalInventoryValue = products.reduce((total, product) => {
  return total + (product.price * product.quantity);
}, 0);

console.log("\nCâu 7: Tổng giá trị kho hàng:", totalInventoryValue.toLocaleString('vi-VN') + " VNĐ");

// Câu 8: Dùng for...of để duyệt mảng và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("\nCâu 8 - Duyệt mảng với for...of:");
for (const product of products) {
  const status = product.isAvailable ? "Còn hàng" : "Hết hàng";
  console.log(`${product.name} - ${product.category} - ${status}`);
}

// Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng
console.log("\nCâu 9 - Duyệt thuộc tính với for...in:");
const sampleProduct = products[5];
for (const key in sampleProduct) {
  console.log(`${key}: ${sampleProduct[key]}`);
}