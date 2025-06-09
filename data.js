db.proyectos.insertMany([
    {
        nombre: "Cabañas del Lago",
        tipoProyecto: "Industrial",
        ubicacion: {
            pais: "Argentina",
            provincia: "Mendoza",
            ciudad: "Potrerillos",
            direccion: "Ruta 82, Km 50"
        },
        potenciaProyecto: 150, // Potencia en kW
        tipoInstalacion: "Off-grid",
        fechaInicio: new Date("2024-08-15"),
        fechaFin: new Date("2024-09-30"),
        estado: "completado",
        cliente: {
            nombre: "Juan",
            apellido: "Pérez",
            nick: "1234567",
            telefono: "123456789",
            email: "juanperez@gmail.com",
            direccion: "Calle Falsa 123"
        },    
        listaMateriales: [{
        canalizacion: [ // Array de objetos
          { tipo: "PVC", color: "blanco", longitud: 10.5 },
          { tipo: "Metálico", color: "gris", longitud: 5.2 }
        ],
        cajas: [
          { tipo: "Rectangular", material: 1, forma: "Cuadrada" }
        ]
      }],
      analisisTecnico: [{
        consumo: {
          tipoArtefacto: "AC",
          nombreArtefacto: "Refrigerador", // Ahora acepta strings
          cantidadArtefacto: 1
        }
      }]
    },

    {
        nombre: "Casa Solar Las Lomas",
        tipoProyecto: "Domiciliario",
        ubicacion: {
            pais: "Argentina",
            provincia: "Buenos Aires",
            ciudad: "San Isidro",
            direccion: "Calle Los Alamos 1234"
        },
        potenciaProyecto: 5, // Potencia en kW
        tipoInstalacion: "Off-grid",
        fechaInicio: new Date("2024-05-10"),
        fechaFin: new Date("2024-06-20"),
        estado: "completado",
        cliente: {
            nombre: "María",
            apellido: "González",
            nick: "mg2024",
            telefono: "987654321",
            email: "maria.gonzalez@gmail.com",
            direccion: "Av. Libertador 5678"
        },    
        listaMateriales: [{
            canalizacion: [
                { tipo: "PVC", color: "blanco", longitud: 8.4 },
                { tipo: "Flexible", color: "negro", longitud: 3.5 }
            ],
            cajas: [
                { tipo: "Octogonal", material: 2, forma: "Redonda" }
            ]
        }],
        analisisTecnico: [{
            consumo: {
                tipoArtefacto: "DC",
                nombreArtefacto: "Lámparas LED",
                cantidadArtefacto: 10
            }
        }]
    },

    {
        nombre: "Bombeo Solar Agrícola",
        tipoProyecto: "Bombeo solar",
        ubicacion: {
            pais: "Argentina",
            provincia: "Córdoba",
            ciudad: "Jesús María",
            direccion: "Ruta 9, Km 120"
        },
        potenciaProyecto: 20, // Potencia en kW
        tipoInstalacion: "Híbrida",
        fechaInicio: new Date("2024-07-01"),
        fechaFin: new Date("2024-08-30"),
        estado: "en_progreso",
        cliente: {
            nombre: "Carlos",
            apellido: "López",
            nick: "clopez",
            telefono: "555123456",
            email: "carlos.lopez@empresa.com",
            direccion: "Hacienda Los Álamos"
        },    
        listaMateriales: [{
            canalizacion: [
                { tipo: "Metálico", color: "gris", longitud: 15.6 }
            ],
            cajas: [
                { tipo: "Rectangular", material: 1, forma: "Rectangular" }
            ],
            tableros: [
                { tipo: "Principal", gabinete: "Acero", calibreAProteger: "100A", cantidadStrings: 4 }
            ]
        }],
        analisisTecnico: [{
            consumo: {
                tipoArtefacto: "DC",
                nombreArtefacto: "Bomba sumergible",
                cantidadArtefacto: 2
            },
            calculoHSP: {
                provincia: "Córdoba",
                mes: "Julio",
                inclinacion: 25.2,
                hsp: 4.8
            }
        }]
    },

    {
        nombre: "Centro Comercial Solar",
        tipoProyecto: "Industrial",
        ubicacion: {
            pais: "Argentina",
            provincia: "Santa Fe",
            ciudad: "Rosario",
            direccion: "Av. Pellegrini 2000"
        },
        potenciaProyecto: 80, // Potencia en kW
        tipoInstalacion: "On-grid",
        fechaInicio: new Date("2024-09-01"),
        fechaFin: new Date("2024-11-15"),
        estado: "planificado",
        cliente: {
            nombre: "Empresa",
            apellido: "Solar S.A.",
            nick: "solarSA",
            telefono: "341987654",
            email: "contacto@solarsa.com",
            direccion: "Parque Industrial Rosario"
        },    
        listaMateriales: [{
            canalizacion: [
                { tipo: "PVC", color: "blanco", longitud: 30.5 },
                { tipo: "Metálico", color: "gris", longitud: 20.7 }
            ],
            cajas: [
                { tipo: "Rectangular", material: 1, forma: "Cuadrada" },
                { tipo: "Octogonal", material: 2, forma: "Redonda" }
            ],
            tableros: [
                { tipo: "Distribución", gabinete: "Acero", calibreAProteger: "200A", cantidadStrings: 8 }
            ]
        }],
        analisisTecnico: [{
            consumo: {
                tipoArtefacto: "AC",
                nombreArtefacto: "Split 3000W",
                cantidadArtefacto: 15
            },
            calculoHSP: {
                provincia: "Santa Fe",
                mes: "Noviembre",
                inclinacion: 30.5,
                hsp: 5.2
            }
        }]
    }
]);