let piramide = 5;
for(let i = 1; i <= piramide; i++){ 
    for(let a = 1; a <=(piramide - i); a++){
        console.log('');
    }
    for(let b = 1; b <= i; b++){
        console.log("# ");
    }
}