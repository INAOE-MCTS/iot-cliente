import { AES, mode, pad, enc, lib } from "crypto-js";

export const session_key = "cloyYASLV4nOBlWQ5ITfbqVuQ3C8FLeQLM8TtujEF28="


// Función para cifrar utilizando AES en modo CBC
export const encrypt_AES_CBC = (plaintext, key) => {
  // Convertir la llave de sesion y texto plano en formato WordArray
  const keyWordArray = enc.Base64.parse(key);
  const plaintextWordArray = enc.Utf8.parse(plaintext);

  // Generar un vector de inicialización (IV) aleatorio
  const ivRandom = lib.WordArray.random(16);

  const ciphertext = AES.encrypt(plaintextWordArray, keyWordArray, {
    iv: ivRandom,
    mode: mode.CBC,
    padding: pad.Pkcs7,
  }).toString();

  const iv = enc.Base64.stringify(ivRandom);

  // Retornar el texto cifrado y el IV como resultado
  return { ciphertext, iv };
};


// Función para descifrar utilizando AES en modo CBC
export const decrypt_AES_CBC = (ciphertext, iv, session_key) => {

    // Convertir la llave de sesion y iv a formato WordArray
    const keyWordArray = enc.Base64.parse(session_key);
    const ivIn = enc.Base64.parse(iv);

    const plaintext = AES.decrypt(ciphertext, keyWordArray, {
      iv: ivIn,
      mode: mode.CBC,
      padding: pad.Pkcs7,
    }).toString(enc.Utf8);

    // Retornar el texto en claro como resultado
    return { plaintext };
  }