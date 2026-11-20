// =========================================================================
//  ARCHIVO EDITABLE DE A LA ROMANA
//  Solo cambiá lo que está entre comillas " " o los números de los precios.
//  IMPORTANTE: Los precios van SIN signo $ y SIN puntos (ej: 12000).
// =========================================================================

window.CATALOGO_DATA = {
  negocio: {
    nombre: "A LA ROMANA",
    subtitulo: "Pizzas, Empanadas y Más",
    logo: "fotos/logo.png", // Guardá tu logo como logo.png dentro de la carpeta fotos
    whatsapp: "5491126215183", // Formato internacional: 549 + 1126215183
    telefonoVisible: "11-2621-5183",
    telefonoFijo: "4723-2057",
    direccion: "Jonte 5114 (Esq. Hornos) - Caseros",
    instagram: "alaromana.ok",
    envioTexto: "Delivery SIN CARGO en Caseros",
    // Horarios (en formato 24 hs). Si cierra después de medianoche poné ej: 24.
    horaApertura: 19,
    horaCierre: 24,
    horarioTexto: "Martes a Domingos de 19:00 a 00:00 hs",
    // Si querés que diga siempre "Abierto" sin importar la hora, cambiá false por true:
    forzarAbierto: false
  },

  // CATEGORÍAS (las tarjetas grandes que aparecen al entrar)
  categorias: [
    {
      id: "promos-muzza",
      nombre: "PROMOS DE MUZZA",
      foto: "fotos/cat-muzza.jpg",
      icono: "🍕"
    },
    {
      id: "super-promos",
      nombre: "SÚPER PROMOS",
      foto: "fotos/cat-super-promos.jpg",
      icono: "🔥"
    },
    {
      id: "pizzas",
      nombre: "PIZZAS",
      foto: "fotos/cat-pizzas.jpg",
      icono: "🍕"
    },
    {
      id: "hamburguesas",
      nombre: "HAMBURGUESAS",
      foto: "fotos/cat-hamburguesas.jpg",
      icono: "🍔"
    }
  ],

  // PRODUCTOS (cada producto tiene un "categoriaId" que coincide con el "id" de arriba)
  productos: [
    // --- PROMOS DE MUZZA ---
    {
      categoriaId: "promos-muzza",
      nombre: "1 Pizza Muzzarella",
      descripcion: "Pizza grande de muzzarella 100% queso.",
      precio: 12000,
      foto: "fotos/1-muzza.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "promos-muzza",
      nombre: "Promo 2 Muzzas",
      descripcion: "2 pizzas grandes de muzzarella 100% queso.",
      precio: 22000,
      foto: "fotos/2-muzzas.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "promos-muzza",
      nombre: "Promo 3 Muzzas",
      descripcion: "3 pizzas grandes de muzzarella 100% queso.",
      precio: 30000,
      foto: "fotos/3-muzzas.jpg",
      icono: "🍕"
    },

    // --- SÚPER PROMOS ---
    {
      categoriaId: "super-promos",
      nombre: "Súper Promo: 1 Muzza + 6 Empanadas",
      descripcion: "1 pizza muzzarella grande + 6 empanadas a elección.",
      precio: 18500,
      foto: "fotos/promo-muzza-6emp.jpg",
      icono: "🔥",
      ejemploNota: "Escribí acá los gustos de las 6 empanadas..."
    },
    {
      categoriaId: "super-promos",
      nombre: "Súper Promo: 1 Muzza + 12 Empanadas",
      descripcion: "1 pizza muzzarella grande + 12 empanadas a elección.",
      precio: 25500,
      foto: "fotos/promo-muzza-12emp.jpg",
      icono: "🔥",
      ejemploNota: "Escribí acá los gustos de las 12 empanadas..."
    },
    {
      categoriaId: "super-promos",
      nombre: "Pizza Muzza + Bebida Manaos 2.25 Lts",
      descripcion: "1 pizza muzzarella grande + 1 gaseosa Manaos de 2.25 litros.",
      precio: 14000,
      foto: "fotos/promo-pizza-bebida.jpg",
      icono: "🥤",
      ejemploNota: "Escribí qué sabor de Manaos querés (Cola, Naranja, Lima, etc.)..."
    },
    {
      categoriaId: "super-promos",
      nombre: "12 Empanadas + Bebida Manaos 2.25 Lts",
      descripcion: "1 docena de empanadas a elección + 1 gaseosa Manaos de 2.25 litros.",
      precio: 18500,
      foto: "fotos/promo-12emp-bebida.jpg",
      icono: "🥟",
      ejemploNota: "Escribí los gustos de las empanadas y el sabor de Manaos..."
    },
    {
      categoriaId: "super-promos",
      nombre: "1 Doc. y Media de Empanadas + Manaos 2.25 Lts",
      descripcion: "18 empanadas a elección + 1 gaseosa Manaos de 2.25 litros.",
      precio: 24500,
      foto: "fotos/promo-18emp-bebida.jpg",
      icono: "🥟",
      ejemploNota: "Escribí los gustos de las 18 empanadas y el sabor de Manaos..."
    },

    // --- PIZZAS ---
    {
      categoriaId: "pizzas",
      nombre: "Doble Muzza",
      descripcion: "Extra muzzarella.",
      precio: 14000,
      foto: "fotos/pizza-doble-muzza.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Fugazzeta",
      descripcion: "Muzzarella y cebolla.",
      precio: 15000,
      foto: "fotos/pizza-fugazzeta.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Longaniza",
      descripcion: "Muzzarella y longaniza.",
      precio: 15000,
      foto: "fotos/pizza-longaniza.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Jamón",
      descripcion: "Muzzarella y jamón.",
      precio: 16500,
      foto: "fotos/pizza-jamon.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Napolitana",
      descripcion: "Muzzarella, tomate y provenzal.",
      precio: 16500,
      foto: "fotos/pizza-napolitana.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Jamón y Morrón",
      descripcion: "Muzzarella, jamón y morrón.",
      precio: 19500,
      foto: "fotos/pizza-jamon-morron.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Napolitana c/ Jamón",
      descripcion: "Muzzarella, tomate, jamón y provenzal.",
      precio: 19500,
      foto: "fotos/pizza-napolitana-jamon.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Fugazzeta c/ Jamón",
      descripcion: "Muzzarella, cebolla y jamón.",
      precio: 19500,
      foto: "fotos/pizza-fugazzeta-jamon.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Primavera",
      descripcion: "Muzzarella, jamón, huevo duro y tomate.",
      precio: 19500,
      foto: "fotos/pizza-primavera.jpg",
      icono: "🍕"
    },
    {
      categoriaId: "pizzas",
      nombre: "Romana",
      descripcion: "Muzzarella, huevo frito y papas fritas.",
      precio: 22000,
      foto: "fotos/pizza-romana.jpg",
      icono: "🍕"
    },

    // --- HAMBURGUESAS ---
    {
      categoriaId: "hamburguesas",
      nombre: "Cuarto de Libra",
      descripcion: "Medallón de 125 grs, cheddar + guarnición de papas fritas.",
      precio: 7000,
      foto: "fotos/burger-cuarto.jpg",
      icono: "🍔"
    },
    {
      categoriaId: "hamburguesas",
      nombre: "Clásica",
      descripcion: "Medallón de 125 grs, cheddar, lechuga y tomate + guarnición de papas fritas.",
      precio: 7500,
      foto: "fotos/burger-clasica.jpg",
      icono: "🍔"
    },
    {
      categoriaId: "hamburguesas",
      nombre: "Bacon",
      descripcion: "Medallón de 125 grs, cheddar y bacon + guarnición de papas fritas.",
      precio: 7500,
      foto: "fotos/burger-bacon.jpg",
      icono: "🍔"
    },
    {
      categoriaId: "hamburguesas",
      nombre: "Romana",
      descripcion: "Medallón de 125 grs, cheddar, bacon y cebolla caramelizada + guarnición de papas fritas.",
      precio: 8500,
      foto: "fotos/burger-romana.jpg",
      icono: "🍔"
    }
  ]
};