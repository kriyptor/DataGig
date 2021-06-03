const btn = document.querySelector('.btn');
const disp = document.querySelector('.status');
const dispcity = document.querySelector('.city');

btn.addEventListener('click', () => {
    let val = document.getElementById('search').value
    console.log(val);
    fetch('csvjson.json').then(response => response.json()).then(data => {
        const status = data[val]['Map Status'];
        const city = data[val]['City'];
        disp.innerHTML = status;
        dispcity.innerHTML = city;
        //console.log(data[val]['Map Status'])
    }).catch(()=>{
        alert('Wrong Pin Code!')
    })
})
