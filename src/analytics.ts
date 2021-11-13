let logged

function sendAnalytics (data: string){
    console.log(data)
    logged = true
    logged = 'max'
    console.log(logged)
}

sendAnalytics('the data')