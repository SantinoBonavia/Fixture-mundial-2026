# 🌍 FIFA World Cup 2026 Fixture Simulator

Aplicación web desarrollada con **React + Vite** que permite simular completamente la Copa Mundial de la FIFA 2026.

El usuario puede ingresar todos los resultados de la fase de grupos y de la fase eliminatoria, mientras que la aplicación calcula automáticamente las posiciones, los clasificados, los mejores terceros y el avance de cada selección hasta conocer al campeón del torneo.

---

# ✨ Funcionalidades

## Fase de grupos

- ✅ Carga de resultados partido por partido.
- ✅ Actualización automática de las tablas.
- ✅ Diferencia de gol.
- ✅ Goles a favor y en contra.
- ✅ Puntos.
- ✅ Clasificación automática.

---

## Clasificación

- ✅ Primeros y segundos de cada grupo.
- ✅ Selección automática de los mejores terceros.

---

## Fase eliminatoria

- ✅ 16avos de final.
- ✅ Octavos de final.
- ✅ Cuartos de final.
- ✅ Semifinales.
- ✅ Partido por el tercer puesto.
- ✅ Final.

---

## Eliminación directa

- ✅ Avance automático del ganador.
- ✅ Definición por penales cuando hay empate.
- ✅ Validación para impedir empates en penales.

---

## Podio

Al finalizar el torneo se muestran automáticamente:

- 🏆 Campeón
- 🥈 Subcampeón
- 🥉 Tercer puesto

---

## Persistencia de datos

Los resultados quedan almacenados utilizando **LocalStorage**, por lo que al recargar la página el torneo continúa exactamente donde quedó.

---

# 🛠 Tecnologías utilizadas

- React
- Vite
- JavaScript
- HTML5
- CSS
- LocalStorage

---

# 📂 Estructura del proyecto

```
src/
│
├── components/
│   ├── MatchCard
│   ├── KnockoutMatchCard
│   ├── GroupSection
│   ├── Bracket
│   └── Podio
│
├── data/
│   ├── groups
│   ├── matches
│   └── flags
│
├── utils/
│   ├── standings
│   ├── bracket
│   ├── bracketHelpers
│   ├── resolveTeam
│   ├── getWinner
│   ├── mejorTercero
│   └── localStorage
│
└── pages/
    └── Home
```

---

# 🚀 Instalación

Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/world-cup-fixture.git
```

Ingresar a la carpeta

```bash
cd world-cup-fixture
```

Instalar dependencias

```bash
npm install
```

Ejecutar el proyecto

```bash
npm run dev
```

---

# 💡 Posibles mejoras futuras

- Estadísticas de los equipos.
- Simulación automática de partidos.
- Consumo de API oficial.
- Modo oscuro/claro.
- Exportar resultados.
- Compartir el torneo.

---

# 👨‍💻 Autor

**Santino Bonavia**

Proyecto desarrollado como hobby. 