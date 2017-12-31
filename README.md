# Quick start for a new project #
Perfect project/pattern for the classic layout. Not intended for SPA.

## Stack ##
- Grunt
- Pug
- SASS
- JS
- Vue.js
- jQuery

## Setup ##

To get started:
- Clone the repository.
- Then use the terminal/command prompt navigate to the root directory.
- Install NPM;
- Create a symbolic link to the directory "public/dist";
- Run the project Assembly.

```
// Go to the directory with the project
cd <project root>
```
```
// Install npm
npm install
```
```
// Create a symbolic link to the directory "public/dist" (Windows)
mklink /d dist public\dist
```
```
// Create a symbolic link to the directory "public/dist" (Unix)
ln -s public/dist dist
```
```
// Run build
grunt
```
```
// URL to view the home
http://localhost:7700/dist/
```

## Project structure ##

- **grunt/**

Configs task to build the project. at the moment, the project Assembly is configured only on the development.

- **public/**

All project source files, and a dist directory where the compiled files of the project.

- **public/block/**

Blocks. Writing markup and styles are strictly for **[BEM methodology](https://ru.bem.info/methodology/quick-start/)**.
One unit - one slide. **Common/** contain the General styles. Etc...

- **public/dist/**

The compiled project files

- **public/fonts/**

The font files.

- **public/img/**

Strictly icons in SVG, then **[encode base64](https://www.base64-image.de)**.
All the bitmap **[optimize using](https://tinypng.com)**.
There is **[desktop apps](https://github.com/kyleduo/TinyPNG4Mac)**.

- **public/libs/**

Third-party libraries (JS and SASS).

- **public/tpls/**

Template markup

- **public/app-project.js**

The main JS file

- **public/app-project.sass**

A list with the imported SASS files

- **public/Gruntfile.js**

Grunt сonfig

- **remove-temp-files.sh**

macOS. Deleting all temporary project files

- **setup-project.sh**

macOS. Installing NPM, you create a link to the "dist" directory, run Grunt

```
// Deleting
./remove-temp-files.sh
```
```
// Setup&Start
./setup-project.sh
```
