//cargando api


async function loadApi(ip) {

    const access_key = "";
    const info = await fetch(`http://api.ipapi.com/${ip}?access_key=${access_key}`)
    const infoJson = await info.json()
    return infoJson
}


function Element1(info) {
    return `<div >
   

        <div>

        <h2>LOCATION</h2>

<div>

            <span>
                <h3>LATITUDE</h3>
                <p>${info.latitude}</p>
            </span>


            <span>
                <h3>LONGITUDE</h3>
                <p>${info.longitude}</p>
            </span>



        </div>


        <div>
            <span>
                <h3>CITY</h3>
                <p>${info.region_name} , (${info.region_code}  )  ${info.location.country_flag_emoji}</p>
            </span>

            <span>
                <h3>LANGUAJE</h3>
                <p>${info.location.languages[0].native}</p>
            </span>
            <span>
                <h3>CALLING CODE</h3>
                <p>${info.location.calling_code}</p>
            </span>

        </div>


        </div>




        
    
    </div>`
}

function Element2(info){
    return `<div>
    
    
    <h2>CONNECTION</h2>
    
    <span>
    <h3>IP ADRESS</h3>
    <p>${info.ip}</p>
</span>

<span>
    <h3>Type</h3>
    <p>${info.ip}</p>
</span>

    
    
    
    
    </div>`
}



async function prueba() {


    let info = await loadApi("161.185.160.93");
    

    
    document.getElementById("superOp").classList.add("hidden")







    

    document.getElementById("button").addEventListener("click", async e => {

        
            document.getElementById("noroot").innerHTML="<h2>Loading...</h2>"
            info = await loadApi(document.getElementById("value").value);

            console.log(info)

            if(info.location){
                document.getElementById("noroot").innerHTML = Element1(info);
            
            }else if(info.error.code== 106){
                document.getElementById("noroot").innerHTML = `<h2 class="errors">INVALID IP</h2>`;

            }else if(info.error.code== 404){
                document.getElementById("noroot").innerHTML = `<h2 class="errors">INGRESA UN IP</h2>`;

            }else if(info.error.code== 103){
                document.getElementById("noroot").innerHTML = `<h2 class="errors">DONT EXIST</h2>`;

            }
            
    document.getElementById("superOp").classList.remove("hidden")
            
            
            
    

        
        
        
        



      

    })

    document.getElementById("conn").addEventListener("click", async e=>{
        document.getElementById("noroot").innerHTML="<h2>Loading...</h2>"
        info = await loadApi(document.getElementById("value").value);
        document.getElementById("noroot").innerHTML = Element2(info);
    })



    document.getElementById("loca").addEventListener("click", async e=>{
        document.getElementById("noroot").innerHTML="<h2>Loading...</h2>"
        info = await loadApi(document.getElementById("value").value);
        document.getElementById("noroot").innerHTML = Element1(info);
    })


}



prueba()



