
req.getConnection(function(err,connection){
 connection.query('SELECT * FROM dados',[],function(err,result){
 if(err) return res.status(400).json(err);
 
 return res.status(200).json(result);
 
 });
});