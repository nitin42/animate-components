#!/bin/sh

build() {
  echo "\nBuilding the project...\n"
  yarn build >&-
  if [ $? -eq 0 ]; then
    echo "✅  Build completed.\n"
  else
    echo "⚠️  Build failed.\n"
  fi
}

flow() {
  echo "Typechecking the required files..."
  yarn flow >&-
  echo "\n😄  It is recommended to run yarn flow for more details about the errors.\n"
}

main() {
  build
  flow
}

echo "\nA n i m a t e  C o m p o n e n t s\n"
main
echo "\nHappy hacking !!\n"
