#
# Script to run all the example demos
#
# Imports
# Runs the script and imports all the variables and functions
source('R/hello_world.R')


# Main
if (sys.nframe() == 0) {
    hello_world()
    print(msg)
} else {}