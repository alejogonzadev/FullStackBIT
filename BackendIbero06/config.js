var config = {
    email:{},
    sesiones:{}
}

config.email.host = "smtp.gmail.com"
config.email.port = 587
config.email.user = "nazarioconcesionario@gmail.com"
config.email.pass = "lxqjlceqyzqvmhke"


config.sesiones.secret = "guachurname"
config.sesiones.expiracion = 60000*5


config.bd = "FinalIbero06"
config.palabraclave = "nñasbndaubvjasbdluaibf165165135351"
config.origins = [
    "http://localhost:4200"
]
    


module.exports.config = config