function getRandomId(){
    //returns a 4 character string
    //every character is a random number between 0-9 
    

        let id="";
        for(let i=0;i<4;i++){
            let number = Math.floor(Math.random()*10)
            
            id+=number;
        }
        //console.log(id);
        return parseInt(id);
    }


module.exports={
    getRandomId,
}