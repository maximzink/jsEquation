

function quadric(a,b,c){
    
    const descriminant = (Math.pow(b,2))-(4*a*c);
    if (descriminant<0){
        return "the equation has no solution";
    }
    else if(a==0){
        return "It is linear equation";
        
    } else if(descriminant>0){
    const x1 = (-b - Math.sqrt(descriminant))/ (2*a);
    const x2 = (-b + Math.sqrt(descriminant))/ (2*a);
    
    const solution = "x1= " + x1 + "\nx2= " +x2;
    return solution;
    }
}

const a = parseFloat(prompt("Enter first number"));
const b = parseFloat(prompt("Enter second number"));
const c = parseFloat(prompt("Enter third number"));

const solution = quadric(a,b,c);

alert(solution);

