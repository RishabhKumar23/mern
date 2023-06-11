
const Validation = () => {
    let errors = {}

    if(!values.name) {
        errors.name = "email required"
    }
    if(!values.password){
        errors.password = "password required"
    }

    return errors
}

export default Validation