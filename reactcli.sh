#!/bin/bash


export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

node  --version
nvm use 14
node  --version
cd  frontend
cd  reactfront
set NODE_OPTIONS=--openssl-legacy-provider
npm  start
