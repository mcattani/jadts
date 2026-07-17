import {
    FaKey, FaQrcode, FaFont,
    FaHashtag, FaExchangeAlt,
    FaFingerprint, FaShieldAlt,
    FaLock, FaIdCard, FaFileCode,
    FaUserLock 
} from "react-icons/fa";

export const tools = [
    {
        name: "Lorem Ipsum",
        path: "/loremipsum",
        icon: FaFont,
        category: "Generadores",
        description: "Generador de texto Lorem Ipsum"
    },
    {
        name: "UUID",
        path: "/uuidgenerator",
        icon: FaHashtag,
        category: "Generadores",
        description: "Generador de UUIDs"
    },
    {
        name: "Passwords",
        path: "/passgenerator",
        icon: FaKey,
        category: "Generadores",
        description: "Generador de contraseñas"
    },
    {
        name: "QR",
        path: "/qrcodegenerator",
        icon: FaQrcode,
        category: "Generadores",
        description: "Generador de códigos QR"
    },
    {
        name: "Base64",
        path: "/base64mod",
        icon: FaExchangeAlt,
        category: "Encoders",
        description: "Codificador y Decodificador Base64"
    },
    {
        name: "Hash Gen",
        path: "/hashgenmod",
        icon: FaFingerprint,
        category: "Crypto",
        description: "Generador de Hashes"
    },
    {
        name: "HMAC Gen",
        path: "/hmacmod",
        icon: FaShieldAlt,
        category: "Crypto",
        description: "Generador de HMACs"
    },
    {
        name: "Cifrado Simétrico",
        path: "/mciphermod",
        icon: FaLock,
        category: "Crypto",
        description: "Cifrado simétrico con varios algoritmoss"
    },
    {
        name: "JWT",
        path: "/jwtmod",
        icon: FaIdCard,
        category: "Crypto",
        description: "Generador de JSON Web Tokens"
    },
    {
        name: "Herramientas JSON",
        path: "/jsonformatter",
        icon: FaFileCode,
        category: "Formatters",
        description: "Formatea, valida y comprime JSON"
    },
    {
        name: "Bcrypt",
        path: "/bcryptmod",
        icon: FaUserLock,
        category: "Crypto",
        description: "Genera y verifica hashes bcrypt"
    }
]