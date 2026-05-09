# JADTS - Just Another Dev Tools Site

Colección de herramientas web para desarrolladores.

El proyecto está actualmente **en construcción**. [The Nerdy Apprentice](https://thenerdyapprentice.blogspot.com/)

![Status](https://img.shields.io/badge/Status-En%20Construcción-orange) ![Version](https://img.shields.io/badge/Version-0.12.3-blue)

## Descripción

**JADTS** es una aplicación web moderna que proporciona un conjunto de herramientas útiles para desarrolladores. Incluye generadores, codificadores, y utilidades criptográficas, todo integrado en una única interfaz intuitiva y fácil de usar.

## Características

- **Interfaz moderna y oscura** - Diseño limpio con Bootstrap 5
- **Rápido y responsivo** - Construido con Vite y React
- **Búsqueda integrada** - Encuentra herramientas fácilmente
- **Totalmente responsivo** - Funciona en cualquier dispositivo
- **Sin backend** - Todo funciona en el cliente

## Herramientas Disponibles

### Generadores
- **Lorem Ipsum** - Generador de texto Lorem Ipsum
- **UUID** - Generador de identificadores únicos universales
- **Contraseñas** - Generador de contraseñas seguras
- **Códigos QR** - Generador de códigos QR

### Codificación y Encriptación
- **Base64** - Codificador/Decodificador Base64
- **Hash Generator** - Generador de funciones hash (MD5, SHA-1, SHA-256, SHA-512)
- **HMAC Generator** - Generador de códigos de autenticación de mensajes
- **AES** - Encriptación/Desencriptación AES
- **JWT** - Generador y decodificador de JSON Web Tokens

## Stack Tecnológico

### Frontend
- **React** ^19.2.0 - Librería de UI
- **React Router** ^7.13.1 - Enrutamiento
- **Vite** ^7.3.1 - Bundler y servidor de desarrollo
- **Bootstrap** ^5.3.8 - Framework CSS
- **React Bootstrap** ^2.10.10 - Componentes Bootstrap para React

### Librerías Especializadas
- **crypto-js** ^4.2.0 - Utilidades criptográficas
- **jose** ^6.2.3 - JWT (JSON Web Tokens)
- **uuid** ^14.0.0 - Generación de UUIDs
- **react-qr-code** ^2.0.18 - Generador de códigos QR
- **lorem-ipsum** ^2.0.8 - Generador de Lorem Ipsum
- **react-icons** ^5.6.0 - Iconos

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

## 📁 Estructura del Proyecto

```
src/
├── pages/
│   ├── generadores/      # Generadores de contenido
│   ├── encoders/         # Codificadores y JWT
│   ├── crypto/           # Herramientas criptográficas
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
