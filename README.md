# JADTS - Just Another Dev Tools Site

Colección de herramientas web para desarrolladores.

El proyecto está actualmente **en construcción**. [The Nerdy Apprentice](https://thenerdyapprentice.blogspot.com/)

![Status](https://img.shields.io/badge/Status-En%20Construcción-orange) ![Version](https://img.shields.io/badge/Version-0.16.2-blue) ![License](https://img.shields.io/badge/License-GPL--3.0-blue) ![Node.js](https://img.shields.io/badge/Node.js-16%2B-339933?logo=nodedotjs&logoColor=white) ![React](https://img.shields.io/badge/React-^19.2.0-61DAFB?logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-^8.0-646CFF?logo=vite&logoColor=white) ![Netlify](https://img.shields.io/badge/Hosted-Netlify-00C7B7?logo=netlify&logoColor=white)

## Descripción

**JADTS** es una aplicación web moderna que proporciona un conjunto de herramientas útiles para desarrolladores. Incluye generadores, codificadores, y utilidades criptográficas, todo integrado en una única interfaz intuitiva y fácil de usar.

## Características

- **Interfaz moderna y oscura** - Diseño limpio con Bootstrap 5
- **Rápido y responsivo** - Construido con Vite 8 y React 19
- **Búsqueda integrada** - Encuentra herramientas fácilmente
- **Totalmente responsivo** - Funciona en cualquier dispositivo
- **Code Splitting** - Lazy loading de páginas para mejor performance
- **SEO dinámico por página** - Títulos y metadatos gestionados con react-helmet-async
- **Sin backend** - Todo funciona en el cliente

## Herramientas Disponibles

### Generadores
- **Lorem Ipsum** - Generador de texto Lorem Ipsum
- **UUID** - Generador de identificadores únicos universales
- **Contraseñas** - Generador de contraseñas seguras
- **Códigos QR** - Generador de códigos QR

### Formatters
- **JSONFormatter** - Formateador y validador de JSON

### Codificación y Encriptación
- **Base64** - Codificador/Decodificador Base64
- **Hash Generator** - Generador de funciones hash (MD5, SHA-1, SHA-256, SHA-512)
- **HMAC Generator** - Generador de códigos de autenticación de mensajes
- **AES** - Encriptación/Desencriptación AES
- **JWT** - Generador y decodificador de JSON Web Tokens
- **Bcrypt** - Generador y validador de hashes Bcrypt

## Stack Tecnológico

### Frontend
- **React** ^19.2.0 - Librería de UI
- **React Router** ^7.13.1 - Enrutamiento
- **Vite** ^8.0.16 - Bundler y servidor de desarrollo
- **Bootstrap** ^5.3.8 - Framework CSS
- **React Bootstrap** ^2.10.10 - Componentes Bootstrap para React

### Librerías Especializadas
- **crypto-js** ^4.2.0 - Utilidades criptográficas
- **jose** ^6.2.3 - JWT (JSON Web Tokens)
- **bcryptjs** ^3.0.3 - Hashing Bcrypt
- **uuid** ^14.0.0 - Generación de UUIDs
- **react-qr-code** ^2.0.18 - Generador de códigos QR
- **lorem-ipsum** ^2.0.8 - Generador de Lorem Ipsum
- **react-icons** ^5.6.0 - Iconos
- **react-helmet-async** ^3.0.0 - Gestión dinámica de SEO y metadatos

### Herramientas de Desarrollo
- **ESLint** ^9.39.1 - Linter de JavaScript
- **Vite Plugin React** ^5.1.1 - Plugin de React para Vite

## Instalación

### Requisitos Previos
- Node.js 16+ 
- npm o yarn

### Pasos

1. Clona el repositorio
```bash
git clone <repository-url>
cd jadts
```

2. Instala las dependencias
```bash
npm install
```

3. Inicia el servidor de desarrollo
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## Comandos Disponibles

```bash
# Desarrollo con hot reload
npm run dev

# Construcción para producción
npm run build

# Vista previa del build de producción
npm run preview
```

## Estructura del Proyecto

```
src/
├── pages/
│   ├── generadores/      # Generadores de contenido
│   ├── encoders/         # Codificadores y JWT
│   ├── crypto/           # Herramientas criptográficas
│   ├── formatters/       # Herramientas de formateo
│   └── Home.jsx          # Página principal
├── components/           # Componentes reutilizables
├── layout/              # Componentes de layout
├── tools.js             # Configuración de herramientas
├── App.jsx              # Componente principal
└── main.jsx             # Punto de entrada
```

## Diseño

- **Tema**: Modo oscuro (Dark Mode)
- **UI Framework**: Bootstrap 5 + React Bootstrap
- **Iconos**: React Icons (Font Awesome)
- **Responsivo**: Adaptado a todos los tamaños de pantalla


## Más Información

Para más detalles sobre este proyecto y otros contenidos relacionados, visita:
- 🔗 [The Nerdy Apprentice Blog](https://thenerdyapprentice.blogspot.com/)

## Licencia

Este proyecto está licenciado bajo la Licencia Pública General de GNU versión 3.0 (GPL-3.0). Consulta el archivo [LICENSE](LICENSE) para más detalles.
