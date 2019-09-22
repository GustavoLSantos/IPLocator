const readline = require('readline-sync')

function start(){
    const ipv = {}
    ipv.gettinip = getIp()

    function getIp() {
        return readline.question("Qual o ip que deseja rastrear? ")}
    var geoip = require('geoip-lite')
    var geo = geoip.lookup(ipv.gettinip)
    console.log(geo)}
start()
