
const Scissor = document.getElementById("scissor");
const Paper = document.getElementById("paper");
const Rock = document.getElementById("rock")
const playerChose = document.getElementById("playerChose");//playerchoice
const compchoise = document.getElementById("compiuterChoise");//compiuterchoice
const result = document.getElementById('result');//final result win, draw or lose
const firsPlayer = document.getElementById("firstplayer");//result box for first player
const secondPlayer = document.getElementById("secondplayer");//result box for second player
const Form = document.getElementById("submit"); // game up to 7, 12, 15,20
const list = document.getElementById("list");
const svg = document.getElementById("svgg");


//toggle responsive navbar icon
function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
     x.className += " responsive";
   } else {
     x.className = "topnav";
   }
 }


Scissor.addEventListener("click", function(){
  //show scissor icon inside playerchoice div
 playerChose.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="100%" ><defs><path d="M392.95 229.48C392.95 260.36 368.41 285.44 338.19 285.44C307.96 285.44 283.42 260.36 283.42 229.48C283.42 198.6 307.96 173.53 338.19 173.53C368.41 173.53 392.95 198.6 392.95 229.48Z" id="a5S9WKUGw6"></path><path d="M47.13 11.83C18.85 4.84 3.14 0.95 0 0.18C0 0.18 0 0.18 0 0.19C0 0.19 0 0.19 0 0.2C0 0.2 0 0.2 0 0.2C0 0.2 0 0.2 0 0.2C0 0.22 0 0.24 0 0.24C0 0.25 0 0.25 0 0.25C0 0.24 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C6.28 1.74 21.99 5.62 47.13 11.83Z" id="gWcIIOOKD"></path><path d="M324.09 223.4C328.46 217.19 330.89 213.74 331.37 213.05C328.35 212.54 322.79 212.43 318.23 217.03C311.05 224.28 308.14 239.95 307.54 243.74C309.36 245.58 323.96 260.33 325.78 262.17C329.07 261.89 343.61 259.93 357.63 245.77C357.78 245.46 361.19 242.92 358.4 240.1C357.07 238.75 354.86 238.78 353.5 240.15C352.81 240.85 351.73 240.86 351.05 240.18C350.38 239.49 350.38 238.4 351.08 237.7C351.57 237.2 355.54 233.2 356.03 232.7C358.55 230.16 356.17 225.87 352.66 226.9C352.26 227.25 349.01 230.05 348.61 230.41C347.87 231.06 346.77 230.95 346.16 230.23C345.53 229.5 345.66 228.39 346.38 227.76C360.54 215.21 358.47 216.72 367.59 208.09C370.99 205.23 366.71 200.16 363.35 203.06C361.15 205.06 343.51 221.08 341.31 223.09C340.67 223.64 339.69 223.65 339.06 223.06C338.33 222.43 338.31 221.51 338.79 220.79C340.33 218.37 352.62 199.06 354.16 196.64C356.41 193.57 351.99 190.15 349.62 193.25C347.35 196.46 329.16 222.16 326.89 225.37C326.34 226.17 325.23 226.35 324.48 225.79" id="e2Rv8xjWJw"></path></defs><g><g><g><use xlink:href="#a5S9WKUGw6" opacity="1" fill="#f6efef" fill-opacity="1"></use><g><use xlink:href="#a5S9WKUGw6" opacity="1" fill-opacity="0" stroke="#d2a924" stroke-width="18" stroke-opacity="1"></use></g></g><g><use xlink:href="#gWcIIOOKD" opacity="1" fill="#3b4262" fill-opacity="1"></use><g><use xlink:href="#gWcIIOOKD" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#e2Rv8xjWJw" opacity="1" fill="#3b4262" fill-opacity="1"></use><g><use xlink:href="#e2Rv8xjWJw" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g></g></g></svg>` 
 compchoises();
 game("scissor")
});
Rock.addEventListener("click", function(){
   playerChose.innerHTML= `
   <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="100%" ><defs><path d="M392.95 229.48C392.95 260.36 368.41 285.44 338.19 285.44C307.96 285.44 283.42 260.36 283.42 229.48C283.42 198.6 307.96 173.53 338.19 173.53C368.41 173.53 392.95 198.6 392.95 229.48Z" id="h4H9izsDw1"></path><path d="M47.13 11.83C18.85 4.84 3.14 0.95 0 0.18C0 0.18 0 0.18 0 0.19C0 0.19 0 0.19 0 0.2C0 0.2 0 0.2 0 0.2C0 0.2 0 0.2 0 0.2C0 0.22 0 0.24 0 0.24C0 0.25 0 0.25 0 0.25C0 0.24 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C6.28 1.74 21.99 5.62 47.13 11.83Z" id="gWcIIOOKD"></path><path d="M350.77 205.68C345.5 197.02 337.26 203.29 337.26 203.29C330.94 194.81 323.01 202.67 323.01 202.67C309.33 201.3 309.86 211.72 309.86 211.72C309.54 215.03 311.79 225.28 311.79 225.28C309.76 219.37 305.36 224.27 305.36 224.27C299.95 232.06 304.02 236.31 304.02 236.31C311.34 244.31 326.94 253.91 326.94 253.91C332.59 256.92 330.2 259.61 330.2 259.61C332.48 259.26 343.87 257.51 364.37 254.35C364.84 250.73 365.1 248.71 365.15 248.31C370.35 233.67 364.14 214.99 364.14 214.99C363.26 204.62 353.44 207.54 350.77 205.68Z" id="dns1oZPgd"></path></defs><g><g><g><use xlink:href="#h4H9izsDw1" opacity="1" fill="#f6efef" fill-opacity="1"></use><g><use xlink:href="#h4H9izsDw1" opacity="1" fill-opacity="0" stroke="#fc1515" stroke-width="18" stroke-opacity="1"></use></g></g><g><use xlink:href="#gWcIIOOKD" opacity="1" fill="#3b4262" fill-opacity="1"></use><g><use xlink:href="#gWcIIOOKD" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#dns1oZPgd" opacity="1" fill="#3b4262" fill-opacity="1"></use><g><use xlink:href="#dns1oZPgd" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g></g></g></svg>
   `
   compchoises();
    game("rock")
});
Paper.addEventListener("click", function(){
    playerChose.innerHTML =`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="100%"><defs><path d="M338.19 285.44C307.96 285.44 283.42 260.36 283.42 229.48C283.42 198.6 307.96 173.53 338.19 173.53C368.41 173.53 392.95 198.6 392.95 229.48C392.95 260.36 368.41 285.44 338.19 285.44Z" id="e3WJRUBaJc"></path><path d="M338.19 285.44C307.96 285.44 283.42 260.36 283.42 229.48C283.42 198.6 307.96 173.53 338.19 173.53C368.41 173.53 392.95 198.6 392.95 229.48C392.95 260.36 368.41 285.44 338.19 285.44Z" id="c47GhddYg4"></path><path d="M0 0.18C0 0.18 0 0.18 0 0.19C0 0.19 0 0.19 0 0.2C0 0.2 0 0.2 0 0.2C0 0.2 0 0.2 0 0.2C0 0.22 0 0.24 0 0.24C0 0.25 0 0.25 0 0.25C0 0.24 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C6.28 1.74 21.99 5.62 47.13 11.83C18.85 4.84 3.14 0.95 0 0.18Z" id="d93MHxK9Yp"></path><path d="M0 0.18C0 0.18 0 0.18 0 0.19C0 0.19 0 0.19 0 0.2C0 0.2 0 0.2 0 0.2C0 0.2 0 0.2 0 0.2C0 0.22 0 0.24 0 0.24C0 0.25 0 0.25 0 0.25C0 0.24 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C6.28 1.74 21.99 5.62 47.13 11.83C18.85 4.84 3.14 0.95 0 0.18Z" id="b2wf5NNY0u"></path><path d="M499.4 250.67C493.83 241.72 486.84 250.02 486.84 250.02C474.79 248.57 475.26 259.56 475.26 259.56C474.97 263.05 476.96 273.86 476.96 273.86C475.17 267.63 471.29 272.8 471.29 272.8C466.52 281.01 470.11 285.5 470.11 285.5C476.56 293.93 490.31 304.05 490.31 304.05C495.28 307.23 493.18 310.07 493.18 310.07C495.18 309.7 505.22 307.85 523.28 304.52C523.69 300.7 523.92 298.58 523.97 298.15C528.55 282.71 523.07 263 523.07 263C522.3 252.07 513.65 255.15 511.3 253.19C506.65 244.06 501.78 251.17 499.4 250.67Z" id="awZMABkGE"></path><path d="M891.71 197.81C891.71 197.81 891.71 197.81 891.71 197.81C891.71 439.01 891.71 573.01 891.71 599.81C891.71 599.81 891.71 599.81 891.71 599.81C542.51 599.81 348.51 599.81 309.71 599.81C309.71 599.81 309.71 599.81 309.71 599.81C309.71 358.61 309.71 224.61 309.71 197.81C309.71 197.81 309.71 197.81 309.71 197.81C658.91 197.81 852.91 197.81 891.71 197.81Z" id="b1i2NGSZyx"></path><path d="M355.01 209.44C354.44 209.48 353.98 209.71 353.71 210.09C352.11 212.34 350.79 216.59 349.73 220C349.25 221.58 348.59 223.69 348.12 224.69C347.63 221.88 348.18 211.6 348.4 207.64C348.4 207.63 348.4 207.58 348.4 207.57C348.55 204.82 348.57 204.34 348.54 204.13C348.3 202.62 347.7 201.63 346.74 201.19C345.78 200.74 344.52 200.94 343.17 201.75C342.49 202.16 342.31 203.56 341.72 209.94C341.72 209.94 341.72 209.96 341.72 209.97C341.4 213.47 340.66 221.53 339.76 222.88C338.73 221 337.33 210.32 336.72 205.7C336.29 202.46 336.05 200.61 335.88 200.05C335.53 198.87 334.05 197.87 332.58 197.81C331.36 197.75 330.36 198.37 329.89 199.45C328.99 200.45 329.31 203.74 330.3 211.55C330.77 215.27 331.74 222.95 331.13 223.81C329.91 223.68 327.82 218.87 324.91 209.51C324.09 206.89 323.84 206.1 323.59 205.76C323.1 204.56 321.42 203.63 319.92 203.73C319.79 203.74 319.66 203.76 319.54 203.78C318.75 203.94 316.96 204.66 317.34 208.01C318.4 212.65 319.55 216.05 320.67 219.36C320.67 219.36 320.69 219.41 320.69 219.42C321.36 221.4 322 223.27 322.58 225.35C323.97 230.25 323.43 233.29 323.42 233.32C323.38 233.63 323.28 233.82 323.14 233.89C323.07 233.92 323.01 233.93 322.94 233.94C322.5 233.97 321.84 233.68 321.5 233.49C320.73 232 316.87 224.94 313.37 223.96C313.36 223.96 313.32 223.95 313.24 223.93C313.17 223.93 313.13 223.94 313.12 223.94C311.83 224.06 310.89 224.54 310.31 225.38C309.4 226.7 309.78 228.38 309.87 228.72C309.87 228.73 309.92 228.83 309.92 228.84C309.95 228.89 312.76 234 313.19 236.38C313.56 238.42 315.5 240.63 317.06 242.41C317.06 242.42 317.12 242.47 317.12 242.48C317.63 243.06 318.07 243.56 318.41 244.03C322.93 248.74 330.08 252.71 330.14 252.74C331.03 253.4 331.52 254.03 331.58 254.58C331.6 254.79 331.54 254.99 331.42 255.16C331.41 255.17 331.36 255.22 331.26 255.32L332.25 256.28L351.1 254.96C351.59 252.75 351.85 251.52 351.91 251.27C354.39 240.87 353.87 232 353.87 231.94C353.88 231.62 354.57 228.46 355.13 225.91C355.13 225.9 355.15 225.85 355.15 225.85C356.27 220.77 357.65 214.45 357.92 212.04C358.04 211.01 357.38 210.07 356.25 209.64C355.85 209.49 355.43 209.42 355.01 209.44Z" id="acUoPs8lX"></path></defs><g><g><g><use xlink:href="#e3WJRUBaJc" opacity="1" fill="#f6efef" fill-opacity="1"></use><g><use xlink:href="#e3WJRUBaJc" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#c47GhddYg4" opacity="1" fill="#000000" fill-opacity="0"></use><g><use xlink:href="#c47GhddYg4" opacity="1" fill-opacity="0" stroke="#3f24d2" stroke-width="18" stroke-opacity="1"></use></g></g><g><use xlink:href="#d93MHxK9Yp" opacity="1" fill="#3b4262" fill-opacity="1"></use><g><use xlink:href="#d93MHxK9Yp" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#b2wf5NNY0u" opacity="1" fill="#000000" fill-opacity="0"></use><g><use xlink:href="#b2wf5NNY0u" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#awZMABkGE" opacity="1" fill="#000000" fill-opacity="0"></use><g><use xlink:href="#awZMABkGE" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#b1i2NGSZyx" opacity="1" fill="#000000" fill-opacity="0"></use><g><use xlink:href="#b1i2NGSZyx" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#acUoPs8lX" opacity="1" fill="#3b4262" fill-opacity="1"></use><g><use xlink:href="#acUoPs8lX" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g></g></g></svg>`
      compchoises();
    game("paper");
});
//compiuter choice 
const  compchoises = () =>{
   const choises = ["paper", "rock", "scissor"];
   const randomNumb = Math.floor(Math.random()*3)
   const test = choises[randomNumb]
   //show compiuter choices with svg icons to the right side
   if(test === "paper"){
      compchoise.innerHTML=
       `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="100%"><defs><path d="M338.19 285.44C307.96 285.44 283.42 260.36 283.42 229.48C283.42 198.6 307.96 173.53 338.19 173.53C368.41 173.53 392.95 198.6 392.95 229.48C392.95 260.36 368.41 285.44 338.19 285.44Z" id="e3WJRUBaJc"></path><path d="M338.19 285.44C307.96 285.44 283.42 260.36 283.42 229.48C283.42 198.6 307.96 173.53 338.19 173.53C368.41 173.53 392.95 198.6 392.95 229.48C392.95 260.36 368.41 285.44 338.19 285.44Z" id="c47GhddYg4"></path><path d="M0 0.18C0 0.18 0 0.18 0 0.19C0 0.19 0 0.19 0 0.2C0 0.2 0 0.2 0 0.2C0 0.2 0 0.2 0 0.2C0 0.22 0 0.24 0 0.24C0 0.25 0 0.25 0 0.25C0 0.24 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C6.28 1.74 21.99 5.62 47.13 11.83C18.85 4.84 3.14 0.95 0 0.18Z" id="d93MHxK9Yp"></path><path d="M0 0.18C0 0.18 0 0.18 0 0.19C0 0.19 0 0.19 0 0.2C0 0.2 0 0.2 0 0.2C0 0.2 0 0.2 0 0.2C0 0.22 0 0.24 0 0.24C0 0.25 0 0.25 0 0.25C0 0.24 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C6.28 1.74 21.99 5.62 47.13 11.83C18.85 4.84 3.14 0.95 0 0.18Z" id="b2wf5NNY0u"></path><path d="M499.4 250.67C493.83 241.72 486.84 250.02 486.84 250.02C474.79 248.57 475.26 259.56 475.26 259.56C474.97 263.05 476.96 273.86 476.96 273.86C475.17 267.63 471.29 272.8 471.29 272.8C466.52 281.01 470.11 285.5 470.11 285.5C476.56 293.93 490.31 304.05 490.31 304.05C495.28 307.23 493.18 310.07 493.18 310.07C495.18 309.7 505.22 307.85 523.28 304.52C523.69 300.7 523.92 298.58 523.97 298.15C528.55 282.71 523.07 263 523.07 263C522.3 252.07 513.65 255.15 511.3 253.19C506.65 244.06 501.78 251.17 499.4 250.67Z" id="awZMABkGE"></path><path d="M891.71 197.81C891.71 197.81 891.71 197.81 891.71 197.81C891.71 439.01 891.71 573.01 891.71 599.81C891.71 599.81 891.71 599.81 891.71 599.81C542.51 599.81 348.51 599.81 309.71 599.81C309.71 599.81 309.71 599.81 309.71 599.81C309.71 358.61 309.71 224.61 309.71 197.81C309.71 197.81 309.71 197.81 309.71 197.81C658.91 197.81 852.91 197.81 891.71 197.81Z" id="b1i2NGSZyx"></path><path d="M355.01 209.44C354.44 209.48 353.98 209.71 353.71 210.09C352.11 212.34 350.79 216.59 349.73 220C349.25 221.58 348.59 223.69 348.12 224.69C347.63 221.88 348.18 211.6 348.4 207.64C348.4 207.63 348.4 207.58 348.4 207.57C348.55 204.82 348.57 204.34 348.54 204.13C348.3 202.62 347.7 201.63 346.74 201.19C345.78 200.74 344.52 200.94 343.17 201.75C342.49 202.16 342.31 203.56 341.72 209.94C341.72 209.94 341.72 209.96 341.72 209.97C341.4 213.47 340.66 221.53 339.76 222.88C338.73 221 337.33 210.32 336.72 205.7C336.29 202.46 336.05 200.61 335.88 200.05C335.53 198.87 334.05 197.87 332.58 197.81C331.36 197.75 330.36 198.37 329.89 199.45C328.99 200.45 329.31 203.74 330.3 211.55C330.77 215.27 331.74 222.95 331.13 223.81C329.91 223.68 327.82 218.87 324.91 209.51C324.09 206.89 323.84 206.1 323.59 205.76C323.1 204.56 321.42 203.63 319.92 203.73C319.79 203.74 319.66 203.76 319.54 203.78C318.75 203.94 316.96 204.66 317.34 208.01C318.4 212.65 319.55 216.05 320.67 219.36C320.67 219.36 320.69 219.41 320.69 219.42C321.36 221.4 322 223.27 322.58 225.35C323.97 230.25 323.43 233.29 323.42 233.32C323.38 233.63 323.28 233.82 323.14 233.89C323.07 233.92 323.01 233.93 322.94 233.94C322.5 233.97 321.84 233.68 321.5 233.49C320.73 232 316.87 224.94 313.37 223.96C313.36 223.96 313.32 223.95 313.24 223.93C313.17 223.93 313.13 223.94 313.12 223.94C311.83 224.06 310.89 224.54 310.31 225.38C309.4 226.7 309.78 228.38 309.87 228.72C309.87 228.73 309.92 228.83 309.92 228.84C309.95 228.89 312.76 234 313.19 236.38C313.56 238.42 315.5 240.63 317.06 242.41C317.06 242.42 317.12 242.47 317.12 242.48C317.63 243.06 318.07 243.56 318.41 244.03C322.93 248.74 330.08 252.71 330.14 252.74C331.03 253.4 331.52 254.03 331.58 254.58C331.6 254.79 331.54 254.99 331.42 255.16C331.41 255.17 331.36 255.22 331.26 255.32L332.25 256.28L351.1 254.96C351.59 252.75 351.85 251.52 351.91 251.27C354.39 240.87 353.87 232 353.87 231.94C353.88 231.62 354.57 228.46 355.13 225.91C355.13 225.9 355.15 225.85 355.15 225.85C356.27 220.77 357.65 214.45 357.92 212.04C358.04 211.01 357.38 210.07 356.25 209.64C355.85 209.49 355.43 209.42 355.01 209.44Z" id="acUoPs8lX"></path></defs><g><g><g><use xlink:href="#e3WJRUBaJc" opacity="1" fill="#f6efef" fill-opacity="1"></use><g><use xlink:href="#e3WJRUBaJc" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#c47GhddYg4" opacity="1" fill="#000000" fill-opacity="0"></use><g><use xlink:href="#c47GhddYg4" opacity="1" fill-opacity="0" stroke="#3f24d2" stroke-width="18" stroke-opacity="1"></use></g></g><g><use xlink:href="#d93MHxK9Yp" opacity="1" fill="#3b4262" fill-opacity="1"></use><g><use xlink:href="#d93MHxK9Yp" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#b2wf5NNY0u" opacity="1" fill="#000000" fill-opacity="0"></use><g><use xlink:href="#b2wf5NNY0u" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#awZMABkGE" opacity="1" fill="#000000" fill-opacity="0"></use><g><use xlink:href="#awZMABkGE" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#b1i2NGSZyx" opacity="1" fill="#000000" fill-opacity="0"></use><g><use xlink:href="#b1i2NGSZyx" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#acUoPs8lX" opacity="1" fill="#3b4262" fill-opacity="1"></use><g><use xlink:href="#acUoPs8lX" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g></g></g></svg>`
   }else if(test === "rock"){
   compchoise.innerHTML=` <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="100%" ><defs><path d="M392.95 229.48C392.95 260.36 368.41 285.44 338.19 285.44C307.96 285.44 283.42 260.36 283.42 229.48C283.42 198.6 307.96 173.53 338.19 173.53C368.41 173.53 392.95 198.6 392.95 229.48Z" id="h4H9izsDw1"></path><path d="M47.13 11.83C18.85 4.84 3.14 0.95 0 0.18C0 0.18 0 0.18 0 0.19C0 0.19 0 0.19 0 0.2C0 0.2 0 0.2 0 0.2C0 0.2 0 0.2 0 0.2C0 0.22 0 0.24 0 0.24C0 0.25 0 0.25 0 0.25C0 0.24 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C6.28 1.74 21.99 5.62 47.13 11.83Z" id="gWcIIOOKD"></path><path d="M350.77 205.68C345.5 197.02 337.26 203.29 337.26 203.29C330.94 194.81 323.01 202.67 323.01 202.67C309.33 201.3 309.86 211.72 309.86 211.72C309.54 215.03 311.79 225.28 311.79 225.28C309.76 219.37 305.36 224.27 305.36 224.27C299.95 232.06 304.02 236.31 304.02 236.31C311.34 244.31 326.94 253.91 326.94 253.91C332.59 256.92 330.2 259.61 330.2 259.61C332.48 259.26 343.87 257.51 364.37 254.35C364.84 250.73 365.1 248.71 365.15 248.31C370.35 233.67 364.14 214.99 364.14 214.99C363.26 204.62 353.44 207.54 350.77 205.68Z" id="dns1oZPgd"></path></defs><g><g><g><use xlink:href="#h4H9izsDw1" opacity="1" fill="#f6efef" fill-opacity="1"></use><g><use xlink:href="#h4H9izsDw1" opacity="1" fill-opacity="0" stroke="#fc1515" stroke-width="18" stroke-opacity="1"></use></g></g><g><use xlink:href="#gWcIIOOKD" opacity="1" fill="#3b4262" fill-opacity="1"></use><g><use xlink:href="#gWcIIOOKD" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#dns1oZPgd" opacity="1" fill="#3b4262" fill-opacity="1"></use><g><use xlink:href="#dns1oZPgd" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g></g></g></svg>`
   } else if(test === "scissor"){
       compchoise.innerHTML=`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="100%" ><defs><path d="M392.95 229.48C392.95 260.36 368.41 285.44 338.19 285.44C307.96 285.44 283.42 260.36 283.42 229.48C283.42 198.6 307.96 173.53 338.19 173.53C368.41 173.53 392.95 198.6 392.95 229.48Z" id="a5S9WKUGw6"></path><path d="M47.13 11.83C18.85 4.84 3.14 0.95 0 0.18C0 0.18 0 0.18 0 0.19C0 0.19 0 0.19 0 0.2C0 0.2 0 0.2 0 0.2C0 0.2 0 0.2 0 0.2C0 0.22 0 0.24 0 0.24C0 0.25 0 0.25 0 0.25C0 0.24 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C0 0.19 0 0.19 0 0.19C6.28 1.74 21.99 5.62 47.13 11.83Z" id="gWcIIOOKD"></path><path d="M324.09 223.4C328.46 217.19 330.89 213.74 331.37 213.05C328.35 212.54 322.79 212.43 318.23 217.03C311.05 224.28 308.14 239.95 307.54 243.74C309.36 245.58 323.96 260.33 325.78 262.17C329.07 261.89 343.61 259.93 357.63 245.77C357.78 245.46 361.19 242.92 358.4 240.1C357.07 238.75 354.86 238.78 353.5 240.15C352.81 240.85 351.73 240.86 351.05 240.18C350.38 239.49 350.38 238.4 351.08 237.7C351.57 237.2 355.54 233.2 356.03 232.7C358.55 230.16 356.17 225.87 352.66 226.9C352.26 227.25 349.01 230.05 348.61 230.41C347.87 231.06 346.77 230.95 346.16 230.23C345.53 229.5 345.66 228.39 346.38 227.76C360.54 215.21 358.47 216.72 367.59 208.09C370.99 205.23 366.71 200.16 363.35 203.06C361.15 205.06 343.51 221.08 341.31 223.09C340.67 223.64 339.69 223.65 339.06 223.06C338.33 222.43 338.31 221.51 338.79 220.79C340.33 218.37 352.62 199.06 354.16 196.64C356.41 193.57 351.99 190.15 349.62 193.25C347.35 196.46 329.16 222.16 326.89 225.37C326.34 226.17 325.23 226.35 324.48 225.79" id="e2Rv8xjWJw"></path></defs><g><g><g><use xlink:href="#a5S9WKUGw6" opacity="1" fill="#f6efef" fill-opacity="1"></use><g><use xlink:href="#a5S9WKUGw6" opacity="1" fill-opacity="0" stroke="#d2a924" stroke-width="18" stroke-opacity="1"></use></g></g><g><use xlink:href="#gWcIIOOKD" opacity="1" fill="#3b4262" fill-opacity="1"></use><g><use xlink:href="#gWcIIOOKD" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#e2Rv8xjWJw" opacity="1" fill="#3b4262" fill-opacity="1"></use><g><use xlink:href="#e2Rv8xjWJw" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g></g></g></svg>`
   }
   return test;
}
//game logic
function game(userchoice){
   const compch = compchoises();
   switch(userchoice + compch){
     //if userchoice + compiuterchoice = "rockpaper, scissorpaper, rockscissor" player wins!
      case "rockpaper":
      case "scissorpaper":
      case "rockscissor":
        result.innerHTML=`<div class="gif" style="padding-top:35.471%;position:relative;"><p style="color:green">YOU WIN!</p></div>`
         // increase number by one inside resultbox for player
        increment();
         break;
         case "paperrock":
         case "paperscissor":
         case "scissorrock":
           result.innerHTML=`<div class="gif" style="padding-top:35.471%;position:relative;"><p style="color:red"> YOU LOSE!</p></div>`
            //increase number by one inside resultbox for compiuter
           Aiincrement()
            break;
      case "rockrock":
      case "scissorscissor":
      case "paperpaper":
        result.innerHTML=`<div class="gif" style="padding-top:35.471%;position:relative;" ><p style="color:yellow"> DRAW! </p></div>`
         break;
   } 
}

const final = document.getElementById("finalresult1");//final result div
const triangle = document.getElementById("triangle"); //svg triangle div
const restartGame = document.getElementById("restart"); // restart button id
const winOrlose = document.getElementById("winorlose");  

var x=0;
function increment(){
  //if result is number which was chosen in  the form field game ends for player!
  if(++firsPlayer.textContent == list.value){
    final.style.display="block";
    triangle.style.display="none";
    winOrlose.style.color = "green";
    winOrlose.textContent="YOU WIN!"
  } 
}
var y=0;
function Aiincrement(){
  //if result is number which was chosen in  the form field game ends for compiuter!
if(++secondPlayer.textContent == list.value){
   final.style.display="block";
   triangle.style.display="none";
   winOrlose.style.color = "red";
   winOrlose.textContent="YOU LOSE!"
}
}

//restartgame
restartGame.addEventListener("click", function(){
  // resultbox result = 0
   firsPlayer.innerHTML=0;
   secondPlayer.innerHTML=0;
   //show triangle
   triangle.style.display="block";
   //hide result button
   final.style.display="none";
})


//game rules modal box 
// Get the modal
var rulesModal = document.getElementById("myrulesModal");
var myRules = document.getElementById("myRules");
var span1 = document.getElementById("close");
myRules.onclick = function() {
  rulesModal.style.display = "block";
}
span1.onclick = function() {
  rulesModal.style.display = "none";
}
window.addEventListener("click", function(event){
  if(event.target== rulesModal){
    rulesModal.style.display="none";
  }
} )



//  game settings modal box
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



