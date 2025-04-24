import pgp from 'pg-promise';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';


const bancodeDados = () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filepath = join(__dirname, 'desastre.sql');
  const pgPromise = pgp();
  const db = pgPromise("postgres://igorrm19:chunda123@localhost:5432/desastre");
  const query = new pgp.QueryFile(filepath, {minify: true});
  db.query(query);

}

export default bancodeDados;
