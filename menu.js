// =========================================================================
//  ARCHIVO BASE DE A LA ROMANA
//  Precios sin signo $ y sin puntos (ej: 12000).
// =========================================================================

window.CATALOGO_DATA = {
  negocio: {
    nombre: "A LA ROMANA",
    subtitulo: "Pizzas, Empanadas y Más",
    logo: "fotos/logo.png",
    whatsapp: "5491126215183",
    telefonoVisible: "11-2621-5183",
    telefonoFijo: "4723-2057",
    direccion: "Jonte 5114 (Esq. Hornos) - Caseros",
    instagram: "alaromana.ok",
    envioTexto: "Delivery SIN CARGO en Caseros",
    horaApertura: 19,
    horaCierre: 24,
    horarioTexto: "Martes a Domingos de 19:00 a 00:00 hs",
    estadoModo: "auto",
    forzarAbierto: false
  },

  categorias: [
    {
      id: "promos-muzza",
      nombre: "PROMOS DE MUZZA",
      icono: "🍕"
    },
    {
      id: "super-promos",
      nombre: "SÚPER PROMOS",
      icono: "🔥"
    },
    {
      id: "pizzas",
      nombre: "PIZZAS",
      icono: "🍕"
    },
    {
      id: "hamburguesas",
      nombre: "HAMBURGUESAS",
      icono: "🍔"
    }
  ],

  productos: [
    // --- PROMOS DE MUZZA ---
    {
      categoriaId: "promos-muzza",
      nombre: "1 Pizza Muzzarella",
      descripcion: "Pizza grande de muzzarella 100% queso.",
      precio: 12000,
      foto: "https://upload.wikimedia.org/wikipedia/commons/0/05/Pizza_Muzzarella_Uruguay.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "promos-muzza",
      nombre: "Promo 2 Muzzas",
      descripcion: "2 pizzas grandes de muzzarella 100% queso.",
      precio: 22000,
      foto: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Pizza_made_with_frozen_prepared_crust%2C_tomatoes_and_fresh_mozzarella.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "promos-muzza",
      nombre: "Promo 3 Muzzas",
      descripcion: "3 pizzas grandes de muzzarella 100% queso.",
      precio: 30000,
      foto: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Buenos_Aires_-_Pizza_oven_-_6902.jpg",
      icono: "🍕"
    },

    // --- SÚPER PROMOS ---
    {
      categoriaId: "super-promos",
      nombre: "Súper Promo: 1 Muzza + 6 Empanadas",
      descripcion: "1 pizza muzzarella grande + 6 empanadas a elección.",
      precio: 18500,
      foto: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Empanadas_Argentinas.JPG",
      icono: "🔥",
      ejemploNota: "Escribí acá los gustos de las 6 empanadas..."
    },
    {
      categoriaId: "super-promos",
      nombre: "Súper Promo: 1 Muzza + 12 Empanadas",
      descripcion: "1 pizza muzzarella grande + 12 empanadas a elección.",
      precio: 25500,
      foto: "https://upload.wikimedia.org/wikipedia/commons/7/78/Empanadas_argentinas_2017.jpg",
      icono: "🔥",
      ejemploNota: "Escribí acá los gustos de las 12 empanadas..."
    },
    {
      categoriaId: "super-promos",
      nombre: "Pizza Muzza + Bebida Manaos 2.25 Lts",
      descripcion: "1 pizza muzzarella grande + 1 gaseosa Manaos de 2.25 litros.",
      precio: 14000,
      foto: "https://upload.wikimedia.org/wikipedia/commons/5/51/Pepperoni_Special_pizza_at_restaurant_Salama_Pizza.jpg",
      icono: "🥤",
      ejemploNota: "Escribí qué sabor de Manaos querés (Cola, Naranja, Lima, etc.)..."
    },
    {
      categoriaId: "super-promos",
      nombre: "12 Empanadas + Bebida Manaos 2.25 Lts",
      descripcion: "1 docena de empanadas a elección + 1 gaseosa Manaos de 2.25 litros.",
      precio: 18500,
      foto: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Empanadas_Argentinas.JPG",
      icono: "🥟",
      ejemploNota: "Escribí los gustos de las empanadas y el sabor de Manaos..."
    },
    {
      categoriaId: "super-promos",
      nombre: "1 Doc. y Media de Empanadas + Manaos 2.25 Lts",
      descripcion: "18 empanadas a elección + 1 gaseosa Manaos de 2.25 litros.",
      precio: 24500,
      foto: "https://upload.wikimedia.org/wikipedia/commons/7/78/Empanadas_argentinas_2017.jpg",
      icono: "🥟",
      ejemploNota: "Escribí los gustos de las 18 empanadas y el sabor de Manaos..."
    },

    // --- PIZZAS ---
    {
      categoriaId: "pizzas",
      nombre: "Doble Muzza",
      descripcion: "Extra muzzarella.",
      precio: 14000,
      foto: "https://live.staticflickr.com/6067/6097962745_34e2a20baa_o.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Fugazzeta",
      descripcion: "Muzzarella y cebolla.",
      precio: 15000,
      foto: "https://upload.wikimedia.org/wikipedia/commons/8/87/Fugazzetta_en_Pizzer%C3%ADa_Guerrin%2C_Buenos_Aires.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Longaniza",
      descripcion: "Muzzarella y longaniza.",
      precio: 15000,
      foto: "https://upload.wikimedia.org/wikipedia/commons/3/30/Pizza_de_calabresa_%285465192982%29.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Jamón",
      descripcion: "Muzzarella y jamón.",
      precio: 16500,
      foto: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Pizza_Ham_%26_Cheese_%284254288665%29.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Napolitana",
      descripcion: "Muzzarella, tomate y provenzal.",
      precio: 16500,
      foto: "https://upload.wikimedia.org/wikipedia/commons/d/de/Pizza_napolitana.JPG",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Jamón y Morrón",
      descripcion: "Muzzarella, jamón y morrón.",
      precio: 19500,
      foto: "https://upload.wikimedia.org/wikipedia/commons/4/42/Porci%C3%B3n_de_pizza_argentina_con_mozzarella%2C_salsa_de_tomates%2C_morrones_rojos%2C_or%C3%A9gano_y_aceituna.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Napolitana c/ Jamón",
      descripcion: "Muzzarella, tomate, jamón y provenzal.",
      precio: 19500,
      foto: "https://upload.wikimedia.org/wikipedia/commons/6/6f/2014_Pizza_con_funghi_e_prosciutto_cotto_e_mozzarella_di_bufala.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Fugazzeta c/ Jamón",
      descripcion: "Muzzarella, cebolla y jamón.",
      precio: 19500,
      foto: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Fugazzetta_en_pizzeria_Guerrin%2C_Buenos_Aires_%28detalle%29.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Primavera",
      descripcion: "Muzzarella, jamón, huevo duro y tomate.",
      precio: 19500,
      foto: "https://upload.wikimedia.org/wikipedia/commons/5/58/Pizza_casera_con_mozzarella%2C_morr%C3%B3n_rojo%2C_huevos%2C_cebollas_y_salsa_de_tomates.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Romana",
      descripcion: "Muzzarella, huevo frito y papas fritas.",
      precio: 22000,
      foto: "https://upload.wikimedia.org/wikipedia/commons/b/b0/French_fry_pizza_1.jpg",
      icono: "🍕"
    },

    // --- HAMBURGUESAS ---
    {
      categoriaId: "hamburguesas",
      nombre: "Cuarto de Libra",
      descripcion: "Medallón de 125 grs, cheddar + guarnición de papas fritas.",
      precio: 7000,
      foto: "https://upload.wikimedia.org/wikipedia/commons/9/91/Cheeseburger_with_Fries_%285076301075%29.jpg",
      icono: "🍔"
    },
    {
      categoriaId: "hamburguesas",
      nombre: "Clásica",
      descripcion: "Medallón de 125 grs, cheddar, lechuga y tomate + guarnición de papas fritas.",
      precio: 7500,
      foto: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Cheeseburger_and_fries%2C_Elephant_Bar%2C_Cupertino%2C_CA.jpg",
      icono: "🍔"
    },
    {
      categoriaId: "hamburguesas",
      nombre: "Bacon",
      descripcion: "Medallón de 125 grs, cheddar y bacon + guarnición de papas fritas.",
      precio: 7500,
      foto: "https://upload.wikimedia.org/wikipedia/commons/6/62/Bacon_Cheeseburger_with_French_Fries_on_plate.JPG",
      icono: "🍔"
    },
    {
      categoriaId: "hamburguesas",
      nombre: "Romana",
      descripcion: "Medallón de 125 grs, cheddar, bacon y cebolla caramelizada + guarnición de papas fritas.",
      precio: 8500,
      foto: "https://upload.wikimedia.org/wikipedia/commons/8/80/Smashburger_BBQ_bacon_cheddar_burger_with_deep-fried_onions.jpg",
      icono: "🍔"
    }
  ]
};