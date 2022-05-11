#!/bin/bash

if [ "${NODE_ENV}" = "production" ]; then 
    echo "--------------------production--------------------" && npm run prod && echo "--------------------production--------------------"
else 
    echo "--------------------development--------------------" && npm run dev && echo "--------------------development--------------------"
fi;
