function time2(){
    Date.prototype.addHours= function(h){
        this.setTime(this.getTime()+h*60*60*1000);
        return this;
    }

    var dist = parseFloat(document.getElementById('bits').value)
    var d1 = new Date().addHours(dist/2)
    var d2 = new Date().addHours(dist/2+1)
    msg = "זמן משימה: " + d1.toLocaleTimeString() +"\n" + "זמן גג בטיחותי: " + d2.toLocaleTimeString()
    window.alert(msg)
}

function time25(){
    Date.prototype.addHours= function(h){
        this.setTime(this.getTime()+h*60*60*1000);
        return this;
    }

    var dist = parseFloat(document.getElementById('bits').value)
    var d1 = new Date().addHours(dist/2.5)
    var d2 = new Date().addHours(dist/2.5+1)
    msg = "זמן משימה: " + d1.toLocaleTimeString() +"\n" + "זמן גג בטיחותי: " + d2.toLocaleTimeString()
    window.alert(msg)
}

function time3(){
    Date.prototype.addHours= function(h){
        this.setTime(this.getTime()+h*60*60*1000);
        return this;
    }

    var dist = parseFloat(document.getElementById('bits').value)
    var d1 = new Date().addHours(dist/3)
    var d2 = new Date().addHours(dist/3+1)
    msg = "זמן משימה: " + d1.toLocaleTimeString() +"\n" + "זמן גג בטיחותי: " + d2.toLocaleTimeString()
    window.alert(msg)
}

function time4(){
    Date.prototype.addHours= function(h){
        this.setTime(this.getTime()+h*60*60*1000);
        return this;
    }

    var dist = parseFloat(document.getElementById('bits').value)
    var d1 = new Date().addHours(dist/4)
    var d2 = new Date().addHours(dist/4+1)
    msg = "זמן משימה: " + d1.toLocaleTimeString() +"\n" + "זמן גג בטיחותי: " + d2.toLocaleTimeString()
    window.alert(msg)
}

function time5(){
    Date.prototype.addHours= function(h){
        this.setTime(this.getTime()+h*60*60*1000);
        return this;
    }

    var dist = parseFloat(document.getElementById('bits').value)
    var d1 = new Date().addHours(dist/5)
    var d2 = new Date().addHours(dist/5+1)
    msg = "זמן משימה: " + d1.toLocaleTimeString() +"\n" + "זמן גג בטיחותי: " + d2.toLocaleTimeString()
    window.alert(msg)
}

function time6(){
    Date.prototype.addHours= function(h){
        this.setTime(this.getTime()+h*60*60*1000);
        return this;
    }

    var dist = parseFloat(document.getElementById('bits').value)
    var d1 = new Date().addHours(dist/6)
    var d2 = new Date().addHours(dist/6+1)
    msg = "זמן משימה: " + d1.toLocaleTimeString() +"\n" + "זמן גג בטיחותי: " + d2.toLocaleTimeString()
    window.alert(msg)
}