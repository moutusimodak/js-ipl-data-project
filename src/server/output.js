const fs = require('fs');
const path = require('path');


function json(filepath, data) {
    try{
        const outputFilePath = path.join(__dirname, filepath);
        fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2), 'utf8');
    
        console.log('success', outputFilePath);
    }
    catch(err){
        console.error(err);
        
    }
   
}

module.exports = json