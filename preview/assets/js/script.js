const borderImg = document.querySelector('.border-img');
const svg = borderImg.querySelector('svg');
const h3 = borderImg.querySelector('h3');
const img = borderImg.querySelector('img');

const input = document.querySelector('input');

// BUATKAN EVENT UNTUK INPUT TRIGGER CLICK
borderImg.addEventListener('click',function(){
    input.click();
});

// BUATKAN EVENT CHANGE INPUT
input.addEventListener('change',function(){
    const file = this.files[0];

    // CEK APAKAH INPUT FILE KOSONG
    if(file){
        
        // instansiasi object filereader
        const reader = new FileReader();

        //load reader
        reader.onload = function(){

            // hilangkan svg dan h3
            svg.style.display = 'none';
            h3.style.display = 'none';

            // masukkan hasil load ke src image
            img.src = this.result;

            // tampilkan img
            img.classList.add('img-posisi');
            img.style.display = 'block'
        }

        //baca sumber filenya
        reader.readAsDataURL(file);
        
    }
});