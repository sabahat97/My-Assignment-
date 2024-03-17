                          //  question {02}  \\
     
                     let Name  :   string  =  'Jungkook';
  
    console.log (`"Hello ${Name}, would you like to learn some phyton today?"`);


                         //  question  {03}   \\

                    let name1  :   string  = 'Jeon Jungkook';    

    console.log (name1.toLowerCase());           


                    let name2  :   string  = 'Jeon Jungkook';
    
    console.log (name2.toUpperCase());                

               
                    let name3  :   string  = 'Jeon Jungkook';

    console.log (name3.charAt(0).toUpperCase() + name3.slice (1).toLowerCase());     
    
    
                         //  question   {04}  \\

    let qoute  :  string =  '“Don’t tell me the moon is shining; show me the glint of light on broken glass.”';               
    
                  let author  :  string  = 'Anton Chekhov once said,';

    console.log (` ${author}  ${qoute} `);         
    
    
                       // question {05} repeat ex 4 \\


    let qoute1  :  string =  '“Don’t tell me the moon is shining; show me the glint of light on broken glass.”';            
    
                   let famous_author  :  string  = 'Anton Chekhov once said,';

    console.log (` ${famous_author}  ${qoute1} `);               


                   //  question {06}   \\

     let person_name  :  string  =  '\t\n  Suga  \t\n';

                 
                 console.log (person_name);           //  whitespace name  \\
                
                 
                 console.log (person_name.trim());    // strippingname \\
                   

                      
                 //   question {07 & 08 }    \\

                 
     let a  =  (5 + 3);
                                               //  add, sum, multi,divid  \\
             console.log (a);                 //       output 8            \\

      
     
     let b  =  (16 - 8);

             console.log (b);


    
      let c  =  (4 * 2);

             console.log (c);



     let d  =  (16 / 2);
       
             console.log (d);


                 //   question {09}   \\  

    
                 let FavoriteNumber  :  number  = 6;
     
     let message  :  string  = (`${FavoriteNumber} is my lucky number" `)

                 console.log (message);


                 //  question  {10}  adding comments  choose two programs \\
           
     /* this is sabahat 
      03 - march - 2024 */   
     console.log ('Hi! how are you?');

      // this is sabahat 
     // 03 - march - 2024 
     console.log ('I like to learn programming');


                 //     question {11}   \\               
                 

let Friendnames  :  string []  = ['Miraal', 'Mahanoor', 'Kinza', 'Fabiha'];

  for (let i=0; i<Friendnames.length; i++) {
              
   console.log (Friendnames [i]);
}


                //     question  {12}    \\     

let greeting  :  string []  = ['Miraal', 'Mahanoor', 'Kinza', 'Fabiha'];


 let invite   :  string     =  '!Hey, it is party time lets be celebrate my birthday bash tomorrow!.'
                
  for (let i=0; i<Friendnames.length; i++) {
              
     console.log (greeting [i] + invite);
  }

         
                //      queation  {13}     \\


 let my_favorite_transport  :  string  =  ' I would like to own a Revo. '              

          console.log (my_favorite_transport);


                //      question {14}          \\


let guest_member : string [] = ['Miraal', 'Mahanoor', 'Kinza', 'Fabiha'];       
guest_member.forEach(guest_member => {
        console.log (`dear ${guest_member}, please join and joy my dinner at 10.pm? `)
});


                //       question  {15}     \\

                
let absentGuest : string = 'fabiha';

              console.log (`${absentGuest}, can't make it to dinner.`);


let newGuest : string = 'sara';

   guest_member[guest_member.indexOf(absentGuest)] = newGuest;
  
    
             console.log(`${newGuest}, please join and joy my dinner at 10.pm? `);


                //          question {16}      \\


                let guests: string[] = ['Miraal', 'Mahanoor', 'Kinza','Sara'];
                console.log("Great news! I found a bigger dinner table!");
                
                // Adding more guests
                
                guests.unshift('Asma');
                guests.splice(guests.length / 2, 0, "Bushra");
                guests.push("Lubna");
                
                guests.forEach(guest => {
                    console.log(`Dear ${guest}, would you like to join me for dinner?`);
                });
                              


                                    //   question {17}      \\

console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests);   


                   //   question {18}         \\


let places: string[] = ["South korea", "Saudi Arab", "England", "Norway", "thailand"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);
          


                     //            question   {19}     \\


let guest_member1 : string [] = ['Miraal', 'Mahanoor', 'Kinza', 'Fabiha'];       
guest_member1.forEach(guest_member => {
        console.log (`dear ${guest_member1},invitation for dinner, Please being part of us and enjoy every moment. `)
});                     


                 // question {20}     \\

let liked : string[ ] = [ 'South Korea ', 'K2,Mountain', 'Nile river', 'Arab', 'Madina', 'Arbi'] 

console.log (`i would like to go ${liked[0]}\ni wanna like to see ${liked[1]}\ni would like to go ${liked[2]} in egpt \n${liked[3]} is my favorite country \ni want to live in ${liked [4]}\ni love to speak in ${5} language`);

        
               //   question {21}         \\

let data :{

       name        :   string
       age         :   Number
       isStudent   :   boolean
       null        :   null
       undefined   :   undefined
}={

      name       : 'kinza' ,
       age       : 18,         // primitive data type
     isStudent   : true ,
      null       : null,
      undefined  :undefined 
}               
               console.log (data);



               //   question {22}      \\

    // index error
    
    

    let names : string [] = ['ASIA , NAIMAL, FABIHA , SARA'];
   
    console.log (names[4]);
     names[3]= ' SARA';
     console.log (names[3]);


 // Correcting the error by accessing a valid index.



              //  question   {23}           //


let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
         console.log(car == 'subaru');                 // True

 console.log("is car == 'subaru?' i predict is true");  //true 
         console.log (car == 'subaru');

console.log("is car == 'subaru?' i predict is true");  //true 
         console.log (car == 'subaru');


console.log("is car == 'subaru?' i predict is true");  //true 
       console.log (car == 'subaru');


console.log("is car == 'subaru?' i predict is true");  //true 
        console.log (car == 'subaru');



console.log("Is car == 'toyota'? I predict False.");
         console.log(car == 'toyota');             // False`     

console.log ("is car == 'mira'? i predict false" );
         console.log (car == 'mira');              // false

console.log ("is car == 'revo'? i predict false");
       console.log (car == 'revo');
       
console.log ( "is car == ' mitsubishi Ek wagon'?")     // false
        console.log (car == 'Mitsubishi Ek Wagon');

console.log ('is car == "civic"')              // false 
        console.log (car == 'civic')        



        //             question   {24}      \\



        // Equality with strings
 let x = 'apple';
 let y = 'apple';
 let z = 'Apple'      



console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("apple" == "Apple"); // False 

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests

console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True


                        // question   {25}      \\
//if statment

let aliencolor : string = 'green';
if (aliencolor == 'green'){
  console.log ('conguration you have earned 5 points');

};

let alienColor : string = ' red';
if (alienColor == 'green'){
  console.log ('no output show')
};



                 //    if else statements    queston {26}               \\
 
let Aliencolor : string = 'green';
if (Aliencolor == 'green'){
  console.log('you have earned 5 points for shooting the aliens')
} else{
  console.log ('you earned 5 points')
};


Aliencolor = 'red';
if (Aliencolor == 'green'){
  console.log ('you have earned 10 points')
}else {
  console.log ('you earned 5 points')
};



       
                 // if else-chain     question  {27}     \\

//green
let alientcolor : string = 'green'; 
if ( aliencolor == 'green')
{console.log ('you have earned 5 points')}
else if ( aliencolor == 'red'){
   console.log ('you have earned 8 points')
 };

//red
let Aliencolorr : string = 'red';
if ( Aliencolorr == 'red'){
 console.log ('you have earned 10 points')
} else if (Aliencolorr == 'green'){
 console.log ('you have earned 8 points')

};

//yellow
let aaliencolor : string = 'yellow';
if (aaliencolor == 'yellow'){
 console.log ('you have earned 15 points')
} else if (aaliencolor == 'red'){
 console.log ('you have earned 8 points')
};


              //    question  {28}     \\


let age : number = 25;
if (age < 2){
    console.log ('The person is a baby');
}else if (age >= 2 && age < 4){
    console.log('The person is a toddler');
}else if (age >=4 && age <13){
    console.log ('The person is a kid');
} else if (age >= 13 && age <20){
    console.log('The person is a teenager');
}else if (age >= 20 && age <65){
    console.log ('The person is an adult');
}else{
   console.log('The person is an elder');
}


           // question {29}           \\


let favoriteFruits : string [] = ['watermelon', 'strawberry', 'blueberry']    
if (favoriteFruits.includes('apple')){
    console.log ('i really like apple')
}       
if (favoriteFruits.includes ('watermelon')){
    console.log ('i really like watermelon')
}
if (favoriteFruits.includes('mango')){
    console.log ('i really like mango')
}
if (favoriteFruits.includes('strawberry')){
    console.log('i really like strawberry')
}
if (favoriteFruits.includes('blueberry')){
    console.log ('i really like blueberry')
};


            //      question{30}           \\

let helloAdmin:string[]= ['Eric', 'Johns', 'Admin', 'Jack', 'Illy','Kendall']
           console.log(`Hello ${helloAdmin[2]},would you like to see a status report?`);
           console.log (`Hello {helloAsmin[0]},thank you for logging in again.`);
           console.log(`Hello ${5},thank you for logging in again`);
           console.log (`Hello ${helloAdmin[3]},thank you for logging in again`);
           console.log (`Hello ${helloAdmin[4]},thank you for logging in again`);

                    
             //    question  {31}

let usernames : string [] =[];
if (usernames.length===0){
  console.log ('we need to find some users!')
} else{console.log ( //greet user 
)} // remove all username ensure the message "we need to find some users! "



           //           question  {32}          \\

let current_user : string [] = ['Eric', 'Shams', 'Aqsa', 'Asma', 'Fatima','Kinza'] ;
          
let new_user :  string [] = ['Eric', 'Johns', 'Admin', 'Jack', 'Illy','Kendall'];

new_user.forEach(newUser => {
  if (current_user.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
      console.log(`${newUser} will need to enter a new username.`);
  } else {
      console.log(`${newUser} is available.`);
  }
});




              //        question  {33}     \\

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});              



         //     queston {34}

 let pizzas : string []=['afgani pizza' ,'creamy chesse pizza', 'spicy pizza', 'chicken tikka pizza']     
 
 pizzas.forEach(pizzas => {
  console.log (`i like ${pizzas}`);});
  console.log ('i love pizza not too much!');


                 //      question {35}      \\


let animals =['cat','dog' ,'rabbit']
animals.forEach (animals => {
  console.log (`A ${animals} would make a great pet like a`)
});console.log ('Any of these animals would make a great pet!'

 )           
 
 
 
           //      question {36}      \\

 function make_shirt(size: string, message: string): void {
      console.log(`A ${size} shirt will be printed with the following message: ${message}`);
 }
        
  make_shirt("medium", "BTS!");


          //   question {37} \\

function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
  console.log(`A ${size} shirt will be printed with the following message: ${message}`);
}

// Making a large shirt with the default message
make_shirt();

// Making a medium shirt with the default message
make_shirt('medium');

// Making a shirt of any size with a different message
make_shirt("small", "Keep coding!");
       

   //       question {38}      \\ 


function describe_city(city : string = 'Seoul', country : string = 'South Korea'): void {
  console.log (`A ${city} is in ${country}`);
}
describe_city();

describe_city('Busan');

describe_city("Califonia","US");

 

    //      question {39}  \\

    function city_country(city : string = "lahore", country : string = "pakistan"): string{ 
      return city + ", "+ country
    }
   console.log ('Lahore,',  'Pakistan');
   console.log ('Istanbul,','Turkey');
   console.log ('Bangkok,', 'Thailand');


           //question   {40}    \\
           
           
 function make_album(artist: string, title: string, tracks ?: number) {
  let album = { artist, title };
  if (tracks) {
      album['tracks'] = tracks;
  }
  return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));


           //  question {41}    \\

let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);           


               //   question {42}     \\ 

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
      magicians[i] = magicians[i] + " the Great";
  }
}

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names

           

     //    question {43}  \\


     let maGicians: string[] = ["Alice", "David", "Chris"];

     function make_great(magicians: string[]): string[] {
         let greatMagicians = [];
         magicians.forEach(magician => {
             greatMagicians.push(`${magician} the Great`);
         });
         return greatMagicians;
     }
     
     let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
     console.log("Original magicians:");
     show_magicians(magicians); // Shows original names
     console.log("Great magicians:");
     show_magicians(greatMagicians); // Shows modified names
     



         //  question {44}        \\  


function make_sandwich(...items: string[]) {
  console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");


 //        question {45}   \\


 function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
  let car = { manufacturer, model };
  options.forEach(([key, value]) => car[key] = value);
  return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));