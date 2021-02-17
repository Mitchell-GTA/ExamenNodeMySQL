module.exports.test = async(req,res) =>{
    res.status(200).send({status:"success",message:"Welcome To Testing API genero"})
}
  
module.exports.AccesoPrincipal = async (req, res) => {
    var error = req.query.e
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM genders', (err, results) => {
            if (err) {
                res.status(400).json({ code: 400, msg: "Error", error: err })
            }
            console.log(results);
            res.render('NovusTec/Administrador/Genders/index', {
                title: "Genero",
                description: "",
                content: "Genero",
                data: results,
                error: error
            });
        })
    })
}

module.exports.GuardarDatos = async(req,res) => {
    console.log("aqui");
	var data = req.body;
	req.getConnection((err,conn) => {
		conn.query('INSERT INTO genders set ?', [data], (err,object) => {
			console.log(object);
			res.redirect("/genders");
		})
	})
}

module.exports.BorrarDato = async(req,res) => {
	var {id} = req.params
	req.getConnection((err,conn) => {
		conn.query('DELETE FROM genders WHERE id = ?', [id], (err,results) => {
			res.redirect("/genders");
		})
	})
}