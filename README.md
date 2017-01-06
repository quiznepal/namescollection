# Names Collection

Simple MEAN stack app to collect nepali name. data are stored in mlab and publicly available through demo site.

### Demo
[heroku](https://namecollection.herokuapp.com/)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and npm or yarn.

```sh
git clone https://github.com/quiznepal/luckydraw # or clone your own fork
cd node-js-sample
yarn install # or use: npm install and bower install
node server.js
```
## Deploying to Heroku
While pushing to heroku, many errors were found, mostly build error and angular version error
![alt was working on my machine](https://cdn.meme.am/cache/instances/folder28/500x/18961028.jpg)
Things to do to solve this error are
- devDependencies doesnt get installed, so running gulp or bower can be tedious, so keep all in dependencies :D
- add postscript
```json
"scripts": {
    "start": "node server/server.js",
    "postinstall": "bower install && gulp build-server"
  }
```
- adding a release object, added in bower.json
```json
"resolutions": {
    "angular": "1.5.8"
  }
```


## TODO
- Load new data after added

## feature
- convert english name to nepali

## License (GPL)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see "http://www.gnu.org/licenses/":http://www.gnu.org/licenses/.
