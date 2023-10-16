// TODO: migrate this to postgres
// https://github.com/porsager/postgres

import fs from 'fs'

class DBClient {
    readJSON(filename) {
        return JSON.parse(fs.readFileSync(`./src/database/${filename}.json`, 'utf8'))
    }

    writeJSON(filename, data) {
        fs.writeFileSync(`./src/database/${filename}.json`, JSON.stringify(data, null, 4))
    }
}

export default new DBClient();
