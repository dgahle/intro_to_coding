#
# Script to demostrate plotting functionality in R using Plotly and ggplot2
#
# Imports
cran_mirror_server <- "http://cran.us.r-project.org"
install.packages('devtools', repos=cran_mirror_server)  # ("plotly")
devtools::install_github("ropensci/plotly") 
library(plotly)


# Variables


# Functions
scatter_plot <- function() {
    fig <- plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length, color = ~Species);
    htmlwidgets::saveWidget(as_widget(fig), "scatter_plot.html");
}

box_plot <- function() {
    fig <- plot_ly(midwest, x = ~percollege, color = ~state, type = "box");
    htmlwidgets::saveWidget(as_widget(fig), "box_plot.html")
}


main <- function() {
    scatter_plot();
    box_plot();
}


# Main
if (sys.nframe() == 0) {
    main()
} else {}
