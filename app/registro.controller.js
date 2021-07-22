const estandar = document.getElementById('estandar');
const especial = document.getElementById('especial');
const premium = document.getElementById('premium');
const Register = document.getElementById('onRegister');

const Selected = {
    Sid : '',
    Sname : ' ',
    Sdetail : '',
    Skind : '',
}

const Cliente = {
    Cname : '',
    Clastname : '',
    Caddress : '',
    Cphone : '',
    Cmail : '',
}

const Mascota = {
    Mname : '',
    Mage : '',
    Mfood : '',
    Malergic : '',
}

loadEvents()

function loadEvents(){

    estandar.addEventListener('click', (e)=>{getEstandarSvc(e)});
    especial.addEventListener('click', (e)=>{getEspecialSvc(e)});
    premium.addEventListener('click', (e)=>{getPremiumSvc(e)});
    Register.addEventListener('click', (e)=>{validateForm(e)});
}

function HideButtton(){
    document.getElementById('servicio').innerHTML = 'Servicio Seleccionado';
    document.getElementById('servicio').style.backgroundColor = '#67dd7a'
    document.getElementById('servicio').style.border = '#67dd7a'
}

function getEstandarSvc(e){
    e.preventDefault();
    service = e.target.parentElement.parentElement;
    serviceName = service.querySelector('h4').innerHTML;
    serviceDetail = Array.from(document.querySelectorAll('#ListaEstandar>ul>li'))
    serviceiD = service.querySelector('button').getAttribute('data-id');
    
    Selected.Sname = serviceName;
    Selected.Sdetail = serviceDetail;
    Selected.Sid = serviceiD;
    if (document.getElementById('mascotaPerro').checked){
        Selected.Skind = document.getElementById('mascotaPerro').value;
    }
    else if (document.getElementById('mascotaGato').checked){
        Selected.Skind = document.getElementById('mascotaGato').value;
    }
    HideButtton()
    console.log(Selected);
}

function getEspecialSvc(e){
    e.preventDefault();
    service = e.target.parentElement.parentElement;
    serviceName = service.querySelector('h4').innerHTML;
    serviceDetail = Array.from(document.querySelectorAll('#ListaEspecial>ul>li'))
    serviceiD = service.querySelector('button').getAttribute('data-id');
    console.log(serviceName);

    Selected.Sname = serviceName;
    Selected.Sdetail = serviceDetail;
    Selected.Sid = serviceiD;
    if (document.getElementById('mascotaPerro').checked){
        Selected.Skind = document.getElementById('mascotaPerro').value;
    }
    else if (document.getElementById('mascotaGato').checked){
        Selected.Skind = document.getElementById('mascotaGato').value;
    }
    console.log(Selected);
    HideButtton()
}

function getPremiumSvc(e){
    e.preventDefault();
    service = e.target.parentElement.parentElement;
    serviceName = service.querySelector('h4').innerHTML;
    serviceDetail = Array.from(document.querySelectorAll('#ListaPremium>ul>li'))
    serviceiD = service.querySelector('button').getAttribute('data-id');
    console.log(serviceName);

    Selected.Sname = serviceName;
    Selected.Sdetail = serviceDetail;
    Selected.Sid = serviceiD;
    if (document.getElementById('mascotaPerro').checked){
        Selected.Skind = document.getElementById('mascotaPerro').value;
    }
    else if (document.getElementById('mascotaGato').checked){
        Selected.Skind = document.getElementById('mascotaGato').value;
    }
    console.log(Selected);
    HideButtton()
}

function validateForm(e){
    getForm()
    if(Selected.Sname === ' ' || Selected.Sname === '' || Cliente.Cname === '' || Cliente.Clastname === '' || Cliente.Caddress === '' || Cliente.Cphone === '' || Cliente.Cmail === '' || Mascota.Mname === '' || Mascota.Mage === '' || Mascota.Mfood === '' || Mascota.Malergic === '' ){
        swal({
            icon: 'warning',
            title: 'Algo Salió Mal...',
            text: 'Seleccione un Servicio o Llene los Campos Correctamente',
            timer: 2000,
        });
    }else if(Selected.Sname.length>1){
        saveData()
    }
}

function getForm(e){
    Cliente.Cname = document.getElementById('nombres').value;
    Cliente.Clastname = document.getElementById('apellidos').value;
    Cliente.Caddress = document.getElementById('direccion').value;
    Cliente.Cphone = document.getElementById('telefono').value;
    Cliente.Cmail = document.getElementById('mail').value;

    Mascota.Mname = document.getElementById('nombreMascota').value;
    Mascota.Mage = document.getElementById('edadMascota').value;
    Mascota.Mfood = document.getElementById('comidas').value;
    Mascota.Malergic = document.getElementById('alergias').value;
}

function saveData(){
    const Registro = [Selected, Cliente, Mascota];
    localStorage.setItem('Registro:', JSON.stringify(Registro))
    alert()
    clearForm()
}

function alert(){
    swal({
        title: "Registro Realizado!",
        text: "Haz Agendado una cita",
        icon: "success",
        timer: 2000,
        button: "OK",
    });

}

function clearForm(){
    document.getElementById('nombres').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('mail').value = '';

    document.getElementById('nombreMascota').value = '';
    document.getElementById('edadMascota').value = '';
    document.getElementById('comidas').value = '';
    document.getElementById('alergias').value = '';
}