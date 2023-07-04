function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var alertElement = document.getElementById('alert');
  
    if (email === 'chinta.com' && password === '1234') {
    alertElement.classList.remove('success');
    alertElement.classList.add('success');
    alertElement.textContent = 'anda berhasil login';
    alertElement.style.display = 'block';
  } else {
    alertElement.classList.remove('success');
    alertElement.classList.add('alert');
    alertElement.textContent = 'email/password salah';
    alertElement.style.display = 'block';
  }
}

// function login (){
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     if (email=='chinta@gmail.com' && y=='1234'){
//         alert ("Login Berhasil");
//     }else {
//         alert ("Login gagal!");
//     }
// }