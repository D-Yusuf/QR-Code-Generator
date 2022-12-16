var form = document.getElementById("myForm")

let imageHeight = 300
let imageWidth = 300
console.log(imageWidth);

form.addEventListener('submit', function (e){
    // Prevents input from being empty
    e.preventDefault()

    var search = document.getElementById("search").value

    // Removes space between two words
    var originalName = search.split(' ').join('')
    

    fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${search}`)
    // .then((result) => result.png())
    .then((data)=> {
        console.log(data)
        let downloadCode = `<img class="image" id="qrCode" src="https://api.qrserver.com/v1/create-qr-code/?size=${imageHeight}x${imageWidth}&format=png&data=https://${search}" alt="QRCODE">`
        console.log(downloadCode);
        
        document.getElementById("result").innerHTML = `
        <div class="qrImage">
                <img class="image" id="qrCode" src="https://api.qrserver.com/v1/create-qr-code/?size=${imageHeight}x${imageWidth}&format=png&data=https://${search}" alt="QRCODE">
    
            </div>
            <!-- DOWNLOAD BUTTON -->
            <div class="download">           
                <a download="${search}.png" id="downloadButton" target="_blank" 
                href="./api.qrserver.com/v1/create-qr-code/https://api.qrserver.com/v1/create-qr-code/?size=${imageHeight}x${imageWidth}&format=png&data=https://${search}">
                <button class="btn btn-primary mt-4">Download</button>
            </a>
        </div>
    
        `


    })
})