#The idea of this file is to clean the allure-results folder for individual users for MAC or Unix systems
#A bat file is needed to clean windows based systems.

#!/bin/bash
echo "deleting files in allure-results"

for FILE in allure-results/*.*
do
    rm $FILE
done

