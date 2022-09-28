class producto {
    constructor(id, name, price, description, category, pictureUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description
        this.category = category;
        this.pictureUrl = pictureUrl;
    }
}

export const getProductos = () => {
    const task = new Promise((ok, error) => {
        setTimeout(() => {
            const productos = [
                new producto(1, "EcuPro", 65000, "Generador de señales para calculadores automotriz", "equipos", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "equipos", "logoEcupro.jpg"),
                new producto(3, "Tester", 15000, "Equipo de medicion para electronica automotriz", "contactos", "logoEcupro.jpg"),
                new producto(4, "Tester", 15000, "Equipo de medicion para electronica automotriz", "funcionalidades", "logoEcupro.jpg"),
                new producto(5, "Tester", 15000, "Equipo de medicion para electronica automotriz", "cursos", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "funcionalidades", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "equipos", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "cursos", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "funcionalidades", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "cursos", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "cursos", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "cursos", "logoEcupro.jpg"),
                new producto(2, "Tester", 15000, "Equipo de medicion para electronica automotriz", "funcionalidades", "logoEcupro.jpg"),
            ];
            ok(productos);
        }, 0);
    });
    return task;
};

class item {
    constructor(id, brand, model, description, pictureUrl) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.description = description
        this.pictureUrl = pictureUrl;
    }
}

export const getItem = () => {
    const task = new Promise((ok, error) => {
        setTimeout(() => {
            const item1 = [
                new item(1, "EcuPro", "powerbv 1", "Equipo 1", "logoEcupro.jpg"),
                new item(2, "EcuPro", "powerbv 2", "Equipo 2", "logoEcupro.jpg"),
                new item(3, "EcuPro", "powerbv 3", "Equipo 3", "logoEcupro.jpg"),
                new item(4, "EcuPro", "powerbv 4", "Equipo 4", "logoEcupro.jpg"),
                new item(5, "EcuPro", "powerbv 5", "Equipo 5.", "logoEcupro.jpg")]
            ok(item1);
        }, 0);
    });
    return task;
};