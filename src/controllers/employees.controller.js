module.exports.test = async(req,res) =>{
    res.status(200).send({status:"success",message:"Welcome To Testing API empleados"})
}

module.exports.GuardarDatos = async(req,res) => {
	var data = req.body;
	req.getConnection((err,conn) => {
		conn.query('INSERT INTO employees set ?', [data], (err,object) => {
			console.log(object);
		})
	})
}