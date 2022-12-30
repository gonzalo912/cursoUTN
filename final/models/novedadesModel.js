const { connect } = require('http2');
var pool = require('./bd');

async function getNovedades(){
    updateNovedades();
    var query = "select * from novedades order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function deleteNovedadesById(id){
    var query = "delete from novedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function insertNovedad(obj){
    try{
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch(error){
        console.log(error);
        throw error;
    }
}

async function updateNovedades(){
    pool.query("set @count = 0; \
                update novedades set novedades . id = @count := @count + 1; \
                alter table novedades auto_increment = 1;", 
                (err, results) => {
        console.log(err, results);
    });
}

async function getNovedadById(id){
    var query = "select * from novedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function editNovedad(obj, id){
    try{
        var query = "update novedades set ? where id = ?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch(error){
        throw error;
    }
}

module.exports = {getNovedades, deleteNovedadesById, insertNovedad, updateNovedades, editNovedad, getNovedadById};