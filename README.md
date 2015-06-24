Webix Sales 2.0
================


### Install

- import SQL dump from server/dev/migrations/dump.sql
- configure db setttings in server/db.php
- to login in app use user "admin", password "1"

### Deploy

- install nodejs
- run ```npm install```
- run ```npm install -g gulp```
- run ```gulp build```
- copy files from "deploy" folder to server

### Other gulp commands

- gulp clean - remove all temporary files
- gulp lint - will validate all js code in the project

