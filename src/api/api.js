class producto {
    constructor(id, name, price, description, pictureUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description
        this.pictureUrl = pictureUrl;
    }
}

export const getProductos = () => {
    const task = new Promise((ok, error) => {
        setTimeout(() => {
            const productos = [new producto(1, "EcuPro", 65000, "Generador de señales para calculadores automotriz", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "logoEcupro.jpg"),];
            ok(productos);
        }, 2000);
    });
    return task;
};