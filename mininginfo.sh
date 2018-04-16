#!/bin/bash

while true
do
    /home/user/SAFE/safecoin/src/safecoin-cli getmininginfo |& tee /home/user/SAFE/safecoin/safecoinbot/mininginfo.json
    sleep 20
done
