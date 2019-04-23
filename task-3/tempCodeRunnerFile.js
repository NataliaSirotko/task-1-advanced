function sliceText(string) {

    if (typeof string !== 'string') {
        alert('Error');
    } else {
        let s = string.trim();

        if (s.length>10) {
            let newString = s.slice(0, 50 + 1) + "...";
             s = newString;
        } 
        console.log(s);
    }
    
 }
 sliceText(' fffffff ');