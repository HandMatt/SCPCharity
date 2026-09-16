FROM node:20-bookworm

WORKDIR /app

# Default: Hugo serve. Override with compose `run` for install/build.
CMD ["npm", "run", "start", "--", "--bind", "0.0.0.0"]
