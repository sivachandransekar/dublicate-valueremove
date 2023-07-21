var a=[20,30,40,50,20,23,33,33];
document.write("a=[20,30,40,50,20,23,33,33]"+"<br>"+"<br>");
var b=[];
var temp;
for(let i=0;i<a.length;i++){
	if(a[i]!==temp){
		b.push(a[i]);
		temp=a[i];
	}
}
document.write(b)