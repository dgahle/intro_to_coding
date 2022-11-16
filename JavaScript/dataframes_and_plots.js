//
// A script to illustrate how to do basic mathematics and plotting
// 
// Imports
import {DataFrame} from 'dataframe-js';
import {fileURLToPath} from "url";


// Variables
const test_url = "https://storage.googleapis.com/covid-public-data/csv/incidence_20221114.csv"


// Functions
function load_data() {
    DataFrame.fromCSV(test_url).then(
        df => df.sql.register('df0'), 
        df => DataFrame.sql.registerTable(df, 'df0')
        ); 
    // SQL Queries
    let sql_query = "SELECT TOP 1 * FROM df0"
    DataFrame.sql.request(sql_query)
    // Save to path
    // DataFrame.toCSV(true, '/my/absolue/path/myfile.csv');
}


function main() {
    load_data()
}


// Main
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    main();
}