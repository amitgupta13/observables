// function abc(str){
//     if(str === ''){
//         return '';
//     }else{
//         return console.log(abc(str.substring(1)) + str.charAt(0));

//     }
// }

// abc('amit')


function test(str){
	return (str === '') ? console.log('') : console.log(test(str.substr(1)) + str.charAt(0));
}

test('amit')