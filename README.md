# Frontend Starter Kit

![Frontend Starter Kit](https://github.com/le2xx/frontend-starter-kit/raw/master/src/assets/images/gear.png)
  
## Description

This is a startup project template for developing a web interface. There is no jQuery in it, only Vanilla JS,
only hardcore! If you need jQuery, then you can add it separately as bootstrap and other modules. This template
includes a number of useful modules in my opinion that automate part of the work.

## Plugins

<a href="https://nodejs.org/en/">
  <img alt="nodejs" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="100">
</a>
<a href="https://github.com/webpack/webpack">
  <img alt="webpack" src="https://webpack.js.org/assets/icon-square-big.svg" width="100">
</a>
<a href="https://babeljs.io/">
  <img alt="babel" src="https://raw.githubusercontent.com/babel/logo/master/babel.png" width="100">
</a>
<a href="https://pugjs.org">
  <img alt="pug" 
  src="https://cdn.rawgit.com/pugjs/pug-logo/eec436cee8fd9d1726d7839cbe99d1f694692c0c/SVG/pug-final-logo-_-colour-128.svg"
  width="100">
</a>
<a href="https://github.com/stylus/stylus">
  <img alt="stylus" src="http://stylus-lang.com/img/stylus-logo.svg" width="100">
</a>
<a href="https://github.com/postcss/autoprefixer">
  <img alt="autoprefixer" src="http://postcss.github.io/autoprefixer/logo.svg" width="100">
</a>

## Start project

### Clone repository

```
git clone https://github.com/le2xx/frontend-starter-kit.git new-project
cd new-project
```

### Install modules

```
npm install
```

### Start template

```
npm start
```

### Building project

```
npm build
```

### Create new component

```
npm run new-block name-block
```

## File and folder structure

```
├── src/                                    #
│   ├── app/                                # 
│   │   ├── components/                     # Components directory
│   │   │   ├── layout/                     #
│   │   │   │   └── layout.pug              # 
│   │   │   └── component-name/             # Component directory  
│   │   │       ├── component-name.js       # JS file component  
│   │   │       ├── component-name.pug      # Pug file component  
│   │   │       └── component-name.styl     # Styl file component
│   │   └── pages/                          #
│   │       └── index.pug                   # Index page
│   ├── assets/                             #
│   │   ├── favicons/                       # Favicons directory
│   │   ├── fonts/                          # Directory for font files
│   │   └── images/                         # Directory for image files
│   ├── styles/                             #
│   │   ├── base.styl                       # Base stylus file for include other stylus files
│   │   ├── fonts.styl                      # Stylus file for include fonts  
│   │   ├── mixins.styl                     # Stylus file for making replayable styles
│   │   └── variables.styl                  # Stylus file for making variables
│   ├── main.js                             # Main JavaScript file
│   └── polyfills.js                        #
├── .gitignore                              #
├── .stylintrc                              #
├── new-block.js                            # Script for making new components
├── package.json                            #
├── README.md                               #
└── webpack.conf.js                         # Webpack config file

```

## Todo

* Add automated testing tools
* Possible to add TypeScript
