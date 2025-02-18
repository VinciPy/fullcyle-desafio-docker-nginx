#!/bin/bash

# yarn prisma migrate dev
yarn node app.js

exec "$@"
