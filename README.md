# pitect [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/NicholasMata/pitect/master.svg
[travis-url]: https://travis-ci.org/NicholasMata/pitect
[npm-image]: https://img.shields.io/npm/v/pitect.svg
[npm-url]: https://npmjs.org/package/pitect
[downloads-image]: https://img.shields.io/npm/dm/pitect.svg
[downloads-url]: https://npmjs.org/package/pitect

NodeJS module used for detecting if node project is running on a Raspberry Pi.

## Features

- Detect if node project is running on a Raspberry Pi.
- Detect the specific Raspberry Pi model.
- Get the serial number of a Raspberry Pi

## Install

`npm install pitect --save`

## Usage

### Javascript

```js
const pitect = require('pitect');

if(pitect.isPi()) {
    console.log('This is a Raspberry Pi.');
    console.log('This is: ' + pitect.piModel().name);
    console.log('Raspberry Pi Serial Number: ' + pitect.serialNumber());
    if (pitect.piModel() == pitect.MODELS.PI_A) {
        console.log('This is a Raspberry PI Model A');
    }
}
```

### Typescript

```typescript
import * as pitect from 'pitect';

if(pitect.isPi()) {
    console.log('This is a Raspberry Pi.');
    console.log('This is: ' + pitect.piModel().name);
    console.log('Raspberry Pi Serial Number: ' + pitect.serialNumber());
    if (pitect.piModel() == pitect.MODELS.PI_A) {
        console.log('This is a Raspberry PI Model A');
    }
}
```
