async function work() {
    //coding here
    var axios = require('axios')
    var authorize = {
        Authorization: 'Bearer someToken'
    }
    var response1 = await axios.get('https://reqres.in/api/users?page=1', {
        header: authorize
    })
    var response2 = await axios.post('https://reqres.in/api/users', {
        name: 'morpheus',
        job: 'leader'
    }, {
        header: authorize
    })
}

new Promise(async (resolve) => {
    resolve(await work())
}).then(() => {
    console.log('Successful')
})