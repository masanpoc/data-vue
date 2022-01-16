/* eslint-disable prefer-const */
export function fromMonthlyVolumeOfRainToSeasonalVolumeOfRain(data: {month: string, vol_rain_lc_2020: string, vol_rain_lc_2019: string}[]) {    
    console.log(data, 'input');
    let seasonalRains = [
        {
            season: 'Winter',
            color:'blue',
            vol_rain_lc_2020: 0,
            vol_rain_lc_2019: 0
        },
        {
            season: 'Spring',
            color:'green',
            vol_rain_lc_2020: 0,
            vol_rain_lc_2019: 0
        },
        {
            season: 'Summer',
            color:'yellow',
            vol_rain_lc_2020: 0,
            vol_rain_lc_2019: 0
        },
        {
            season: 'Autumn',
            color:'brown',
            vol_rain_lc_2020: 0,
            vol_rain_lc_2019: 0
        },
    ];
    let winterData = data.filter(record=>{
        let listWinterMonths = ['December', 'January', 'February'];
        return listWinterMonths.includes(record.month);
    });
    
    winterData.forEach(month=>{
        seasonalRains[0].vol_rain_lc_2020+=Number(month.vol_rain_lc_2020);
        seasonalRains[0].vol_rain_lc_2019+=Number(month.vol_rain_lc_2019);
    })

    let springData = data.filter(record=>{
        let listSpringMonths = ['March', 'April', 'May'];
        return listSpringMonths.includes(record.month);
    });
    
    springData.forEach(month=>{
        seasonalRains[1].vol_rain_lc_2020+=Number(month.vol_rain_lc_2020);
        seasonalRains[1].vol_rain_lc_2019+=Number(month.vol_rain_lc_2019);
    })

    let summerData = data.filter(record=>{
        let listSummerMonths = ['June', 'July', 'August'];
        return listSummerMonths.includes(record.month);
    });
    
    summerData.forEach(month=>{
        seasonalRains[2].vol_rain_lc_2020+=Number(month.vol_rain_lc_2020);
        seasonalRains[2].vol_rain_lc_2019+=Number(month.vol_rain_lc_2019);
    })
    
    let autumnData = data.filter(record=>{
        let listAutumnMonths = ['September', 'October', 'November'];
        return listAutumnMonths.includes(record.month);
    });
    
    autumnData.forEach(month=>{
        seasonalRains[3].vol_rain_lc_2020+=Number(month.vol_rain_lc_2020);
        seasonalRains[3].vol_rain_lc_2019+=Number(month.vol_rain_lc_2019);
    })
    console.log(seasonalRains);
    return seasonalRains;
    
}