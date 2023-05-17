const data = [
    {
        id: 5,
        kg: 1.6
    },
    {
        id: 6,
        kg: 2
    },
    {
        id: 7,
        kg: 2.2
    },
    {
        id: 8,
        kg: 2.6
    },
    {
        id: 9,
        kg: 2.8
    },
    {
        id: 10,
        kg: 3.0
    },
    {
        id: 11,
        kg: 3.3
    },
    {
        id: 12,
        kg: 3.7
    },
    {
        id: 13,
        kg: 4.2
    },
    {
        id: 14,
        kg: 4.8
    },
    {
        id: 15,
        kg: 5.3
    },
    {
        id: 16,
        kg: 5.5
    },
    {
        id: 17,
        kg: 5.5
    }
]

export const calculate = ({ edad, peso }) => {

    const numberRegex = /^\d+$/;

    if (numberRegex.test(edad)) {
        let edadIngresada = edad

        if (edadIngresada > 17) {
            edadIngresada = 17
        } else if (edadIngresada < 5) {
            edadIngresada = 5
        }
    
        let dataValue = data.find((user) => user.id === edadIngresada)
    
        if (peso > dataValue.kg) {
            let information = {
                msg: "Tu mochila es muy pesada para tu edad y peso promedio!",
                type: false,
                model: false,
            }
            return information
        } else {
            let information = {
                msg: "El peso de tu mochila es acorde a tu edad y peso promedio!",
                type: true,
                model: false,
            }
            return information
        }
   
    } else {
        let information = {
            msg: "Vuelve a intentar, revisa los datos ingresados!",
            type: false,
            model: true,
        }
        return information
    }
   


}