#!/bin/bash

# yarn prisma migrate dev
yarn ts-node app.ts

exec "$@"
