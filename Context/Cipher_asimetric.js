const NodeRSA = require("node-rsa");
const key = new NodeRSA();

export const encrypt_RSA = (plaintext, public_key) => {

  key.importKey(public_key, "pkcs8-public");

  const ciphertext = key.encrypt(plaintext, "base64");

  console.log(typeof ciphertext);

  return ciphertext;
};

export const decrypt_RSA = (ciphertext) => {

    // Llave privada del cliente para descifrar mensajes
  const PrivateKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEogIBAAKCAQEAj4qtttx7LtcR+67L2yY7wWUyE9DVas7oZuWK2BWMLewzfAJW\n" +
    "3FZoXIqJc/FEpwEBBLWzbvznt8RoIEoNK8jChu7O9GWEbv2g3lo0uDrB183TWuNC\n" +
    "7AePMOSyS84PFEV3QbFiMqdaIFx5NDsVx81kQnrGvces59Ea3zHlZ+YzEPGZDnkS\n" +
    "JzOMa7+XIqnnt2pUojLbdXd9m7fFlPUeaGKwbYkoPVGFDRJoGp14tz1UFn6omhmp\n" +
    "xzPyJUb/nul+wX0fUcKLhL4VHZIA24OK8KjA6Zsp6t4P4IegIGVC9ERkCj//y8Gd\n" +
    "fWINzAZXJKnlSire1rtGQolEPcOS7uHrTHvr1QIDAQABAoIBAEZfnKQ6u0/vFHt6\n" +
    "qqpCN+islt0dNQy87TbJUgV3pva6x1EEipZS7K52I0aLInfoJ5oqBRMkfexcKBqw\n" +
    "g32UWz6xJRiwDrolsbFhs1ghQnjtibIVGnHCkQLNFNbSaxUqq3mzICwqXSbhf3DK\n" +
    "iPagrYdkTzyrAQvUOmLzwP9r3lxvAkg5Jw3qKBBNYtAfDuEa2LAitr6O11U1Bes0\n" +
    "LEXbsFrq7VhvB8zI1oUsULHaABn0SXIdJGA0oeVmx3jf6ypwRrWc20vB1WjmAGOq\n" +
    "ur5JpqqEWf2VO2uMpoXBhkRhY81AxeR49e3g+p9W7+u5kWkaW/hwqosXtUTwGnv7\n" +
    "nt/rhl8CgYEAtsvYwykWb/O7wGOfNs3iQBJTdxBOrbOFFchqZPHrS81F9dz9nSUm\n" +
    "Bo1ZLeMg6b8kggLJs17ayO2hRJp/0PmnJuO4zhkkjxLmvuj4QPKV9J4nMZlTgoSI\n" +
    "SZ4eiIpM1whMAZgqNbaQavAoidiDR/GJIfDST5OnB5zC4jgCDS6YZQMCgYEAyQZ6\n" +
    "4gpYnNuIlqvno1SPr9xelBUfA1IqwATfFq6ucmSdj+l1H+IWCGMp7cpnr0/zg5zN\n" +
    "H8rEULEurlkBNF5vIvklboVq2T6YC6/3du/iVwsmrl5d/GRuMn8a1sdtuC2tnWT0\n" +
    "jeYBI3Cfj8p+5L7kgUhmNoRJlZ/ztjstl4Ef+EcCgYAbOm4FU/91mZaj57L1lOFY\n" +
    "reIk4Bb4JL90KTA/7REhb2g2YT6dw8TQQQnBng1vA/vKKeQlhcGNIGhfMaxMUoOl\n" +
    "dVI30OLzNNuOIGGqOvg/QbeQ2cforxkl7hmaOQ+NED1SF3piGdmVNES1k7yqYL4O\n" +
    "gjKxi8rbhWw6CiG0GPa2RQKBgFIVG0gBAX3LBlK/jq3acXFVgijlFuy8OEh/tLgG\n" +
    "S6TaAJwqr3B9WJHEK/K0mvGyq7Qp6nf4y4BHWNBH933ysV6ObQJb5+0c6eibyWf/\n" +
    "O2RfYUQBtE7Ck1x7GfJpLBvwStvhxRnLuNtHuV91R6sPZy6C6XmJOqKl1VWrhEpA\n" +
    "p1UxAoGAINor84en+SgTsMuOoP3OLON/nVAGVWZ0YejfXssPWJGo1oTPUtIqwEc4\n" +
    "Ac8gzMzmnEuUmdr1Ac+Qilrkvocv1cuLqnTqkfeUX27VBTmPCnRkRF5ccY/9u6Uq\n" +
    "GhXyK68ea9ryqwBWa8yfaBe4QYz2FiCwryKzwSUNrxw5VmOsaxQ=\n" +
    "-----END RSA PRIVATE KEY-----";

  key.importKey(PrivateKey, "pkcs1-private");

  const plaintext = key.decrypt(ciphertext, "utf8");

  return plaintext;
};


export const public_key_client = "-----BEGIN PUBLIC KEY-----\n" +
"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAj4qtttx7LtcR+67L2yY7\n" +
"wWUyE9DVas7oZuWK2BWMLewzfAJW3FZoXIqJc/FEpwEBBLWzbvznt8RoIEoNK8jC\n" +
"hu7O9GWEbv2g3lo0uDrB183TWuNC7AePMOSyS84PFEV3QbFiMqdaIFx5NDsVx81k\n" +
"QnrGvces59Ea3zHlZ+YzEPGZDnkSJzOMa7+XIqnnt2pUojLbdXd9m7fFlPUeaGKw\n" +
"bYkoPVGFDRJoGp14tz1UFn6omhmpxzPyJUb/nul+wX0fUcKLhL4VHZIA24OK8KjA\n" +
"6Zsp6t4P4IegIGVC9ERkCj//y8GdfWINzAZXJKnlSire1rtGQolEPcOS7uHrTHvr\n" +
"1QIDAQAB\n" +
"-----END PUBLIC KEY-----";

export const Private_key_client ="-----BEGIN RSA PRIVATE KEY-----\n" +
"MIIEogIBAAKCAQEAj4qtttx7LtcR+67L2yY7wWUyE9DVas7oZuWK2BWMLewzfAJW\n" +
"3FZoXIqJc/FEpwEBBLWzbvznt8RoIEoNK8jChu7O9GWEbv2g3lo0uDrB183TWuNC\n" +
"7AePMOSyS84PFEV3QbFiMqdaIFx5NDsVx81kQnrGvces59Ea3zHlZ+YzEPGZDnkS\n" +
"JzOMa7+XIqnnt2pUojLbdXd9m7fFlPUeaGKwbYkoPVGFDRJoGp14tz1UFn6omhmp\n" +
"xzPyJUb/nul+wX0fUcKLhL4VHZIA24OK8KjA6Zsp6t4P4IegIGVC9ERkCj//y8Gd\n" +
"fWINzAZXJKnlSire1rtGQolEPcOS7uHrTHvr1QIDAQABAoIBAEZfnKQ6u0/vFHt6\n" +
"qqpCN+islt0dNQy87TbJUgV3pva6x1EEipZS7K52I0aLInfoJ5oqBRMkfexcKBqw\n" +
"g32UWz6xJRiwDrolsbFhs1ghQnjtibIVGnHCkQLNFNbSaxUqq3mzICwqXSbhf3DK\n" +
"iPagrYdkTzyrAQvUOmLzwP9r3lxvAkg5Jw3qKBBNYtAfDuEa2LAitr6O11U1Bes0\n" +
"LEXbsFrq7VhvB8zI1oUsULHaABn0SXIdJGA0oeVmx3jf6ypwRrWc20vB1WjmAGOq\n" +
"ur5JpqqEWf2VO2uMpoXBhkRhY81AxeR49e3g+p9W7+u5kWkaW/hwqosXtUTwGnv7\n" +
"nt/rhl8CgYEAtsvYwykWb/O7wGOfNs3iQBJTdxBOrbOFFchqZPHrS81F9dz9nSUm\n" +
"Bo1ZLeMg6b8kggLJs17ayO2hRJp/0PmnJuO4zhkkjxLmvuj4QPKV9J4nMZlTgoSI\n" +
"SZ4eiIpM1whMAZgqNbaQavAoidiDR/GJIfDST5OnB5zC4jgCDS6YZQMCgYEAyQZ6\n" +
"4gpYnNuIlqvno1SPr9xelBUfA1IqwATfFq6ucmSdj+l1H+IWCGMp7cpnr0/zg5zN\n" +
"H8rEULEurlkBNF5vIvklboVq2T6YC6/3du/iVwsmrl5d/GRuMn8a1sdtuC2tnWT0\n" +
"jeYBI3Cfj8p+5L7kgUhmNoRJlZ/ztjstl4Ef+EcCgYAbOm4FU/91mZaj57L1lOFY\n" +
"reIk4Bb4JL90KTA/7REhb2g2YT6dw8TQQQnBng1vA/vKKeQlhcGNIGhfMaxMUoOl\n" +
"dVI30OLzNNuOIGGqOvg/QbeQ2cforxkl7hmaOQ+NED1SF3piGdmVNES1k7yqYL4O\n" +
"gjKxi8rbhWw6CiG0GPa2RQKBgFIVG0gBAX3LBlK/jq3acXFVgijlFuy8OEh/tLgG\n" +
"S6TaAJwqr3B9WJHEK/K0mvGyq7Qp6nf4y4BHWNBH933ysV6ObQJb5+0c6eibyWf/\n" +
"O2RfYUQBtE7Ck1x7GfJpLBvwStvhxRnLuNtHuV91R6sPZy6C6XmJOqKl1VWrhEpA\n" +
"p1UxAoGAINor84en+SgTsMuOoP3OLON/nVAGVWZ0YejfXssPWJGo1oTPUtIqwEc4\n" +
"Ac8gzMzmnEuUmdr1Ac+Qilrkvocv1cuLqnTqkfeUX27VBTmPCnRkRF5ccY/9u6Uq\n" +
"GhXyK68ea9ryqwBWa8yfaBe4QYz2FiCwryKzwSUNrxw5VmOsaxQ=\n" +
"-----END RSA PRIVATE KEY-----";

export const Public_key_server = "-----BEGIN PUBLIC KEY-----\n" +
"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAumq+ABKRaVCXByoYOZnR\n" +
"AmyttdjD1ixTorlf40hKAPYkr/w84ewfUovQzh7M/TRyTM+l5lPCDNG2BeCj9jnT\n" +
"XtKe+5We7wMpmDysoyZN7kP9P/ajyuApckX3hq5+Lk+L8ZJ+WqMEL5c6px5SqNJt\n" +
"rMCdqqP4KG5TvyEt+/kd40Qf9h3weD0PjCxjMnt/LtfDIQb2UikdV5sI8TWKBSe9\n" +
"VWn9NBZgjTpFV+6olJqGNaiX6yTbOjZbpF8Cg8MlODNw7Vz5CmnVeOwn4/6ViDTU\n" +
"AlCd5slYWK3vL+j0HwRGo2jDYmvMB35/FazkY7jLccH5acmIZPwJ1GfexPHOJ94N\n" +
"ywIDAQAB\n" +
"-----END PUBLIC KEY-----";