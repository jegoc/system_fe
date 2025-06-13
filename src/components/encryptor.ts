const FIXED_LENGTH = 5;

function padToFixedLength(input: string, length: number): string {
    while (input.length < length) {
        input += input.substring(input.length/2,input.length).split("").reverse().join("");
    }
    return input.slice(0, length); // Ensure it does not exceed the fixed length
}

export function encryptPath(path: string): string {
    const encoded = btoa(path); // Base64 encoding
    const reversed = encoded.split('').reverse().join(''); // Reverse the string
    return padToFixedLength(reversed, FIXED_LENGTH * reversed.length); // Pad to fixed length
}

export function decryptPath(encodedPath: string): string {
    // Remove padding before decoding
    const trimmedPath = encodedPath.slice(0, FIXED_LENGTH); // Extract original encrypted portion
    const reversed = trimmedPath.split('').reverse().join(''); // Reverse the string back
    return atob(reversed); // Decode the Base64 string
}