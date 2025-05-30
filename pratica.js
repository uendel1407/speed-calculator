window.alet('preencha o formulario para obter os resultados')
function verificar(){
    var velo = document.getElementById('velo')
    var res = document.getElementById('res')
    if(velo.value == 0){
        window.alert('[erro] verifique os dados e tente novamente')
    }else{
        var km = document.getElementsByName('km')
        var quilometros = ''
        var multa = ''
        var preso = ''
        if(km[0].checked){
            if(velo.value > 30 && velo.value < 40){
                quilometros = '30'
                multa = 100
            }else if(velo.value >= 40 && velo.value < 50){
                quilometros = '30'
                multa = 150
            }else if(velo.value >= 50 && velo.value < 60){
                quilometros = '30'
                multa = 200
            }else if(velo.value >= 60 && velo.value < 70){
                quilometros = '30'
                multa = 250
            }else if(velo.value >= 70 && velo.value < 90){
                quilometros = '30'
                multa = 350
            }else if(velo.value >= 90 ){
                quilometros = '30'
                multa = 500
                preso = 'seu carro sera apreendido'
            }
        }else if(km[1].checked){
            if(velo.value > 40 && velo.value < 50){
                quilometros = '40'
                multa = 250
            }else if(velo.value >= 50 && velo.value < 60){
                quilometros = '40'
                multa = 350
            }else if(velo.value >= 60 && velo.value < 70){
                quilometros = '40'
                multa = 450
            }else if(velo.value >= 70 && velo.value < 80){
                quilometros = '40'
                multa = 550
            }else if(velo.value >= 80 && velo.value < 90){
                quilometros = '40'
                multa = 650
            }else if(velo.value >= 90 ){
                quilometros = '40'
                multa = 800
                preso = 'seu carro sera apreendido'
            }
        }else if(km[2].checked){
            if(velo.value > 60 && velo.value < 70){
                quilometros = '60'
                multa = 350
            }else if(velo.value >= 70 && velo.value < 80){
                quilometros = '60'
                multa = 450
            }else if(velo.value >= 80 && velo.value < 90){
                quilometros = '60'
                multa = 550
            }else if(velo.value >= 90 && velo.value < 100){
                quilometros = '60'
                multa = 650
            }else if(velo.value >= 100 && velo.value < 100){
                quilometros = '60'
                multa = 850
            }else if(velo.value >= 100 ){
                quilometros = '60'
                multa = 1200
                preso = 'seu carro sera apreendido'
            }
        }else if(km[3].checked){
            if(velo.value > 80 && velo.value < 90){
                quilometros = '80'
                multa = 750
            }else if(velo.value >= 90 && velo.value < 100){
                quilometros = '80'
                multa = 850
            }else if(velo.value >= 100 && velo.value < 110){
                quilometros = '80'
                multa = 950
            }else if(velo.value >= 110 && velo.value < 120){
                quilometros = '80'
                multa = 1050
            }else if(velo.value >= 130 && velo.value < 140){
                quilometros = '80'
                multa = 1150
            }else if(velo.value >= 140 ){
                quilometros = '80'
                multa = 2100
                preso = 'seu carro sera apreendido'
        }
        }
        res.innerHTML = ` voce estava a ${velo.value}km/h em uma rodovia de ${quilometros}km/h e ira receber uma multa de R$${multa} ${preso} `
    }
}
