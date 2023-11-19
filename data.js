const fs = require("fs")

const update = (fname , lname , age , city)=>{
    const allData = loadData()

    const update = allData.filter((obj)=> {
        return obj.fname=== fname , obj.lname ===lname , obj.age===age , obj.city= city;
    })
    allData.push({
        fname : fname,
        lname : lname,
        age   : age,
        city  : city,
    })
    saveallData(allData)
}

const loadData = () => {
    const dataJson = fs.readFileSync('file1.json').toString()
    return JSON.parse(dataJson)
    // try {
    //     const dataJson = fs.readFileSync('file1.json').toString()
    //     return JSON.parse(dataJson)
    // } catch {
    //     return []
    // }
 }

 const saveallData = (allData) => {
    const saveallDataJson = JSON.stringify (allData)
    fs.writeFileSync ('file1.json' , saveallDataJson )
 }

 module.exports = {
    update , 
    
 }