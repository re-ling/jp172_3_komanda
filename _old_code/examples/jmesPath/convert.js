function h(tagName, ...args) {
    var result = new Tag(tagName);
    //result.push(tagName);
    if (args.length > 0){
        if (args[0] instanceof Object && !(args[0] instanceof Tag)) {
            const attr = Object.assign(new Attr(), args.shift());
            result.push(attr);
        } else result.push(new Attr());
    }
    return result.concat(args);
};

class Attr extends Object {
    toString(){
        var result = "";
        for(var item in this){
            result += `; ${item} : ${this[item]}`;
        }
        return `{ ${result.substring(2)}}`;
    }
}

class Tag extends Array {
    toString(){
        var result = "";
        for (var item of this){
            result += `; ${item.toString()}`;
        }
        return `[ ${result.substring(2)} ]`;
    }
}

