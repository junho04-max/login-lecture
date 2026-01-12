const a = require("express");
const c = a();

c.get("/", (req, res) =>{
    res.send("쵸노 히나짱 결혼해주세요.");
});

c.listen(2000, function(){
    console.log("만카이")
});