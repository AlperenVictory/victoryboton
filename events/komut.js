


                client.komutlar.set(pull.isim, pull); 
                continue; 
                table.addRow(file, 'Hazır'); 
                table.addRow(file, `Hata -> Komut klasöründe isim yazılmamış.`); 
            if (pull.alternatifler && Array.isArray(pull.alternatifler)) pull.alternatifler.forEach(alias => client.alternatifler.set(alias, pull.isim)); 
            if (pull.isim) { 
            let pull = require(`../komutlar/${file}`); 
            }
            } else {
        const commands = readdirSync(`./komutlar/`).filter(file => file.endsWith(".js")); 
        for (let file of commands) { 
        }
    console.log(table.toString()); 
const ascii = require("ascii-table");
const { readdirSync } = require("fs"); 
let table = new ascii("Komutlar");
module.exports = (client) => {
table.setHeading("Komut", "Yükleme durumu");
}