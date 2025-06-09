// Crear la colección "proyectos" con un esquema JSON
db.createCollection("proyectos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre"],
            properties: {
                nombre: {bsonType: "string"},
                ubicacion: { bsonType: "object"},
                tipoProyecto: {
                    enum: ["Domiciliario", "Bombeo solar", "Industrial"]
                },
                potenciaProyecto: {bsonType: "int", minimum: 0, maximum: 1000},
                tipoInstalacion: {
                    enum: ["Off-grid", "On-grid", "Híbrida"]
                },
                fechaInicio: {bsonType: "date"},
                fechaFin: {bsonType: "date"},
                descripcion: {bsonType: "string"},
                estado: {
                    enum: ["planificado", "en_progreso", "completado", "cancelado"]
                },
                cliente:{
                    bsonType: "object",
                    properties: {
                        nombre: {bsonType: "string"},
                        apellido: {bsonType: "string"},
                        nick: {bsonType: "string"},
                        telefono: {bsonType: "string"},
                        email: {bsonType: "string"},
                        direccion: {bsonType: "string"}
                    }                    
                },
                listaMateriales: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        properties: {
                            canalizacion: {
                                bsonType: "array",
                                items: {
                                    bsonType: "object",
                                    properties: {
                                        tipo: { bsonType: "string" },
                                        color: { bsonType: "string" },
                                        cantidadPolos: { bsonType: "string" },
                                        seccion: { bsonType: "string" },
                                        longitud: { bsonType: "double" }
                                    }
                                }
                            },
                            cajas: {
                                bsonType: "array",
                                items: {
                                    bsonType: "object",
                                    properties: {
                                        tipo: { bsonType: "string" },
                                        material: { bsonType: "int" },
                                        forma: { bsonType: "string" }
                                    }
                                }
                            },
                            tableros: {
                                bsonType: "array",
                                items: {
                                    bsonType: "object",
                                    properties: {
                                        tipo: { bsonType: "string" },
                                        gabinete: { bsonType: "string" },
                                        calibreAProteger: { bsonType: "string" },
                                        cantidadStrings: { bsonType: "int" },
                                    }
                                }
                            }
                        },
                        
                    }
                },
                analisisTecnico: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        properties: {
                            consumo: {
                                bsonType: "object",
                                properties: {
                                    tipoArtefacto: {
                                        enum: ["AC", "DC"]
                                    },
                                    nombreArtefacto: {bsonType: "string"}, // Ahora acepta strings
                                    cantidadArtefacto: {bsonType: "int"},
                                    horasPorDia: {bsonType: "int"},
                                    diasUsoPorSemana: {bsonType: "int"},
                                }
                            },
                            calculoHSP: {
                                bsonType: "object",
                                properties: {
                                    provincia: {bsonType: "string"},
                                    mes: {bsonType: "string"},
                                    inclinacion: {bsonType: "double"},
                                    hsp: {bsonType: "double"},
                                    mesInicial: {bsonType: "double"},
                                    mesFinal: {bsonType: "double"}
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});