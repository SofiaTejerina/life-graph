// TODO: migrate this to postgres
// https://github.com/porsager/postgres

import fs from 'fs'

class DBClient {
    readJSON(filename) {
        return JSON.parse(fs.readFileSync(`./database/${filename}.json`, 'utf8'))
    }

    writeJSON(filename, data) {
        fs.writeFileSync(`./database/${filename}.json`, JSON.stringify(data, null, 4))
    }
}

export default new DBClient();
