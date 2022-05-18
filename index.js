function trade(filename, animalname) {
    document.querySelector('.image').setAttribute('src', ('assets/')+filename)
    document.querySelector('.image').setAttribute('data-animal', animalname)
}

function takename() {
    let animal = document.querySelector('.image').getAttribute('data-animal');
    alert(animal);
}