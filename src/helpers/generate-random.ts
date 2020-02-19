/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMnumCharsOPQRSTUVWXYZ0123456789';

export const generateRandom = (numChars = 8) =>
    Array(numChars)
        .join()
        .split(',')
        .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
        .join('');
