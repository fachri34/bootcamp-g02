let Data = function (nama) {
    this.nama = nama
    this.hp = 100
    this.xp = 0
    this.level = 1
}


Data.prototype.diserang = function () {
    if(this.hp) {
        return  this.hp -= 23
    } else if (this.hp == 0) {
        return "Game Over"
    } else {
        return "error"
    }
}

Data.prototype.serang = function () {
    if(this.xp < 100) {
        return this.xp += 13
    }else if(this.xp >= 100){
        let levelUp = this.level + 1
        return "level " + levelUp + " " + "dengan sisa xp" + " " + this.xp % 13
    }else{
        return "error"
    } 
        
}
let main = new Data("Sanusi")
console.log(main.diserang())
console.log(main.serang())
