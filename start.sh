#/bin/bash

cd angular
ng build

cd ../
rm -r electron/ui
cp -r angular/dist/ascp electron/ui

cd electron
npm start