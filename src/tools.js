import {
    FaKey, FaQrcode, FaFont,
    FaHashtag, FaExchangeAlt,
    FaFingerprint, FaShieldAlt,
    FaLock, FaIdCard, FaFileCode
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
        description: "Codificador / Decodificador Base64"
    },
    {
        name: "Hash Gen",
        path: "/hashgenmod",
        icon: FaFingerprint,
        category: "Encoders",
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
        name: "AES",
        path: "/aesmod",
        icon: FaLock,
        category: "Crypto",
        description: "Encripta / Desencripta AES"
    },
    {
        name: "JWT",
        path: "/jwtmod",
        icon: FaIdCard,
        category: "Crypto",
        description: "Generador de JSON Web Tokens"
    },
    {
        name: "JSON Formatter",
        path: "/jsonformatter",
        icon: FaFileCode,
        category: "Formatters",
        description: "Formatea, valida y comprime JSON"
    }
]