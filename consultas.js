

//Encontrar un proyecto por su nombre:
db.proyectos.findOne({ nombre: "Proyecto Solar" });
//Traer todos los proyectos
db.proyectos.find().pretty();
//Traer proyectos por tipo de instalación
db.proyectos.find({ tipoInstalacion: "On-grid" }).pretty();
//Traer proyectos por estado
db.proyectos.find({ estado: "en_progreso" }).pretty();
//Traer proyectos por cliente
db.proyectos.find({ "cliente.nick": "cliente123" }).pretty();

//Traer el análisis técnico por nombre del proyecto
db.proyectos.findOne(
    { nombre: "Proyecto Solar" },
    { _id: 0, analisisTecnico: 1 }
);
//Traer los materiales de un proyecto por nombre
db.proyectos.findOne(
    { nombre: "Proyecto Solar" },
    { _id: 0, listaMateriales: 1 }
);

//Traer todas las listas de materiales de un proyecto por nombre
db.proyectos.findOne(
    { nombre: "Proyecto Solar" },
    { _id: 0, "listaMateriales.canalizacion": 1, "listaMateriales.cajas": 1 }
);

//Traer proyectos por provincia
db.proyectos.find(
    { "ubicacion.provincia": "Buenos Aires" },
    { _id: 0, nombre: 1, ubicacion: 1 }
).pretty();

//Clientes que han solicitado proyectos con mayor potencia 
db.proyectos.find(
    { potenciaProyecto: { $gt: 100 } },
    { _id: 0, cliente: 1, potenciaProyecto: 1 }
).pretty();

//Traer la combinación de mes y provincia que ofrece mejor rendimiento solar (hsp)
db.proyectos.aggregate([
    { $unwind: "$analisisTecnico" },
    { $group: {
        _id: { mes: "$analisisTecnico.calculoHSP.mes", provincia: "$analisisTecnico.calculoHSP.provincia" },
        maxHSP: { $max: "$analisisTecnico.calculoHSP.hsp" }
    }},
    { $sort: { maxHSP: -1 } },
    { $limit: 1 }
]).pretty();

//Traer proyectos que están actualmente en progreso y cuándo comenzaron
db.proyectos.find(
    { estado: "en_progreso" },
    { _id: 0, nombre: 1, fechaInicio: 1 }
).pretty();

//Traer proyectos que han superado su fecha de finalización
db.proyectos.find(
    { fechaFin: { $lt: new Date() } },
    { _id: 0, nombre: 1, fechaFin: 1 }
).pretty();