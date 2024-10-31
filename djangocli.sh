#!/bin/bash

cd  backend
source  myvenv/Scripts/activate
cd  core
#python  manage.py  runserver
python  manage.py   runserver_plus  --cert-file cert.pem  --key-file  key.pem