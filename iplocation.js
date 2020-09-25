const readline = require('readline-sync')

function start(){
    const ipUser = {}
    ipUser.gettinip = getIp()

    function getIp() {
        return readline.question("Qual o ip que deseja rastrear? ")}
    var geoip = require('geoip-lite')
    var geo = geoip.lookup(ipUser.gettinip)
    console.log(geo)}
start()
