function btnToggle(){
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');

    if(para.style.display != 'none'){
        para.style.display = 'none';
    }

    else{
        para.style.display = 'block';
    }
}

function displayTime(){
    time = new Date();
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000);

// break line ----------------- 

let jsonOBJ={
    name: `kanishk`,
    enroll: 012,
    uni: `GGSIPU`,
    course: `CSE`,
}
console.log(jsonOBJ);

let jsonSTR= JSON.stringify(jsonOBJ);
console.log(jsonSTR);

jsonSTR= jsonSTR.replace(`kanishk`, `srk`);
console.log(jsonSTR);

newjsonOBJ= JSON.parse(jsonSTR);
console.log(newjsonOBJ);

// let a=1;
// let b=100;

// let random= a + (b-a)*Math.random();
// console.log(random);

// console.log(Math.sin(Math.PI))
// console.log(Math.sin(Math.PI/2))
// console.log(Math.cos(Math.PI/2))
// console.log(Math.cos(Math.PI))
// console.log(Math.tan(Math.PI))

// console.log(Math.abs(-90.8));

// console.log(Math.ceil(98.7));
// console.log(Math.floor(98.7));

// console.log(Math.pow(2,10));
// console.log(Math.sqrt(10));


// let a=Math.PI;
// let b=Math.E;

// console.log(a);
// console.log(b);
// console.log(`rounded values below:`);
// console.log(Math.round(a));
// console.log(Math.round(b));


// let sum = (a,b) => a+b;
// let half = a => a/2;



// let greet = () => console.log(`hi!`);


/* let student={
    name: `kanishk`,
    enroll: 012,
    collg: `MAIT`,
    uni: `GGSIPU`,
    course: `CSE`,
}

for(key in student){
    console.log(`the ${key} of student is ${student[key]}`);
} */

/* let friends = ["rachel", "monica", "chandler", "joe", "phoebe", "ross"];

for(element of friends){
    console.log(`hello ` + element + ` again`);
} */


 /*
friends.forEach(function f(element){
    console.log(`hello ` + element);
}); */

/* alert(`Hi Human! This is the Computer speaking :)`);

let name=prompt(`Please enter your Human ID so that we can ensure your verification`, `Homo-sapien XYZ`);
console.log(name);

let enter=confirm(`So, do you want to enter the realm of Web-verse?`);
if(enter){
    alert(`Welcome ` + name + ` :)`);
    console.log(`Welcome ` + name + ` :)`);
}

else{
    alert(`Thanks, continue roamimg the Human-verse :)`)
    console.log(`Thanks, continue roamimg the Human-verse :)`)
}
 */


/* /function greater(a,b){
    if(a>b){
        console.log(a + ` is greater than ` + b); 
    }

    else if(a==b){
        console.log(a + ` equals ` + b);
    }

    else{
        console.log(a + ` is less than ` + b);
    }
} *

// greater(12,67);

/* console.log(`hello world!`);

let name0=`Kanishk`;
let name1=`Vincent`;
let name2=`Mia`;
let name3=`Marcellus`;
let greeting=`hello!`;

function greet(name,greeting){
    console.log(greeting +` `+ name);
}

greet(name0,greeting);
greet(name1,greeting);
greet(name2,greeting);
greet(name3,greeting); */

/* <!--script log-->
    <!--
        var a=36;
        var b="hello";
        
        console.log(a);
        console.log(b);

        console.log("i am printing 'a' whose value is: "+(a)+" and 'b' which: "+(b))
    
        var temp=`${a} and ${b}`;
        console.log(temp);

        var len=b.length;
        console.log(`the length of string is 'b' is: ${len}`);

        console.log(`hello world\n no not you!`)

        var str=`this is a string`;
        var position=str.indexOf('is');
        console.log(position);

        position=str.lastIndexOf(`is`);
        console.log(position);

        var substr1=str.substr(3,5);
        console.log(substr1);

        var replaced=str.replace(`string`, `Kanishk`);
        console.log(str);
        console.log(replaced);

        console.log(str.toUpperCase());
        console.log(str.toLowerCase());

        var newString=str.concat(`, now this is smoething new!`);
        console.log(newString);

        var random=`     hello   world!     `;
        console.log(random);
        console.log(random.trim());

        var char=str.charAt(5);
        var code=str.charCodeAt(5);
        console.log(char);
        console.log(code);

        console.log(str[3]);

        let age=18;
        if(age>18){
            console.log(`go have a martini!`);
        }
        else if(age==18){
            console.log(`you can have both! martin & ice tea!`);
        }
        else{
            console.log(`want a ice tea?`);
        }

        const weekday=`thursday`;
        switch (weekday) {
            case `monday`:
                console.log(`today is monday`);
                break;

            case `tuesday`:
                console.log(`today is tuesday`);
                break;

            case `wednesday`:
                console.log(`today is wednesday`);
                break;

            case `thursday`:
                console.log(`today is thursday`);
                break;

            case `friday`:
                console.log(`today is friday`);
                break;
        
            default:
                console.log(`enter valid weekday!`);
                break;
        }

        let arr=new Array(41,34,90,`Kanishk`,null,undefined);
        console.log(arr);
        console.log(arr.length);
        console.log(arr.sort());

        arr.push(`pushed element`);
        console.log(arr);

        let bio={
            name: `kanishk`,
            enroll: `012`,
            course: `CSE`,
            college: `MAIT`,
            uni: `GGSIPU`,
        } */