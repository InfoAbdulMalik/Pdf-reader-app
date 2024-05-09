var upload= document.getElementById('pdf-frame');
var pdfInput=document.getElementById('pdf-input');
pdfInput.onchange= function (){
    var file= this.files[0];
    var url= URL.createObjectURL(file);
    upload.src=url;
    console.log(upload)
}
var downloadbtn= document.getElementById('download-btn')
   downloadbtn.onclick= function (){
    var urlValue= upload.src;
    var a= document.createElement('a');
        a.href=urlValue;
        a.download='demo.pdf';
        a.click();

        // // click remove 
        a.remove();

    
   }