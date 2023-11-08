import XLSX from 'xlsx';
import Papa from 'papaparse';

function parseExcelOrCsv(contents) {
    // Determine file type based on contents or file extension
    const isExcel = /* determine if file is in Excel format */ false;
    const dataArray = [];

    if (isExcel) {
        const workbook = XLSX.read(contents, { type: 'binary' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Convert Excel data to array format
        excelData.forEach((row) => {
            const rowData = row.map((cell) => cell.toString());
            dataArray.push(rowData);
        });
    } else {
        const csvData = Papa.parse(contents).data;

        // Remove the last row if it's empty (often happens with CSVs)
        if (csvData[csvData.length - 1].length === 1 && !csvData[csvData.length - 1][0]) {
            csvData.pop();
        }

        // Convert CSV data to array format
        csvData.forEach((row) => {
            const rowData = row.map((cell) => cell.toString());
            dataArray.push(rowData);
        });
    }

    return dataArray;
}

export { parseExcelOrCsv } 