const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
            <div class="key">
                ${e.key === ' ' ? 'space' : e.key}
                <small>Event.key</small>
            </div>
            <div class="key">
                 ${e.keyCode}
                <small>Event.KeyCode</small>
            </div>
            <div class="key">  
               ${e.code}
                <small>Event.Code</small>
            </div>
            `
})
