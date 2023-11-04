const click = document.getElementById('for click')
function edit(){
    const item = document.getElementsByTagName('div')[7]
    item.innerHTML = 'Lykov'
    const item1 = document.getElementsByTagName('div')[8]
    item1.innerHTML = 'Maksim'
    const item2 = document.getElementsByTagName('div')[9]
    item2.innerHTML = 'Sergeevich'}
click.addEventListener('click', edit)
