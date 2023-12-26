
const REGEXP = (str)=>{
    let regN = /^[a-zA-Z0-9]+$/
    let reg =   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/
    return  reg.test(str)
};
console.log(REGEXP('fsjd3IR'))
