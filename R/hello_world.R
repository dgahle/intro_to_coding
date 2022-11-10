#
# Functional R program to print messages
#
# Imports

# Variables
msg <- "Hello World (with no quotation marks)!"

hello_world <- function() {
    print(msg, quote=FALSE);
}

main <- function() {
   hello_world()
}

# Main
if (sys.nframe() == 0) {
    main()
} else {}