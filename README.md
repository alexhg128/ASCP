# ASCP Messanger
This application sends and receive messages using the ASCP protocol.

## Requirements

 - Node
 - Angular

## How to run?

### Automatic build

You can use the automatic build scripts included. You may need to give executable property to scripts. Scripts only works on MacOS and Linux.

#### Install

The following script only needs to be ran once every time code is pulled.

    ./install.sh

#### Running

    ./start.sh

### Manual build

#### Install

The following code only needs to be ran once every time code is pulled.

    cd angular/
    npm install
    cd ../electron
    npm install
    cd ..

#### Running

    cd angular
    ng build --prod
    cd ../electron
    npm start

## Folders description

| Folder | Description |
|--|--|
| /angular | The frontend Angular application |
| /ascp | ASCP typescript code for running in the terminal. Test servers. |
| /electron | Desktop application that wraps Angular app. |
| /testers | Random code to test functionality. |

## Authors

- Alejandro Hahn (A01561774)
- Hugo Valencia (A01561688)
