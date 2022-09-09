class producto {
    constructor(id, name, price, pictureUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.pictureUrl = pictureUrl;
    }
}

export const getProductos = () => {
    const task = new Promise((ok, error) => {
        setTimeout(() => {
            const productos = [new producto(1, "EcuPro", 65000, "url"), new producto(1, "Tester", 15000, "url")];
            ok(productos);
        }, 2000);
    });
    return task;
};