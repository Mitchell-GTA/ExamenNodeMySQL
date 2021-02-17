

module.exports.test = async(req,res) =>{
  res.status(200).send({status:"success",message:"Welcome To Testing API Trabajos"})
}

module.exports.AccesoPrincipal = async(req,res) =>{
	var error = req.query.e
	req.getConnection((err,conn) => {
		conn.query('SELECT * FROM jobs', (err, results) => {
			if (err) {
				res.status(400).json({code:400,msg:"Error",error:err})
			}
			console.log(results);
			res.render('NovusTec/Administrador/Jobs/index', {
				title: "Trabajos", 
				description:"",
				content:"Trabajos",
				data: results,
				error:error
			});
		})
	})
}


module.exports.GuardarDatos = async(req,res) => {
	var data = req.body;
	req.getConnection((err,conn) => {
		conn.query('INSERT INTO jobs set ?', [data], (err,object) => {
			console.log(object);
			res.redirect("/jobs");
		})
	})
}

module.exports.BorrarDato = async(req,res) => {
	var {id} = req.params
	req.getConnection((err,conn) => {
		conn.query('DELETE FROM jobs WHERE id = ?', [id], (err,results) => {
			res.redirect("/jobs");
		})
	})
}