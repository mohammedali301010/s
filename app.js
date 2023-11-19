const fs = require("fs")

const person1 = {
    fname: "Ahmed",
    lname: "Hossam",
    age:20,
    city:"Alex"
}

const person1json = JSON.stringify(person1)

fs.writeFileSync("file2.json" , person1json)

console.log(fs.readFileSync("file2.json").toString())

const person1obj = JSON.parse(person1json)





fs.writeFileSync("file1.json" , person1json)
const data = require("./data")
const yargs = require("yargs")
yargs.command({
    command:"update",
    describe:"to update item",
    handler: (x)=>{
        data.update (x.fname , x.lname , x.age , x.city)
    }
})
yargs.parse()
