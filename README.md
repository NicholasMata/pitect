# pitect

NodeJS module used for detecting Raspberry Pi.

## Install

`npm install pitect --save`

## Usage

```js
const pitect = require('pitect');

if(pitect.isPi()) {
    console.log('This is a Raspberry Pi.');
    console.log('This is: ' + pitect.piModel().name);
    if (pitect.piModel() == pitect.MODELS.PI_A) {
        console.log('This is a Raspberry PI Model A');
    }
}
```
