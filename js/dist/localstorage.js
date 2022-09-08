export function store(token, value) {
    const stringify = JSON.stringify(value);
    localStorage.setItem(token, stringify)
}

export function load(token){
    try {
        const token = localStorage.getItem(token)
        return JSON.parse(token)
    } catch (err) {
        alert(err)
        if(load(token)){
            return null
        }

    }
}

export function hide(token){
    localStorage.removeItem(token)
}

