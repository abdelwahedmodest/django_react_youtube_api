#!/bin/bash

cd  backend
source  myvenv/Scripts/activate
cd core
python  manage.py  makemigrations
python  manage.py  migrate