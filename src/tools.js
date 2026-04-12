import {
    FaKey, FaQrcode, FaFont,
    FaHashtag, FaExchangeAlt,
    FaFingerprint, FaShieldAlt
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
        description: "Codificador / Decodificador Base64"
    },
    {
        name: "Hash Gen",
        path: "/hashgenmod",
        icon: FaFingerprint,
        description: "Generador de Hashes"
    },
    {
        name: "HMAC Gen",
        path: "/HMACMod",
        icon: FaShieldAlt,
        description: "Generador de HMACs"
    }
]