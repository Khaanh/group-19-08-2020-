document.addEventListener('DOMContentLoaded', function () {

    // callback

    // function loadScript(src, callback) {
    //     let script = document.createElement('script');
    //     script.src = src;
    //     script.onload = () => {
    //         callback(null, script)
    //     }
    //     script.onerror = () => {
    //         callback(new Error('error'), null)
    //     }
    //     document.head.append(script);
    // }
    // loadScript('./scripts/one.js', (error, data)=>{
    //     console.log(error, data);
    //     one();

    //     loadScript('./scripts/two.js', (error, data)=>{
    //         console.log(error, data);
    //         two();

    //         loadScript('./scripts/three.js', (error, data)=>{
    //             console.log(error, data);
    //             three();
    //         });
    //     });
    // });


    // let promise = new Promise((resolve, reject) => {
    //     console.log('procces is coming');
    //     setTimeout(() => {
    //         resolve('done')
    //     }, 3000)

    //     setTimeout(() => {
    //         reject('no job')
    //     }, 4000)
    // });

    // promise.then(
    //     (result) => {
    //         console.log(result);
    //         console.log(promise);

    //     },
    //     (error) => {
    //         console.log(error);
    //     }
    // )



    function loadScript(src) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let script = document.createElement('script');
                script.src = src;
                script.onload = () => {
                    resolve(script);
                }
                script.onerror = (e) => {
                    reject(new Error('error'));
                }
                document.head.append(script);
            },3000)
        })
    }

    loadScript('./scripts/one.js')
        .then((data) => {
            console.log(data)
            one()
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            console.log('finally')
        })
        

})