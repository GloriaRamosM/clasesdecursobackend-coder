let eventos = [];

let precioBaseDeGanacia = 0.25;

const getEventos = () => eventos;

function agregarEvento(
  nombre,
  lugar,
  precio,
  capacidad = 50,
  fecha = new Date().toLocaleDateString()
) {
  const evento = {
    id: generarId(),
    nombre: nombre,
    lugar: lugar,
    precio: precio + precio * precioBaseDeGanacia,
    capacidad: capacidad,
    fecha: fecha,
    participantes: [],
  };

  return eventos.push(evento);
}

function generarId() {
  let id = 0;

  if (eventos.length === 0) {
    id = 1;
  } else {
    id = eventos[eventos.length - 1].id + 1;
  }

  return id;
}

function agregarUsuario(eventoID, usuarioID) {
  const evento = eventos.find((evento) => evento.id === eventoID);
  if (evento === -1) {
    console.log("Evento no existente");
  }

  const usuario = evento.participantes.includes(usuarioID);
  if (usuario) {
    console.log("Usuario ya registrado ");
  }

  return evento.participantes.push(usuarioID);
}

function ponerEventoEnGira(eventoID, nuevaLocalidad, nuevaFecha) {
  const evento = eventos.find((evento) => evento.id === eventoID);
  if (evento === -1) {
    console.log("Evento no existente");
  }

  const nuevoEvento = {
    ...evento,
    lugar: nuevaLocalidad,
    fecha: nuevaFecha,
    participantes: [],
  };

  return eventos.push(nuevoEvento);
}

agregarEvento("Eevento afterclass", "Argentina", 3000);
agregarUsuario(1, 14);
ponerEventoEnGira(1, "Buenos Aires", "23/01/2024");
console.log(getEventos());
