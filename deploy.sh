#!/bin/bash

##########################################
#     Poor Mans Continous Deployment     #
##########################################
# Use rsync to copy build directory to   #
# remote server when all checks have     #
# completed.                             #
#                                        #
# MacOS specific because of notification #
##########################################

failure () {
  local NOTIFICATION="deployed failed at $1"
  say $NOTIFICATION
  osascript -e "display notification \"${NOTIFICATION//\"/\\\"}\" with title \"Deploy Failed\""
}

success () {
  say "Deploy completed successfully."
  osascript -e 'display notification "Deploy completed successfully." with title "Deploy Successful"'
}

runCmd () {
  if $1; then
    say $2 ' was successful.'
  else
    failure $2
    exit 1
  fi
}

runCmd 'npm run test:build' 'testing' &&
runCmd 'npm run lint:js' 'linting' &&
runCmd 'npm run build' 'build' &&
runCmd "rsync -rave ssh `pwd`/build/* bitnami@${MAKESHIFT3D_SERVER_IP}:/opt/bitnami/nginx/html" 'deploy' &&
success