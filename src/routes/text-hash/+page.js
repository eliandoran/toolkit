import CryptoES from "crypto-es";

export function load() {

    return {
        hashOperations: [
            {
                label: "MD5",
                run: CryptoES.MD5
            },

            {
                label: "SHA1",
                run: CryptoES.SHA1
            },

            {
                label: "SHA256",
                run: CryptoES.SHA256
            },

            {
                label: "SHA384",
                run: CryptoES.SHA384
            },

            {
                label: "SHA512",
                run: CryptoES.SHA512
            }
        ]
    }

}