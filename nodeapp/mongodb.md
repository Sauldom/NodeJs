hemos instalado el mongo db con gdebi

con el comando mongod se activaria 
sudo systemctl start mongod
systemctl status mongod
el status

systemctl status mongod
las entradas que lleva


tambien tenemos que instalar desde la pag en el enlace de tools el shell

lo he instalado con el gestor de paquetes gdebi y con el comando
mongosh
ya me sale conectado a mongodb
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/

me daba fallo al iniciar
sudo rm -rf /tmp/mongodb-27017.sock
sudo service mongod start
For details:

That shall be fault due to user permissions in .sock file, You may have to change the owner to monogdb user.

sudo chown -R mongodb:mongodb /var/lib/mongodb
sudo chown mongodb:mongodb /tmp/mongodb-27017.sock

mongosh


en test desde el shell
show dbs

creamos nuestra base de datos
use cursonode

mostrar colecciones
show collections

metemos un dato
db.agentes.insertOne({name:'Smith', age:34 })
si pone acknowledge true es que lo hizo bien

y ahora si crea la base
con show collections 
ya salen los agentes

salen los agentes y le mete un id unica
db.agentes.find()


si metes alguna cosa mal te puede dar un Syntax error, por cerrar algo o comillas o algo

con db.agentes.find({name:'Smith'})
busca todas los coincidencias

para borrar por ejemplo por id
db.agentes.deleteOne({_id:ObjectId('65d72c0f84240d51f9ac9d65')})

para actualizar
con db.agentes.updateOne()
db.agentes.updateOne({_id: ObjectId('65d72e5987dc8be9c623f364')}, {$set:{age:28}})




puedes usar insertMany()
para hacerlo con varios y pueds introducir varios objetos separados por comas

para crear un indice para poder ordenar
db.agentes.createIndex({name:1})
con 1 es ascendente y con -1 es descendente

para saber los indices puedes hacerlo con
el metodo .getIndexes()
db.agentes.getIndexes()



hay un ide para mongo db
nsqlbooster
esta en la carpeta bootcamp
la conexion es la que ha salido por defecto
bastante interesante de usar

