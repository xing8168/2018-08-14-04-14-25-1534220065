module.exports = function main(n) {
    console.log("Debug Info");
    var num = ['._.\n|.|\n|_|', '...\n..|\n..|', '._.\n._|\n|_.',
	       '._.\n._|\n._|', '...\n|_|\n..|', '._.\n|_.\n._|',
	       '._.\n|_.\n|_|', '._.\n..|\n..|', '._.\n|_|\n|_|',
	       '._.\n|_|\n..|'];
    var arr = [];
    while(n != 0){
	int x = n %10;
	arr.push(n);	
	n /= 10;
    }
    for(int i = arr.length-1; i > 0; i--)
	console.log(num[arr[i] - 1]);
    return 'Hello World!';
};
