import express from "express"

const app=express();
const port =3000;

app.get("/",(req,res) =>{
    const today = new Date("Feb 17, 2024 11:13:00");
    const day = today.getDay();

   
let type = "a weekday";
let adv = "It's time to work hard"

if (day===0 || day === 6){
     type = "The weekend";
 adv = "It's time to chill"
}

    res.render("index.ejs" , {
        dayType : type ,
        advice : adv
    });
});

app.listen(port,()=>{
    console.log(`port running on ${port}.`);
});