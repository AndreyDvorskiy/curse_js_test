var Andrey = {
    name: 'Andrey',
    email: 'Andrey@gmail.com'
}
var Aleksey = {
    name: 'Aleksey',
    email: 'Aleksey@gmail.com'
}
var Denis = {
    name: 'Denis',
    email: 'Denis@gmail.com'
}
var Igor = {
    name: 'Igor',
    email: 'Igor@gmail.com'
}
var Bogdan = {
    name: 'Bogdan',
    email: 'Bogdan@gmail.com'
}
var Sergey = {
    name: 'Sergey',
    email: 'Sergey@gmail.com'
}
var new_obj = [Andrey, Aleksey, Denis, Igor, Bogdan, Sergey];
var Password = prompt ('Введите номер:');
var element = (new_obj[Password]);
var a = 'Name:' + element.name + '  ' + "Email:" + element.email;
alert (a);
