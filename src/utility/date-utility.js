export default function getSerbianDate(date){
    const option = { weekday: "short" , year: "numeric" , month: "short" , day: "numeric"};

    return date.toLocaleDateString("sr-Rs" , option);
}

export function FillYearToArray(){
    let years = [];
    let dateNow = new Date();

    for(let i = 2000; i<dateNow.getFullYear(); i++){
        years.push(i);
    }
    return years;
}

export function FillUpcomingYearToArray(){
    let years = [];
    let dateNow = new Date();

    for(let i = 2019; i<2030; i++){
        years.push(i);
    }
    return years;
}